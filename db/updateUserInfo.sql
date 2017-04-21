INSERT INTO new_appointment (email)
values ($1)

returning *;
