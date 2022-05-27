/* ---修改默认滚轮行为--- */

//禁用默认滚轮行为
// document.addEventListener('mousewheel', zoomIn, { passive: false });
// function zoomIn(event) {
//     event.preventDefault();
//     document.scrollTo
// }

// //每次滑动一个块
// const hLink = document.getElementsByClassName('hLink');
// const body = document.querySelector('body');
// let showingBlock = 0;//正在展示的页面块
// function scrollFunc(event) {
//     // event.preventDefault();
//     // body.removeEventListener("wheel", scrollFunc);
//     if (event.wheelDelta > 0 && showingBlock > 0) {
//         console.log("鼠标滚轮向上滚动");
//         showingBlock--;
//         hLink[showingBlock].click();
//     }

//     else if (event.wheelDelta < 0 && showingBlock < hLink.length - 1) {
//         console.log("鼠标滚轮向下滚动");
//         showingBlock++;
//         hLink[showingBlock].click();
//     }
//     setTimeout(function () {
//         body.addEventListener("mousewheel", scrollFunc, { once: 'true' })
//     }, 500);
// }
// document.addEventListener("mousewheel", scrollFunc, { once: 'true' });



const protfolisSelectorArr = document.getElementsByClassName('protfolisSelector');
const showPortfolioList = document.querySelector('.showPortfolioList');

function changeChecked(event) {
    //清除之前被选中的 protfolisSelector 
    for (let i = 0; i < protfolisSelectorArr.length; i++) {
        protfolisSelectorArr[i].setAttribute('class', 'protfolisSelector');
    }

    //更新被选中的 protfolisSelector
    event.target.setAttribute('class', 'protfolisSelector checked');

    //查找应该滚动到的位置
    let xPosition = window.innerWidth;
    for (let i = 0; i < protfolisSelectorArr.length; i++) {
        if (protfolisSelectorArr[i].getAttribute('class') === 'protfolisSelector checked') {
            xPosition *= i;
            break;
        }
    }

    //进行滚动
    showPortfolioList.scrollTo({
        left: xPosition,
        behavior: 'smooth'
    });
}

//给每个 protfolisSelector 添加事件监听
for (let i = 0; i < protfolisSelectorArr.length; i++) {
    protfolisSelectorArr[i].addEventListener('click', changeChecked, { capture: false });
}


