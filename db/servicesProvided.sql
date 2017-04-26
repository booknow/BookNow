Select service_name, services_provided_price FROM services
JOIN services_provided
ON services.service_id = services_provided.service_id
