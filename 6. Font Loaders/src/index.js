import style from "./index.scss";
import _ from 'lodash';
import "./clearButton";
import logo from "./assets/webpack_logo.png";
import "./assets/fonts/Redressed-Regular.ttf"

const btn = document.getElementById('button');
const logoElement = document.getElementById("logo");
logoElement.src = logo;

btn.addEventListener('click', function() {
    const el = document.getElementById("header");
    el.innerHTML = "Hey I have updated the code";
    el.classList.add([style.header]);

    const listItems = ["Apple", "Orange", "Banana"];
    const ul = document.getElementById("shoppingList");
    _.forEach(listItems, function(item) {
        const tempEl = document.createElement("li");
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    });
});
btn.classList.add([style.button]);