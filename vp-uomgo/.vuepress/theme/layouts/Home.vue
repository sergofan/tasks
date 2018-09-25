<template>
  <v-app light>
    <v-content>
      <v-container>
        <v-layout>
          <article>
            <p class="post-page-meta">
              {{postDate}}
              <hr>
              <content />
            </p>
          </article>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
