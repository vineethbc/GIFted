import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const GifContainer = (props) => {
    const observer = useRef(null);
    const imageRef = useRef(null);
    const handleImageVisibility = entry => {
        const image = entry.target;
        const placeholder = document.querySelector('#placeholder-'+image.id);
        if (!image.classList.contains('loading')) {
            if (!entry.isIntersecting) {
                image.style.visibility = "hidden";
                placeholder.style.display = "block";
            } else {
                placeholder.style.display = "none";
                image.style.visibility = "visible";
            }
        }
    };
    useEffect(() => {
        if(observer.current) {
            observer.current.disconnect();
        }
        observer.current = new IntersectionObserver(([entry]) => handleImageVisibility(entry), {
            threshold : .1
        });
        const { current : currentObserver } = observer;
        if (imageRef.current) {
            currentObserver.observe(imageRef.current);
        }
        return () => currentObserver.disconnect();
    });
    
    if (!props.gif || !props.gif.images) {
        return <div>Loading GIF...</div>;
    }
    const gif = props.gif;
    const gifImage = props.isAutoPlay ? gif.images[props.gifName] : gif.images[props.gifName+'_still'];
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
                ref={imageRef}
                onLoad={(event)=> {
                    const { target } = event;
                    target.classList.remove('loading');
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

const mapStateToProps = (state) => {
    return {
        isAutoPlay : state.isAutoPlay
    }
};

export default connect(mapStateToProps, {}) (GifContainer);