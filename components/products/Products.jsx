import ProductsItem from "./ProductsItem";
import styles from "./Products.module.scss";
import { useSelector } from "react-redux";
import Link from "next/link";

const Products = ({ products }) => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <section className={styles.news}>
      {isAuthenticated && <Link href="/products/new" className={styles.button}>Додати продукт</Link>}
      {products.length > 0 ? (
        <ul className={styles.list}>
          {products.map((products) => (
              <ProductsItem
                key={products["_id"]}
                id={products["_id"]}
                title={products.title}
                image={products.image}
                text={products.text}
                date={products.date}
              />
            ))}
        </ul>
      ) : (
        <div className={styles.error}>Продукти не знайдено</div>
      )}
    </section>
  );
};

export default Products;
