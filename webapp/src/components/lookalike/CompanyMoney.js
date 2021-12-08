import React from 'react'
import { css } from '@emotion/core'

export default function CompanyMoney () {
  return (
    <div css={bannerStyles}>
      <div className='content'>
        <h3>The spend management platform for small businesses.</h3>
        <div className='grid'>
          <div>
            <img alt='cuts' src='/images/gif/gif-business-credit.gif' />
            <h6>Get access to scalable business credit</h6>
          </div>
          <div>
            <img alt='cuts' src='/images/gif/control_1.gif' />
            <h6>Get access to scalable business credit</h6>
          </div>
          <div>
            <img alt='cuts' src='/images/gif/Transaction_Gif02.gif' />
            <h6>Get access to scalable business credit</h6>
          </div>
          <div>
            <img alt='cuts' src='/images/gif/approvals.gif' />
            <h6>Get access to scalable business credit</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

const bannerStyles = css`
  background: #ffffff;
  padding: 72px 64px;
  .content {
    max-width: 1220px;
    margin: 0 auto;
    h3 {
      text-align: center;
    }

    .grid {
      margin-top: 40px;
      display: grid;
      gap: 22px;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      justify-content: center;
      align-items: center;

      
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }

      h6 {
        text-align: center;
        margin-top: 32px;
        font-family: sans-serif;
      }
    }
  }
`
