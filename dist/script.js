"use strict";var container1=document.getElementById("container1"),container2=document.getElementById("container2"),submitBtn=document.getElementById("submit-btn"),ratingBtns=document.querySelectorAll(".btn"),actualRating=document.getElementById("actualRating");ratingBtns.forEach((function(t){t.addEventListener("click",(function(){ratingBtns.forEach((function(t){t.classList.remove("active")})),t.classList.add("active"),actualRating.innerHTML=t.innerHTML,""!==actualRating.innerHTML&&submitBtn.addEventListener("click",(function(){container1.classList.add("hide"),container2.classList.remove("hide")}))}))}));
//# sourceMappingURL=script.js.map