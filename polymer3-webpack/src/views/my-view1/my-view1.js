import { Element as PolymerElement, html } from '@polymer/polymer/polymer-element';
import template from './my-view1.html';

export default class MyView1 extends PolymerElement {
  static get is() { return 'my-view1'; }

  static get template() {
    return html([`${template}`]);
  }
}

window.customElements.define(MyView1.is, MyView1);
