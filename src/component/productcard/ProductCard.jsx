import React from "react";
import styles from "../productcard/ProductCard.module.css";
// import mainproduct from '../../assets/product/main-product.png'

function ProductCard(props) {
  const currency = (price) => {
    return parseFloat(price)
      .toFixed()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  return (
    <>
      <div className={styles["product-box"]}>
        <img src={props.image} alt="" />
        <div className={styles["product-title"]}>
          <p className={styles.title}>{props.productTitle}</p>
          <p className={styles.price}>${currency(props.price)}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
