const gmailInput = document.querySelector("#gmail_input");
const gmailBtn = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;

gmailBtn.onclick = () => {
    if(regex.test(gmailInput.value)) {
        gmailResult.style.color = 'green';
        gmailResult.textContent = 'Все верно';
    } else {
        gmailResult.style.color = 'red';
        gmailResult.textContent = 'некорректный емайл';
    }
};

const parent = document.querySelector(".parent_block");
const child  = document.querySelector(".child_block");

let positionX = child.offsetLeft;
let positionY = child.offsetTop;

let direction = 0;

function moveBlock() {
    const maxX = parent.clientWidth - child.offsetWidth;
    const maxY = parent.clientHeight - child.offsetHeight;

    if (direction === 0) {
        positionX += 2;

        if (positionX >= maxX) {
            positionX = maxX;
            direction = 1;
        }
    } 
    
    else if (direction === 1) {
        positionY += 2;

        if (positionY >= maxY) {
            positionY = maxY;
            direction = 2;
        }
    } 
    
    else if (direction === 2) {
        positionX -= 2;

        if (positionX <= 0) {
            positionX = 0;
            direction = 3;
        }
    } 
    
    else if (direction === 3) {
        positionY -= 2;

        if (positionY <= 0) {
            positionY = 0;
            direction = 0;
        }
    }

    child.style.left = `${positionX}px`;
    child.style.top = `${positionY}px`;

    setTimeout(moveBlock, 10);
}

moveBlock();

let count = 0;
let timer = null;

const seconds = document.querySelector("#seconds");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

start.addEventListener("click", function() {
    if(timer !== null) {
        return;
    }
    timer = setInterval(function() {
        count++;
        seconds.textContent = count;
    }, 1000);
});

stop.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
});

reset.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;

    count = 0;
    seconds.textContent = count;
});
