import React from 'react';
import classes from './Logo.module.css';

export default props => {
    
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => ( images[item.replace('./', '')] = r(item) ));
        return images;
    }
    const images =  importAll(require.context('../../assets', false, /\.(png|jpe?g|svg)$/));
    
    return (
        <div className={[classes.Logo, classes[props.type]].join(' ')}>
            <img src={images[`${props.url}`]} alt={props.ID} />
        </div>
    )
}

