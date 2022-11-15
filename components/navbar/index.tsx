import Image, { ImageLoader } from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar () {

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <div>
          <Link href="/">
            <Image
              src="/assets/logo.jpg"
              width={200}
              height={100}
              alt="book store logo"
              className={styles.logo}
            />
          </Link>
        </div>

        <div className={styles.navbarRight}>
          <span>Empty</span>
          <Link href="/basket">
            <button className={styles.cta}>
              View Basket
            </button>
          </Link>
        </div>
      </nav>
    </div>
  )
}