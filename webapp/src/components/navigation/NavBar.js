import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'

export function NavBar () {
  return (
    <nav className='navbar' css={navStyle}>
      <img alt='logo' css={logoStyle} src='https://getdivvy.com/wp-content/uploads/2019/05/Divvy-Logo-19.png' />
      <ul >
        <li className='link'>
          <Link to='/'>Konami</Link>
        </li>
        <li className='link'>
          <Link to='/giphy'>Giphy</Link>
        </li>
      </ul>
      <div css={btnStyles} >
        <a className='btn btn-black' href='https://apply.divvy.co/auth?referrer%3Dhttps%253A%252F%252Fwww.google.com%252F%26landingPage%3Dhttps%3A%2F%2Fgetdivvy.com%2Fcareers%2F%23career-list%26convertingPagePath%3Dhttps%3A%2F%2Fgetdivvy.com%2Fsmall-business%2F%26convertingPage%3Dhttps%3A%2F%2Fgetdivvy.com%2Fhome%2F' rel='noopener noreferrer' target='_blank'>sign up</a>
      </div>
    </nav>
  )
}

const navStyle = css`
  display: grid;
  max-width: 1220px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  background: #ffffff;
  padding: 15px 28px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    list-style: none;
  }

  .link a {
    height: 40px;
    text-decoration: none;
    color: #111111;
    padding: 0 10px;
    text-transform: uppercase;
    font-weight: bold;
  }
`

const logoStyle = css`
  height: 50px;
`

const btnStyles = css`
display: flex;
align-items: end;
justify-content: end;
a {
    margin-top: 0;
    font-weight: bold;
}
`
