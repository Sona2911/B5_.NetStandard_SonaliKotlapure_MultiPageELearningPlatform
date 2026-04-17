SELECT u.FullName, r.Score
FROM Results r
INNER JOIN Users u ON r.UserId = u.UserId;