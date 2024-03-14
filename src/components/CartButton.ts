import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { StoreController } from "@nanostores/lit";
import { isCartOpen } from '../cartStore'

@customElement('cart-button')
export class CartButton extends LitElement {

//   private cartController = new StoreController(this, $counter)

  render() {
    return html`<button @click="${this.handleClick}">Basket</button>`
  }

  handleClick() {
    isCartOpen.set(!isCartOpen.get());
  }
}