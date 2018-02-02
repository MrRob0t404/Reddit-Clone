import React, {Component} from 'react';

class NewLink extends Component {
    construtor() {
        this.state = {
            title: '',
            url: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        this
            .props
            .postLink(this.state)
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder='title'
                    name='title'
                    onChange={this.handleChange}/>
                <input type='text' placeholder='url' name='url' onChange={this.handleChange}/>
                <button onClick={this.handleClick}>
                    Submit
                </button>
            </div>
        );
    }
}

export default NewLink;
