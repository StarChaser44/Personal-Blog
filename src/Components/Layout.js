import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import '../Styles/index.scss'
import layoutstyles from '../Styles/layout.module.scss'

const Layout = (props) => {
    return (
        <div>
            <div className={layoutstyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout