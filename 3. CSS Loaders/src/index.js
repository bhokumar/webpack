import style from "./index.css";
import _ from 'lodash';
import "./clearButton";

const btn = document.getElementById('button');
btn.addEventListener('click', function() {
    const el = document.getElementById("header");
    el.innerHTML = "Hey I have updated the code";

    const listItems = ["Apple", "Orange", "Banana"];
    const ul = document.getElementById("shoppingList");
    _.forEach(listItems, function(item) {
        const tempEl = document.createElement("li");
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    });
});
btn.classList.add([style.button]);