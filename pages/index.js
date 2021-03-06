import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Help from '../components/Help'
import NavBar from '../components/NavBar'
import Products from '../components/items/Products'
import Sort from '../components/Sort'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Sort />
      <Products />
      <Footer />
      <Help />
    </div>
  )
}
