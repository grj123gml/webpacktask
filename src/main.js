import "./banner.js";
import "./tabs.js";

// import $ from "jquery";
// $("#swiper").css("background-color", "green");
// import "./styles/index.css";
import "./styles/index.less";

// index.js 引用图片
import imgUrl from "./assets/1.gif";

let img = document.createElement("img");
img.src = imgUrl;
document.body.appendChild(img);
