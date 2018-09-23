function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    
    setTimeout(function run() {
        n++
        container.innerHTML = code.substring(0, n)
        styleTag.innerHTML = code.substring(0, n)
        container.scrollTop = container.scrollHeight
        if (n < code.length) {
            setTimeout(run, 10)
        } else {
            fn && fn.call()
        }
    })
}

var styleCode = `
/*** 大家好，我用动画的形式画哆啦A梦 ***/
.doraemon {
    width: 288px;
    height: 288px;
    border-radius: 50%;
    border: 3px solid rgb(51, 51, 51);
    background: rgb(5, 208, 255);
    overflow: hidden;
    position: relative;
}
/*** 首先画头和脸 ***/
.head {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background: rgb(1, 169, 219);
    position: absolute;
    top: 22px;
}
.face {
    height: 210px;
    width: 234px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: 66px;
    left: 50%;
    margin-left: -117px;
    border: 3px solid rgb(51, 51, 51);
}
/*** 接下来画眼睛 ***/
.eyes {
    display: flex;
    position: absolute;
    top: 36px;
    left: 50%;
    margin-left: -62px;
}
.eyes>.eyes-left,
.eyes>.eyes-right {
    height: 72px;
    width: 62px;
    border-radius: 50%;
    border: 4px solid rgb(51, 51, 51);
    background: #fff;
    position: relative;
}
.eyes>.eyes-right {
    margin-left: -1px;
}
.eyes>.eyes-left::before,
.eyes>.eyes-right::before {
    content: '';
    display: block;
    position: absolute;
    width: 23px;
    height: 29px;
    border-radius: 50%;
    margin-top: -13px;
    background: rgb(51, 51, 51);
    top: 50%;
}
.eyes>.eyes-left::before {
    right: 4px;
}
.eyes>.eyes-right::before {
    left: 4px;
}
.eyes>.eyes-left::after,
.eyes>.eyes-right::after {
    content: '';
    display: block;
    width: 6px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    margin-top: -3px;
    background: #fff;
}
.eyes>.eyes-left::after {
    right: 8px;
}
.eyes>.eyes-right::after {
    left: 8px;
}
/*** 接下来画鼻子 ***/
.nose {
    height: 44px;
    width: 44px;
    border-radius: 50%;
    border: 4px solid rgb(51, 51, 51);
    background: rgb(204, 61, 24);
    position: absolute;
    top: 30%;
    left: 42%;
    overflow: hidden;
}
.nose::before {
    content: '';
    display: block;
    height: 44px;
    width: 44px;
    border-radius: 50%;
    background: rgb(234, 76, 26);
    position: absolute;
    bottom: 6px;
    left: 50%;
    margin-left: -22px;
}
.nose::after {
    content: '';
    display: block;
    height: 10px;
    width: 18px;
    border-radius: 50%;
    background: rgb(255, 93, 71);
    position: absolute;
    top: 3px;
    left: 50%;
    margin-left: -9px;
}
/*** 我要画嘴了 ***/
.mouth-left,
.mouth-right {
    height: 72px;
    width: 98px;
    border: 3px solid black;
    border-top: none;
    position: absolute;
    top: 132px;
}
.mouth-left {
    left: 44px;
    border-right: none;
    border-bottom-left-radius: 105px 70px;
}
.mouth-right {
    right: 45px;
    border-left: none;
    border-bottom-right-radius: 105px 70px;
}
.mouth-left::after {
    content: '';
    display: block;
    position: absolute;
    height: 72px;
    width: 4px;
    background: rgb(51, 51, 51);
    right: 0;
    top: 50%;
    transform: translate(0, -38px);
}
/*** 我要画胡须了 ***/
.beard {
    width: 265px;
    height: 58px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}
.beard>div {
    position: absolute;
    border: 2px solid rgb(51, 51, 51);
    border-radius: 5px;
}
.beard>.left-one {
    width: 64px;
    left: 0;
    top: 5px;
    transform: rotate(23deg);
}
.beard>.right-one {
    width: 64px;
    right: 0;
    top: 5px;
    transform: rotate(-23deg);
}
.beard>.left-two {
    width: 61px;
    top: 50%;
    left: 0;
}
.beard>.right-two {
    width: 61px;
    top: 50%;
    right: 0;
}
.beard>.left-three {
    width: 61px;
    bottom: 5px;
    left: 2px;
    transform: rotate(-18deg);
}
.beard>.right-three {
    width: 61px;
    bottom: 5px;
    right: 2px;
    transform: rotate(18deg);
}
/*** 接着画项圈 ***/
.necklace-wrapper {
    height: 60px;
    width: 190px;
    border-radius: 20px;
    background: rgb(255, 199, 101);
    border-top: 3px solid rgb(51, 51, 51);
    margin-top: -44px;
    z-index: 1;
    position: relative;
}
.necklace {
    height: 28px;
    width: 100%;
    border-radius: 20px;
    border: 3px solid rgb(51, 51, 51);
    background: rgb(201, 69, 63);
    position: absolute;
    top: -4px;
    left: 0;
}
/*** 最后画铃铛了 ***/
.bell-circle {
    height: 58px;
    width: 58px;
    border-radius: 50%;
    border: 3px solid rgb(51, 51, 51);
    position: absolute;
    left: 50%;
    top: -3px;
    margin-left: -29px;
    background: rgb(249, 217, 137);
    overflow: hidden;
}
.bell-circle::before {
    content: '';
    display: block;
    height: 58px;
    width: 58px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 6px;
    margin-left: -29px;
    background: rgb(251, 200, 61)
}
.bell-circle::after {
    content: '';
    display: block;
    height: 0px;
    width: 30px;
    border-radius: 50px;
    border-top: none;
    border-left: none;
    border: 3px solid rgb(211, 164, 53);
    position: absolute;
    left: 72%;
    bottom: 0;
    margin-left: -29px;
}
.bell-cross {
    height: 16px;
    width: 62px;
    border: 3px solid rgb(51, 51, 51);
    border-radius: 10px;
    position: absolute;
    left: 50%;
    margin-left: -31px;
    top: 18px;
    background: rgb(249, 217, 137);
    overflow: hidden;
}
.bell-cross::before {
    content: '';
    display: block;
    height: 16px;
    width: 62px;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    margin-left: -31px;
    top: 2px;
    background: rgb(251, 200, 61);
}
.bell-vertical {
    height: 12px;
    width: 20px;
    border-radius: 50%;
    border: 3px solid rgb(51, 51, 51);
    background: rgb(191, 144, 42);
    position: absolute;
    top: 50%;
    margin: 7px 0 0 -10px;
    left: 50%;
}
.bell-vertical::after {
    content: '';
    display: block;
    height: 8px;
    width: 4px;
    border-radius: 5px;
    background: rgb(51, 51, 51);
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 5px 0 0 -2px;
}
/*** OK,完工了,谢谢欣赏 ***/
`

writeCode('',styleCode)