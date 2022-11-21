import Layout from '../components/Layout'
import MyContext from '../lib/context'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [tab, setTab] = useState(null)

  return (
    <MyContext.Provider
      value={{
        tab: tab,
        setTab
      }}
    >
      <Head>
        <title>金翁农业</title>
        <meta
          name="description"
          content="Web Design, App Development, Content Creation Agency Near Sweden"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyContext.Provider>
  )
}

export default MyApp
