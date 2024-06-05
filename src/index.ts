async function main() {
  const { add } = await import("./calculator");
  console.log(add("1,2,3"));
}

main();
