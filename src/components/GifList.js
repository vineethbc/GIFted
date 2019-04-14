import React from 'react';
import GifContainer from './GifContainer';

class GifList extends React.Component {
    componentWillUnmount() {
        this.scrollObserver.disconnect();
        this.imageObserver.disconnect();
    }
    componentDidMount() {
        this.scrollObserver = new IntersectionObserver((entries) => {
            for (let entry of entries) {
                if (entry.isIntersecting) {
                    this.props.fetchMore();
                    break;
                }
            }
        });
        this.imageObserver = new IntersectionObserver((entries) => {
            for (let entry of entries) {
                const image = entry.target;
                const placeholder = document.querySelector('#placeholder-'+image.id);
                if (!entry.isIntersecting) {
                    image.style.visibility = "hidden";
                    placeholder.style.display = "block";
                } else {
                    image.style.visibility = "visible";
                    placeholder.style.display = "none";
                }
            }
        }, {
            threshold: .1
        });
    }
    renderGifList() {
        if (!this.props.gifs) {
            return <div>Loading...</div>;
        }
        return (
            <div className="gif-grid">
                {this.props.gifs.map((gif, index) => {
                    return (
                        <GifContainer 
                            key={gif.id}
                            gif={gif}
                            gifName="fixed_width"
                            onLoadHandler={(event)=> {
                                const { target } = event;
                                if (index === this.props.gifs.length-1) {
                                    this.scrollObserver.observe(target);
                                }
                                this.imageObserver.observe(target);
                            }}
                        />
                    );
                })}
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.renderGifList()}
            </div>
        );
    }
}

export default GifList;