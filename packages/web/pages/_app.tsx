import NextApp, { Container } from 'next/app'

import { appWithTranslation } from '@app/i18n/next'

class App extends NextApp {
  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default appWithTranslation(App)
