export const computePlay = (num) => {
  if(num > 100000) {
    return `${num.toString().substring(0, num.toString().length - 4)}万`
  }
  return num
}

export const formatDuration = (duration) => {
  // 转分
  let min = Math.ceil(duration / 1000 / 60)
  min = min < 10 ? '0' + min : min
  // 秒
  let sec = Math.ceil((duration / 1000) % 60)
  sec = sec < 10 ? '0' + sec : sec
  return min + ':' + sec
}