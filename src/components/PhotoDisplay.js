import React, { Component } from 'react';
import ImageView from './ImageView';
import '../css/PhotoDisplay.css';

class PhotoDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
          image: null,
        };
    }

    handleClick(img, txt) {
        if (this.state.image) {
            this.setState({
              image: null,
            });
        }
        else {
            this.setState({
              image: [img, txt],
            });
        }
       
    }

    render() {
        let photos = this.props.photos;
        if (!photos.length) {
            return (
                <p>No photos to show!</p>
            );
        }
        let i = 0;
        return (
            <div>
                {!this.state.image
                    ? <div id="photos">
                        {this.props.photos.map(p => {
                            return (<div className="photo-display" key={i++}>
                                <img src={p.img} alt={p.text} onClick={() => this.handleClick(p.img, p.text)}/>
                            </div>);
                        })}
                        </div>
                    : <ImageView image={this.state.image} onClick={() => this.handleClick(null, null)}/>
                }
            </div>
        );
    }
}

export default PhotoDisplay;
