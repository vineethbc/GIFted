import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GifSearch from './GifSearch';
import { toggleAutoplay } from '../actions';

class Header extends React.Component {
    render() {
        return (
            <div className="gif-header">
                <div className="ui menu">
                    <h1>
                        <Link to="/" className="" onClick={()=> {
                            document.querySelector('#search-field').value="";
                        }}>GIFted</Link>
                    </h1>
                    <div className="right menu">
                        <div className="item">
                            <div className="ui toggle checkbox">
                                <input type="checkbox" checked={this.props.isAutoPlay?"checked":""} 
                                    onChange={()=>this.props.toggleAutoplay()}/>
                                <label>Auto play</label>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ui toggle checkbox">
                                <input type="checkbox" onChange={(event)=> {
                                    if(event.target.checked) {
                                        document.body.className="dark";
                                    } else {
                                        document.body.className="";
                                    }
                                }}/>
                                <label>Dark</label>
                            </div>
                        </div>
                    </div>
                </div>
                <GifSearch />
            </div>
        );
    }
};

const mapStateToProps = (state)=> {
    return {
        isAutoPlay : state.isAutoPlay
    }
};

export default connect(mapStateToProps, {
    toggleAutoplay
})(Header);