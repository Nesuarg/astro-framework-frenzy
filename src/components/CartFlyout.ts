import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { StoreController } from "@nanostores/lit";
import { $counter, $increment } from '../../stores/cart'

@customElement('cart-flyout')
export class CartFlyout extends LitElement {

  private cartController = new StoreController(this, $counter)

  render() {
    return html`<header>Hi, <button @click="${$increment}">increment</button> ${this.cartController.value}</header>`
  }
}