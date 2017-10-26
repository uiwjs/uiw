let uid = Date.now()
function randomid() {
  return (uid++).toString(36)
}
export { randomid }