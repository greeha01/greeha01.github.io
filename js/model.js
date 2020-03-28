/* jshint esversion: 6 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
'use strict';

class Quote {
    constructor(person, desc, quote, date) {
        this._person = person;
        this._desc = desc;
        this._quote = quote;
        this._date = date;
    }

    get person() {
        return this._person;
    }

    get desc() {
        return this._desc;
    }

    get quote() {
        return this._quote;
    }

    get date() {
        return this._date;
    }
}

class Subject {
    constructor() {
        this.handlers = [];
    }

    subscribe(func) {
        this.handlers.push(func);
    }

    unsubscribe(func) {
        this.handlers = this.handlers.filter(item => item != func);
    }

    publish(msg, obj) {
        let scope = obj || window;
        for (let f of this.handlers) {
            f(scope, msg);
        }
    }
}

class QuoteList extends Subject {
    constructor(theSize) {
        super();
        this._size = theSize;
        this._taskList = [];
    }
    
    add(task) {
        if (this._taskList.length < this._size) {
            this._taskList.push(task);
            this.publish("New quote added", this);
        }
    }

    remove(indices) {
        // console.log(indices);
        for (let item of indices.reverse()) {
            // console.log(item);
            this._taskList.splice(item, 1);
        }
        this.publish("Removed some quotes", this);
    }

    clearList() {
        this._taskList = []
        this.publish("Reset quote list", this);
    }

    [Symbol.iterator]() {
        let idx = -1;
        return {
            next: () => ({value: this._taskList[++idx], done: !(idx in this._taskList)})
        };
    }
}
