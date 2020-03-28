import React from 'react';
import { NavWrapper, NavHeader, NavList } from '../index';
import classes from './css/Navigation.module.css';

export default props => {
    const { data, itemId, selectedList } = props;
    const [ subHeader, setSubHeader ] = React.useState({type: 'header', id: 1});
    return (
        <div className={itemId === selectedList ? [classes.Navigation, classes.active].join(' ') : classes.Navigation}> 
            <NavWrapper>
                <NavHeader 
                    type={data.navType} 
                    data={data.navHeader}
                />
                <NavList
                    type={data.navType} 
                    data={data.navList} 
                    navSubMenu={data.navMenu} 
                    subHeaderClick={(type, id) => setSubHeader({type: type, id: id})} 
                    subHeader={subHeader}
                />
            </NavWrapper>
        </div>
    );
}