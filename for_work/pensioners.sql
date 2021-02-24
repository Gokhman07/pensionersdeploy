# ************************************************************
# Sequel Ace SQL dump
# Version 3020
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: 127.0.0.1 (MySQL 8.0.22)
# Database: pensioners
# Generation Time: 2021-02-22 10:48:17 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table admins
# ------------------------------------------------------------

CREATE TABLE `admins` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` text,
  `lastname` text,
  `usename` text,
  `password` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;

INSERT INTO `admins` (`id`, `username`, `lastname`, `usename`, `password`)
VALUES
	(1,NULL,NULL,NULL,NULL);

/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table childrens
# ------------------------------------------------------------

CREATE TABLE `childrens` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` text,
  `lastname` text,
  `father_id` int unsigned NOT NULL,
  `mother_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mother_id` (`mother_id`),
  KEY `father_id` (`father_id`),
  CONSTRAINT `childrens_ibfk_1` FOREIGN KEY (`mother_id`) REFERENCES `pensioners` (`id`),
  CONSTRAINT `childrens_ibfk_2` FOREIGN KEY (`father_id`) REFERENCES `pensioners` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# Dump of table couples
# ------------------------------------------------------------

CREATE TABLE `couples` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `couples` WRITE;
/*!40000 ALTER TABLE `couples` DISABLE KEYS */;

INSERT INTO `couples` (`id`, `title`)
VALUES
	(1,'tret');

/*!40000 ALTER TABLE `couples` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table empl_stats
# ------------------------------------------------------------

CREATE TABLE `empl_stats` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `empl_stats` WRITE;
/*!40000 ALTER TABLE `empl_stats` DISABLE KEYS */;

INSERT INTO `empl_stats` (`id`, `title`)
VALUES
	(1,'עצמאית'),
	(2,'שכירה'),
	(3,'וגם וגם');

/*!40000 ALTER TABLE `empl_stats` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table group_admins
# ------------------------------------------------------------

CREATE TABLE `group_admins` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` text,
  `lastname` text,
  `username` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `password` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `group_admins` WRITE;
/*!40000 ALTER TABLE `group_admins` DISABLE KEYS */;

INSERT INTO `group_admins` (`id`, `name`, `lastname`, `username`, `password`)
VALUES
	(1,'Elena','Vasya','elen','eerer');

/*!40000 ALTER TABLE `group_admins` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table marit_statuses
# ------------------------------------------------------------

CREATE TABLE `marit_statuses` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `status` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `marit_statuses` WRITE;
/*!40000 ALTER TABLE `marit_statuses` DISABLE KEYS */;

INSERT INTO `marit_statuses` (`id`, `status`)
VALUES
	(1,'יחיד'),
	(2,'נשוי'),
	(3,'אלמן'),
	(4,'גרוש');

/*!40000 ALTER TABLE `marit_statuses` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pensioners
# ------------------------------------------------------------

CREATE TABLE `pensioners` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `lastname` text,
  `username` text,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `passport_number` text,
  `marital_id` int unsigned NOT NULL,
  `id_empl_status` int unsigned NOT NULL,
  `occupation` text,
  `belong_comp` text,
  `company` text,
  `birth_date` date DEFAULT NULL,
  `card_number` text,
  `group_id` int unsigned NOT NULL,
  `couple_id` int unsigned NOT NULL,
  `token` text,
  PRIMARY KEY (`id`),
  KEY `id_empl_status` (`id_empl_status`),
  KEY `marital_id` (`marital_id`),
  KEY `group_id` (`group_id`),
  KEY `couple_id` (`couple_id`),
  CONSTRAINT `pensioners_ibfk_1` FOREIGN KEY (`id_empl_status`) REFERENCES `empl_stats` (`id`),
  CONSTRAINT `pensioners_ibfk_2` FOREIGN KEY (`marital_id`) REFERENCES `marit_statuses` (`id`),
  CONSTRAINT `pensioners_ibfk_3` FOREIGN KEY (`group_id`) REFERENCES `group_admins` (`id`),
  CONSTRAINT `pensioners_ibfk_4` FOREIGN KEY (`couple_id`) REFERENCES `couples` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `pensioners` WRITE;
/*!40000 ALTER TABLE `pensioners` DISABLE KEYS */;

INSERT INTO `pensioners` (`id`, `name`, `lastname`, `username`, `password`, `passport_number`, `marital_id`, `id_empl_status`, `occupation`, `belong_comp`, `company`, `birth_date`, `card_number`, `group_id`, `couple_id`, `token`)
VALUES
	(6,'Tanya','Tretyakova','tan48','rererewr','3434',1,2,'doctor','1','FEF','2029-09-23','3434',1,1,NULL);

/*!40000 ALTER TABLE `pensioners` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table risk_insurances
# ------------------------------------------------------------

CREATE TABLE `risk_insurances` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_pensioner` int unsigned NOT NULL,
  `manufacture_name` text,
  `pos_type` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `collective_name` text,
  `cash_opening_date` date DEFAULT NULL,
  `report_year` int DEFAULT NULL,
  `period_report` int DEFAULT NULL,
  `last_upadete_of_this_screen` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `total_annual_premium` int DEFAULT NULL,
  `insuarunce_amount` int DEFAULT NULL,
  `insurance_agency_handles` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `agent_name` text,
  `agent_telephone` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `agent_mail` text,
  `remarks` mediumtext,
  PRIMARY KEY (`id`),
  KEY `id_pensioner` (`id_pensioner`),
  CONSTRAINT `risk_insurances_ibfk_1` FOREIGN KEY (`id_pensioner`) REFERENCES `pensioners` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# Dump of table user_types
# ------------------------------------------------------------

CREATE TABLE `user_types` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `type` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `user_types` WRITE;
/*!40000 ALTER TABLE `user_types` DISABLE KEYS */;

INSERT INTO `user_types` (`id`, `type`)
VALUES
	(1,'admin'),
	(2,'group_admin');

/*!40000 ALTER TABLE `user_types` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
