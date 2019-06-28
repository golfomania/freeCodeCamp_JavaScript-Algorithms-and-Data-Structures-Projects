function convertToRoman(num) {
  const roman = [
    {
      //einer
      "0": "",
      "1": "I",
      "2": "II",
      "3": "III",
      "4": "IV",
      "5": "V",
      "6": "VI",
      "7": "VII",
      "8": "VIII",
      "9": "IX"
    },
    {
      //zehner
      "0": "",
      "1": "X",
      "2": "XX",
      "3": "XXX",
      "4": "XL",
      "5": "L",
      "6": "LX",
      "7": "LXX",
      "8": "LXXX",
      "9": "XC"
    },
    {
      //hunderter
      "0": "",
      "1": "C",
      "2": "CC",
      "3": "CCC",
      "4": "CD",
      "5": "D",
      "6": "DC",
      "7": "DCC",
      "8": "DCCC",
      "9": "CM"
    },
    {
      //Tausender
      "0": "",
      "1": "M",
      "2": "MM",
      "3": "MMM"
    }
  ];
  let result = "";
  let arr = num
    .toString()
    .split("")
    .reverse();
  for (let i = 0; i < arr.length; i++) {
    result = roman[i][arr[i]] + result;
  }
  return result;
}

convertToRoman(1000);
