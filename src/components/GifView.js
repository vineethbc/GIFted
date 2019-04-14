import React from 'react';
import { connect } from 'react-redux';
import { fetchGif, clearView } from '../actions'

class GifView extends React.Component {
    componentDidMount() {
        this.props.fetchGif(this.props.match.params.id);
    }
    componentWillUnmount() {
        this.props.clearView();
    }
    render() {
        if (!this.props.gif || !this.props.gif.images) {
            return <div>Loading GIF...</div>;
        }
        const gif = this.props.gif;
        const gifImage = this.props.isAutoPlay ? gif.images.original : gif.images.original_still;
        return (
            <div className="gif-view">
                <h3 className="ui header">{gif.title}</h3>
                <img 
                    className="ui fluid card centered loading"
                    src={gifImage.url} 
                    alt={gif.title}
                    style={{height:'60%', width: '60%'}}
                    onLoad={(event)=>{event.target.classList.remove('loading')}}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gif : state.view,
        isAutoPlay : state.isAutoPlay
    }
};

export default connect(mapStateToProps, {
    fetchGif,
    clearView
}) (GifView);