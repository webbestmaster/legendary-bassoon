import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

var rootPath = window.location.pathname;

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>header is here</h1>
                <Link to={rootPath + "users"}>link to user</Link>
                <Photo />
            </div>
        )
    }
});


const Photo = React.createClass({

    toggleLiked: function() {
        this.setState({
            liked: !this.state.liked
        });
    },

    getInitialState: function() {
        return {
            liked: false
        }
    },

    render: function() {
        var buttonClass = this.state.liked ? 'active' : '';

        return (
            <div className='photo'>
                <img src="  " />

                <div className='bar'>
                    <button onClick={this.toggleLiked} className={buttonClass}>

                    </button>
                    <span></span>
                </div>
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
        <Route path={rootPath} component={App} />
        <Route path={rootPath + "users"} component={Users} />
    </Router>
), document.getElementById('root'));

