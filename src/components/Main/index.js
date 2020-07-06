import React, { Component } from 'react';
import './styles.css';
import Items from "../Items";
import Comments from "../Comments";

export default class Main extends Component {
    state = {
        items: [],
        activeItem: null
    };

    componentDidMount() {
        const { items, activeItem } = this.state;

        const itemsFromStore = JSON.parse(window.localStorage.getItem('items'));
        const activeItemFromStore = JSON.parse(window.localStorage.getItem('activeItem'));

        if (itemsFromStore && itemsFromStore.length) {
            this.setState({
                items: [...itemsFromStore],
                activeItem: {
                    ...activeItemFromStore
                }
            });
        } else {
            if (!activeItem && items && items[0]) {
                this.setActiveItem(items[0]);
            }
        }
    }

    componentDidUpdate() {
        const { items, activeItem } = this.state;

        window.onunload = () => {
            window.localStorage.setItem('items', JSON.stringify(items));
            window.localStorage.setItem('activeItem', JSON.stringify(activeItem));
        };
    }

    getRandomId() {
        return Math.floor(Math.pow(10, 7) + Math.random() * 9 * Math.pow(10, 7));
    }

    setActiveItem = item => {
        this.setState({
            activeItem: {
                ...item,
                comments: [
                    ...item.comments
                ]
            }
        });
    }

    addNewItem = (name) => {
        const { items } = this.state;

        const item = {
            name,
            id: this.getRandomId(),
            comments: []
        };

        if (!items.length) {
            this.setActiveItem(item);
        }

        this.setState({
            items: [
                ...items,
                item
            ]
        });
    };

    deleteItem = item => {
        const { items } = this.state;
        const newItems = items.filter(i => i.id !== item.id);

        this.setState({
            items: [
                ...newItems,
            ]
        });

        if (newItems.length) {
            this.setActiveItem(newItems[newItems.length - 1]);
        } else {
            this.setState({
                activeItem: null
            });
        }
    };

    addNewComment = (color, body) => {
        const { activeItem, items } = this.state;

        activeItem.comments.push({
            id: this.getRandomId(),
            body,
            color
        });

        for (let i = 0; i < items.length; i++) {
            if (items[i].id === activeItem.id) {
                items[i] = {
                    ...activeItem
                };
                break;
            }
        }

        this.setState({
            items: [
                ...items
            ],
            activeItem: {
                ...activeItem
            }
        });
    };

    render() {
        const {
            state: {
                items,
                activeItem
            },
            addNewItem,
            setActiveItem,
            addNewComment,
            deleteItem
        } = this;

        return (
            <main className="main">
                <div className="inner">
                    <Items
                        data={items}
                        activeItem={activeItem}
                        addNewItem={addNewItem}
                        setActiveItem={setActiveItem}
                        deleteItem={deleteItem}
                    />
                    <Comments
                        data={activeItem}
                        addNewComment={addNewComment}
                    />
                </div>
            </main>
        );
    }
};
