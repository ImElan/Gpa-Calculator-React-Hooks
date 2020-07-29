import App from 'next/app'

import MainNavbar from '../src/Components/Layout/MainNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
      return (
            <>
                  <MainNavbar />
                  <Component {...pageProps} />
            </>
      )
}

MyApp.getInitialProps = async (appContext) => {
      const appProps = await App.getInitialProps(appContext);
      return { ...appProps }
}

export default MyApp