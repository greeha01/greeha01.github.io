/* jshint esversion: 6 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
'use strict';

class QuoteView {
    constructor(model) {
        model.subscribe(this.redrawList.bind(this));
    }

    redrawList(listOfItems, msg) {
        console.log(msg);
        let tblBody = document.querySelector("#tableAllQuotes > tbody");
        tblBody.innerHTML = "";
        for (let task of listOfItems) {
            let row = document.createElement("tr");

            let tdButton = document.createElement("td");
            tdButton.innerHTML = '<input type=checkbox name=deleteButton>';
            tdButton.setAttribute("class", "button");
            tdButton.setAttribute("width", "40px");
            row.appendChild(tdButton);

            let tdPerson = document.createElement("td");
            tdPerson.innerHTML = task.person;
            row.appendChild(tdPerson);

            let tdDesc = document.createElement("td");
            tdDesc.innerHTML = task.desc;
            row.appendChild(tdDesc);

            let tdQuote = document.createElement("td");
            tdQuote.innerHTML = task.quote;
            row.appendChild(tdQuote);

            let tdDate = document.createElement("td");
            tdDate.innerHTML = task.date;
            row.appendChild(tdDate);

            tblBody.appendChild(row);
        }
    }
}