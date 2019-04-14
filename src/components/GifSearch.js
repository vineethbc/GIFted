import React from 'react';
import { connect } from 'react-redux';
import { searchGifs, clearSearch } from '../actions'

class GifSearch extends React.Component {
    componentWillUnmount() {
        this.props.clearSearch();
    }
    render() {
        return (
            <div className="gif-search ui input action">
                <input type="text" placeholder="Search for GIF's!" id="search-field"/>
                <button className="ui red button" onClick={()=>this.props.searchGifs(document.querySelector('#search-field').value)}>Search</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gifs : state.search
    }
};

export default connect(mapStateToProps, {
    searchGifs,
    clearSearch
}) (GifSearch);