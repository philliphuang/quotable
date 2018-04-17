/*
 * MAIN.JS
 *
 * Framework for one-page app in React. 
 * Handles switching between main "screens" of the app.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Home from './Home';
import Profile from './Profile';
import Explore from './Explore';
import Tutorial from './Tutorial';
import MoodPicker from './MoodPicker'

class Main extends Component {
    render() {
        let screen = this.props.screen;

        // Render correct screen
        return (
            <div className="main">
                {screen === 'profile'
                    ? <Profile />
                    : screen === 'explore'
                        ? <Explore />
                        : screen === 'tutorial'
                            ? <Tutorial />
                            : screen === 'mood-picker'
                                ? <MoodPicker />
                                : <Home />
                }
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        screen: state.screen
    };
}

export default connect(mapStateToProps)(Main);
