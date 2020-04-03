import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './css/GridComponents.module.css';

export const Wrapper = ({ type, ...props}) => 
    <div className={
        [classes.GridWrapper, classes[type]].join(' ')}>
        {props.children}</div>;

export const Container = (props) => <div className={[classes.GridContainer, 'container'].join(' ')}>{props.children}</div>;

export const Header = ({ title, type, all }) => {
    return (
        title && <div className={[classes.GridHeader, classes[`GridHeader_${type}`]].join(' ')}>
            <h3>{title}</h3>
            {all ? <NavLink to=''>See all</NavLink> : null}
        </div>
    );
}

export const Grid = ({ data, type }) => {
    console.log(data);
    return (
        data && data.map((d, idx) => (
            <NavLink to='' key={idx} className={[classes.Grid, classes[type[idx]]].join(' ')}>
                {d.image 
                    ? <div className={classes.GridImage}></div> //<div><img src={d.image} alt={d.title}/></div>
                    : null }
                <div className={classes.GridContent}>
                    <h4>{d.title}</h4>
                    <p>{d.description}</p>
                </div>
            </NavLink>
        ))
    );
}


export const Latest = ({ type, data }) => {
    return (
        <NavLink to='/' className={[classes.Grid, classes[type]].join(' ')}>
            <div className={[classes.GridHeader, classes[`GridHeader_${type}`]].join(' ')}><h3>{data.title}</h3></div>
            <div className={[classes.GridContent, classes[type]].join(' ')}>
                {data.list.map((d,idx) => (
                    <div key={idx} className={classes.GridItems_Latest}>
                        <span>{d.category}</span>
                        <h4>{d.title}</h4>
                    </div>
                ))}
            </div>
        </NavLink>
    )
}

