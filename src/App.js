import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { AppLayout } from './modules/layout';


function App() {
	return (
        <BrowserRouter>
            <Switch>
                <Route path={`/:locale`} component={AppLayout} />
                <Redirect to='/en' />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
