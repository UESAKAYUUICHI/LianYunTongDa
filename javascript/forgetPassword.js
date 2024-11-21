var enter1 = document.querySelector(".enter-1");
var enter2 = document.querySelector(".enter-2");
var sendBtn = document.querySelector(".send");

var loadingPhone = document.querySelector(".loading-phone");
var passwordSetting = document.querySelector(".password-setting");

//正则表达式
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
var password1 = document.querySelector("#password-1");
var password2 = document.querySelector("#password-2");

function enter1Click() {
  loadingPhone.style.opacity = 0;
  loadingPhone.style.visibility = "hidden";

  passwordSetting.style.opacity = 1;
  passwordSetting.style.visibility = "visible";
}

function enter2Click() {
  var passwordValue1 = password1.value;
  var passwordValue2 = password2.value;
  if (!passwordRegex.test(passwordValue1)) {
    alert("您的密码不符合规范,请重新输入");
    password1.value = "";
    password2.value = "";
    return;
  }
  if (password1.value === password2.value) {
    window.location.href = "../html/index.html";
  } else {
    alert("您两次输入的密码不一致,请重新输入");
    password1.value = "";
    password2.value = "";
  }

  // $.ajax({
  //   url: "index.php",
  //   type: "POST",
  //   data: { password1: value },
  //   success: function (response) {
  //     console.log("S");
  //   },
  //   error: function () {
  //     console.log("F");
  //   },
  // });
}

function send() {
  $.ajax({
    url: "index.php",
    type: "POST",
    data: { code: 547852 },
    success: function (response) {
      console.log("S");
    },
    error: function () {
      console.log("F");
    },
  });
}

enter1.addEventListener("click", enter1Click);
enter2.addEventListener("click", enter2Click);
sendBtn.addEventListener("click", send);
