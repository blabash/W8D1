import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtils from './util/session_api_util';

//testing
window.login = SessionAPIUtils.login;
window.logout = SessionAPIUtils.logout;
window.signup = SessionAPIUtils.signup;

document.addEventListener("DOMContentLoaded", () => {
  window.login = login;
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});