import React from 'react';
import BackgroundImage from '../../assets/bg__main.jpg';
import Container from '../../hoc/Container';
import Header from '../../Headers/Header/Header';
import classes from './MainContainer.module.css';

class MainContainer extends React.Component {

    render(){
        return (
            <div className={classes.MainContainer}>
                {/* <h1>HELLO WORLD</h1> */}
            </div>
        //    <div className={classes.MainContainer}>
        //             <figure className={classes.Figure}>
        //                 <div className={classes.Square}>
        //                     <img className={classes.Image} src={BackgroundImage} />
        //                     <h1>
        //                         Africapolis
        //                     </h1>
        //                 </div>
        //             </figure>

        //             <div className={classes.Contents}>
        //             </div>
        //    </div>
        )
    }

}

export default MainContainer;