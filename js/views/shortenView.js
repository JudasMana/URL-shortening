const shortenTab = document.querySelector(".shorten");

export const addShortenHandler = function (handler) {
  shortenTab.addEventListener("submit", function (e) {
    e.preventDefault();
    const urlInput = shortenTab.querySelector(".shorten__link");
    handler(urlInput.value);
  });
};

export const showErrors = function () {
  shortenTab.querySelector(".shorten__link").classList.add("wrong__link");
  shortenTab.querySelector(".shorten__message").classList.remove("hidden");
};

export const hideErrors = function () {
  shortenTab.querySelector(".shorten__link").classList.remove("wrong__link");
  shortenTab.querySelector(".shorten__message").classList.add("hidden");
};
