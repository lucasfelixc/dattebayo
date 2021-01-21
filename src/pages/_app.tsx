import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Dattebayo</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default MyApp
