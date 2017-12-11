import React from 'react';
import { NavLink } from 'react-router-dom';
// import {connect } from 'react-redux'
//import { startLogout } from '../actions/auth'

const Header = () => (
  <header>
    <h1>Title Here</h1>
    <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/players" activeClassName="is-active">Players</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <button >LOG OUT</button>
  </header>
);

// const mapDispatchToProps = (dispatch) => ({
//   startLogout: () => dispatch(startLogout())
// })

// export default connect(undefined, mapDispatchToProps)(Header);
export default Header