const url =require("url");

let str = 'https://pan.baidu.com/play/video#/video?path=%2F%E7%99%BE%E5%BA%A6%E4%BA%91%E8%A7%A3%E5%8E%8B%2Fnode-learn%2Fnode%E5%9F%BA%E7%A1%80%2F03%20node%E5%AE%9E%E7%8E%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE%2F7Node.js-Web%E5%BC%80%E5%8F%91-post%E5%8F%82%E6%95%B0%E5%A4%84%E7%90%86.mp4&t=6';
let str1 = decodeURI(str);
let strparse = url.parse(str1);
console.log(str1,strparse);