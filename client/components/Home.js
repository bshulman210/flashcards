import React from 'react';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  return (
    <div class="main">
      <div class="welcomeHeader">
        <h3>Welcome, {username}</h3>
      </div>
      <h3>Your sets</h3>
      <div>
        <img src="https://static.thenounproject.com/png/4767-200.png" />
        <h4>Set Name</h4>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
