CREATE DATABASE  IF NOT EXISTS `my_uni` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `my_uni`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: my_uni
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(32) NOT NULL,
  `code` varchar(16) NOT NULL,
  `description` varchar(256) DEFAULT NULL,
  `credit_hours` int(11) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `department_id` int(11) NOT NULL,
  `prerequisite_formula` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code_UNIQUE` (`code`),
  KEY `fk_cource_department1_idx` (`department_id`),
  CONSTRAINT `fk_cource_department1` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_offering`
--

DROP TABLE IF EXISTS `course_offering`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course_offering` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `course_id` int(11) NOT NULL,
  `semester_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cource_offering_cource1_idx` (`course_id`),
  KEY `fk_course_offering_semester1_idx` (`semester_id`),
  CONSTRAINT `fk_cource_offering_cource1` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_course_offering_semester1` FOREIGN KEY (`semester_id`) REFERENCES `semester` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_offering`
--

LOCK TABLES `course_offering` WRITE;
/*!40000 ALTER TABLE `course_offering` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_offering` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_offering_enrollment`
--

DROP TABLE IF EXISTS `course_offering_enrollment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course_offering_enrollment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `enrollment_id` int(11) NOT NULL,
  `course_offering_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `section_id` int(11) DEFAULT NULL,
  `total_grade` int(11) DEFAULT NULL,
  `letter_grade` char(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `enrollment_id_and_course_UNIQUE` (`enrollment_id`,`course_offering_id`),
  KEY `fk_enrollment_has_group_group1_idx` (`group_id`),
  KEY `fk_enrollment_has_group_enrollment1_idx` (`enrollment_id`),
  KEY `fk_enrollment_has_group_course_offering1_idx` (`course_offering_id`),
  KEY `fk_enrollment_has_group_group2_idx` (`section_id`),
  CONSTRAINT `fk_enrollment_has_group_course_offering1` FOREIGN KEY (`course_offering_id`) REFERENCES `course_offering` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_enrollment_has_group_enrollment1` FOREIGN KEY (`enrollment_id`) REFERENCES `enrollment` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_enrollment_has_group_group1` FOREIGN KEY (`group_id`) REFERENCES `group` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_enrollment_has_group_group2` FOREIGN KEY (`section_id`) REFERENCES `group` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_offering_enrollment`
--

LOCK TABLES `course_offering_enrollment` WRITE;
/*!40000 ALTER TABLE `course_offering_enrollment` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_offering_enrollment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_offering_staff`
--

DROP TABLE IF EXISTS `course_offering_staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course_offering_staff` (
  `user_id` int(11) NOT NULL,
  `course_offering_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`,`course_offering_id`),
  KEY `fk_user_has_course_offering_course_offering1_idx` (`course_offering_id`),
  KEY `fk_user_has_course_offering_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_has_course_offering_course_offering1` FOREIGN KEY (`course_offering_id`) REFERENCES `course_offering` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_course_offering_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_offering_staff`
--

LOCK TABLES `course_offering_staff` WRITE;
/*!40000 ALTER TABLE `course_offering_staff` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_offering_staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(32) NOT NULL,
  `description` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1,'2017-05-02 00:49:14','2017-05-02 00:49:14','cs','cs');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enrollment`
--

DROP TABLE IF EXISTS `enrollment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `enrollment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` int(11) NOT NULL,
  `semester_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_enrollment_user1_idx` (`user_id`),
  KEY `fk_enrollment_semester1_idx` (`semester_id`),
  CONSTRAINT `fk_enrollment_semester1` FOREIGN KEY (`semester_id`) REFERENCES `semester` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_enrollment_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enrollment`
--

