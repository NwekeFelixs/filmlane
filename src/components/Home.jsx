import React from 'react'
import Header from './fragments/Header'
import Hero from './fragments/Hero'
import Upcoming from './fragments/Upcoming'
import Service from './fragments/Service'
import TopRated from './fragments/TopRated'
import TvSeries from './fragments/TvSeries'
import Cta from './fragments/Cta'
import Footer from './fragments/Footer'

function Home() {
  return (
    <div>
      <Header/>
      <main>
        <article>
            <Hero/>
            <Upcoming/>
            <Service/>
            <TopRated/>
            <TvSeries/>
            <Cta/>
        </article>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
