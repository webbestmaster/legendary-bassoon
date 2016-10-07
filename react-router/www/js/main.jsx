import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>header is here</h1>
                <Link to="/users">link to user</Link>
            </div>
        )
    }
});

const About = React.createClass({
    render () {
        return (
            <h1>about me</h1>
        )
    }
});

const NoMatch = React.createClass({
    render () {
        return (
            <h1>No match me</h1>
        )
    }
});

const Users = React.createClass({
    render() {
        console.log('users');
        return (
            <div>
                <h1>Users</h1>
            </div>
        )
    }
});

const User = React.createClass({
    componentDidMount() {

        console.log('mount')
        this.setState({
            // route components are rendered with useful information, like URL params
            user: findUserById(this.props.params.userId)
        })
    },

    render() {
        console.log('render')
        return (
            <div>
                <h2>{this.state.user.name}</h2>
                {/* etc. */}
            </div>
        )
    }
});

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).


render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/users" component={Users}>
            </Route>
        </Route>
    </Router>
), document.getElementById('root'));

