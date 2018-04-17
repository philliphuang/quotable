/*
 * MOODPICKER.JS
 *
 * Page for selecting today's mood
 */

import React, { Component } from 'react';
import '../css/MoodPicker.css';

import { connect } from 'react-redux'
import { changeMood } from '../actions'
import { changeScreen } from '../actions'

class MoodPicker extends Component {
     constructor(props) {
        super(props);
        this.state = {
            emotions: [
                ['😄', 'happy'],
                ['😞', 'sad'],
                ['😡', 'angry'],
                ['🤢', 'disgusted'],
                ['🍕', 'pizza'],
            ],
        };
        this.select_emotion = this.select_emotion.bind(this)
    }

    // Toggle expanded/closed picker
    select_emotion(new_emotion) {
        this.props.dispatch(changeMood(new_emotion));
        this.props.dispatch(changeScreen('home'));
    }

    render() {
        return (
                <div className='mood-picker'>
                            <div className='mood-expanded'>
                                <h1> How are you feeling today? </h1>
                                {/* Emotion list */}
                                {
                                    this.state.emotions.map(emotion => {
                                        return (
                                            <button key={emotion[1]} className='mood-btn' onClick={() => this.select_emotion(emotion)}>
                                                <span role="img" aria-label={emotion[1]}>{emotion[0]}</span>
                                            </button>
                                        );
                                    })
                                }
                            </div>
                </div>

        );
    }
}

export default connect()(MoodPicker)
