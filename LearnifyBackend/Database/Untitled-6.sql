SELECT * FROM Results
WHERE Score > (SELECT AVG(Score) FROM Results);