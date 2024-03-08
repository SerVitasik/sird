import styles from "./ProductsItem.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const ProductsItem = ({ id, title, text, image }) => {
  const router = useRouter();
  const session = useSession();

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
      {session.status === "authenticated" && <div className={styles.actions}>
            <Link href={`/products/edit/${id}`}><Image
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
