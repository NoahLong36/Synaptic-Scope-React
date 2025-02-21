USE synapticScope;

CREATE TABLE patient(
	patient_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    date_of_birth DATETIME NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(10) NOT NULL,
    conditions VARCHAR(1000),
    account_type INT NOT NULL
);


CREATE TABLE patient_password(
	fk_patient_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    FOREIGN KEY (fk_patient_id) REFERENCES patient(patient_id),
    password VARCHAR(256) NOT NULL
);

ALTER TABLE patient AUTO_INCREMENT = 111;


INSERT IGNORE INTO patient
(first_name, last_name, email, username, date_of_birth, age, gender, conditions, account_type)
VALUES
('John','Doe','johndoe@example.com','jdoe','1985-05-15',40,'Male','Hypertension',1),
('Abe','Lincoln','abelincoln@email.com','abelinc','1969-5-10',56,'Male','Too tall',1);


select*from patient;

