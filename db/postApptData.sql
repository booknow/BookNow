INSERT INTO new_appointment (email, first_name, last_name, address_street, address_city, address_state, address_zip, service_name, frequency, date, time, comments)
  values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
  returning *;
