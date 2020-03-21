import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import { Backdrop, Backdrop__Mobile }  from '../Static/Backdrop/Backdrop';
import MobileHeader from './MobileHeader/MobileHeader';
import classes from './Headers.module.css';

const Headers = props => {

    const { config } = props; // set props and other data
    
    /* @@ SWAC LOGO @@ */
    // swac_en = config.logos.swac_en,
    // swac_fr = config.logos.swac_fr;

    const [ mouseOver, setMouseOver ] = useState({ selected: null, hovered: false }); // detect mouseOver event from header
    const [ clicked, setClick ] = useState(false); // detect mobile toggle
    
    useEffect(() => {
        // Set mobile toggle click false to set sidebar display
        const handleResize = () => window.innerWidth >= 960 ? setClick(false) : null
        window.addEventListener('resize', handleResize)
        return () => { window.removeEventListener('resize', handleResize);};
    });

    // add active class once hover is true
    let toggleActiveClass;
    if (mouseOver.hovered) toggleActiveClass = classes.active;

    return (
        <header className={mouseOver.hovered ? classes.active : ''}>
            <Header 
                data={config}
                africapolisLogos={[config.logos.africapolis, config.logos.africapolisWhite]}
                toggleHover={(value) => setMouseOver({ selected: value, hovered: true})}
                toggleLeave={() => setMouseOver({selected: null, hovered: false})}
                mobileHeaderToggle={() => setClick(!clicked)}
                toggleActiveClass={toggleActiveClass}
                mouseOver={mouseOver}
            />
            <Backdrop hovered={mouseOver.hovered}  />
            <MobileHeader clicked={clicked} />
            <Backdrop__Mobile clicked={clicked} handleBackdrop={() => setClick((!clicked))}/>
        </header>
    )
}

export default Headers;