<template>
  <div class="theme-container">
    <v-app>
      <v-navigation-drawer app
        :mini-variant.sync="mini"
        v-model="drawer"
        hide-overlay
        stateless
        value="true"
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
                <v-btn
                  icon
                  @click.stop="mini = !mini"
                >
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
            @click=""
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

      <!-- <v-list class="grow">
        <v-list-tile
          v-for="link in links"
          :key="link"
          @click=""
        >
          <v-list-tile-title v-text="link"></v-list-tile-title>
        </v-list-tile>
      </v-list> -->

      <v-toolbar app
        color="primary"
        extended
        >
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title slot="extension" class="white--text">
          УОМГО
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
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
      drawer: true,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      mini: true,
      right: null
    };
  }
};
</script>

<style>
.theme-container {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.10909;
}
.main-content {
  margin: 32px 48px 0px;
}
</style>
