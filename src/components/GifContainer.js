import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class GifContainer extends React.Component {
    render() {
        if (!this.props.gif || !this.props.gif.images) {
            return <div>Loading GIF...</div>;
        }
        const gif = this.props.gif;
        const gifImage = this.props.isAutoPlay ? gif.images[this.props.gifName] : gif.images[this.props.gifName+'_still'];
        return (
            <div className="gif-container">
                <Link to={`/view/${gif.id}`}>
                <div className="ui placeholder" id={`placeholder-${gif.id}`}>
                    <div className="image"></div>
                </div>
                <img 
                    className="ui card loading"
                    src={gifImage.url} 
                    srcurl={gifImage.url}
                    previewurl={gif.images.preview_gif.url} 
                    alt={gif.title}
                    id={gif.id}
                    onLoad={(event)=> {
                        const { target } = event;
                        target.classList.remove('loading');
                        this.props.onLoadHandler(event);
                        const placeHolder = document.querySelector(`#placeholder-${gif.id}`);
                        if (placeHolder) {
                            placeHolder.style.display = "none";
                        }
                    }}
                />
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAutoPlay : state.isAutoPlay
    }
};

export default connect(mapStateToProps, {}) (GifContainer);