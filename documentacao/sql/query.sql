drop database donation;

SELECT * FROM `donation`.`address` LIMIT 1000;

SELECT * FROM `donation`.`administrator` LIMIT 1000;

SELECT * FROM `donation`.`campaign` LIMIT 1000;

SELECT * FROM `donation`.`denounce` LIMIT 1000;

SELECT * FROM `donation`.`donor` LIMIT 1000;

SELECT * FROM `donation`.`enjoy` LIMIT 1000;

SELECT * FROM `donation`.`follow` LIMIT 1000;

SELECT * FROM `donation`.`institutionn` LIMIT 1000;

SELECT * FROM `donation`.`item` LIMIT 1000;

SELECT * FROM `donation`.`test` LIMIT 1000;

SELECT * FROM `donation`.`trust` LIMIT 1000;

SELECT * FROM `donation`.`user` LIMIT 1000;

SELECT * FROM `donation`.`administrator` LEFT JOIN `donation`.`user` ON `user`.`id` = `administrator`.`user_id` LEFT JOIN `address` ON `administrator`.`address_id` = `address`.`id` LIMIT 1000;

SELECT * FROM `donation`.`institution` LEFT JOIN `donation`.`user` ON `user`.`id` = `institution`.`user_id` LEFT JOIN `address` ON `institution`.`address_id` = `address`.`id` LIMIT 1000;

SELECT * FROM `donation`.`donor` LEFT JOIN `donation`.`user` ON `user`.`id` = `donor`.`user_id` LEFT JOIN `address` ON `donor`.`address_id` = `address`.`id` LIMIT 1000;