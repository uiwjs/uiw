/**
 * Returns a random text
 */
export function randomid(): string {
  return parseInt(String(Math.random() * 1e15), 10).toString(36);
}
