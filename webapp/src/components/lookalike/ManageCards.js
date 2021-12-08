import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'

export default function ManageCards () {
  return (
    <div css={heroStyles}>
      <div className='grid'>
        <div className='content'>
          <h3>Manage cards and expenses all in one place.</h3>
          <p>Divvy’s mobile app is so easy that employees will actually use it. Upload receipts, request funds, and approve spending—all in one place.</p>
          <Link className='btn btn-black btn-sm' to='/konami'>Learn More</Link>
        </div>
        <div className='image-container'>
          <img alt='landing hero' src='/images/photo-phonebudget.webp' />
        </div>
      </div>
    </div>
  )
}

const heroStyles = css`
  background: #ffffff;

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
