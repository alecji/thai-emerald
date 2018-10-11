import React from 'react'
import "./Jumbotron.css"

const Jumbotron = () => {
  return (
    <div>
      <header className="sans-serif">
  <div className="cover bg-left bg-center-l style=background-image: url(http://mrmrs.github.io/photos/u/011.jpg)">
    <div className="bg-dark-green pb5 pb6-m pb7-l">
      <nav className="dt w-100 mw8 center"> 
        <div className="dtc w2 v-mid pa3">
        </div>
        <div className="dtc v-mid tr pa3">
          <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/">About</a> 
          <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Hours</a> 
          <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/">FAQ</a> 
          <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Contact</a> 
          <a className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" href="/" >Menu</a> 
        </div>
      </nav> 
      <div className="tc-l mt4 mt5-m mt6-l ph3">
        <h1 className="f1 f-5-l f-subheadline-l fw5 white-90 mb0 lh-title logo-font">Thai Emerald</h1>
        <h2 className="fw1 f3 white-80 mt3 mb4" >Real Authentic Thai Food</h2>
        <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Lunch Menu</a>
        <span className="dib v-mid ph3 white-70 mb3">-</span>
        <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="">Dinner Menu</a>
      </div>
    </div>
  </div> 
</header>
    </div>
  )
}
export default Jumbotron; 