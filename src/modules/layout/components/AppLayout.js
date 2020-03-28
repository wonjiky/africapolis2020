import React from 'react';
import queryString from 'query-string';
import { Route, Switch } from 'react-router-dom';
import Config from '../../../assets/config.json';
import { Container } from '../../../containers';
import { Layout } from '../index';

function AppLayout(props) {
    const routes = [
        { ID:2, component: Container.Countries, path: "/countries", exact: false},
        { ID:3, component: Container.Research, path: "/research", exact: false},
        { ID:4, component: Container.Data, path: "/data", exact: false},
        { ID:5, component: Container.About, path: "/about", exact: false},
        { ID:1, component: Container.Main, path: "/", exact: true}
    ];

    return (
        <Layout config={Config} {...props}>
            <Switch>
                {routes.map(({ ID, component: C, path, exact }) => (
                    <Route 
                        key={ID}
                        path={`${props.match.path}${path}`}
                        exact={exact}
                        render={( {location, history}) =>
                            <C q={getParams(location)} history={history} config={Config} /> } 
                    />
                ))}
            </Switch>
        </Layout>
    );
}

export default AppLayout;

function getParams(location) {
    return queryString.parse(location.search);
}
