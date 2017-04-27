SELECT *
FROM services_provided
JOIN services
ON services.service_id = services_provided.service_id
WHERE sprovider_id = $1
;
