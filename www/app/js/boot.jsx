var React = require('react');
var MainApp = require('./views/mainApp.jsx');




var ProviderBoot = React.createClass({

    componentDidMount(){
        console.log('did mount');
        attachAnimation();
    },

    render() {
        return (
            <div></div>
        );
    }
});

function attachAnimation(){



}


module.exports = ProviderBoot;
