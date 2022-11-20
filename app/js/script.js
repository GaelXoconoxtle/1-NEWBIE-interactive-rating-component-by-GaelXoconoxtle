const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const submitBtn = document.getElementById("submit-btn");
const ratingBtns = document.querySelectorAll(".btn");
const actualRating = document.getElementById("actualRating");

ratingBtns.forEach((ratingValue) => {

  ratingValue.addEventListener("click", function() {

    ratingBtns.forEach((ratingValue) => {
      ratingValue.classList.remove("active");
    })
    
    ratingValue.classList.add("active");
    actualRating.innerHTML = ratingValue.innerHTML;

    if (actualRating.innerHTML !== "") {
      submitBtn.addEventListener("click", function() {
        container1.classList.add("hide");
        container2.classList.remove("hide");
      })
    } 
  })
})