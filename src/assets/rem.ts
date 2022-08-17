const init = function () {
    let clientWidth: number = document.documentElement.clientWidth || document.body.clientWidth;
    if (clientWidth >= 640) {
        clientWidth = 640;
    }
    const fontSize = 20 / 375 * clientWidth;
    document.documentElement.style.fontSize = fontSize + "px";
    return fontSize
}

init();

window.addEventListener("resize", init);
export default init