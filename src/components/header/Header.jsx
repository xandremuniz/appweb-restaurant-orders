import { connect } from 'react-redux';
import './header.css';

const Header = (props) => {
    const {
        userInfo
    } = props;

    return(
        <div className="header">
            <div className="user">Hola {userInfo.name}</div>
            <div className="header-center">
                <div className="logo-container">
                    <span className="logo"></span>
                </div>
                <div className="tabMenu">
                    <span className="title">Inicio</span>
                    <span className="title">Gestion</span>
                </div>
            </div>
        </div>
    );
}

export default connect(
    store => ({
        userInfo: store.login.userInfo,
    }),
    null
)(Header);