import React from 'react';
import { NavLink } from 'react-router-dom';
import { Localiser } from '../../../static';
import classes from './css/MobileHeaderItems.module.css';

export default props => {
    
    let style = props.current.level === 1 
        ? [classes.Mobile_HeaderList, classes.Level__1].join(' ')
        : props.current.level === 2 
        ? [classes.Mobile_HeaderList, classes.Level__2].join(' ')
        : classes.Mobile_HeaderList;
    
    return (
        <div className={style}>
            <ul className={classes.Mobile_NavItems}>
                {props.data.nav.map((d,idx) => (
                    <li key={idx} className={classes.Mobile_Item}>
                        <button onClick={() => props.toggleForeward(d.id)}>
                            <span>{d.item}</span>
                        </button>
                        <MobileMenuLevelOne 
                            data={d.menu}
                            itemId={d.id}
                            navUrl={d.url}
                            locale={props.locale}
                            current={props.current}
                            toggleForeward={props.toggleForeward} />
                    </li>
                ))}
            </ul>
            <ul><Localiser data={props.data.i18nSelector} pathname={props.pathname} /></ul>
        </div>
    )
}

function MobileMenuLevelOne(props) {

    let style = props.current.firstLevel === props.itemId
        ? [classes.Mobile_Menu_Level1, classes.show].join(' ')
        : classes.Mobile_Menu_Level1;

    return (
        <ul className={style}>
            {props.data.menuHeader.list.map((d, idx) => (
                <li className={classes.Mobile_Item_2} key={idx}>
                    <NavLink to={`${props.locale}/${props.navUrl}/${d.url}`} className={classes.Mobile_Item_Link}>{d.item}</NavLink>
                </li>
            ))}
            {props.data.menuItems.map((d,idx) => (
                d.type === 'selector' 
                    ?  d.title.map((t, itx) => (
                        <li className={classes.Mobile_Item} key={itx}>
                            <button onClick={() => props.toggleForeward(t.id)}>
                                {t.item}
                            </button>
                            <MobileNavLevelTwo 
                                data={d.list} itemId={t.id}
                                menuUrl={t.id === 1 ? t.url : '/' + t.url}
                                navUrl={props.navUrl}
                                locale={props.locale}
                                current={props.current.secondLevel} />
                        </li>
                    ))
                    :   <li className={classes.Mobile_Item} key={idx}>
                            <button onClick={() => props.toggleForeward(d.id)}>
                                {d.title}
                            </button>
                            <MobileNavLevelTwo
                                data={d.list} itemId={d.id} 
                                menuUrl=''
                                navUrl={props.navUrl}
                                locale={props.locale}
                                current={props.current.secondLevel} />
                        </li>
                ))}
        </ul>
    );
}

function MobileNavLevelTwo(props) {

    let style = props.current === props.itemId
        ? [classes.Mobile_Menu_Level2, classes.show].join(' ')
        : classes.Mobile_Menu_Level2;
    
    return (
        <ul className={style}>
            {props.data.map((d, idx) => (
                <li className={classes.Mobile_Item_2} key={idx}>
                    <NavLink 
                        className={classes.Mobile_Item_Link}
                        to={`${props.locale}/${props.navUrl}${props.menuUrl}/${d.item.toLowerCase()}`}>
                        {d.item}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}