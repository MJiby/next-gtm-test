import Link from 'next/link'
import Head from 'next/head'

import styles from '../styles/Home.module.css'



const Third = () => {


    return (
        <>
            <Head>
                <title>3번째 페이지</title>
                <meta name="description" content="third" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                    <Link href="/end">
                        <a>마지막</a>
                    </Link>
                </main>
            </div>
        </>
    )
}

export default Third