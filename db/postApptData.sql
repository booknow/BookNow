INSERT INTO new_appointment (first_name, last_name, address_street, address_city, address_state, address_zip, service_name, frequency, total_price)
  values($1, $2, $3, $4, $5, $6, $7, $8, $9)
  returning *;
