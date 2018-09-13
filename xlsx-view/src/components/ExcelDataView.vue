<template>
  <div class="View">
    <el-upload
      class="upload-demo"
      action=""
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
      :auto-upload=false
      :multiple=false
      :limit=1
      :on-change="onChange"
      :on-remove="onRemove">
      <el-button slot="trigger" size="small" type="default">select file</el-button>
    </el-upload>
    <div class="tree-table-area">
      <el-row align="middle" type="flex" justify="center" :gutter="20">
        <el-col :span="6">
          <excel-data-tree/>
        </el-col>
        <el-col :span="18">
          <excel-data-table/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import ExcelDataTree from './ExcelDataTree'
import ExcelDataTable from './ExcelDataTable'

export default {
  name: 'ExcelDataView',
  components: {
    ExcelDataTree,
    ExcelDataTable
  },
  data() {
    return {
      fileUrl: ''
    };
  },
  methods: {
    onChange(file) {
      // console.log(file);
      this.fileUrl = file.url;

      // var ws = {};
      // var fileReader = new FileReader();
      // fileReader.onload = function (e) {
      //   var binary = "";
      //   var bytes = new Uint8Array(e.target.result);
      //   var length = bytes.byteLength;
      //   for (var i = 0; i < length; i++) {
      //     binary += String.fromCharCode(bytes[i]);
      //   }
      //   var oFile = XLSX.read(binary, {type: 'binary', cellDates:true, cellStyles:true});
      //   ws = oFile.Sheets.Номенклатура;
      //   var jsonData = XLSX.utils.sheet_to_json(
      //     ws,
      //     {raw:true},
      //     {defval:"null"},
      //     {header:1},
      //     {blankrows:false}
      //   );
      //   // eslint-disable-next-line
      //   console.log(jsonData);
      // };
      // fileReader.readAsArrayBuffer(file.raw);

      let fileReader = new FileReader(), rABS = true;
      if (file.raw.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || file.type === "application/vnd.ms-excel"){
          fileReader.onloadend = function(event){
            var data = event.target.result;
            if(!rABS) data = new Uint8Array(data);
            // var wb = XLSX.readFile(file.url);
            var wb = XLSX.read(data, {type: rABS ? 'binary' : 'array'});
            var jsonData = XLSX.utils.sheet_to_json(wb.Sheets.SheetJS, {header:0})
            // eslint-disable-next-line
            console.log(jsonData);
          };
          if(rABS) fileReader.readAsBinaryString(file.raw); else fileReader.readAsArrayBuffer(file.raw);
      }
      // };
      // fileReader.readAsArrayBuffer(file.raw);


    },
    onRemove() {
      this.fileUrl = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .tree-table-area {
    margin: 2rem 2rem;
    text-align: initial;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
