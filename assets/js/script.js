var plusBtn = document.querySelector(".plusBtn");
var minusBtn = document.querySelector(".minusBtn");
var count = document.querySelector(".zero");
var thumb1 = document.querySelector(".thumb1");
var thumb2 = document.querySelector(".thumb2");
var thumb3 = document.querySelector(".thumb3");
var thumb4 = document.querySelector(".thumb4");
var img1 = document.querySelector(".productImg1");
var img2 = document.querySelector(".productImg2");
var img3 = document.querySelector(".productImg3");
var img4 = document.querySelector(".productImg4");

plusBtn.addEventListener("click", function () {
  count.value++;
});

minusBtn.addEventListener("click", function () {
  count.value--;
});

thumb1.addEventListener("click", function () {
  thumb1.classList.add("inFocus");
  thumb2.classList.remove("inFocus");
  thumb3.classList.remove("inFocus");
  thumb4.classList.remove("inFocus");
  img1.classList.remove("hidden");
  img2.classList.add("hidden");
  img3.classList.add("hidden");
  img4.classList.add("hidden");
});

thumb2.addEventListener("click", function () {
  thumb2.classList.add("inFocus");
  thumb1.classList.remove("inFocus");
  thumb3.classList.remove("inFocus");
  thumb4.classList.remove("inFocus");
  img1.classList.add("hidden");
  img2.classList.remove("hidden");
  img3.classList.add("hidden");
  img4.classList.add("hidden");
});

thumb3.addEventListener("click", function () {
  thumb3.classList.add("inFocus");
  thumb2.classList.remove("inFocus");
  thumb1.classList.remove("inFocus");
  thumb4.classList.remove("inFocus");
  img1.classList.add("hidden");
  img2.classList.add("hidden");
  img3.classList.remove("hidden");
  img4.classList.add("hidden");
});

thumb4.addEventListener("click", function () {
  thumb4.classList.add("inFocus");
  thumb2.classList.remove("inFocus");
  thumb3.classList.remove("inFocus");
  thumb1.classList.remove("inFocus");
  img1.classList.add("hidden");
  img2.classList.add("hidden");
  img3.classList.add("hidden");
  img4.classList.remove("hidden");
});
