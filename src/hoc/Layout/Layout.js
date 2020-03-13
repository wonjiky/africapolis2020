import React from 'react';
import Header from '../../Headers/Header/Header';

class Layout extends React.Component {
    render() {

        const { menuData } = this.props;
        
        return (
            <>
                <Header data={menuData} />
                {this.props.children}
                
            </>
        )
    }
}

export default Layout;