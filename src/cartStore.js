import { atom, map } from 'nanostores';

export const isCartOpen = atom(false);



export const cartItems = map({});

export function addCartItem({ id, name, imageSrc }) {
	const existingEntry = cartItems.get()[id];
	if (existingEntry) {
		cartItems.setKey(id, {
			...existingEntry,
			quantity: existingEntry.quantity + 1,
		});
	} else {
		cartItems.setKey(id, {
			id,
			name,
			imageSrc,
			quantity: 1,
		});
	}
}