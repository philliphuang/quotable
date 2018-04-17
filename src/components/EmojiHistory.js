/*
 * EMOJIHISTORY.JS
 *
 * Render mood history page
 */

import React, { Component } from 'react';
import '../css/index.css';
import '../css/EmojiHistory.css';
import visualization from "../img/visualization.jpg"

class EmojiHistory extends Component {
    render() {
        return (
			<div className="visual-box">
				<img className="visual" src={visualization} alt="visualization" />
			</div>
        );
    }
}

export default EmojiHistory;
