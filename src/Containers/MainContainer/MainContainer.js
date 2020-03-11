import React from 'react';
import BackgroundImage from '../../source/bg__main.jpg';
import Container from '../../hoc/Container';
import Header from '../../Headers/Header/Header';
import classes from './MainContainer.module.css';

class MainContainer extends React.Component {

    render(){
        return (
            <main className={classes.content}>
                <div className={classes.home}>
                    <div className={classes.home_intro}>
                        <div className={classes.home_video}>
                            <img src={BackgroundImage} />
                        </div>
                    </div>
                    <div className={classes.home_content}>

                    </div>
                </div>
            </main>
        )
    }

}

export default MainContainer;