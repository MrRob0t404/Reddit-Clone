import React, {Component} from 'react';

class SingleLink extends Component {
  constructor() {
    super()

    this.state = {
      id: '',
      userComment: ''
    }
  }

  componentDidMount() {
    this
      .props
      .getSingleLink(this.props.id);
  }

  handleComment = e => {
    this.setState({id: this.props.id, userComment: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    this
      .props
      .addComment(this.state)
  }

  render() {
    // console.log('component state: ', this.state)
    // console.log('global state: ', this.props.state)
    const {state} = this.props;
    return (
      <div>
        <h3>{state.oneMeme.title}</h3>
        <a href={state.oneMeme.url} target="_blank">
          <p>
            Go to Site
          </p>
        </a>

        <div id='commentsSection'>
          <h3>Add a comment</h3>
          <br></br>
          <input id={this.props.id} type='text' onChange={this.handleComment}/>
          <button onClick={this.handleSubmit}>Post</button>
        </div>
      </div>
    );
  }
}

export default SingleLink;