const resultTab = document.querySelector(".short__url");

export const displayResult = function (long_url, short_url) {
  const markup = `
    <div class="result">
        <p class="original__link">${long_url}</p>
        <div class="results">
        <p class="short__link">${short_url}</p>
        <button class="copy__link copy__link--active">Copy</button>
        </div>
    </div>
    `;

  clearTab();
  resultTab.insertAdjacentHTML("afterbegin", markup);
};

const clearTab = function () {
  resultTab.innerHTML = "";
};

export const addCopyHandler = function (handler) {
  resultTab.addEventListener("click", function (e) {
    const btn = e.target.closest(".copy__link");
    if (!btn) return;

    const shortUrl = this.querySelector(".short__link");
    if (!shortUrl) return;

    handler(shortUrl.textContent);
    btn.classList.add("copy__link--copied");
    btn.classList.remove("copy__link--active");
    btn.textContent = "Copied!";
  });
};
