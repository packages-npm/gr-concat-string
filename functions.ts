/**
 * Concatenates string array by passing as divider text, initial and final.
 * @param array Array de string para concatenação.
 * @param betewee String que irá ficar entre um valor e outro.
 * @param init String inicial da concatenção.
 * @param end String final da concatenação.
 * @return String
 */
export function concatString(
  array: string[] = ["empty..."],
  between: string = "",
  init: string = "",
  end: string = ""
): string {
  return array.reduce((field, concat, index) => {
    const result = (field +=
      index < array.length - 1 ? concat + between : concat);
    return index < array.length - 1 ? result : result + end;
  }, init);
}

/**
 * queryEncodeURI
 * @param QUERY String
 * @return String
 */
export function queryEncodeURI(query: string): string {
  query = query.replace(/\n( )+/g, "");
  return encodeURI(query);
}
