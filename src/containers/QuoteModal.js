/*
 * QUOTEMODAL.JS
 *
 * Renders quote overlay of home screen
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import MoodPickerButton from '../components/MoodPickerButton';
import '../css/QuoteModal.css';
import clock from '../img/clock.png';
import arrow_up from '../img/arrow-up.png';

class QuoteModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="quote-modal">
                    <div className="quote-text">
                        Negative thoughts stick around because we believe them, not because we want or choose them.
                    </div>
                    {
                        !this.props.curPic &&
                        <div className="time">
                            <img className="time-img" src={clock} alt="time left" />
                            <div className="time-text">
                                5 hours left!
                            </div>
                        </div>
                    }

                    {   
                        // Hide camera activation when photo already submitted
                        this.props.curPic
                        ?   <div className="camera-sign">
                                <small>You already submitted a photo for today.</small>
                            </div>
                        :   <div className="camera-sign">
                                <small>Swipe up to take a photo!</small>
                                <div className="footer-ctr">
                                    <img
                                        className="footer-img-arrow"
                                        src={arrow_up}
                                        alt="camera"/>
                                </div>
                            </div>
                    }
                </div>
                <MoodPickerButton />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        curPic: state.curPic
    };
}

export default connect(mapStateToProps)(QuoteModal);
