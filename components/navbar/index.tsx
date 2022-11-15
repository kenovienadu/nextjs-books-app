import Image, { ImageLoader } from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectBasketState } from "../../store/slices/basket.slice";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { items } = useSelector(selectBasketState)

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

          {
            items.length ? <span>{ items.length } item(s)</span> : <span>Empty</span>
          }
          
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

export default Navbar;