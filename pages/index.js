import Head from 'next/head'
import { useQuery } from 'urql'
import { PRODUCT_QUERY } from "../lib/query"
import Product from '../components/Products'
import { Gallery } from '../styles/Gallery'
import Nav from '../components/Nav'

export default function Home() {
  const [results] = useQuery({query: PRODUCT_QUERY})
  const {data, fetching, error} = results
  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>
  const products = data.products.data
  console.log(products)
  return (
    <div>
      <Head>
        <title>Pyramid Scheme Courses</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main>
      <h1>Hello future scammers!</h1>
      <Gallery>
        {products.map(prod =>
         <Product key = {prod.attributes.Slug} product = {prod}/>)}

      </Gallery>
      
      </main>
    </div>

     
  );
}
