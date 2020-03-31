import React, { useState, useEffect, useRef } from 'react';
import { Backdrop, BackdropMobile } from '../../../static';
import { MobileHeaderWrapper, Header } from '../index';
import classes from './css/Headers.module.css';

const Headers = props => {
    const { match, location, i18n } = props;

    /**
     * detect mouseOver event to set nav ids as state
     * detect mobileoggle
     */
    const [ mouseOver, setMouseOver ] = useState(null);
    const [ mobileToggle, setMobileToggle ] = useState(false); 

    /**
     * Set mobile toggle value to false to set sidebar display
     */
    const prevLocRef = useRef();
    useEffect(() => {
     
        const handleResize = () => window.innerWidth >= 960 ? setMobileToggle(false) : null
        window.addEventListener('resize', handleResize)
        
        prevLocRef.current = location.pathname;
        const prevLocation = prevLocRef.current;
        if ( location.pathname !== prevLocation.pathname ) { 
            setMouseOver(null);
            setMobileToggle(false);
        }
        
        return () => { window.removeEventListener('resize', handleResize);};
    }, [location.pathname]);
    
    return (
        <header className={mouseOver !== null ? classes.active : ''}>
            <Header 
                data={i18n}
                mouseOver={mouseOver}
                pathname={location.pathname} locale={match.url} 
                toggleHover={(value) => setMouseOver(value)}
                toggleLeave={() => setMouseOver(null)}
                mobileHeaderToggle={() => setMobileToggle(!mobileToggle)}
            />
            <Backdrop hovered={mouseOver}  />
            <MobileHeaderWrapper
                data={i18n} 
                mobileToggle={mobileToggle} 
                pathname={location.pathname} locale={match.url} 
                closed={() => setMobileToggle(!mobileToggle)} 
            />
            <BackdropMobile mobileToggle={mobileToggle} handleBackdrop={() => setMobileToggle((!mobileToggle))}/>
        </header>
    )
}

export default Headers;