CREATE TABLE orange (
    id SERIAL PRIMARY KEY,
    orange_name character varying(255) NOT NULL,
    orange_price decimal NOT NULL,
    orange_description character varying(255) NOT NULL
);

INSERT INTO orange (id, orange_name, orange_price, orange_description) VALUES 
(1, 'Navel', 10.00, 'A navel orange');