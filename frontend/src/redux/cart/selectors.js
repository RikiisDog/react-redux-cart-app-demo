// カート内のアイテムを取得するセレクター
export const selectCartItem = (store) => store.cart.cartItems;
// カート内のアイテム総数を取得するセレクター
export const selectAmount = (store) => store.cart.amount;
// カート内の合計金額を取得するセレクター
export const selectTotal = (store) => store.cart.total;
