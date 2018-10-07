<template>
  <div id="app">
    <form v-on:submit.prevent="onSubmit">
      <input type="text" placeholder="Имя" v-model="modelName">
      <input type="text" placeholder="Фамилия" v-model="modelSurname">
      <input type="submit" value="Add">
    </form>
    <table>
      <tr>
        <th @click="sort('index')">№
          <span v-show="currentSortDir==='asc'&&currentSort==='index'">
            <i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>
          </span>
          <span v-show="currentSortDir==='desc'&&currentSort==='index'">
            <i class="fa fa-sort-alpha-desc" aria-hidden="true"></i>
          </span>
        </th>
        <th @click="sort('name')">Имя
          <span v-show="currentSortDir==='asc'&&currentSort==='name'">
            <i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>
          </span>
          <span v-show="currentSortDir==='desc'&&currentSort==='name'">
            <i class="fa fa-sort-alpha-desc" aria-hidden="true"></i>
          </span>
        </th>
        <th @click="sort('surname')">Фамилия
          <span v-show="currentSortDir==='asc'&&currentSort==='surname'">
            <i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>
          </span>
          <span v-show="currentSortDir==='desc'&&currentSort==='surname'">
            <i class="fa fa-sort-alpha-desc" aria-hidden="true"></i>
          </span>
        </th>
      </tr>
      <tr v-for="user in sortedUsers" :key="user.index">
        <td v-text="user.index + 1"></td>
        <td v-text="user.name"></td>
        <td v-text="user.surname"></td>
      </tr>
    </table>
    <div class="nav">
      <div class="nav">
        <button @click="prevPage">
          <i class="fa fa-arrow-circle-left fa-sm"></i>
          Prev
        </button>
        <span> Page
          <b> {{currentPage}} </b> of
          <b> {{pages}} </b>
        </span>
        <button @click="nextPage">
          Next
          <i class="fa fa-arrow-circle-right fa-sm"></i>
        </button>
        <span> Page size: </span>
        <select @change="changePages">
          <option selected>5</option>
          <option>10</option>
          <option>50</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      users: [{
        index: 0,
        name: 'Пётр',
        surname: 'Васильев'
      }],
      currentSort:'name',
      currentSortDir:'asc',
      pageSize:5,
      currentPage:1,
      modelName: "",
      modelSurname: ""
    }
  },
  computed: {
    sortedUsers: function() {
      let start = (this.currentPage-1)*this.pageSize;
      let end = this.currentPage*this.pageSize;
      return this.users.slice().sort((a,b) => {
        let modifier = 1;
        if(!this.currentSortDir) modifier = 0;
        if(this.currentSortDir === 'desc') modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
      }).filter(function(row, index) {
        if(index >= start && index < end) return true;
        return false;
      });
    },
    pages: function() {
      return Math.ceil(this.users.length/this.pageSize);
    }
  },
  methods: {
    onSubmit() {
      if (this.modelName && this.modelSurname) {
        this.users.push({index: this.users.length, name: this.modelName, surname: this.modelSurname});
      }
    },
    sort: function(s) {
      if(s === this.currentSort) {
        switch(this.currentSortDir) {
          case 'asc': this.currentSortDir = 'desc';
          break;
          case 'desc': this.currentSortDir = '';
          break;
          default: this.currentSortDir = 'asc';
        }
      }
      this.currentSort = s;
    },
    nextPage: function() {
      if((this.currentPage*this.pageSize) < this.users.length) this.currentPage++;
    },
    prevPage: function() {
      if(this.currentPage > 1) this.currentPage--;
    },
    changePages: function(e) {
      let index = e.target.selectedIndex;
      this.pageSize=Number(e.target.options[index].text);
    }
  }
};
</script>

<style>
#app {
  margin: 32px 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: black;
}
table {
  margin: 16px 0 0;
  border-collapse: collapse;
}
th {
  cursor: pointer;
}
th:hover {
  text-decoration: underline;
  background-color: whitesmoke;
}
th, td {
  text-align: left;
  padding: 0 8px;
  border: 1px solid lightgray;
  min-width: 115px;
}
.nav{
  margin: 16px 0 0;
}
input[type="text"] {
    max-width: 173px;
}
</style>
