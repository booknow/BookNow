INSERT INTO services_provided (sprovider_id, service_id)
VALUES ($1, $2)
RETURNING *;
