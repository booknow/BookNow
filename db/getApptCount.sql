SELECT count (id)
FROM new_appointment
WHERE user_id = $1
;
