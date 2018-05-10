import React from 'react';

export default class Loading extends React.Component {
    render() {
        const {isLoading, error} = this.props;
        if (isLoading) {
            return <div>Loading...</div>;
        } else if (error) {
            return <div>Sorry, there was a problem loading the page.</div>;
        } else {
            return null;
        }
    }
}