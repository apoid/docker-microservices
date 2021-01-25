CREATE DATABASE if not exists testdb;

USE testdb;
create TABLE if not exists users (
    id INT AUTO_INCREMENT NOT NULL,
    first_name NVARCHAR(50) NOT NULL,
    last_name NVARCHAR(50),
    password NVARCHAR(250) NOT NULL,
    email NVARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=INNODB;


create TABLE if not exists orders (
    id INT AUTO_INCREMENT NOT NULL,
    user_id INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk1_orders FOREIGN KEY (user_id) REFERENCES users(id)

)ENGINE=INNODB;

create TABLE if not exists products (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(25) NOT NULL,
    description VARCHAR(250),
    price DECIMAL(8,2) NOT NULL,
    PRIMARY KEY (id)
)ENGINE=INNODB;


INSERT INTO users (first_name, last_name, password, email)
VALUES (
    'Gianluca',
    'Angioni',
    'test',
    'gian.lu@email.com'
);
SET @usrid = LAST_INSERT_ID();


INSERT INTO orders (user_id, total)
VALUES (
    @usrid,
    25.86
);

INSERT INTO products (name, description, price)
VALUES (
    'Test Product',
    'This is a test product.',
    10.52
);