import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
      return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
      const appProps = await App.getInitialProps(appContext);
      return { ...appProps }
}

export default MyApp