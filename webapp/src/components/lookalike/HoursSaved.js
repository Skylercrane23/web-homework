import React from 'react'
import { css } from '@emotion/core'

export default function HoursSaved () {
  return (
    <div css={bannerStyles}>
      <div className='content'>
        <div>
          <h3>See how many hours you can save.</h3>
        </div>
        <div>
          <button className='btn btn-blue btn-sm'>Get a Demo</button>
        </div>
      </div>
    </div>
  )
}

const bannerStyles = css`
  background: #000000;
  padding: 72px 64px;
 
  .content {
    max-width: 1220px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: #ffffff;
      text-align: left;
    }
    button {
      margin-top: 0px;
    }
  }
`