LOCK TABLES `enrollment` WRITE;
/*!40000 ALTER TABLE `enrollment` DISABLE KEYS */;
/*!40000 ALTER TABLE `enrollment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group`
--

DROP TABLE IF EXISTS `group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(32) DEFAULT NULL,
  `maxStudents` int(11) NOT NULL,
  `start_time` time DEFAULT NULL,
  `duration_time` time DEFAULT NULL,
  `course_offering_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Group_cource_offering1_idx` (`course_offering_id`),
  KEY `fk_Group_Group1_idx` (`group_id`),
  CONSTRAINT `fk_Group_Group1` FOREIGN KEY (`group_id`) REFERENCES `group` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Group_cource_offering1` FOREIGN KEY (`course_offering_id`) REFERENCES `course_offering` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group`
--

LOCK TABLES `group` WRITE;
/*!40000 ALTER TABLE `group` DISABLE KEYS */;
/*!40000 ALTER TABLE `group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_duration`
--

DROP TABLE IF EXISTS `group_duration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group_duration` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `start_time` time DEFAULT NULL,
  `duration` time DEFAULT NULL,
  `repeat_every_x_days` int(11) DEFAULT '7',
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_lecture_duration_group1_idx` (`group_id`),
  CONSTRAINT `fk_lecture_duration_group1` FOREIGN KEY (`group_id`) REFERENCES `group` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_duration`
--

LOCK TABLES `group_duration` WRITE;
/*!40000 ALTER TABLE `group_duration` DISABLE KEYS */;
/*!40000 ALTER TABLE `group_duration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `options`
--

DROP TABLE IF EXISTS `options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `options` (
  `key` varchar(32) NOT NULL,
  `value` varchar(512) NOT NULL,
  `auto_load` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`key`),
  UNIQUE KEY `name_UNIQUE` (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `options`
--

LOCK TABLES `options` WRITE;
/*!40000 ALTER TABLE `options` DISABLE KEYS */;
/*!40000 ALTER TABLE `options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission`
--

DROP TABLE IF EXISTS `permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_self` tinyint(1) NOT NULL,
  `read_self` tinyint(1) NOT NULL,
  `update_self` tinyint(1) NOT NULL,
  `delete_self` tinyint(1) NOT NULL,
  `create_others` tinyint(1) NOT NULL,
  `read_others` tinyint(1) NOT NULL,
  `update_others` tinyint(1) NOT NULL,
  `delete_others` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission`
--

LOCK TABLES `permission` WRITE;
/*!40000 ALTER TABLE `permission` DISABLE KEYS */;
INSERT INTO `permission` VALUES (1,'2017-05-02 00:48:36','2017-05-02 00:48:36',1,1,1,1,1,1,1,1);
/*!40000 ALTER TABLE `permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prerequisite`
--

DROP TABLE IF EXISTS `prerequisite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prerequisite` (
  `cource_id` int(11) NOT NULL,
  `prerequisite_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cource_id`,`prerequisite_id`),
  KEY `fk_cource_has_cource_cource2_idx` (`prerequisite_id`),
  KEY `fk_cource_has_cource_cource1_idx` (`cource_id`),
  CONSTRAINT `fk_cource_has_cource_cource1` FOREIGN KEY (`cource_id`) REFERENCES `course` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_cource_has_cource_cource2` FOREIGN KEY (`prerequisite_id`) REFERENCES `course` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prerequisite`
--

LOCK TABLES `prerequisite` WRITE;
/*!40000 ALTER TABLE `prerequisite` DISABLE KEYS */;
/*!40000 ALTER TABLE `prerequisite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `semester`
--

DROP TABLE IF EXISTS `semester`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `semester` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `year` year(4) NOT NULL,
  `name` varchar(10) NOT NULL,
  `max_credit_hour` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `registration_start_date` date NOT NULL,
  `registration_end_date` date NOT NULL,
  `department_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `year_semester_UNIQUE` (`year`,`name`),
  KEY `fk_Semester_department1_idx` (`department_id`),
  CONSTRAINT `fk_Semester_department1` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semester`
--

LOCK TABLES `semester` WRITE;
/*!40000 ALTER TABLE `semester` DISABLE KEYS */;
/*!40000 ALTER TABLE `semester` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(32) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(32) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `password` char(60) NOT NULL,
  `gender` int(1) DEFAULT NULL,
  `phone` int(11) NOT NULL,
  `department_id` int(11) DEFAULT NULL,
  `user_role_id` int(11) NOT NULL,
  `email_valid` tinyint(1) DEFAULT NULL,
  `phone_valid` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_user_department1_idx` (`department_id`),
  KEY `fk_user_user_role1_idx` (`user_role_id`),
  CONSTRAINT `fk_user_department1` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_user_user_role1` FOREIGN KEY (`user_role_id`) REFERENCES `user_role` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'2017-05-02 00:52:04','2017-05-02 00:52:04','Abdelrahman Abdelhamed','abdelrhmanabdelhamed@gmail.com','professor','1996-11-29','$2a$08$ChvWXSkHPjhF8/6g7s2lDez/cNyEmRzT6EMpsrMUyOrcmCb81asT6',0,1128551888,1,1,1,1),(4,'2017-05-02 00:53:32','2017-05-02 00:53:32','Abdelrahman Abdelhamed','abdo2006-2007@hotmail.com','admin','1996-11-29','$2a$08$V1R9LwXXPar7z.0i3qImOOuETSxRXv2UCz6iFSSEo3LSDRY8KCtOC',0,1128551888,1,1,1,1),(5,'2017-05-02 01:01:10','2017-05-02 01:01:10','Abdelrahman Abdelhamed','abdo2009-2011@hotmail.com','student','1996-11-29','$2a$08$FcOFgsv5MLZWX2v/MilT5On1FHRwzmralE38q.in7plqzC7OPXTD6',0,1128551888,1,1,1,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(32) NOT NULL,
  `description` varchar(256) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `user_role` int(11) NOT NULL,
  `permission` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `department` int(11) NOT NULL,
  `course` int(11) NOT NULL,
  `semester` int(11) NOT NULL,
  `course_offering` int(11) NOT NULL,
  `group` int(11) NOT NULL,
  `enrollment` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_role_permission1_idx` (`user_role`),
  KEY `fk_user_role_permission2_idx` (`permission`),
  KEY `fk_user_role_permission3_idx` (`user`),
  KEY `fk_user_role_permission4_idx` (`department`),
  KEY `fk_user_role_permission5_idx` (`course`),
  KEY `fk_user_role_permission6_idx` (`semester`),
  KEY `fk_user_role_permission7_idx` (`course_offering`),
  KEY `fk_user_role_permission8_idx` (`group`),
  KEY `fk_user_role_permission9_idx` (`enrollment`),
  CONSTRAINT `fk_user_role_permission1` FOREIGN KEY (`user_role`) REFERENCES `permission` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_role_permission2` FOREIGN KEY (`permission`) REFERENCES `permission` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_role_permission3` FOREIGN KEY (`user`) REFERENCES `permission` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_role_permission4` FOREIGN KEY (`department`) REFERENCES `permission` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_role_permission5` FOREIGN KEY (`course`) REFERENCES `permission` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_role_permission6` FOREIGN KEY (`semester`) REFERENCES `permission` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_role_permission7` FOREIGN KEY (`course_offering`) REFERENCES `permission` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_role_permission8` FOREIGN KEY (`group`) REFERENCES `permission` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_role_permission9` FOREIGN KEY (`enrollment`) REFERENCES `permission` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,'2017-05-02 00:48:58','2017-05-02 00:48:58','admin','boss',1,1,1,1,1,1,1,1,1,1);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `validation_key`
--

DROP TABLE IF EXISTS `validation_key`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `validation_key` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `reason` varchar(32) DEFAULT NULL,
  `key` char(64) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `expire_after` time DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_validation_key_user1_idx` (`user_id`),
  CONSTRAINT `fk_validation_key_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `validation_key`
--

LOCK TABLES `validation_key` WRITE;
/*!40000 ALTER TABLE `validation_key` DISABLE KEYS */;
/*!40000 ALTER TABLE `validation_key` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'my_uni'
--

--
-- Dumping routines for database 'my_uni'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-02  3:03:50
