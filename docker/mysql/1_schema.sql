-- donation

CREATE TABLE address (
    id BIGINT NOT NULL AUTO_INCREMENT,
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    district VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    number VARCHAR(255) NOT NULL,
    postal_code VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE user (
    id BIGINT NOT NULL AUTO_INCREMENT,
    active BOOLEAN NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE institution (
    id BIGINT NOT NULL AUTO_INCREMENT,
    about TEXT NOT NULL,
    active BOOLEAN NOT NULL,
    cnpj VARCHAR(255) NOT NULL,
    corporate_name VARCHAR(255) NOT NULL,
    cover_image VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    email VARCHAR(255),
    fantasy_name VARCHAR(255) NOT NULL,
    link_alternate VARCHAR(255),
    link_main VARCHAR(255),
    mission TEXT NOT NULL,
    opening_date DATE NOT NULL,

    pending BOOLEAN NOT NULL,
    phone VARCHAR(255),
    resume VARCHAR(255) NOT NULL,
    value TEXT NOT NULL,
    vision TEXT NOT NULL,
    address_id BIGINT,
    user_id BIGINT,

    PRIMARY KEY (id),

    CONSTRAINT fk_institution_address
        FOREIGN KEY (address_id) REFERENCES address(id),

    CONSTRAINT fk_institution_user
        FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE administrator (
    id BIGINT NOT NULL AUTO_INCREMENT,
    active BOOLEAN NOT NULL,
    cover_image VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    address_id BIGINT,
    user_id BIGINT,

    PRIMARY KEY (id),

    CONSTRAINT fk_admin_address
        FOREIGN KEY (address_id) REFERENCES address(id),

    CONSTRAINT fk_admin_user
        FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE donor (
    id BIGINT NOT NULL AUTO_INCREMENT,
    active BOOLEAN NOT NULL,
    birth_date DATE NOT NULL,
    cover_image VARCHAR(255) NOT NULL,
    cpf VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    address_id BIGINT,
    user_id BIGINT,

    PRIMARY KEY (id),

    CONSTRAINT fk_donor_address
        FOREIGN KEY (address_id) REFERENCES address(id),

    CONSTRAINT fk_donor_user
        FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE campaign (
    id BIGINT NOT NULL AUTO_INCREMENT,
    active BOOLEAN NOT NULL,
    category VARCHAR(255) NOT NULL,
    cover_image VARCHAR(255) NOT NULL,
    resume VARCHAR(255) NOT NULL,
    result TEXT,
    description TEXT NOT NULL,
    status VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    institution_id BIGINT,

    PRIMARY KEY (id),

    CONSTRAINT fk_campaign_institution
        FOREIGN KEY (institution_id) REFERENCES institution(id)
);

CREATE TABLE item (
    id BIGINT NOT NULL AUTO_INCREMENT,
    current_value INT NOT NULL,
    item_description TEXT NOT NULL,
    item_name VARCHAR(255) NOT NULL,
    required_value INT NOT NULL,
    type VARCHAR(255) NOT NULL,
    campaign_id BIGINT,

    PRIMARY KEY (id),

    CONSTRAINT fk_item_campaign
        FOREIGN KEY (campaign_id) REFERENCES campaign(id)
);

CREATE TABLE follow (
    id BIGINT NOT NULL AUTO_INCREMENT,
    institution_id BIGINT,
    user_id BIGINT,
    
    PRIMARY KEY (id),

    CONSTRAINT fk_follow_user
        FOREIGN KEY (user_id) REFERENCES user(id),

    CONSTRAINT fk_follow_institution
        FOREIGN KEY (institution_id) REFERENCES institution(id)
);

CREATE TABLE trust (
    id BIGINT NOT NULL AUTO_INCREMENT,
    institution_id BIGINT,
    user_id BIGINT,

    PRIMARY KEY (id),

    CONSTRAINT fk_trust_institution
        FOREIGN KEY (institution_id) REFERENCES institution(id),

    CONSTRAINT fk_trust_user
        FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE enjoy (
    id BIGINT NOT NULL AUTO_INCREMENT,
    campaign_id BIGINT,
    user_id BIGINT,

    PRIMARY KEY (id),

    CONSTRAINT fk_enjoy_user
        FOREIGN KEY (user_id) REFERENCES user(id),

    CONSTRAINT fk_enjoy_campaign
        FOREIGN KEY (campaign_id) REFERENCES campaign(id)
);

CREATE TABLE denounce (
    id BIGINT NOT NULL AUTO_INCREMENT,
    accept BOOLEAN NOT NULL,
    active BOOLEAN NOT NULL,
    date DATE NOT NULL,
    message TEXT NOT NULL,
    title VARCHAR(255) NOT NULL,
    user_id BIGINT,
    campaign_id BIGINT,


    PRIMARY KEY (id),

    CONSTRAINT fk_denounce_user
        FOREIGN KEY (user_id) REFERENCES user(id),

    CONSTRAINT fk_denounce_campaign
        FOREIGN KEY (campaign_id) REFERENCES campaign(id)
);

CREATE TABLE teste (
    id BIGINT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);