export const CalScore = (lines) => Math.floor(100 * Math.pow(lines, 1.6));

export const CalLevel = (score) => Math.floor(score / 100);

export const CalStage = (score) => {
  if (score <= 200) return 1;
  if (score <= 500) return 2;
  if (score <= 1000) return 3;
  if (score <= 1500) return 4;
  if (score <= 2200) return 5;
  if (score <= 3000) return 6;
  if (score <= 4000) return 7;
  if (score <= 5500) return 8;
  if (score <= 7000) return 9;
  if (score <= 10000) return 10;
  return 7;
};
