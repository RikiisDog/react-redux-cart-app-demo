import { createSlice } from "@reduxjs/toolkit";

/**
 * モーダルの初期状態
 * @type {Object}
 */
const initialState = {
    isOpen: false,
};

const modalSlice = createSlice({
    name: "cardModal",
    initialState,
    reducers: {
        /**
         * モーダルをオープン状態にします
         * @param {Object} state - 現在のモーダルの開閉状態
         */
        openModal: (state) => {
            state.isOpen = true;
        },
        /**
         * モーダルをクローズ状態にします
         * @param {Object} state - 現在のモーダルの開閉状態
         */
        closeModal: (state) => {
            state.isOpen = false;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export const cartModalReducer = modalSlice.reducer;
