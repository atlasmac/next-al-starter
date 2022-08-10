import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function ShopComponent({ products }) {
  const productList = products.map(product => {
    return (
      <div key={product.id} className={styles.card}>
        <h3>{product.title}</h3>
        <div className={styles.productImage}>
          <Image
            src={product.img}
            alt={product.alt}
            height={300}
            width={300}
          />
        </div>
        <p className={styles.productDes}>{product.description}</p>
        <p>${product.price}</p>
        <span>
          <button
            className={`snipcart-add-item ${styles.submitButton}`}
            data-item-id={product.id}
            data-item-image={product.img}
            data-item-name={product.title}
            data-item-price={product.price}>Add to Cart</button>
        </span>
      </div>
    );
  })
  return (
    <div className={styles.storeDiv}>
      <div className={styles.divs} >
        <h3 className={styles.artTitle}>Welcome to the shop</h3>
        <div className={styles.productList}>
          {productList}
        </div>
      </div>
    </div>
  )
}

