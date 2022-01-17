/**
 * 获取当前滚动条所在位置
 */
export function getScrollTop() {
  let scrollTop = 0;
  if (document && document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  return scrollTop;
}

/**
 * TODO
 * @param {*} position 滚动到何处
 * @param {*} step 步长
 * @param {*} current 滚动条当前位置
 */
export function scrollToAnimate(position: number = 0, step: number = 100, current: number = 0) {
  let start = 0;
  const timer = setInterval(() => {
    if (current - start >= position) {
      start += step;
      if (current - start >= position) {
        window.scrollTo(0, current - start);
      } else {
        window.scrollTo(0, position);
      }
    } else {
      clearInterval(timer);
    }
  }, 0);
}
/**
 * 获取滚动条位置百分比
 */
export function getScrollPercent(offsetTop: number = 0) {
  let percent = 0;
  if (offsetTop < getScrollTop()) {
    percent = Math.round(
      ((getScrollTop() - offsetTop) / (document.body.scrollHeight - offsetTop - window.innerHeight)) * 100,
    );
  }
  return percent > 100 ? 100 : percent;
}
