import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/navbar";
import styles from "./basket.module.css";

const BasketView = () => {

  const basket = [
    {
      id: 1,
      title: "test",
      qty: 2,
    },
    {
      id: 2,
      title: "oliver twist",
      qty: 1,
    },
    {
      id: 3,
      title: "1984",
      qty: 1,
    },
  ]

  const basketItems = basket.map((info) => {
    const { id, title, qty } = info;

    return (
      <div key={id} className={styles.basketItem}>
        <p>
          <span className={styles.basketItemtitle}>{ title }</span> x { qty }
        </p>

        <button>
          &times; Remove
        </button>
      </div>
    )
  })

  return (
    <>
      <Head>
        <title>BOOK Store | Basket</title>
      </Head>

      <Navbar />

      <main className="container">
        <div>
          <Link href="/">
            <span>
              &lt; Go to Homepage
            </span>
          </Link>
        </div>

        <div>
          <h3>Basket Summary</h3>
        </div>

        <div>
          { basketItems }
        </div>

        <div className={styles.payBtnWrapper}>
          <button>Pay</button>
        </div>
      </main>
    </>
  )
}

export default BasketView;