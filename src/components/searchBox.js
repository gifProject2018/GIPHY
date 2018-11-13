import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {getGifs} from '../actions/getGifs';

class SearchBox extends Component {
    constructor() {
        super();
        this.state = {
            field: ''
        }
    }
    onHandleChangeField = (e) => {
        this.setState({
            field: e.target.value
        });
    }
    onHandleSearch = () => {
        this.props.getGifs(this.state.field);
        this.setState({
            field: ''
        });
    }
    render() {
        return (
            <div className="search-box">
                <h1>Giphy Search</h1>
                <div id="custom-search-input">
                    <div className="input-group col-md-12">
                        <input type="text" className="form-control input-lg"
                               value={this.state.field}
                               onChange={this.onHandleChangeField} placeholder="cheeseburgers"/>
                        <span className="input-group-btn">
                                <button className="btn btn-info btn-lg" type="button" onClick={this.onHandleSearch}>
                                    <i className="glyphicon glyphicon-search"></i>
                                </button>
                        </span>
                    </div>
                </div>
             </div>
        )
    }
}

function mapStateToProps(state) {
    return{gifs: state.gifs.gifs };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getGifs: getGifs
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);