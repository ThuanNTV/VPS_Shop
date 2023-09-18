"use strict";

const chatChecked = document.getElementById("chat");
const footerContainerItemContent =
  document.getElementById("footer_itemContent");
const imgChat = document.getElementById("img_chat");
var itemContent_display = false;

chatChecked.addEventListener("click", function () {
  console.log("checked");
  if (itemContent_display == true) {
    footerContainerItemContent.style.display = "none";
    itemContent_display = false;
    imgChat.src = "./img/chat.png";
  } else {
    footerContainerItemContent.style.display = "block";
    itemContent_display = true;
    imgChat.src = "./img/close.png";
  }
});
