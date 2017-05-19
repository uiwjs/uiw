let uid = Date.now()
export function randomid () {
  return (uid++).toString(36)
}