import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../../components/basketItem";
import Navbar from "../../components/navbar";
import { clearBasket, selectBasketState } from "../../store/slices/basket.slice";
import styles from "./basket.module.css";

const BasketView: NextPage = () => {
  const { items } = useSelector(selectBasketState);
  const dispatch = useDispatch();
  const router = useRouter();

  const basketItems = items.map((info) => {
    const { id } = info;

    return (
     <BasketItem key={id} item={info} />
    )
  })

  const pay = () => {
    const booksToBuy = items.map(({ id, qty }) => {
      return { id, qty }
    })

    console.log({ booksToBuy })

    dispatch(clearBasket())
    router.push('/');
  }

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

        {
          items.length ? (
            <div className={styles.payBtnWrapper}>
              <button data-testid="payBtn" onClick={pay}>Pay</button>
            </div>
          ) : (
            <div data-testid="emptyDiv" className={styles.empty}>
              No items in your basket
            </div>
          )
        }

      </main>
    </>
  )
}

export default BasketView;