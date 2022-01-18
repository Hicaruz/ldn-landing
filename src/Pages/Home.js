import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import PrincipalEvent from '../Components/PrincipalEvent'
import Partners from '../Components/Partners'
import About from '../Components/About'
import Matches from '../Components/Matches'

function Home() {

    return (
        <div>
            <Header/>
            <PrincipalEvent/>
            <Partners/>
            <About/>
            <Matches/>
            <Footer/>

        </div>
    )
}
export default Home