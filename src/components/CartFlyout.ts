import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { StoreController } from "@nanostores/lit";
import { isCartOpen } from '../cartStore'

@customElement('cart-flyout')
export class CartFlyout extends LitElement {

  private cartOpen = new StoreController(this, isCartOpen);

  render() {
    return this.cartOpen.value ? html`<aside>
      cart
    </aside>` : null;
  }
}