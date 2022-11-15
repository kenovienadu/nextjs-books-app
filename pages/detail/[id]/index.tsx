import { NextPage } from 'next';
import Head from 'next/head';
import Image, { ImageLoader } from 'next/image';
import Link from 'next/link';
import Navbar from '../../../components/navbar';
import { Book } from '../../../types';
import styles from './book-detail.module.css';

interface SingleBookViewProps {
  details: Book
}

const SingleBookView: NextPage<SingleBookViewProps> = ({ details }) => {
  const { id, author, cover, metaDescription, metaTitle, title } = details;

  const imageLoader: ImageLoader = ({ src }) => src;

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
              src={cover}
              alt=""
              height={100}
              width={100}
              className={styles.coverImage}
            />
          </div>
          
          <div>
            <button className={styles.actionButton}>
              Add to Basket
            </button>
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