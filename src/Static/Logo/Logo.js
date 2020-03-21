import React from 'react';
import classes from './Logo.module.css';

export default props => {
    
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => ( images[item.replace('./', '')] = r(item) ));
        return images;
    }
    const images =  importAll(require.context('../../Assets/images', false, /\.(png|jpe?g|svg)$/));

    let styles = classes[props.type];
    if ( props.toggleActiveClass ) styles = [classes[props.type], classes.active].join(' ');

    return (
        <div className={classes.Logo}>
            {props.url.map((img, idx) => (
                <img key={idx} src={images[`${img}.svg`]} alt={props.ID} className={styles} />
            ))}
        </div>
    )
}
