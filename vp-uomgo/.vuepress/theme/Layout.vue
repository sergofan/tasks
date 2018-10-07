<template>
  <div class="theme-container">
    <v-app>
      <!-- <div
        @mouseenter="debounceToggle"
        @mouseleave="debounceToggle"
      > -->
        <v-navigation-drawer app
          v-model="navVisible"
          hide-overlay
          value="true"
          mobile-break-point="1264"
          temporary: true
        >
          <v-toolbar flat class="transparent">
            <v-list class="pa-0">
              <v-list-tile avatar>
                <v-list-tile-avatar tile>
                  <img src="/logo.png">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>УОМГО</v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <!-- <v-btn
                    icon
                    @click="navVisible = false"
                  >
                    <v-icon>close</v-icon>
                  </v-btn> -->
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-toolbar>

          <v-list dense>
            <v-divider></v-divider>

            <v-list-tile
              v-for="item in items"
              :key="item.title"
            >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      <!-- </div> -->

      <v-toolbar app
        color="grey lighten-5"
        extended
        >
        <v-toolbar-side-icon @click="toggleNav"></v-toolbar-side-icon>
        <v-toolbar-title slot="extension" class="black--text">
          УОМГО
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          class="input-search"
          light
          label="Поиск по сайту"
          value=""
          append-icon="search"
          clearable
          v-model="computedQuery"
          @keyup.up="onUp"
          @keyup.down="onDown"
        ></v-text-field>
      </v-toolbar>

      <v-content>
        <Content class="main-content" />
      </v-content>

      <v-footer app></v-footer>

    </v-app>
  </div>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";
import colors from "vuetify/es5/util/colors";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "vuetify/dist/vuetify.min.css";
import _ from 'lodash';

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.base,
    secondary: colors.cyan.base,
    accent: colors.green.accent3,
    error: colors.red.base,
    warning: colors.orange.accent4,
    info: colors.blue.base,
    success: colors.lightGreen.darken4
  }
});

export default {
  components: {},
  data() {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      navVisible: false,
      right: null,
      mobilePoint: 1264,
      offsetTop: 0,
      progressRunning: false,
      query: ''
    };
  },
  created() {
    // this.navVisible = window.innerWidth > this.mobilePoint
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(pathToComponentName(to.path))) {
        this.progressRunning = true
      }
      next()
    })
    this.$router.afterEach(() => {
      this.progressRunning = false
    })
  },
  computed: {
    showSuggestions () {
      return (
        this.focused &&
        this.suggestions &&
        this.suggestions.length
      )
    },

    suggestions () {
      const query = this.query.trim().toLowerCase()
      if (!query) {
        return
      }

      const { pages, themeConfig } = this.$site
      const max = themeConfig.searchMaxSuggestions || 5
      const localePath = this.$localePath
      const matches = item => (
        item.title &&
        item.title.toLowerCase().indexOf(query) > -1
      )
      const res = []
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break
        const p = pages[i]
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue
        }
        if (matches(p)) {
          res.push(p)
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break
            const h = p.headers[j]
            if (matches(h)) {
              res.push(Object.assign({}, p, {
                path: p.path + '#' + h.slug,
                header: h
              }))
            }
          }
        }
      }
      return res
    },

    // make suggestions align right when there are not enough items
    alignRight () {
      const navCount = (this.$site.themeConfig.nav || []).length
      const repo = this.$site.repo ? 1 : 0
      return navCount + repo <= 2
    },

    computedQuery: {
      get () {
          return this.query
      },
      set (value) {
        this.query = value
      }
    }
  },

  methods: {
    toggleNav() {
      this.navVisible = !this.navVisible
    },

    onScroll(e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    },

    onUp () {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--
        } else {
          this.focusIndex = this.suggestions.length - 1
        }
      }
    },

    onDown () {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++
        } else {
          this.focusIndex = 0
        }
      }
    },

    go (i) {
      if (!this.showSuggestions) {
        return
      }
      this.$router.push(this.suggestions[i].path)
      this.query = ''
      this.focusIndex = 0
    },

  }
};
</script>

<style>
.theme-container {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}
.main-content {
  margin: 32px 48px 0px;
}
.input-search {
  padding-top: 20px;
  max-width: 224px;
}
</style>
