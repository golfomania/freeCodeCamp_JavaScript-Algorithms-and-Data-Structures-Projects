function palindrome(str) {
  return (
    str
      .toLowerCase()
      .split("")
      .filter(el => /[a-z0-9]/.test(el))
      .join("") ===
    str
      .toLowerCase()
      .split("")
      .reverse()
      .filter(el => /[a-z0-9]/.test(el))
      .join("")
  );
}
palindrome("not_");
