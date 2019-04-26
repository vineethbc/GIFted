import React, {useEffect} from 'react';
import GifContainer from './GifContainer';

function GifList(props) {
    const renderGifList = () => {
        if (!props.gifs) {
            return <div>Loading...</div>;
        }
        let scrollObserver;
        useEffect(() => {
            scrollObserver = new IntersectionObserver((entries) => {
                for (let entry of entries) {
                    if (entry.isIntersecting) {
                        props.fetchMore();
                        break;
                    }
                }
            });
            let images = document.querySelectorAll('.gif-container img');
            if(images.length) {
                scrollObserver.observe(images[images.length-1]);
            }
            return () => {
                scrollObserver.disconnect();
            }
        });

        return (
            <div className="gif-grid">
                {props.gifs.map((gif, index) => {
                    return (
                        <GifContainer 
                            key={gif.id}
                            gif={gif}
                            gifName="fixed_width"
                        />
                    );
                })}
            </div>
        );
    }
    return (
        <div>
            {renderGifList()}
        </div>
    );
}

export default GifList;