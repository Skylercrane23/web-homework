import React from 'react'
import { css } from '@emotion/core'

export default function FounderQuote () {
  return (
    <div css={heroStyles}>
      <div className='content'>
        <h5>“As a fast-growing, bootstrapped company, knowing exactly where our finances is has been critical. Divvy gives us instant visibility into every dollar, allows us to easily budget and track how we are spending, and saves our finance team countless hours on running reports.”</h5>

        <div className='author'>
          <div className='person'>
            <img alt='dylan-brumate' src='/images/photo-dylan-brumate.webp' />
            <div className='info'>
              <h6>Dylan Jacobs</h6>
              <p>Founder</p>
            </div>
          </div>
          <div className='logo'>
            <img alt='brumate-logo' src='/images/companies/logo-customer-brumate-white.webp' />
          </div>
        </div>
      </div>
    </div>
  )
}

const heroStyles = css`
  background: #000000;
  padding: 72px 64px;

  .content {
    max-width: 767px;
    margin: 0 auto;

     h5 {
      color: #ffffff;
      line-height: 1.5;
      font-size: 1.75rem;
    }

    .author {
      display: flex;
      align-items: start;
      justify-content: space-between;
      margin-top: 32px;
    }

    .person {
      display: flex;
      align-items: center;
      justify-content: start;
      
      img {
        max-width: 80px;
      }

      .info {
        margin-left: 16px;
        color: #ffffff;

        h6 {
          font-size: 1.25rem;
          font-family: sans-serif;
        }
        p {
          margin-top: 4px;
        }
      }
    }

    .logo img {
      max-width: 136px;
    }
  }
`
