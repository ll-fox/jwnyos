import Layout from '../components/Layout'
import MyContext from '../lib/context'
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyContext.Provider>
  )
}

export default MyApp
