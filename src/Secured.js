import React, {Component} from 'react';
import Keycloak from 'keycloak-js';
import UserInfo from "./UserInfo";
import Logout from "./Logout";

class Secured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keycloak: null,
            authenticated: false
        };
    }

    componentDidMount() {
        const keycloak = Keycloak('/keycloak.json');
        keycloak.init({onLoad: 'login-required'}).then(authenticated => {
            this.setState({keycloak: keycloak, authenticated: authenticated});
        })
    }

    render() {
        if (this.state.keycloak) {
            if (this.state.authenticated) return (
                <div className='mt-5'>
                    <p className='border border-success rounded p-5'>This is a Keycloak-secured component of your application. You shouldn't be able to see this
                        unless you have authenticated with Keycloak.</p>
                    <UserInfo keycloak={this.state.keycloak} />
                    <Logout keycloak={this.state.keycloak} />
                </div>
            ); else return (<div className='mt-5 border border-danger rounded p-5'>Unable to authenticate</div>);
        }
        return (
            <div>Initializing Keycloak...</div>
        );
    }
}

export default Secured;