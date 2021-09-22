import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from './actions.js';
import './login.css';

const Login = (props) => {
    const {
        login,
        loading
    } = props;
    
    const [form, setForm] = useState({
        login : 'alex',
        password : '1234'
    });

    const updateValue = (e, key) => {
        setForm({
            ...form,
            [key] : e.target.value
        });
    };

    return (
        <div className="login">
            <span className="login-title">Login</span>
            {loading &&
                <div className="loading">Haciendo login contra el servidor</div>
            }
            <form className="login-form" onSubmit={(e) => {
                login(form.login, form.password);
                e.stopPropagation();
                e.preventDefault();

                return false;
            }}>
                <input type="text" placeholder="Login" value={form.login} onChange={(e) => updateValue(e, 'login')}/>
                <input type="password" placeholder="Password" value={form.password} onChange={(e) => updateValue(e, 'password')}/>
                <button>Login</button>
            </form>
        </div>
    );
}

export default connect(
    store => ({
        loading: store.login.loading,
    }),
    dispatch => ({
        login : (login, password) => dispatch(loginUser(login, password))
    })
)(Login);