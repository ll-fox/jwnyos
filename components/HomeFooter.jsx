import { Map,Marker } from 'react-amap'
import style from '../styles/HomeFooter.module.css'
import Footer from './Footer'
import Image from 'next/image'

const HomeFooter = () => {
  return (
    <div className={style.container}>
      <div className={style.map}>
        <Map plugins={['ToolBar']} zoom={13} center={[109.209155, 34.912882]}>
          <Marker position={[109.209155, 34.912882]}></Marker>
        </Map>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomeFooter
