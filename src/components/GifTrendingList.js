import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchGifs } from '../actions';
import GifList from './GifList';
import {DEFAULT_COUNT} from '../constants';

class GifTrendingList extends React.Component {
    componentDidMount() {
        this.props.fetchGifs(0);
    }
    fetchMore() {
        this.props.fetchGifs(this.props.offset + DEFAULT_COUNT);
    }
    render() {
        return (
            <div>
                <GifList 
                    gifs={this.props.gifs}
                    fetchMore={()=>this.fetchMore()}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gifs : _.values(state.trending.gifs),
        offset : state.trending.offset
    }
};

export default connect(mapStateToProps, {
    fetchGifs
}) (GifTrendingList);