import { NextPage,  } from 'next';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css';
import { AvailableBooksApiResponse, Book, HomepageApiResponse, TrimmedBook } from '../types';
import ApiService from '../utils/api.service';
interface HomeProps {
  metaTitle: string;
  metaDescription: string;
  copy: string;
  availableBooks: TrimmedBook[]
}

const Home: NextPage<HomeProps> = ({ metaDescription, metaTitle, copy, availableBooks }) => {
  const bookLinks = availableBooks.map(({ id, title }) => {
    const link = `detail/${id}`
    return (
      <div key={id} className={styles.bookLink}>
        <Link href={link}>
          <div> { title } </div>
        </Link>
      </div>
    )
  })

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title> {metaTitle} </title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <Navbar />
      
      <div className="container">

        <div className={styles.intro}>
          <h3>Online Book Store</h3>
          <p>Here you can order amazing books!</p>
          <p data-testid="copy" className={styles.copy}>{copy}</p>
        </div>

        <section className={styles.photoSectionWrapper}>
          <div>
            <Image
              src="/assets/main-img.jpg"
              alt="photograph of a library"
              width={300}
              height={300}
              className={styles.mainImage}
            />
          </div>

          {/* Book Cards Go Here */}
          <div>
            <div className={styles.availableBooks}>
              <p>Available Books</p>
              {bookLinks}
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

Home.getInitialProps = async () => {
  const metaData = await ApiService.getHomePageData();
  const availableBooks = await ApiService.getAvailableBooks();

  const { SEO, homepageCopy: copy } = metaData;
  const { metaTitle, metaDescription } = SEO;

  return {
    metaTitle,
    metaDescription,
    copy,
    availableBooks
  }
}


export default Home;