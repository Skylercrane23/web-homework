import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'

export default function SpendControl () {
  return (
    <div css={heroStyles}>
      <div className='grid'>
        <div className='image-container'>
          <img alt='landing hero' src='/images/photo-groupmeeting.webp' />
        </div>
        <div className='content'>
          <h3>The credit and spend control you need.</h3>
          <p>Get fast access to the credit your small business needs. Your employees get their own cards, and you get real control with budget limits.</p>
          <Link className='btn btn-black btn-sm' to='/konami'>Learn More</Link>
        </div>
      </div>
    </div>
  )
}

const heroStyles = css`
  background: #f6f4e9;

  .grid {
    max-width: 1220px;
    padding: 72px 64px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    h1 {
      margin-top: 8px;
    }

    p {
      margin-top: 16px;
      font-size: 20px;
    }
  }

  .image-container {
    img {
      aspect-ratio: 4 / 3;
      width: 100%;
    }
  }
  
`
