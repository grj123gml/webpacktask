import "./banner.js";
import "./tabs.js";

// import $ from "jquery";
// $("#swiper").css("background-color", "green");
// import "./styles/index.css";
import "./styles/index.less";

// index.js 引用图片
import imgUrl from "./assets/1.gif";

// 引入字体图标文件
import "./assets/fonts/iconfont.css";

let img = document.createElement("img");
img.src = imgUrl;
document.body.appendChild(img);

class App {
  static a = 123;
}

console.log(App.a);

const fn = () => {
  console.log(111);
};
fn();
