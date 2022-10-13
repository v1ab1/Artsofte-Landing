function showPopUp() {
    const dropdown = document.getElementById("dropdown");
    const burger = document.getElementById("burger");
    if (dropdown.style.top == '5%') {
        dropdown.style.top = '-100%';
        burger.src = './media/burger.svg';
    } else {
        dropdown.style.top = '5%';
        burger.src = './media/cross.svg';
    }
}