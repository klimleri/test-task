import React, { Component } from 'react';
import './styles.css';

export default class Items extends Component {
    state = {
        items: []
    };

    handleSubmitForm = event => {
        event.preventDefault();
        this.props.addNewItem(event.target[0].value);
        event.target.reset();
    }

    handleSetActiveItem = item => {
        const { setActiveItem } = this.props;

        setActiveItem(item);
    }

    handleDeleteItem = (event, item) => {
        const { deleteItem } = this.props;

        event.stopPropagation();
        event.preventDefault();
        deleteItem(item);
    }

    render() {
        const {
            props: {
                data,
                activeItem
            },
            handleSetActiveItem,
            handleDeleteItem,
            handleSubmitForm
        } = this;

        return (
            <div className="box">
                <h2 className="title">Items</h2>
                <form className="form" onSubmit={handleSubmitForm}>
                    <input type="text" className="input form__input" placeholder="Type name here..." required />
                    <button className="btn items__btn" type="submit">Add New</button>
                </form>
                <ul className="items__list">
                    {data.map((item, index) => {
                        return (
                            <li onClick={() => handleSetActiveItem(item)} key={index} className={item.id === activeItem.id ? 'item active' : 'item'}>
                                <span className="item__name">{item.name}</span>
                                <span className="item__count">{item.comments.length}</span>
                                <button className="btn btn__delete" onClick={(e) => handleDeleteItem(e, item)}>Delete</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
};
