INSERT INTO new_appointment (email, first_name, last_name, address_street, address_city, address_state, address_zip, frequency)
  values($1, $2, $3, $4, $5, $6, $7, $8)
  returning *;