var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var Redirect =Router.Redirect;
var DefaultRoute = Router.DefaultRoute;
var Master = require('./master.jsx');
var Boot = require('./boot.jsx');


var AppRoutes = (
    <Route name="root" path="/" handler={Master}>
        <DefaultRoute handler={Boot} />
    </Route>
);

module.exports = AppRoutes;