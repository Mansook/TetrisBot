export const CalScore = (lines) => Math.floor(100 * Math.pow(lines, 1.6));

export const CalLevel = (score) => Math.floor(score / 100);

export const CalStage = (score) => Math.floor(score / 3);
