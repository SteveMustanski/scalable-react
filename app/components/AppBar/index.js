/**
 *
 * AppBar
 *
 */

import React from 'react';
import styles from './styles.css';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || (<Link to="/login">Log In</Link>);
  return (
    <div className={styles.appBar}>
      <div className={styles.iconButton} onClick={toggleDrawer}>
        <FontAwesome className={styles.icon} name="bars" />
      </div>
      <div className={styles.heading}>Coder daily</div>
      <div className={styles.linkContainer}>
        { loginLink }
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  email: React.PropTypes.string.isRequired,
};

export default AppBar;
