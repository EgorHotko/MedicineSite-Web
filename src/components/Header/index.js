import React, { Component } from 'react';
import './styles.css';
import logo from './images/Hospital-Symbol.png';

export default class Header extends React.Component{
    render() {
        return(
          <nav class="navbar">
            <div class="navbar-left-content">
              <img src={logo} width="40" height="40" class="navbar-image"/>
              <a> Medicine site </a>
              <a>Home</a>
              <a>Add</a>
            </div>
            <div class="navbar-right-content">
              <form>
                <input id="search" type="search" placeholder='Search by Name...'/>
                <button id="searchSubmit" type='submit' class="btn success"> Search </button>
              </form>
            </div>
          </nav>
        );
    }
}