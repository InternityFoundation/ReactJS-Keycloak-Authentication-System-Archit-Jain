import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div className="Welcome mt-5">
                <p className='border border-primary rounded p-5'>This is your public-facing component.</p>
            </div>
        );
    }
}

export default Welcome;