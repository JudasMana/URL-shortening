import { addMenuHandler } from "./views/menuView";
import { addShortenHandler } from "./views/shortenView";
import { showErrors } from "./views/shortenView";
import { hideErrors } from "./views/shortenView";
import { displayResult } from "./views/resultsView";
import { addCopyHandler } from "./views/resultsView";
import { getShortLink } from "./model";

const controlShortening = async function (url) {
  try {
    const short_url = await getShortLink(url);

    hideErrors();

    displayResult(url, short_url);
  } catch (err) {
    showErrors();
  }
};

const controlCopy = function (url) {
  navigator.clipboard.writeText(url);
};

const init = function () {
  addMenuHandler();
  addShortenHandler(controlShortening);
  addCopyHandler(controlCopy);
};
init();
