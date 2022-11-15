import { NextPage } from 'next';
import Head from 'next/head';
import Image, { ImageLoader } from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../../components/navbar';
import { addItem, removeItem, selectBasketState } from '../../../store/slices/basket.slice';
import { Book } from '../../../types';
import styles from './book-detail.module.css';

interface SingleBookViewProps {
  details: Book
}

const SingleBookView: NextPage<SingleBookViewProps> = ({ details }) => {
  const { id, author, cover, metaDescription, metaTitle, title } = details;
  const { items } = useSelector(selectBasketState);
  const dispatch = useDispatch();

  const itemIsInBasket = items.some(item => item.id === id);

  const imageLoader: ImageLoader = ({ src }) => src;

  const addToBasket = () => {
    dispatch(addItem({ id, title, qty: 1 }))
  };

  const removeFromBasket = () => {
    dispatch(removeItem({ id }))
  };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <Navbar />
      <main className="container">
        <div>
          <Link href="/">
            <span>
              &lt; Back
            </span>
          </Link>
        </div>

        <div className={styles.intro}>
          <h3>{title}</h3>
          <p>{author}</p>
        </div>


        <div className={styles.gridArea}>
          <div>
            <Image
              loader={imageLoader}
              unoptimized
              src={cover}
              alt=""
              height={100}
              width={100}
              className={styles.coverImage}
            />
          </div>
          
          <div>
            {
              itemIsInBasket ? (
                <button className={styles.actionButton} onClick={removeFromBasket}>
                  Remove from Basket
                </button>
              ) : (
                <button className={styles.actionButton} onClick={addToBasket}>
                  Add to Basket
                </button>
              )
            }
          </div>
        </div>
      </main>
    </>
  )
}

SingleBookView.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:3000/books/${query.id}`)
  const details: Book = await res.json();
  return { details }
}

export default SingleBookView;