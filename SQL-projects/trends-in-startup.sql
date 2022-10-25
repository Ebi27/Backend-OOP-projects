-- Project: Analyzing the rising trends in startup. 

-- SELECT *
-- FROM startups;

-- calculate the total number of companies in the table 
-----------------------
-- SELECT COUNT(*)
-- FROM startups;


--Check for the total value of all companies in the table 
-- SELECT SUM(valuation)
-- FROM startups;

--What is the highesr amount raised by a startup?
-- SELECT MAX(raised)
-- FROM startups;

-- What is the maximum amount  during 'Seed' stage
-- SELECT MAX(raised)
-- FROM startups
-- WHERE stage = 'SEED';

--In what year was the oldest company on the list founded ? 
-- SELECT MAX(founded)
-- FROM startups;

-- Finding the valuations amount different sectors. 
---------------------------
--average valuation 

-- SELECT AVG(valuation)
-- FROM startups;


--average valuation in each category. Round the averages to two decimal and order the list from highest to lowest 

-- SELECT category, ROUND(AVG(valuation), 2)
-- FROM startups
-- GROUP BY 1
-- ORDER BY 2 DESC;

-- Checking for the most competitive markets 
--------------------------------

--return the name of each category with the total number of companies that belong to it 

-- SELECT category, COUNT(*)
-- FROM startups
-- GROUP BY category; 

--filter the result to include categories that have more than three companies in them (The most competitive markets)

-- SELECT category, COUNT(*)
-- FROM startups
-- GROUP BY category 
-- HAVING COUNT(*) > 3;


-- FInd the average size of a startup in each location 

-- SELECT AVG(employees)
-- FROM startups
-- GROUP BY location;

--WHat is the average size in each location 

SELECT AVG(employees)
FROM startups
GROUP BY location
HAVING AVG(employees) > 500;