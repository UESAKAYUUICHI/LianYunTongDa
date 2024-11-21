//登录相关
var loadingBtn = document.getElementById("loadingBtn");
var freeToUse = document.getElementById("freeToUse");
var homeBtn = document.querySelector(".home");
var produceServerBtn = document.querySelector(".produceServer");
var apiBtn = document.querySelector(".API");
var aboutUsBtn = document.querySelector(".aboutUs");
var planeBtn = document.querySelector(".plane");
var enterBtn = document.querySelectorAll(".enter");

var numberBtn = document.querySelectorAll(".number");
var phoneBtn = document.querySelectorAll(".phone");
var returnBtn = document.querySelectorAll(".return");

var loadingWrapper = document.getElementById("loading-wrapper");
var loadingPhone = document.getElementById("loading-phone");
//点击函数
function Click() {
  if (loadingWrapper.style.visibility === "hidden") {
    loadingWrapper.style.visibility = "visible";
    loadingWrapper.style.opacity = 1;
  } else {
    loadingWrapper.style.visibility = "hidden";
    loadingWrapper.style.opacity = 0;
  }
}
function oneClick() {
  loadingWrapper.style.visibility = "visible";
  loadingWrapper.style.opacity = 1;
}

function ClickNumber() {
  loadingWrapper.style.visibility = "visible";
  loadingWrapper.style.opacity = 1;

  loadingPhone.style.visibility = "hidden";
  loadingPhone.style.opacity = 0;
}
function ClickPhone() {
  loadingWrapper.style.visibility = "hidden";
  loadingWrapper.style.opacity = 0;

  loadingPhone.style.visibility = "visible";
  loadingPhone.style.opacity = 1;
}
function ClickReturn() {
  loadingWrapper.style.visibility = "hidden";
  loadingWrapper.style.opacity = 0;

  loadingPhone.style.visibility = "hidden";
  loadingPhone.style.opacity = 0;
}
//事件监听
loadingBtn.addEventListener("click", Click);
freeToUse.addEventListener("click", Click);
homeBtn.addEventListener("click", oneClick);
produceServerBtn.addEventListener("click", oneClick);
apiBtn.addEventListener("click", oneClick);
aboutUsBtn.addEventListener("click", oneClick);
planeBtn.addEventListener("click", oneClick);

// 为按钮添加事件监听器
numberBtn.forEach(function (btn) {
  btn.addEventListener("click", ClickNumber);
});

phoneBtn.forEach(function (btn) {
  btn.addEventListener("click", ClickPhone);
});

returnBtn.forEach(function (btn) {
  btn.addEventListener("click", ClickReturn);
});

//注册相关
var freeToRegisterBtn = document.querySelector(".freeToRegister");
