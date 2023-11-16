import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return  (
    <div style={{overflowX: 'hidden'}}>
  <Component {...pageProps} />
  </div>
  )
}
