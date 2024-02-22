import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../../features/Cart/cartItems";

/**
 * カートの初期状態
 * @type {Object}
 */
const initialState = {
    cartItems: cartItems, // カート内のアイテム
    amount: 4, // カート内のアイテム総数
    total: 0, // カート内の合計金額
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        /**
         * カート内のすべてのアイテムをクリアします。
         * @param {Object} state - 現在のカート状態
         */
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
            state.total = 0;
        },

        /**
         * 特定のアイテムをカートから削除します。
         * @param {Object} state - 現在のカート状態
         * @param {Object} action - 削除するアイテムのIDを持つアクション
         */
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },

        /**
         * カート内の特定のアイテムの数量を増やします（最大99）。
         * @param {Object} state - 現在のカート状態
         * @param {Object} action - 数量を増やすアイテムのIDを持つアクション
         */
        increase: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            if (cartItem && cartItem.amount < 99) {
                cartItem.amount += 1;
            }
        },

        /**
         * カート内の特定のアイテムの数量を減らします。数量が1の場合、アイテムを削除します。
         * @param {Object} state - 現在のカート状態
         * @param {Object} action - 数量を減らすアイテムのIDを持つアクション
         */
        decrease: (state, action) => {
            const index = state.cartItems.findIndex((item) => item.id === action.payload);
            if (index !== -1 && state.cartItems[index].amount > 1) {
                state.cartItems[index].amount -= 1;
            } else {
                state.cartItems.splice(index, 1);
            }
        },

        /**
         * カート内のアイテムの総数と合計金額を計算します。
         * @param {Object} state - 現在のカート状態
         */
        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions;
