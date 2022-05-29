const btn = document.querySelector("button");

let number = 1;


const addLiElement = () => {
    const item = document.createElement('li');
    item.textContent = number;

    const list = document.querySelector("ul")

    list.appendChild(item);

    if(number % 3 == 0) {
        item.classList.add("big");
    }

    number += 2;
}

btn.addEventListener("click", addLiElement)
