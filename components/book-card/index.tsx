import Image, { ImageLoader, ImageLoaderProps } from "next/image";
import styles from "./book-card.module.css";

export default function BookCard(){
  const imageSrc = "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"

  const imageLoader: ImageLoader = ({ src }) => src;

  return (
    <main className={styles.wrapper}>
      <Image 
        loader={imageLoader}
        src={imageSrc}
        alt="sample book description" 
        width={300}
        height={100}
        className={styles.image} 
      />
    </main>
  )
}