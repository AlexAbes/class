import React from 'react';

/**
 * Boilerplate for a "leaf" view -- one without sub-views.
 */
let HomeView = React.createClass({

    render: function() {

        return (
            <div className="hero-unit">
                <h1>This is DLP Class!</h1>
                <p>Cool module, bro!</p>
            </div>
        );
    }
});

export default HomeView;
