document.body.style.height = '3000vh';
const div = document.createElement('div');
document.body.appendChild(div);
let size = 10;
div.style.height = size + 'px';
div.style.position = 'fixed';
div.style.width = '100%';
div.style.backgroundColor = 'green';
div.style.left = '0';
div.style.top = '0';


let grow = true;


const createVail = () => {

    if (grow) {
        size++;
        div.style.height = size + "px";
        div.style.backgroundColor = 'green';
    } else {
        size--;
        div.style.height = size + "px";
        div.style.backgroundColor = 'red';
    }
    if (size >= window.innerHeight / 2) {
        grow = !grow;
    } else if (size <= 10) {
        grow = !grow;

    }


}
window.addEventListener('scroll', createVail);