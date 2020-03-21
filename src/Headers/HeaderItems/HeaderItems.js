import React from 'react';
import classes from './HeaderItems.module.css';
import HeaderItem from './HeaderItem/HeaderItem';
import MobileHeaderButton from '../../Static/MobileHeaderButton/MobileHeaderButton';

export default props => {
    const { data, mouseOverDetected } = props;

    return (
        <nav>   
            <ul className={mouseOverDetected.hovered ? classes.active : null}>
                {data.head.map((d, idx) => {
                    return <HeaderItem 
                        key={`Nav_Item__${idx}`}
                        uniqId={d.id}
                        item={d.type}
                        navData={data.navigation[idx]}
                        mouseOverDetected={mouseOverDetected}
                        toggleHover={props.toggleHover}
                        toggleLeave={props.toggleLeave}
                    />
                })}
                <MobileHeaderButton mobileHeaderToggle={props.mobileHeaderToggle} />
            </ul>
        </nav>
    )
}
