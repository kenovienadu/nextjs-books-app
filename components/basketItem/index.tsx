import React from "react";
import { useDispatch } from "react-redux";
import { incrementItemQuantity, decrementItemQuantity, removeItem } from "../../store/slices/basket.slice";
import { BasketItem } from "../../types";
import styles from "./basketItem.module.css";

interface BasketItemProps {
  item: BasketItem
}

const BasketItem: React.FC<BasketItemProps> = ({ item }) => {
  const { id, qty, title } = item;
  const dispatch = useDispatch();

  const increaseItemQuantity = () => {
    dispatch(incrementItemQuantity({ id }));
  }

  const decreaseItemQuantity = () => {
    dispatch(decrementItemQuantity({ id }));
  }

  const remove = () => {
    dispatch(removeItem({ id }))
  }

  return (
    <div className={styles.basketItem}>
      <p>
        <span className={styles.basketItemtitle}>{ title }</span> x { qty }

        <div className={styles.qtyModifierWrapper}>
          <button onClick={increaseItemQuantity}  >+</button>
          <button onClick={decreaseItemQuantity} >-</button>
        </div>
      </p>

      <button onClick={remove}>
        &times; Remove
      </button>
    </div>
  )
}

export default BasketItem;