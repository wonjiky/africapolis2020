import React, { useState, useEffect } from 'react';
import { Backdrop, BackdropMobile } from '../../../static';
import { MobileHeader, Header} from '../index';
import classes from './css/Headers.module.css';

const Headers = props => {

    const { config, match, location } = props; // set props and other data
    /* @@ SWAC LOGO @@ */
    // swac_en = config.logos.swac_en,
    // swac_fr = config.logos.swac_fr;

    const [ mouseOver, setMouseOver ] = useState({ selected: null }); // detect mouseOver event from header
    const [ clicked, setClick ] = useState(false); // detect mobile toggle

    useEffect(() => {
        // Set mobile toggle click false to set sidebar display
        const handleResize = () => window.innerWidth >= 960 ? setClick(false) : null
        window.addEventListener('resize', handleResize)
        return () => { window.removeEventListener('resize', handleResize);};
    });

    return (
        <header className={mouseOver.selected !== null ? classes.active : ''}>
            <Header 
                data={config}
                pathname={location.pathname} url={match.url} 
                africapolisLogos={[config.logos.africapolis, config.logos.africapolisWhite]}
                toggleHover={(value) => setMouseOver({ selected: value })}
                toggleLeave={() => setMouseOver({selected: null})}
                mobileHeaderToggle={() => setClick(!clicked)}
                mouseOver={mouseOver}
            />
            <Backdrop hovered={mouseOver.selected}  />
            <MobileHeader clicked={clicked} />
            <BackdropMobile clicked={clicked} handleBackdrop={() => setClick((!clicked))}/>
        </header>
    )
}

export default Headers;