SELECT QuizId, AVG(Score) AS AvgScore
FROM Results
GROUP BY QuizId;