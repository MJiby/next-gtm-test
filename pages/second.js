import Link from 'next/link'
import Head from 'next/head'

import styles from '../styles/Home.module.css'



const Second = () => {


    return (
        <>
            <Head>
                <title>두번째 페이지</title>
                <meta name="description" content="second" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                    <Link href="/third">
                        <a>세번째 페이지 3333333</a>
                    </Link>
                </main>
            </div>
        </>
    )
}


export default Second