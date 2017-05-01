SELECT *
FROM services_provided
LEFT JOIN services ON services.service_id = services_provided.service_id
LEFT JOIN users ON users.id = services_provided.sprovider_id
WHERE sprovider_id = $1
;
