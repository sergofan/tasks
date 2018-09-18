import { Element as PolymerElement, html } from '@polymer/polymer/polymer-element';
import template from './my-app.html';
import '@polymer/app-route/app-route.js'
import '@polymer/app-route/app-location.js'
import '@polymer/iron-pages/iron-pages.js'
import '@polymer/iron-selector/iron-selector.js'
import '@polymer/app-layout/app-drawer/app-drawer.js'
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js'
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-header-layout/app-header-layout.js'
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/paper-icon-button/paper-icon-button.js'

export default class MyApp extends PolymerElement {

  static get is() { return 'my-app'; }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged',
      },
      routeData: Object,
      subroute: String,
      rootPath: {
        type: String,
        value: '/'
      },
      lazyPages: {
        type: Object,
        value: {
          view1: function() {
            require(/* webpackChunkName: 'Anything' */ '../my-view1/my-view1.js');
          },
          view2: function() {
            require(/* webpackChunkName: 'Anything' */ '../my-view2/my-view2.js');
          },
          view3: function() {
            require(/* webpackChunkName: 'Anything' */ '../my-view3/my-view3.js');
          },
          view404: function() {
            require(/* webpackChunkName: 'Anything' */ '../my-view404/my-view404.js');
          }
        }
      }
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)',
    ];
  }

  constructor() {
    super();
  }

  _routePageChanged(page) {
    // Polymer 2.0 will call with `undefined` on initialization.
    // Ignore until we are properly called with a string.
    if (page === undefined) {
      return;
    }

    // If no page was found in the route data, page will be an empty string.
    // Deault to 'view1' in that case.
    this.page = page || 'view1';

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    // const resolvedPageUrl = this.resolveUrl(`${page}.js`);
    // import(/* webpackChunkName: [request] */ '../my-${page}/my-${page}.html');
    if(this.lazyPages[page]){
      this.lazyPages[page]();
    } else {
      this._showPage404();
    }
  }

  _importPage(page) {
  }

  _showPage404() {
    this.page = 'view404';
  }

  static get template() {
    return html([`${template}`]);
  }
}

window.customElements.define(MyApp.is, MyApp);
