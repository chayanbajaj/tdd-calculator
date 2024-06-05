function add(numbers: string): number {
  let delim;
  const [delims, ...numberStrings] = numbers.split("\n").map((s) => s.trim());
  if (delims.startsWith("//")) {
    delim = delims.slice(2);
    const delimiter = delim.charAt(0);
    numbers = numberStrings
      .join("\n")
      .replace(new RegExp(`\\${delimiter}`, "g"), ",");
  }

  const numbersArray = numbers.split(",").map(Number);

  if (numbersArray.some((num) => num < 0)) {
    throw new Error(
      `negative numbers not allowed ${numbersArray
        .filter((num) => num < 0)
        .join(",")}`
    );
  }

  return numbersArray.reduce((acc, curr) => acc + curr, 0);
}

export { add };
