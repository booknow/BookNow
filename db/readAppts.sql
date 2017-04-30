
SELECT *
FROM new_appointment
WHERE user_id = $1
ORDER by id
;
