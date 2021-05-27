import React from 'react'
import axios from 'axios'

import styles from './App.css'
import Controller from './Controller'
import Login from './Login'
import Viewport from './Viewport'

const env = process.env
const clientId = env.APP_CLIENT_ID
const clientSecret = env.APP_CLIENT_SECRET
const baseUri = env.APP_BASE_URI

const scopes = [
  'user-read-playback-state',
  'user-modify-playback-state'
].join(' ')


// axios.get('https://accounts.spotify.com/authorize', {
//     headers: {
//       "origin": baseUri,
//       "Access-Control-Allow-Origin": baseUri
//     },
//     params: {
//       response_type: 'code',
//       client_id: clientId,
//       scope: encodeURIComponent(scopes),
//       redirect_uri: encodeURIComponent(baseUri)
//     }
//   })
//   .then(res => {
//     console.log(`got ${res}`)
//   })
//   .catch(err => console.error(err))


const App = () => {
  return (
    <>
      <h1 className={styles.title}>Spotify Visualizer</h1>
      <Login loggedIn={false} />
      <Viewport width={800} height={600} />
      <Controller />
    </>
  )
}

export default App