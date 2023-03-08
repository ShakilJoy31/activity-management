import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div style={{
    backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat"
  }} className='w-full min-h-screen'><Component {...pageProps} /></div>
}
