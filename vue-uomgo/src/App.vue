<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">UOMGO</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <md-tabs class="md-primary">
            <md-tab id="tab-home" md-label="Home"></md-tab>
            <md-tab id="tab-pages" md-label="Pages"></md-tab>
            <md-tab id="tab-posts" md-label="Posts"></md-tab>
            <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam velit quam, eum obcaecati ipsum asperiores. Expedita quidem eos iste reprehenderit provident perspiciatis. Laboriosam asperiores cumque earum natus animi dolore.</p>
        <p>Dicta tenetur, obcaecati sequi, debitis ipsa odit at saepe porro officiis recusandae possimus. Doloribus iste sapiente porro, quaerat aut temporibus eveniet ea vel autem dolore rem quasi omnis. Recusandae, dolorum.</p>
        <p>Animi laboriosam voluptatum consequatur, ducimus nemo atque molestiae doloremque adipisci et assumenda porro possimus cumque obcaecati, quia saepe hic? Suscipit commodi mollitia rerum velit veritatis cum corrupti. Temporibus, reiciendis delectus.</p>
        <p>Libero at a, porro laborum deserunt autem! Totam quam rerum eveniet maiores unde quibusdam alias tempora odio eum sed tempore magnam officiis cupiditate, porro, quae ipsam nostrum! Deserunt, perspiciatis dolorem.</p>
        <p>Ab voluptates ipsa exercitationem in odio rem eveniet! Magni quis alias repudiandae libero eligendi? Explicabo, exercitationem, nemo consequatur provident dignissimos animi saepe adipisci molestiae, aliquam iure dolores placeat cum corporis!</p>
        <p>Iusto optio nulla doloribus. Autem rerum quia quasi ab, esse perspiciatis corporis veniam quisquam, molestias dolore voluptatem dolores pariatur ratione laborum! Sapiente officiis ducimus veritatis. Sed nihil a ratione. Autem?</p>
        <p>Fugiat odio quos autem qui officia nisi nostrum, nemo vitae aperiam voluptatum adipisci a minus cupiditate facere enim dolorem quaerat deleniti error. Suscipit animi eligendi possimus temporibus porro nam deserunt.</p>
        <p>Id perferendis quo, harum at repellat obcaecati? Perferendis, deserunt debitis veniam ipsum officiis temporibus dignissimos nisi culpa voluptas pariatur possimus aliquid, quaerat, consectetur illo. Sed voluptatibus deserunt tempore quos ab!</p>
        <p>Maxime consequuntur sit tenetur consectetur nam modi cum laboriosam cupiditate perferendis pariatur dolor, sequi, quam ipsa provident rem quaerat quasi, praesentium labore dolores! Modi, beatae autem veritatis impedit dolores ducimus.</p>
        <p>Non ut magni doloribus vitae! Dolorem repellendus porro, laborum soluta officia rem repellat. Reprehenderit laboriosam, saepe numquam suscipit repudiandae vitae, aperiam fuga ex cupiditate magni voluptatum, commodi eos recusandae ut.</p>
        <p>Earum, quos eligendi repellendus officiis dignissimos ab impedit facere? Nesciunt ipsa nam sed minima soluta modi vel odio iste dolorem! Ab dicta dolorum molestiae mollitia repellendus eum maiores quidem nobis.</p>
        <p>Facilis quibusdam expedita nobis laudantium, rem natus laboriosam nihil, quod deserunt assumenda pariatur ad quam, provident illum. Incidunt repellat, quas atque iste laboriosam ratione veritatis doloribus accusantium ducimus voluptatum similique!</p>
        <p>Tenetur ad fuga praesentium mollitia dolorum enim deleniti optio amet quo nostrum, numquam odit reprehenderit? Fugiat magnam iusto perferendis, commodi fugit quo qui molestias, perspiciatis veritatis, repellat autem possimus eligendi?</p>
        <p>Vero laboriosam nobis dolorum alias labore, est illum et a reiciendis accusantium. Neque molestiae, molestias dicta dignissimos labore porro illo, eum unde nobis ipsa deleniti explicabo iure culpa perferendis iusto.</p>
        <p>Optio pariatur minima ipsam impedit eveniet commodi id temporibus blanditiis, officiis ea repellendus neque, labore a quasi repudiandae nemo enim saepe. Laudantium dolor quasi quod commodi doloremque perspiciatis eius laborum.</p>
        <p>Maiores, quaerat quas. Commodi, maiores. Veritatis ratione, optio odit dolore nisi harum, nobis nesciunt itaque corporis soluta repudiandae! Et magni temporibus nobis voluptates tempora iusto quod voluptatum aliquam deleniti laudantium!</p>
        <p>Iure fugit sint nobis numquam debitis voluptas, consequuntur quis qui maiores nisi dolor necessitatibus inventore! Adipisci, distinctio! Soluta, animi doloribus aut rem esse est? Eveniet fuga ducimus ex cupiditate porro.</p>
        <p>Cum voluptates praesentium in debitis exercitationem itaque, quibusdam consequuntur explicabo quia doloremque ut veritatis, corrupti incidunt. Quibusdam porro, fugit laboriosam iure ut assumenda aut animi incidunt facere esse. Similique, provident?</p>
        <p>Aliquam deserunt a officiis odit vero dicta eveniet perferendis, quos dolores fugiat quibusdam harum omnis minus ad nihil vel provident, quo tempora amet earum sequi ut iure? Dolorem, debitis ratione.</p>
        <p>Voluptates veniam alias error, aut dolor impedit sunt est, facilis suscipit, fugiat numquam! Velit repellat dicta neque quo magni consequuntur, in est! Amet incidunt iusto explicabo nobis! Cum, consequatur repellat?</p>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuVisible: false
  })
}
</script>

<style>
  #app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .md-app {
    max-height: calc(100vh);
    border: 1px solid rgba(#000, .12);
    font-size: 12pt;
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

</style>
