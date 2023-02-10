import { inputClass, outputElmClass, outputElmType } from "./init.js";
import PROVIDER from "./provider.js";

(function numberToLetter() {
  document.querySelectorAll(inputClass).forEach((input) => {
    new PROVIDER({
      inputElm: input,
      outputElmType,
      outputElmClass,
    });
  });
})();
