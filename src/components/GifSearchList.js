import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import GifList from './GifList';
import { searchGifs, clearSearch } from '../actions'
import {DEFAULT_COUNT} from '../constants';

class GifSearchList extends React.Component {
    componentWillUnmount() {
        this.props.clearSearch();
    }
    componentDidMount() {
        this.props.searchGifs(this.props.match.params.query, 0);
    }
    fetchMore() {
        this.props.searchGifs(this.props.match.params.query, this.props.offset + DEFAULT_COUNT);
    }
    render() {
        return (
            <div >
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
        gifs : _.values(state.search.gifs),
        offset: state.search.offset
    }
};

export default connect(mapStateToProps, {
    searchGifs,
    clearSearch
}) (GifSearchList);