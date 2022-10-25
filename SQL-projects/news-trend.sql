-- Project: Analyzing hacker news trends while working with a table named 
-- hacker_news that contains stories from Hacker News since its launch in 2007. It has the following columns:
-- title: the title of the story
-- user: the user who submitted the story
-- score: the score of the story
-- timestamp: the time of the story
-- url: the link of the story

-----------------------------------------

 -- Hacker News stories are essentially links that take users to other websites.
 
 -- Find the most popular new stories (top 5)

--  SELECT title, score
-- FROM hacker_news
-- ORDER BY score DESC
-- LIMIT 5;

-- Moderating Hacker News 
-----------------------------
-- Confirm if only a small percentage of hacker news submitters take the majority if points 

--getting total sum of user scores

-- SELECT SUM(score)
-- FROM hacker_news; 

--Checking for users who have gotten combined scores of more than 200 and their combined score

-- SELECT user, SUM(score)
-- FROM hacker_news
-- GROUP BY user
-- HAVING SUM(score) > 200
-- ORDER BY 2 DESC;

--Adding these users scores together and dividing by the total to get the percentage 

-- SELECT (517 + 309 + 304 + 282) / 6366.0; We got 0.2%, which means hacker news isn't dominated by these users.

--find how many times a user has posted this tricking url 
-- SELECT user, COUNT(*)
-- FROM hacker_news
-- WHERE url LIKE '%watch?v=dQw4w9WgXcQ%'
-- GROUP BY user
-- ORDER BY COUNT(*) DESC;

--What sites feed hacker news out of these three sites? 

-- SELECT CASE
--    WHEN url LIKE '%github.com%' THEN 'GitHub'
--    WHEN url LIKE '%medium.com%' THEN 'Medium'
--    WHEN url LIKE '%nytimes.com%' THEN 'New York Times'
--    ELSE 'other'
--   END AS 'Source',
--   COUNT(*) 
-- FROM hacker_news
--   GROUP BY 1;

--what's the best time to post a story?
SELECT timestamp
FROM hacker_news
LIMIT 10;

SELECT strftime('%H', timestamp) AS 'Hour', 
   ROUND(AVG(score), 1) AS 'Average Score', 
   COUNT(*) AS 'Number of Stories'
FROM hacker_news
WHERE timestamp IS NOT NULL
GROUP BY 1
ORDER BY 1;