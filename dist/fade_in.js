document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  body.classList.remove("opacity-0");
  body.classList.add("opacity-100");

  // Select both images and videos
  const mediaElements = document.querySelectorAll("img, video");
  let delay = 0;

  mediaElements.forEach((element) => {
    setTimeout(() => {
      element.classList.remove("opacity-0");
      element.classList.add("opacity-100");
    }, delay);
    delay += 100;
  });
});
