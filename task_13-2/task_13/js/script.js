(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// JS-функция определения поддержки WebP
function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
/* Slider (Слайдер) */

$("[data-slider]").slick({
  infinite: true,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYWFhMDQ4ZmEuanMiXSwibmFtZXMiOlsidGVzdFdlYlAiLCJjYWxsYmFjayIsIndlYlAiLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWlnaHQiLCJzcmMiLCJzdXBwb3J0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiJCIsInNsaWNrIiwiaW5maW5pdGUiLCJmYWRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxTQUFTQSxRQUFULENBQWtCQyxRQUFsQixFQUE0QjtBQUN4QixNQUFJQyxJQUFJLEdBQUcsSUFBSUMsS0FBSixFQUFYOztBQUNBRCxFQUFBQSxJQUFJLENBQUNFLE1BQUwsR0FBY0YsSUFBSSxDQUFDRyxPQUFMLEdBQWUsWUFBWTtBQUNyQ0osSUFBQUEsUUFBUSxDQUFDQyxJQUFJLENBQUNJLE1BQUwsSUFBZSxDQUFoQixDQUFSO0FBQ0gsR0FGRDs7QUFHQUosRUFBQUEsSUFBSSxDQUFDSyxHQUFMLEdBQVcsaUhBQVg7QUFDSDs7QUFFRFAsUUFBUSxDQUFDLFVBQVVRLE9BQVYsRUFBbUI7QUFDeEIsTUFBSUEsT0FBTyxJQUFJLElBQWYsRUFBcUI7QUFDakJDLElBQUFBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixFQUErQkMsU0FBL0IsQ0FBeUNDLEdBQXpDLENBQTZDLE1BQTdDO0FBQ0gsR0FGRCxNQUVLO0FBQ0RILElBQUFBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixFQUErQkMsU0FBL0IsQ0FBeUNDLEdBQXpDLENBQTZDLFNBQTdDO0FBQ0g7QUFDSixDQU5PLENBQVI7QUFRQTs7QUFDQUMsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkMsS0FBbkIsQ0FBeUI7QUFDckJDLEVBQUFBLFFBQVEsRUFBRSxJQURXO0FBRXJCQyxFQUFBQSxJQUFJLEVBQUUsS0FGZTtBQUdyQkMsRUFBQUEsWUFBWSxFQUFFLENBSE87QUFJckJDLEVBQUFBLGNBQWMsRUFBRTtBQUpLLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSlMt0YTRg9C90LrRhtC40Y8g0L7Qv9GA0LXQtNC10LvQtdC90LjRjyDQv9C+0LTQtNC10YDQttC60LggV2ViUFxyXG5mdW5jdGlvbiB0ZXN0V2ViUChjYWxsYmFjaykge1xyXG4gICAgdmFyIHdlYlAgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHdlYlAub25sb2FkID0gd2ViUC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNhbGxiYWNrKHdlYlAuaGVpZ2h0ID09IDIpO1xyXG4gICAgfTtcclxuICAgIHdlYlAuc3JjID0gXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSam9BQUFCWFJVSlFWbEE0SUM0QUFBQ3lBZ0NkQVNvQ0FBSUFMbWswbWswaUlpSWlJZ0JvU3lnQUJjNldXZ0FBL3ZlZmYvMFBQOGJBLy9Md1lBQUFcIjtcclxufVxyXG5cclxudGVzdFdlYlAoZnVuY3Rpb24gKHN1cHBvcnQpIHtcclxuICAgIGlmIChzdXBwb3J0ID09IHRydWUpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnd2VicCcpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ25vLXdlYnAnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vKiBTbGlkZXIgKNCh0LvQsNC50LTQtdGAKSAqL1xyXG4kKFwiW2RhdGEtc2xpZGVyXVwiKS5zbGljayh7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGZhZGU6IGZhbHNlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDFcclxufSk7Il19
},{}]},{},[1])