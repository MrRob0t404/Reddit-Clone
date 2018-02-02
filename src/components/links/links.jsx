import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import LinkList from './linklist';
import SingleLink from './singlelink';
import NewLink from './newlink';

const Links = ({state, getAllLinks, getSingleLink, postLink, addComment}) => {
  const renderLinkList = () => {
    return (<LinkList state={state} getAllLinks={getAllLinks}/>)
  }

  const renderSingleLink = (props) => {
    const {id} = props.match.params;
    return (<SingleLink
      state={state}
      getSingleLink={getSingleLink}
      addComment={addComment}
      id={id}/>)
  }

  const renderNewLink = () => {
    return (<NewLink postLink={postLink} links={state}/>)
  }

  return (
    <div>
      <Switch>
        <Route exact path='/links' render={renderLinkList}/>
        <Route exact path='/links/new' render={renderNewLink}/>
        <Route path='/links/:id' render={renderSingleLink}/>
      </Switch>
    </div>
  )
}

export default Links;
