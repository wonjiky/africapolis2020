import React, { useState } from 'react';
import { MobileHeaderItems } from '../index'; 
import classes from './css/MobileWrapper.module.css';

export default function MobileHeaderWrapper(props) {
    
    let styles = classes.MobileNav;
    if (props.mobileToggle) styles = [classes.MobileNav, classes.open].join(' ');
    const [current, setCurrent] = useState({ level: 0, firstLevel: null, secondLevel: null });

    return ( 
        <section className={styles}>
            <div className={classes.MobileWrapper}>
                <MobileHeader
                    label={props.data.nav} 
                    closed={props.closed}
                    current={current}
                    toggleBackward={() => {
                        let firstLevel, secondLevel;
                        if( current.level === 1) {
                            if( current.firstLevel !== null ) { 
                                firstLevel = current.firstLevel; 
                                secondLevel = null; }
                        } else if( current.level === 2) {
                            if( current.secondLevel !== null) { 
                                firstLevel = current.firstLevel; 
                                secondLevel = current.secondLevel; }
                        }
                        return setCurrent({ level: current.level - 1, firstLevel: firstLevel, secondLevel: secondLevel })
                }} />
                <MobileHeaderItems
                    {...props}
                    type='mobile' 
                    current={current}                    
                    toggleForeward={id => {
                        let firstLevel, secondLevel;
                        if( current.level === 0) {
                            if( current.firstLevel === null ) { firstLevel = id; secondLevel = null; 
                            }else if( current.firstLevel !== null) firstLevel = id; secondLevel = null;
                        }else if( current.level === 1) {
                            if( current.firstLevel !== null ){ firstLevel = current.firstLevel; secondLevel = id; }
                        }
                        return setCurrent({ level: current.level + 1, firstLevel: firstLevel, secondLevel: secondLevel })
                }} />
            </div>
        </section>
    ); 
}

function MobileHeader(props) {
    
    let { level, firstLevel : first, secondLevel: second } = props.current;
    let data = props.label, label = null, backwardStyle = classes.Mobile_Backward, headerCurrent = null;

    if( level > 0 ) {
        backwardStyle = [classes.Mobile_Backward, classes.show].join(' ');
        headerCurrent = classes.show;
        if( level  === 1 ) {
            label = data[first - 1].item;
        } else if( level === 2 ){
            label = first === 1 
            ? data[first - 1].menu.menuItems[first - 1].title[second-1].item
            : data[first - 1].menu.menuItems[second - 1].title;
        }
    }
    
    return (
        <div className={classes.MobileHeader}>
            <button className={backwardStyle} onClick={props.toggleBackward}> 
                BACK
            </button>
            <div className={classes.MobileHeaderCurrent}>
                <span className={headerCurrent}>{label}</span>
            </div>
            <button onClick={props.closed}> 
                CLOSE 
            </button>
        </div>
    )
}
