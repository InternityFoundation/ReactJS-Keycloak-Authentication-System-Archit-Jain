import React, { Component } from 'react';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            id: ""
        };
        this.props.keycloak.loadUserInfo().then(userInfo => {
            console.log(userInfo);
            this.setState({name: userInfo.name, email: userInfo.email, id: userInfo.sub})
        });
    }

    render() {
        return (
            <div className="UserInfo card my-3" style={{width: 400}}>
                <div className="card-body">
                    <p><strong>Name:</strong> {this.state.name}</p>
                    <p><strong>Email:</strong> {this.state.email}</p>
                    <p><strong>Id:</strong> {this.state.id}</p>
                </div>
            </div>
        );
    }
}

export default UserInfo;