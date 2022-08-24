const init = function () {
    let clientWidth: number = document.documentElement.clientWidth || document.body.clientWidth;
    // 如果设计稿的宽度为750(物理像素)的话  
    if (clientWidth >= 750) {
        clientWidth =750 ;
    }
    // 所以css像素为375 在屏幕分辨率为375px的标准尺寸下开发
    const fontSize = 20 / 375 * clientWidth;
    // 设置HTML的根fontsize
    document.documentElement.style.fontSize = fontSize + "px";
    return fontSize
}

init();

window.addEventListener("resize", init);
export default init