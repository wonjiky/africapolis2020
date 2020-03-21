import React from 'react';
import MainContainer from '../src/Containers/MainContainer/MainContainer';
import CountryReportContainer from '../src/Containers/CountryReportContainer/CountryReportContainer';
import queryString from 'query-string';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {

	render () {
		const { config } = this.props;
		const routes = [
			{ ID:2, component: CountryReportContainer, path: "/countryreport", exact: false},
			{ ID:1, component: MainContainer, path: "/", exact: true}
			// { ID:2, component: SDGContainer, path: "/sdg-ranking", exact: false},
			// { ID:3, component: AboutContainer, path: "/about", exact: false},
			// { ID:4, component: LegalContainer, path: "/legal", exact: false},
			// { ID:5, component: TestTheAPIContainer, path: "/test-the-api", exact: false},
		];
		
		return (
			<Layout config={config}>
				<Switch>
					{routes.map( ({ ID, component: C, path, exact }) => (
						<Route 
							key={ID}
							path={path}
							exact={exact}
							render={( {location, history}) =>
								<C q={getParams(location)} history={history} config={config} /> } 
						/>
					))}
				</Switch>
			</Layout>
		);
	}
}
	
function getParams(location) {
	const queries = queryString.parse(location.search);
	return queries;
}

export default App;
