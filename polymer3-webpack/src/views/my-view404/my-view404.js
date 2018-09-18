import { Element as PolymerElement, html } from '@polymer/polymer/polymer-element';
import template from './my-view404.html';

export default class MyView404 extends PolymerElement {
  static get is() { return 'my-view404'; }
  static get properties() {
    return {
      // This shouldn't be neccessary, but the Analyzer isn't picking up
      // Polymer.Element#rootPath
      rootPath: String,
    };
  }
  static get template() {
    return html([`${template}`]);
  }
}

window.customElements.define(MyView404.is, MyView404);
