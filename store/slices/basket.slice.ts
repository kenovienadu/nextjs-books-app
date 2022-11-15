import { createSlice } from "@reduxjs/toolkit";
import { AppState, BasketItem, BasketState } from "../../types";

const initialState: BasketState = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem(state, action){
      const { id, title, qty } = action.payload as BasketItem;
      const index = state.items.findIndex(item => item.id === id);

      if(index !== -1){
        return;
      }

      state.items = [...state.items, { id, title, qty }]
    },

    incrementItemQuantity(state, action){
      const { id } = action.payload as BasketItem;
      const index = state.items.findIndex(item => item.id === id);

      if(index === -1){
        return;
      }

      const itemInState = state.items[index];
      itemInState.qty = itemInState.qty+1;

      const copy = [...state.items];
      copy[index] = itemInState;

      state.items = [...copy];
    },

    decrementItemQuantity(state, action){
      const { id } = action.payload as BasketItem;
      const index = state.items.findIndex(item => item.id === id);

      if(index === -1){
        return;
      }

      const itemInState = state.items[index];

      itemInState.qty = itemInState.qty-1;

      const copy = [...state.items];
      copy[index] = itemInState;

      state.items = [...copy].filter(item => item.qty > 0);
    },

    removeItem(state, action){
      const { id } = action.payload as BasketItem;
      state.items = state.items.filter(item => item.id !== id);
    },

    clearBasket(state){
      state.items = [];
    },
  }
})

export const { addItem, removeItem, clearBasket, incrementItemQuantity, decrementItemQuantity } = basketSlice.actions;

export const selectBasketState = (state: AppState) => state.basket;

export default basketSlice.reducer;