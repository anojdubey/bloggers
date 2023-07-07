import Head from 'next/head'
import Navigation from '@/components/Navigation'


export default function Home() {
  return (
    <>
      <Head>
        <title>Bloggers.com</title>
      </Head>
      <Navigation/>
      <div style={{
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <a style={{
          fontSize: "30px",
          margin: "auto",
          textDecoration: "none",
        }} href="/post">Click To See Posts</a>
      </div>
    </>
  )
}
