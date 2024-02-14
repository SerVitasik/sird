import styles from "./ProductsItem.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const ProductsItem = ({ id, title, text, image }) => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const removeProductsHandler = async () => {
    const confirmed = confirm('Ви впевнені, що хочете видалити анонс?');
    if (confirmed) {
      const response = await fetch(`/api/products?id=${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete announce');
      }
      router.refresh();
      router.replace('/');
    }
  };

  return (
    <li key={id} className={styles.item}> 
      <img
        className={styles.image}
        src={image}
        alt="Products item"
        width={413}
        height={235}
      />
      <a href={text} className={styles.title}>
        <h4>{title}</h4>
      </a>
      {isAuthenticated && <div className={styles.actions}>
            <Link href={`/announcements/edit/${id}`}><Image
                        src='/announcements/edit.svg'
                        alt="Edit button"
                        width={20}
                        height={20}
                        /></Link>
            <button><Image  src='/announcements/delete.svg' onClick={removeProductsHandler}  alt="Delete button"
                        width={20}
                        height={20}/></button>
          </div>}
    </li>
  );
};

export default ProductsItem;
