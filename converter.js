class CONVERTER {
  constructor(number, digit, level) {
    this.number = number;
    this.digit = digit;
    this.level = level;
    this.constant();
    this.initialStuff();
  }
  initialStuff() {
    if (this.number === 0) this.result = "صفر";
    else {
      this.convert();
    }
  }
  constant() {
    (this.yekan = ["یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"]),
      (this.dahgan = [
        "ده",
        "بیست",
        "سی",
        "چهل",
        "پنجاه",
        "شصت",
        "هفتاد",
        "هشتاد",
        "نود",
      ]),
      (this.sadgan = [
        "یکصد",
        "دویست",
        "سیصد",
        "چهارصد",
        "پانصد",
        "ششصد",
        "هفتصد",
        "هشتصد",
        "نهصد",
      ]),
      (this.dah = [
        "یازده",
        "دوازده",
        "سیزده",
        "چهارده",
        "پانزده",
        "شانزده",
        "هفده",
        "هیجده",
        "نوزده",
      ]);
  }
  convert() {
    this.result = "";
    this.arrayOfDigit = String(this.number).split("");
    for (let i = this.digit; this.arrayOfDigit.length > 0; i--) {
      if (this.level === 1 && Number(this.arrayOfDigit[0]) !== 0) {
        this.calculator();
      } else if (this.level === 2 && Number(this.arrayOfDigit[0]) !== 0) {
        this.calculator();
        if (this.level === 1) {
          if (
            Array.of(...this.arrayOfDigit.slice(1)).every(
              (item) => Number(item) === 0
            )
          ) {
            this.result = `${this.result} هزار`;
            return;
          } else {
            this.result = `${this.result} هزار و `;
          }
        }
      } else if (this.level === 3 && Number(this.arrayOfDigit[0]) !== 0) {
        this.calculator();
        if (this.level === 2) {
          if (
            Array.of(...this.arrayOfDigit.slice(1)).every(
              (item) => Number(item) === 0
            )
          ) {
            this.result = `${this.result} میلیون`;
            return;
          } else {
            this.result = `${this.result} میلیون و `;
          }
        }
      } else if (this.level === 4 && Number(this.arrayOfDigit[0]) !== 0) {
        this.calculator();
        if (this.level === 3) {
          if (
            Array.of(...this.arrayOfDigit.slice(1)).every(
              (item) => Number(item) === 0
            )
          ) {
            this.result = `${this.result} میلیارد`;
            return;
          } else {
            this.result = `${this.result} میلیارد و `;
          }
        }
      } else if (this.level === 5 && Number(this.arrayOfDigit[0]) !== 0) {
        this.calculator();
        if (this.level === 4) {
          if (
            Array.of(...this.arrayOfDigit.slice(1)).every(
              (item) => Number(item) === 0
            )
          ) {
            this.result = `${this.result} تریلیارد`;
            return;
          } else {
            this.result = `${this.result} تریلیارد و `;
          }
        }
      }
      this.arrayOfDigit.shift();
      if (Number(this.arrayOfDigit[0]) === 0) {
        this.level = Math.ceil(this.arrayOfDigit.length / 3);
      }
    }
  }
  calculator() {
    if (this.arrayOfDigit.length === this.level * 3 - 2) {
      if (Number(this.arrayOfDigit[0]) !== 0) {
        this.result += this.yekan[Number(this.arrayOfDigit[0]) - 1];
      }
      this.level -= 1;
    } else if (this.arrayOfDigit.length === this.level * 3 - 1) {
      if (Number(this.arrayOfDigit[0]) !== 0) {
        if (Number(this.arrayOfDigit[0]) === 1) {
          if (Number(this.arrayOfDigit[1]) === 0) {
            this.result += "ده";
          } else {
            this.result += ` ${this.dah[Number(this.arrayOfDigit[1]) - 1]}`;
          }
          this.arrayOfDigit.shift();
          this.level -= 1;
        } else {
          if (
            Array.of(...this.arrayOfDigit.slice(1)).every(
              (item) => Number(item) === 0
            )
          ) {
            this.result += ` ${this.dahgan[Number(this.arrayOfDigit[0]) - 1]}`;
            this.arrayOfDigit.splice(0);
            this.level -= 1;
          } else if (Number(this.arrayOfDigit[1]) === 0) {
            this.result += ` ${this.dahgan[Number(this.arrayOfDigit[0]) - 1]}`;
            this.level -= 1;
          } else {
            this.result += `${
              this.dahgan[Number(this.arrayOfDigit[0]) - 1]
            } و `;
          }
        }
      }
    } else if (this.arrayOfDigit.length === this.level * 3) {
      if (Number(this.arrayOfDigit[0]) !== 0) {
        if (
          Array.of(...this.arrayOfDigit.slice(1)).every(
            (item) => Number(item) === 0
          )
        ) {
          this.result += ` ${this.sadgan[Number(this.arrayOfDigit[0]) - 1]}`;
          this.arrayOfDigit.splice(0);
          this.level -= 1;
        } else if (
          Number(this.arrayOfDigit[1]) === 0 &&
          Number(this.arrayOfDigit[2]) === 0
        ) {
          this.result += ` ${this.sadgan[Number(this.arrayOfDigit[0]) - 1]}`;
          this.level -= 1;
        } else {
          this.result += `${this.sadgan[Number(this.arrayOfDigit[0]) - 1]} و `;
        }
      }
    }
  }

  get valueConverted() {
    return this.result.trim();
  }
}
export default CONVERTER;
