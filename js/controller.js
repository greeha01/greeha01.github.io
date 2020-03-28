/* jshint esversion: 8 */
/* jshint node: true */
/* jshint jquery: true */
'use strict';

var theQuoteList = new QuoteList(50);
var theQuoteView = new QuoteView(theQuoteList);

async function getData(url) {
    return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
}

async function addQuote() {
    let allInfoDiv = document.querySelector("#info");
    allInfoDiv.innerHTML = "";

    let info = await Promise.all([getData("https://api.tronalddump.io/random/quote")]);
    //console.log(info);
    //console.log(info[0]);
    // console.log(info[0].tags[0]);
    var person, desc;
    
    if (info[0].tags[0] == undefined) {
        person = "No known target";
        desc = "N/A";
    }

    else {
        let pageName = info[0].tags[0].split(" ").join("_");
        let tag = await Promise.all([getData("https://en.wikipedia.org/api/rest_v1/page/summary/" + pageName)]);
        person = info[0].tags[0];
        desc = tag[0].extract;
    }
    //console.log(pageName);
    
    //console.log(tag);

   
   let quote = info[0].value;
   let date = new Date(info[0].appeared_at);
   let dateString = date.toDateString();

   console.log(person, desc, quote, dateString);

   let newQuote = new Quote(person, desc, quote, date);
   theQuoteList.add(newQuote);
   console.log(theQuoteList);
}

function clearMenu() {
    theQuoteList.clearList();
    localStorage.removeItem("quotes");
}

function deleteSelected() {
    let table = document.querySelector("table").tBodies[0];
    let rowCount = table.rows.length;
    let indices = [];

    for (let i = 0; i < rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].getElementsByTagName('input')[0];
        if('checkbox' == chkbox.type && true == chkbox.checked) {
            indices.push(i);
        }
    }
    theQuoteList.remove(indices);
}

function saveList() {
    let quotes = [];

    for (let i of theQuoteList) {
        quotes.push(i);
    }

    localStorage.setItem("quotes",JSON.stringify(quotes));
}

function loadList() {
    let quotes = JSON.parse(localStorage.getItem("quotes")) || [];
    for (let quote of quotes) {
        let person = quote._person;
        let desc = quote._desc;
        let quot = quote._quote;
        let date = quote._date;

        let newQuote = new Quote(person, desc, quot, date);

        theQuoteList.add(newQuote);
    }
}

$(document).ready(function () {
    loadList();
});