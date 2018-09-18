import { Element as PolymerElement, html } from '@polymer/polymer/polymer-element';
import template from './my-view3.html';

export default class MyView3 extends PolymerElement {
  static get is() {
    return 'my-view3';
  }

  static get template() {
    return html([`${template}`]);
  }
}

window.customElements.define(MyView3.is, MyView3);
