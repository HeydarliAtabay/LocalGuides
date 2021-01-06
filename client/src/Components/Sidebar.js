import React, {Component} from 'react';
//import {Navbar} from 'react-bootstrap';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-sm bg-success fixed-top">

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#left-sidebar"
            aria-controls="left-sidebar"
            aria-expanded="false"
            aria-label="Toggle sidebar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="index.html">
            <svg
              className="bi bi-check-all"
              width="30"
              height="30"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M12.354 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L5 10.293l6.646-6.647a.5.5 0 01.708 0z"
                clipRule="evenodd"/>
              <path
                d="M6.25 8.043l-.896-.897a.5.5 0 10-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 00.708 0l7-7a.5.5 0 00-.708-.708L8.5 10.293l-.543-.543-.707.707z"/>
            </svg>
            My Guide
          </a>

          <div className="navbar-nav ml-md-auto">
            <a className="nav-item nav-link" href="/#">
              <svg
                className="bi bi-people-circle"
                width="30"
                height="30"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z"/>
                <path fillRule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                <path
                  fillRule="evenodd"
                  d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                  clipRule="evenodd"/>
              </svg>
            </a>
          </div>

        </nav>
      </div>
    );
  }
}

export default Sidebar;