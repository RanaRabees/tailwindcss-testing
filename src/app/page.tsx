import Image from 'next/image'
import { Inter } from 'next/font/google'
import Design from './components/Design'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Design />
    </>
  )
}
