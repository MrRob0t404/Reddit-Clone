import React, {Component} from 'react';
import {connect} from 'react-redux';
import Links from '../components/links/links'
import NewLink from '../components/links/newlink'

class LinksContainer extends React.Component {
  getAllLinks = () => {
    const {dispatch} = this.props;
    dispatch({type: "GET_ALL"});
  };

  getSingleLink = (id) => {
    const {dispatch} = this.props;
    dispatch({type: "GET_ONE", id: id});
  }

  postLink = (obj) => {
    const {dispatch} = this.props
    dispatch({type: 'ADD_ONE', obj: obj})
  }

  addComment = (obj) => {
    const {dispatch} = this.props
    dispatch({type: 'ADD_COMMENT', obj: obj})
  }

  render() {
    const {links} = this.props;

    return (<Links
      state={links}
      getAllLinks={this.getAllLinks}
      getSingleLink={this.getSingleLink}
      postLink={this.postLink}
      addComment={this.addComment}/>);
  }
}

export default connect(state => state)(LinksContainer);
