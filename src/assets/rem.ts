const init = function () {
    let clientWidth: number = document.documentElement.clientWidth || document.body.clientWidth;
    if (clientWidth >= 750) {
        clientWidth = 750;
    }
    const fontSize = 20 / 375 * clientWidth;
    document.documentElement.style.fontSize = fontSize + "px";
}

init();

window.addEventListener("resize", init);
export default init