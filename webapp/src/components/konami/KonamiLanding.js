import React from 'react'
import { css } from '@emotion/core'

export default function KonamiLanding () {
  return (
    <div css={konamiLandingStyle}>
      <div className='content'>
        <h1>Konami Code</h1>
        <p>It&apos;s called the Konami Code, and it often meant the difference between life and death in a video game back in the 1980s. Perform those button presses in the right sequence, and you&apos;ll unlock cheats that help you win.</p>
      </div>
      <div className='img-container'>
        <img alt='Konami' src='/images/konami-bg.png' />
      </div>
    </div>
  )
}

const konamiLandingStyle = css`
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
        font-size: 3.5rem;
        font-weight: bold;
        font-family: monospace;
      }
      p {
        font-size: 1.25rem;
        line-height: 1.5;
        margin-top: 16px;
        font-family: monospace;
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
