// @ts-check

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
  const firstChar = line[0];
  console.log(firstChar);
  return firstChar;
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
  const upperCase = word[0].toUpperCase() + word.slice(1).toLowerCase();
  console.log(upperCase);
  return upperCase;
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  const lastLetter = line.trim().slice(-1);
  console.log(lastLetter);
  return lastLetter;
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  const formalSentence = frontDoorPassword(word) + `, please`;
  console.log(formalSentence);
  return formalSentence;
}
