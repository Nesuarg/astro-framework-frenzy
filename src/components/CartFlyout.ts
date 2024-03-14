import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { StoreController } from "@nanostores/lit";
import { isCartOpen, cartItems } from '../cartStore'

@customElement('cart-flyout')
export class CartFlyout extends LitElement {

  private cartOpen = new StoreController(this, isCartOpen);
  private getCartItems = new StoreController(this, cartItems);

  renderCartItem(cartItem) {
    return html`
      <li>
        <img width="100" src="${cartItem.imageSrc}" alt="${cartItem.name}" />
        <h3>${cartItem.name}</h3>
        <p>Quantity: ${cartItem.quantity}</p>
      </li>
    `;
  }

  render() {
    return this.cartOpen.value ? html`<aside>
    ${
      Object.values(this.getCartItems.value).length
        ? html`
          <ul>
            ${Object.values(this.getCartItems.value).map((cartItem) =>
              this.renderCartItem(cartItem)
            )}
          </ul>
        `
        : html`<p>Your cart is empty!</p>`
    }
  </aside>` : null;
  }
}