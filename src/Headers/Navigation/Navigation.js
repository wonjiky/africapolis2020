import React from 'react';
import { NavWrapper, NavHeader, NavList } from './NavComponents/NavComponents';
import classes from './Navigation.module.css';

export default props => {
    const { data, uniqId, selectedList } = props;

    // display Navigation on header hover
    let styles = uniqId === selectedList ? [classes.Navigation, classes.active].join(' ') : classes.Navigation;
    
    return (
        <div className={styles}> 
            <NavWrapper>
                <NavHeader type={data.navType} data={data.navHeader}/>
                <NavList type={data.navType} data={data.navHeader}/>
            </NavWrapper>
        </div>
    );
}
