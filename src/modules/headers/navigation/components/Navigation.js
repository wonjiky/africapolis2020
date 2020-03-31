import React, { useState, useEffect, useRef } from 'react';
import { NavWrapper, NavHeader, NavList } from '../index';
import classes from './css/Navigation.module.css';

export default props => {
    const { data, itemId, selected, locale, navUrl, pathname } = props;
    const [ menuUrlKey, setMenuUrlKey ] = useState(0);

    const prevLocRef = useRef();
    useEffect(() => {
        prevLocRef.current = pathname;
        const prevLocation = prevLocRef.current;
        if ( pathname !== prevLocation.pathname ) setMenuUrlKey(0)
    }, [pathname]);
    
    return (
        <div className={itemId === selected 
            ? [classes.Navigation, classes.active].join(' ') 
            : classes.Navigation}> 
            <NavWrapper>
                <NavHeader 
                    header={data.menuHeader}
                    locale={locale}
                    navUrl={navUrl}
                />
                <NavList
                    data={data.menuItems} locale={locale} navUrl={navUrl}
                    menuUrlClick={id => setMenuUrlKey(id)} 
                    menuUrlKey={menuUrlKey}
                />
            </NavWrapper>
        </div>
    );
}