import React from 'react'
import { css } from '@emotion/core'

export default function LookAlikeBanner () {
  return (
    <div css={bannerStyles}>
      <div className='content'>
        <h3>The spend management platform for small businesses.</h3>
        <div className='company-grid'>
          <div><img alt='cuts' src='/images/companies/logo-customer-wilburlabs.webp' /></div>
          <div><img alt='cuts' src='/images/companies/logo-customer-solostove.webp' /></div>
          <div><img alt='cuts' src='/images/companies/logo-customer-lambda.webp' /></div>
          <div><img alt='cuts' src='/images/companies/logo-customer-pura.webp' /></div>
          <div><img alt='cuts' src='/images/companies/logo-customer-cuts.webp' /></div>
        </div>
      </div>
    </div>
  )
}

const bannerStyles = css`
  background: #f6f4e9;
  padding: 72px 64px;
  .content {
    max-width: 1220px;
    margin: 0 auto;
    h3 {
      text-align: center;
    }

    .company-grid {
      margin-top: 40px;
      display: grid;
      gap: 22px;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }
`
