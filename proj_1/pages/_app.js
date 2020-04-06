import * as React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { Auth0Provider } from '../lib/react-auth0-spa'

export default class MyApp extends App {
  render () {
    const { Component, pageProps, router } = this.props

    const onRedirectCallback = appState => {
      console.log('appState', appState)

      router.push(appState && appState.targetUrl ? appState.targetUrl : '/')
    }

    return (
      <>
        <Head>
          <title>My App</title>
        </Head>
        <Auth0Provider
          domain="dev-j4odqcb0.auth0.com"
          client_id="q5RBfrsPv8gBHwCUYS0wJmXKEG8S8Qxs"
          redirectUri="http://localhost:3000/about"
          onRedirectCallback={onRedirectCallback}
        >
          <Component {...pageProps} />
        </Auth0Provider>
      </>
    )
  }
}