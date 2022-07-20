let currentURL = new URL(window.location);

console.log("Current URL:", currentURL);
console.log("Current Hash:", currentURL.hash);

let isHandlingScrollEvent = false;

const HeaderState = {
  DEFAULT: "default",
  OVER_POSTER: "over-poster",
  OVER_FORM: "over-form"
};

document.addEventListener("scroll", (evnt) => {
  if (!isHandlingScrollEvent) {
    window.requestAnimationFrame(() => {
      let nextState = determineNextHeaderState();
      changeHeaderState(nextState);
      isHandlingScrollEvent = false;
    });

    isHandlingScrollEvent = true;
  }
});

function checkIfNearElement(selector) {
  let elementToCheck = document.body.querySelector(selector);

  if (!elementToCheck) {
    return false;
  }

  let elementRect = elementToCheck.getBoundingClientRect();

  if (elementRect.top <= 100) {
    return true;
  }

  return false;
}

const checkIfNearFormSection = () => checkIfNearElement("section:last-of-type");
const checkIfNearFirstPosterSection = () => checkIfNearElement(".poster");

function determineNextHeaderState() {
  if (checkIfNearFormSection()) {
    return HeaderState.OVER_FORM;
  }

  if (checkIfNearFirstPosterSection()) {
    return HeaderState.OVER_POSTER;
  }

  return HeaderState.DEFAULT;
}

function changeHeaderState(nextState) {
  let header = document.querySelector(".header-bar");
  header.setAttribute("data-state", nextState);
}
