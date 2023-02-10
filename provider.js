import CONVERTER from "./converter.js";

class PROVIDER {
  constructor(option) {
    this.option = option;
    this.initialStuff();
  }
  initialStuff() {
    const { inputElm, outputElmType, outputElmClass } = this.option;
    if (!inputElm)
      throw console.error(
        "Please specify the input ===> for example : inputElm: document.querySelector('.input')"
      );
    if (!outputElmType)
      throw console.error(
        "Please specify the output element type ===> for example : outputElmType: 'div'"
      );
    this.inputElm = inputElm;
    this.outputElmType = outputElmType;
    this.outputElmClass = outputElmClass;
    inputElm.addEventListener("input", this.validateData);
  }
  validateData = (e) => {
    if (e.target.value.trim() !== "" && isNaN(Number(e.target.value)))
      throw console.error(
        "Please enter a numeric value ===> for example : 0 , 10 , 100 , etc"
      );
    else if (e.target.value.trim() !== "") {
      if (e.target.value.trim().length <= 15) {
        this.number = Number(e.target.value.trim());
        this.defineLevelAndDigit(this.number);
      } else {
        throw console.error("The maximum number of digits is 15");
      }
    } else {
      this.result("");
    }
  };
  defineLevelAndDigit(number) {
    this.digit = String(number).split("").length;
    for (let i = 1; i <= 5; i++) {
      if (this.digit <= i * 3) {
        this.level = i;
        this.provide();
        return;
      }
    }
  }
  provide() {
    const converter = new CONVERTER(this.number, this.digit, this.level);
    this.result(converter.valueConverted);
  }
  result(resultValue) {
    if (this.inputElm.nextElementSibling.classList.contains("converted")) {
      this.inputElm.nextElementSibling.remove();
    }
    const output = document.createElement(`${this.outputElmType}`);
    output.className = `converted ${this.outputElmClass}`;
    if (resultValue !== "") {
      output.textContent = `${resultValue} تومان`;
      this.inputElm.after(output);
    } else {
      output.remove();
    }
  }
}

export default PROVIDER;
