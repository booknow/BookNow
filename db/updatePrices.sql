UPDATE services_provided
SET services_provided_price = $2
WHERE sprovider_id = $3 AND service_id = $1
RETURNING *
;
