/*
 * MOODPICKERBUTTON.JS
 *
 * Component for button in QuoteModal to change mood
 */

import React, { Component } from 'react';
import '../css/MoodPicker.css';

import { connect } from 'react-redux'
import { changeScreen } from '../actions'

class MoodPickerButton extends Component {
     constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // Go to mood picker screen
    handleClick() {
        this.props.dispatch(changeScreen('mood-picker'));
    }

    render() {
        return (
                <div className='mood-picker'>
                    <button className='mood-btn' onClick={this.handleClick}>
                        <span role="img" aria-label={this.props.mood[1]}>{this.props.mood[0]}</span>
                    </button>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mood: state.mood
    };
}

export default connect(mapStateToProps)(MoodPickerButton)
