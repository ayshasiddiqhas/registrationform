let userName = document.getElementById("txtUserName");
let email = document.getElementById("txtEmail");
let pwd = document.getElementById("txtPwd");
let conPwd = document.getElementById("txtConPwd");
let form = document.querySelector("form");

function validateInput() {
  // console.log('validate input');
  if (userName.value.trim() === "") {
    onError(userName, "Username cannot be empty");
  } else {
    onSuccess(userName);
  }
  if (email.value.trim === "") {
    onError(email, "Email cannot be empty");
  } else {
    if (!validateEmail(email.value.trim())) {
      onError(email, "Email is not valid");
    } else {
      onSuccess(email);
    }
  }
  if (pwd.value.trim() === "") {
    onError(pwd, "Password cannot be empty");
  } else {
    onSuccess(pwd);
  }
  if (conPwd.value.trim() === "") {
    onError(conPwd, "Confirm password cannot be empty");
  } else {
    if (pwd.value.trim() !== conPwd.value.trim()) {
      onError(conPwd, "Password and Confirm password is not matching");
    } else onSuccess(conPwd);
  }
}

document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  validateInput();
});

// helper function to optimize

function onSuccess(input) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "hidden";
  //   messageEle.innerText = "";
  parent.classList.remove("error");
  parent.classList.add("success");
}

function onError(input, message) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "visible";
  messageEle.innerText = message;
  parent.classList.remove("success");
  parent.classList.add("error");
}

// checking whether it is valid email
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
