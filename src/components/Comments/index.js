import React, { Component } from 'react';
import Comment from "../Comment";
import './styles.css';

export default class Comments extends Component {
    handleSubmitForm = event => {
        const { addNewComment } = this.props;

        event.preventDefault();
        addNewComment(event.target[0].value, event.target[1].value);
        event.target.reset();
    }

    handleKeyDown = event => {
        if (event.ctrlKey && event.keyCode === 13) {
            if (event.target.value.length !== 0) {
                event.target.form[2].click();
            }
        }
    }

    render() {
        const { data } = this.props;

        return (
            <div className="box">
                <h2 className="title">Comments {data && `#${data.id}`}</h2>
                {data && data.comments.map(item => <Comment key={item.id} data={item} />)}
                <form className="comment__form" onSubmit={this.handleSubmitForm}>
                    <input type="color" className="input comment__input" />
                    <textarea onKeyDown={this.handleKeyDown} className="input comment__input comment__area" placeholder="Type comment here..." required />
                    <button className="btn btn__comment" type="submit">Add New</button>
                </form>
            </div>
        );
    }
};
