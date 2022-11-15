import Image, { ImageLoader } from "next/image";
import styles from "./navbar.module.css";

export default function Navbar () {

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <div>
          <Image
            src="/assets/logo.jpg"
            width={200}
            height={100}
            alt="book store logo"
            className={styles.logo}
          />
        </div>

        <div className={styles.navbarRight}>
          <span>Empty</span>
          <button className={styles.cta}>
            View Basket
          </button>
        </div>
      </nav>
    </div>
  )
}