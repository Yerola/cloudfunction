import * as fs from "fs";

interface ScoreEntry {
  teamName: string;
  score: number;
}

const readScoreData = (): ScoreEntry[] => {
  const rawData = fs.readFileSync("teamsScores.json");
  return JSON.parse(rawData.toString()) as ScoreEntry[];
};

const calculatePercentile = (
  percentile: number,
  sortedScores: number[]
): number => {
  const index = Math.ceil((percentile / 100) * sortedScores.length) - 1;
  return sortedScores[index];
};

const calculatePercentiles = (scores: number[]): Record<string, number> => {
  const sortedScores = [...scores].sort((a, b) => a - b);
  return {
    "10th_percentile": calculatePercentile(10, sortedScores),
    "50th_percentile": calculatePercentile(50, sortedScores),
    "90th_percentile": calculatePercentile(90, sortedScores),
  };
};

const main = () => {
  const scoreData = readScoreData();
  const scores = scoreData.map((entry) => entry.score);

  const result = calculatePercentiles(scores);

  // Store the result in a separate json object
  fs.writeFileSync("percentiles.json", JSON.stringify(result, null, 2));

  console.log("Percentiles calculated and saved to percentiles.json");
};

main();
