import React from 'react';
import BackgroundImage from '../../source/bg__main.jpg';
import Container from '../../hoc/Container';
import Header from '../../Headers/Header/Header';

class MainContainer extends React.Component {

    render(){
        return (
            <Container>
                <Header
                    image={BackgroundImage}
                />         
            </Container>   
        )
    }

}

export default MainContainer;