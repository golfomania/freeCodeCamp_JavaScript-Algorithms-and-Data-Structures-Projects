function rot13(str) {
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str.charAt(i))) {
      result += abc.charAt(abc.indexOf(str.charAt(i)) + 13);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");
