import React from 'react'
import { css } from '@emotion/core'
import GiphyClient from '../network/giphy-client'
import UseSecretCommand from '../components/UseSecretCommand'

export function Giphy () {
  const giphyPattern = ['KeyG', 'KeyI', 'KeyP', 'KeyH', 'KeyY']
  const isGiphy = UseSecretCommand(giphyPattern)

  let defaultImage = '/images/giphy-be-animated-logo.gif'

  async function handleRandomGiphy () {
    const data = await GiphyClient()
    if (data.data.embed_url) {
      return data.data.embed_url
    }
  }

  return (
    <div css={giphyLanding}>
      <div className='img-container'>
        <img alt='Konami' src={isGiphy ? handleRandomGiphy() : defaultImage} />
      </div>
      <div className='content'>
        <h1>Random Giphy</h1>
        <p>Giphy, styled as GIPHY, is an American online database and search engine that allows users to search for and share short looping videos with no sound, that resemble animated GIF files. Type the command below to generate a random giphy.</p>
        <div className='key-commands'>
          <div className='key'>G</div>
          <div className='key'>I</div>
          <div className='key'>P</div>
          <div className='key'>H</div>
          <div className='key'>Y</div>
        </div>
      </div>
    </div>
  )
}

const giphyLanding = css`
height: calc(100vh - 80px);
display: grid;
position: relative;
grid-template-columns: repeat(2, minmax(0, 1fr));

.content {
  padding: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  h1 {
    font-family: sans-serif;
    font-size: 3.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
    margin-top: 16px;
  }

  .key-commands {
    margin-top: 16px;
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    .key {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      background: #f6f4e9;
      border-radius: 8px;
      color: #000;
      padding: 16px;
    }
  }
}

.img-container {
  position: relative;

  & > img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
`
