var ContentProviderStore = require('./stores/Store');

function initStores() {

    return $.when(
        ContentProviderStore.initial()
    ).done(function(){
            var deferred = $.Deferred();
            deferred.resolve();
            return deferred.promise();
    });

}

(function () {
    initStores().then(function() {
        var React = require('react'),
            Router = require('react-router'),
            AppRoutes = require('./app-routes.jsx');

        //Needed for React Developer Tools
        window.React = React;

        /** Render the main app component. You can read more about the react-router here:
         *  https://github.com/rackt/react-router/blob/master/docs/guides/overview.md
         */
        Router.run(AppRoutes,function (Handler) {
            React.render(<Handler/>, document.body);
        });

    })
})();