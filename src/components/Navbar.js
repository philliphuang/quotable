/*
 * NAVBAR.JS
 *
 * Navbar component for navigation between pages
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeScreen } from '../actions'
import '../css/Navbar.css';
import photo_img from '../img/photos.png';
import home from '../img/home.png';
import grid from '../img/grid.png';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // Switch pages
    handleClick(ev) {
        this.props.dispatch(changeScreen(ev.target.dataset.name));
    }

    render() {

        // Assign classes for displaying active page
        const screen = this.props.state;
        let profileClass = 'navbar-icon';
        let exploreClass = 'navbar-icon';
        let homeClass = 'navbar-icon'
        if (screen === 'profile') {
            profileClass += ' cur-page';
        } else if (screen === 'explore') {
            exploreClass += ' cur-page';
        } else if (screen === 'home') {
            homeClass += ' cur-page';
        }
        
        return (
            <div className='navbar'>
                <div className={profileClass} data-name='profile' onClick={this.handleClick}>
                    <img
                        className={screen === 'profile' ? 'cur-page' : ''}
                        data-name='profile'
                        src={photo_img}
                        alt='your profile' />
                </div>
                <div className={homeClass} data-name='home' onClick={this.handleClick}>
                    <img 
                        className={screen === 'home' ? 'cur-page' : ''} 
                        data-name='home'
                        src={home} 
                        alt='home' />
                </div>
                <div className={exploreClass} data-name='explore' onClick={this.handleClick}>
                    <img
                        className={screen === 'explore' ? 'cur-page' : ''}
                        data-name='explore'
                        src={grid}
                        alt='explore' />
                </div>
            </div>
        );
    }
}

export default connect()(Navbar)
