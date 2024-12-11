CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    preferences JSONB
);

CREATE TABLE remedies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    symptoms TEXT[],
    ingredients TEXT[],
    condition VARCHAR(255)
);
