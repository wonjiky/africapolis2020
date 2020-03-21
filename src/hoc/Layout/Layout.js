import React from 'react';
import Headers from '../../Headers/Headers';
import classes from './Layout.module.css';

class Layout extends React.Component {
    render() {

        const { config } = this.props;
        return (
            <>
                <Headers config={config} />
                {this.props.children}
            </>
        )
    }
}

export default Layout;