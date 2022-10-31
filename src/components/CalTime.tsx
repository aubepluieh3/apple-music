export const onCalcMusicTime = (time = 0) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  return minutes + ":" + String(seconds).padStart(2, "0");
};
