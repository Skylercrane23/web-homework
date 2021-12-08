import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Global } from '@emotion/react'
import { NavBar } from './components/navigation/NavBar'
import { Konami } from './pages/Konami'
import { Giphy } from './pages/Giphy'

function AppRouter () {
  return (
    <Router>
      <Global styles={globalStyle} />
      <NavBar />
      <div>
        <Route component={Konami} exact path='/' />
        <Route component={Giphy} exact path='/giphy' />
      </div>
    </Router>
  )
}

export default AppRouter

const globalStyle = `
font-family: sans-serif;
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
display: block;
}
body {
line-height: 1;
font-family: "CalibreRegular", sans-serif;
}
ol, ul {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
h1, h2, h3, h4, h5, h6 {
  font-family: serif;
  font-weight: bold;
}
p, li {
    font-family: 'Roboto', sans-serif;
    line-height: 1.35;
}
h1 {
    font-size: 4rem;
}
h2 {
    font-size: 3.5rem;
}
h3 {
    font-size: 3rem;
}
h4 {
    font-size: 2.5rem;
}
h5 {
    font-size: 2rem;
}
h6 {
    font-size: 1.5rem;
}

.btn {
  text-transform: uppercase;
  text-align: center;
  width: fit-content;
  padding: 15px 22px;
  border-radius: 50px;
  text-decoration: none;
  margin-top: 24px;
  border: none;

  &.btn-black {
    color: #ffffff;
    background: #000000;
  }

  &.btn-blue {
    color: #ffffff;
    background: #2355be;
  }

  &.btn-sm {
      font-size: 12px;
  }
}
`
