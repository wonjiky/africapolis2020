import React, { useEffect, useCallback } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import { Container } from '../../../containers';
import { Layout } from '../index';
import * as actions from '../../../store/actions/index';

function AppLayout(props) {

    const dispatch = useDispatch();
    const i18n = useSelector(state => state.i18n);

    const routes = [
        { ID:2, component: Container.Countries, path: "/countries", exact: false},
        { ID:3, component: Container.Research, path: "/research", exact: false},
        { ID:4, component: Container.Data, path: "/data", exact: false},
        { ID:5, component: Container.About, path: "/about", exact: false},
        { ID:1, component: Container.Main, path: "/", exact: true}
    ];

    const stableDispatch = useCallback(() => {
        dispatch(actions.fetchI18nData(props.match.url.substring(1,3)));
    }, [props.match.url, dispatch]);

    useEffect(() => {
        stableDispatch();
    }, [stableDispatch]);
    
    if( i18n.data.length !== 0 ) {
        return (
            <Layout {...props} i18n={i18n.data}>
                <Switch>
                    {routes.map(({ ID, component: C, path, exact }) => (
                        <Route 
                            key={ID}
                            path={`${props.match.path}${path}`}
                            exact={exact}
                            render={( {location, history}) =>
                                <C q={getParams(location)} history={history} /> } 
                        />
                    ))}
                </Switch>
            </Layout>
        );
    } else {
        return <div></div>
    }
}

export default AppLayout;

function getParams(location) {
    return queryString.parse(location.search);
}
