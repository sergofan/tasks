import { Element as PolymerElement, html } from '@polymer/polymer/polymer-element';
import template from './my-view2.html';

export default class MyView2 extends PolymerElement {
  static get is() { return 'my-view2'; }

  static get template() {
    return html([`${template}`]);
  }
}

window.customElements.define(MyView2.is, MyView2);
