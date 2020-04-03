import React from 'react';
import BackgroundImage from '../../../assets/images/bg__main.jpg';
import classes from './css/ContainerLayout.module.css';

export const Image = props => {
    return (
        <main>
            <section className={classes.TitleWrapper_Video}>
                <div className={classes.TitleContent}>
                    <div className={classes.Video}>
                        <img src={BackgroundImage} />
                    </div>
                    <div className={[classes.HeaderContainer, 'container'].join(' ')}>
                        <div className={classes.HeaderContent}>
                            <header>
                                <h1>{props.header}</h1>
                            </header>
                        </div>
                    </div>
                </div>
            </section>
            {props.children}
        </main>
    )
}

export const Text = props => {
    return (
        <main>
            <section className={classes.TitleWrapper}>
                <div className={classes.TitleContent}>
                    <div className={[classes.HeaderContainer, 'container'].join(' ')}>
                        <div className={classes.HeaderContent}>
                            <header>
                                <h1>{props.header}</h1>
                            </header>
                        </div>
                    </div>
                </div>
            </section>
            {props.children}
        </main>
    )
}