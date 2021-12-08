import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'

export default function LookAlikeHero () {
  return (
    <div css={heroStyles}>
      <div className='content'>
        <p className='subheading'>DIVVY FOR SMALL BUSINESSES</p>
        <h1>Spend management for small businesses.</h1>
        <p>Stop doing manual expense reports and get more hours back in your day. Divvy is the card-plus-software solution for your small business—and it’s free.</p>
        <Link className='btn btn-blue' to='/konami'>Get a Demo</Link>
      </div>
      <div className='image-container'>
        <img alt='landing hero' src='/images/photo-laptop-coffee.png' />
      </div>
    </div>
  )
}

const heroStyles = css`
  max-width: 1220px;
  padding: 72px 64px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    .subheading {
      font-size: 1.25rem;
      text-transform: uppercase;
    }

    h1 {
      margin-top: 8px;
    }

    p {
      font-size: 1.25rem;
      margin-top: 16px;
    }
  }

  .image-container {
    img {
      aspect-ratio: 4 / 3;
      width: 100%;
    }
  }
  
`
