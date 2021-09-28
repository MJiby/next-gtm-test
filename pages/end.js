import Link from 'next/link'
import Head from 'next/head'

import styles from '../styles/Home.module.css'



const End = () => {


    return (
        <>
            <Head>
                <title>마지막 페이지</title>
                <meta name="description" content="end" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                    {/* <Link href="/">
                        <a>마지막</a>
                    </Link> */}
                    끝
                </main>
            </div>
        </>
    )
}

export default End