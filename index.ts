
export = function concatString(
  array: [any] = ["empty..."],
  between: string = "",
  init: string = "",
  end: string = ""
) {
  return array.reduce((field, concat, index) => {
    const result = (field += index < array.length - 1 ? concat + between : concat);
    return index < array.length - 1 ? result : result + end;
  }, init);
}