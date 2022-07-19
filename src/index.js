let currentURL = new URL(window.location);

console.log("Current URL:", currentURL);
console.log("Current Hash:", currentURL.hash);

let isHandlingScrollEvent = false;

document.addEventListener("scroll", (evnt) => {
  if (!isHandlingScrollEvent) {
    window.requestAnimationFrame(() => {
      changeHeaderState();
      isHandlingScrollEvent = false;
    });

    isHandlingScrollEvent = true;
  }
});

function changeHeaderState() {
  let header = document.querySelector(".header-bar");
  let elementState = header.getAttribute("data-state");
}
