let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `
/*你好，我叫小张
*接下来我要展示一下我的前端功底
*首先我要准备一个div
*/
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我把div变成一个八卦
*注意看好了
*首先，把div变成一个圆
*/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/*八卦有一阴一阳
*一黑一白
**/
#div1 {
    background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(2,2,3,1) 50%, rgba(255,255,255,1) 50%);
}
/* 加两个乾坤球 */
#div1::before {
    display: block;
}
#div1::after {
    display: block;
}
`;
let string2 = "";
let n = 0;

let step = () => {
    setTimeout(() => {
        if(string[n] === "\n") {
            string2 += "<br>"
        }else if(string[n] === " ") {
            string2 += "&nbsp";
        }else{
            string2 += string[n]
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999);
        html.scrollTo(0,9999);
        if(n < string.length-1) {
            n += 1
            step();
        }
    }, 60)
};

step();