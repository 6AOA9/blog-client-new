-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: blog_db
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ads`
--

DROP TABLE IF EXISTS `ads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ads` (
  `id` int NOT NULL AUTO_INCREMENT,
  `picture` varchar(255) DEFAULT NULL,
  `url` longtext,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ads`
--

LOCK TABLES `ads` WRITE;
/*!40000 ALTER TABLE `ads` DISABLE KEYS */;
/*!40000 ALTER TABLE `ads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'FootBall',NULL,'2022-05-30 18:51:43','2022-05-30 18:51:43'),(2,'Movies',NULL,'2022-05-30 19:07:53','2022-05-30 19:07:53'),(5,'Games',NULL,'2022-05-30 21:43:55','2022-05-30 21:43:55');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_posts`
--

DROP TABLE IF EXISTS `category_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post_id` int NOT NULL,
  `category_id` int NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `post_id` (`post_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `category_posts_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`),
  CONSTRAINT `category_posts_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_posts`
--

LOCK TABLES `category_posts` WRITE;
/*!40000 ALTER TABLE `category_posts` DISABLE KEYS */;
/*!40000 ALTER TABLE `category_posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` varchar(255) DEFAULT NULL,
  `user_id` int NOT NULL,
  `post_id` int NOT NULL,
  `category_id` int NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `post_id` (`post_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`),
  CONSTRAINT `comments_ibfk_3` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `options`
--

DROP TABLE IF EXISTS `options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `options` (
  `id` int NOT NULL AUTO_INCREMENT,
  `optionName` varchar(255) DEFAULT NULL,
  `optionValue` longtext,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `options`
--

LOCK TABLES `options` WRITE;
/*!40000 ALTER TABLE `options` DISABLE KEYS */;
/*!40000 ALTER TABLE `options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_tags`
--

DROP TABLE IF EXISTS `post_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post_tags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post_id` int NOT NULL,
  `tag_id` int NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `post_id` (`post_id`),
  KEY `tag_id` (`tag_id`),
  CONSTRAINT `post_tags_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`),
  CONSTRAINT `post_tags_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_tags`
--

LOCK TABLES `post_tags` WRITE;
/*!40000 ALTER TABLE `post_tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `desc` longtext,
  `photo` varchar(255) DEFAULT NULL,
  `user_id` int NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (74,'test1','KJDASKJDALKSJDLASKJDLSAKJD','photo-1654684195164-974043267.png',49,NULL,'2022-06-08 10:29:55','2022-06-08 10:29:55'),(75,'test2','KJDASKJDALKSJDLASKJDLSAKJD','photo-1654684205381-969036420.png',49,NULL,'2022-06-08 10:30:05','2022-06-08 10:30:05'),(76,'test3','KJDASKJDALKSJDLASKJDLSAKJD','photo-1654684209404-530732098.png',49,NULL,'2022-06-08 10:30:09','2022-06-08 10:30:09'),(77,'test4','KJDASKJDALKSJDLASKJDLSAKJD','photo-1654684212111-391187562.png',49,NULL,'2022-06-08 10:30:12','2022-06-08 10:30:12'),(78,'test5','KJDASKJDALKSJDLASKJDLSAKJD','photo-1654684215043-164345478.png',49,NULL,'2022-06-08 10:30:15','2022-06-08 10:30:15'),(79,'test6','KJDASKJDALKSJDLASKJDLSAKJD','photo-1654684217955-409169096.png',49,NULL,'2022-06-08 10:30:17','2022-06-08 10:30:17'),(80,'test7','KJDASKJDALKSJDLASKJDLSAKJD','photo-1654684221225-462539578.png',49,NULL,'2022-06-08 10:30:21','2022-06-08 10:30:21'),(81,'test8','KJDASKJDALKSJDLASKJDLSAKJD','photo-1654684224115-43084274.png',49,NULL,'2022-06-08 10:30:24','2022-06-08 10:30:24'),(82,'test9','KJDASKJDALKSJDLASKJDLSAKJD','photo-1654684227238-52218132.png',49,NULL,'2022-06-08 10:30:27','2022-06-08 10:30:27');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20220525008631-create-user.js'),('20220525008704-create-post.js'),('20220525095938-create-category.js'),('20220525100423-create-category-posts.js'),('20220530110209-edit-user_id.js'),('20220607205827-create-ad.js'),('20220607210438-create-comment.js'),('20220607211210-create-option.js'),('20220607211708-create-tag.js'),('20220607212147-create-post-tag.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tag` varchar(255) DEFAULT NULL,
  `tagPho` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `profilePic` varchar(255) DEFAULT NULL,
  `role` enum('admin','user') DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'mosaaaa','Mosa@gami.com','222',NULL,'user',0,'2022-05-26 10:56:32','2022-06-04 16:05:23','2022-06-04 16:05:42'),(3,'abdullah','a@gami.com','$2a$10$cfKHWnhS5I7Slmt0cLdAgu8.qdff8/JJfAMM2K2ZQf0s7nPrFA9WO',NULL,'user',1,'2022-05-26 10:58:10','2022-06-05 17:15:01',NULL),(4,'abdullah2','a2@gami.com','$2a$10$SX0QD1gfdeu/gJXERTWwrOYu48TIGt1q/xzN.CKFKZasLYyzp7.5q',NULL,'user',1,'2022-05-26 12:17:14','2022-05-26 12:17:14',NULL),(5,'HAMO','H@h.com','$2a$10$wMpbFhqrUlOSItMKHL9BpOsb0CVb9sBrbSOAvsqlNl/YeqBsg.q8m',NULL,'user',0,'2022-05-27 09:22:49','2022-05-30 09:25:18',NULL),(6,'BAraa','b@h.com','$2a$10$iHg1ZO8wPrQbxzBUA3HsT.tW8jDu8.vd5AlsVoLIdvCnUnnsMgtqS',NULL,'user',1,'2022-05-27 09:41:55','2022-05-30 09:37:20',NULL),(9,'coco','po@g.com','$2a$10$waombKCMFMBGMhUyPP6RlOGoOUSTatug9ubBmNKcBJogsj99UD/qS',NULL,'user',1,'2022-05-27 14:52:45','2022-05-28 09:29:19',NULL),(11,'Mohamed','Moh@h.com','$2b$10$R0ikR4WWggbW/XroLZckbOwxyzh306iZ0pKOjFw1hKgbS5Qdq317e',NULL,'user',1,'2022-05-29 18:17:31','2022-05-29 18:17:31',NULL),(13,'aw','aw@h.com','$2b$10$ZJpSYx.SJwCiv8xruPRqXumpO5Mgqp7HPfigDeXy2iRyPsrhaklum',NULL,'user',1,'2022-05-29 19:23:30','2022-05-29 19:23:30','2022-05-30 13:14:42'),(19,'lo','lol@h.com','$2b$10$mFV9J/NSshdNoxVA/9JtSOS/MXmFO7vUItaOkXmugwIpvvtjaEXGW',NULL,'admin',1,'2022-05-29 21:32:27','2022-05-29 21:32:27',NULL),(21,'ag','ag@h.com','$2b$10$x5QtVgzfSXJrphy1WLw7nuaFkzosDBgdeuHmCbP8jMNeiSW8ihF0.',NULL,'user',1,'2022-05-30 20:25:11','2022-05-30 20:25:11','2022-05-30 21:27:25'),(23,'ags','asg@h.com','$2b$10$KJa64U1rcsqmRLV1474gPepG3q7L1OnWlz9Updk41H5VQmhggPaZS',NULL,'user',1,'2022-05-30 21:30:27','2022-05-30 21:30:27',NULL),(28,'klasjdlkasj','asdasdsad','$2b$10$vfUmtGuoCuzYOK30puFqDefjDLJUniin1FsPZof6.WLrcboCbESle',NULL,'user',1,'2022-06-01 12:00:38','2022-06-01 12:00:38',NULL),(35,'Abdullah123321','A@gmail.com','$2b$10$F7C1uFxFAxO8nmbS2JKzgOSuxqP2/hcBESX2alIkRjBVnLzqwBAhi',NULL,'user',1,'2022-06-01 12:09:00','2022-06-01 12:09:00',NULL),(36,'m11','m11@gmail.com','111111','profilePic-1654194974131-349209108.jpeg','user',1,'2022-06-01 12:14:41','2022-06-02 18:36:14',NULL),(37,'m22','m2m2@m.com','123',NULL,'user',1,'2022-06-01 12:30:33','2022-06-01 18:37:44',NULL),(38,'test1','test1@t.com','$2b$10$EZaQ1eVTbq43RAfaBoB8hO1hVKqycICmuUboqOALEOmBF39PT1nxy',NULL,'user',1,'2022-06-01 18:39:01','2022-06-01 18:39:01',NULL),(39,'test2','test2@t.com','$2b$10$1LTcLLcssipeCHa.z0uMkuNnez5h0vFIc1jFvzx7hoya1Hq8mZtiy',NULL,'user',1,'2022-06-01 18:53:39','2022-06-01 18:53:39',NULL),(40,'test3','test3@gmail.com','$2b$10$mfJ0zDuKBGAQtLtKdSTra.z/h5/dSOG6RMWFiokwWG0Vbf1Xg1Ha.',NULL,'user',1,'2022-06-02 08:27:50','2022-06-02 08:27:50',NULL),(41,'test6','test6@gmail.com','$2b$10$/Y15JhjtBXQEF06N19uxc.Q04d0o0rgO3urVNYaqr.BlgE5vRkq/S',NULL,'user',1,'2022-06-02 09:34:34','2022-06-02 09:34:34',NULL),(43,'test7','test7@gmail','$2b$10$LRX.zxenNHoa16WfZFSeveoPiBVGZkP7ceR5eb58m9.n7luWYrweO',NULL,'user',1,'2022-06-02 09:39:07','2022-06-02 09:39:07',NULL),(44,'test8','test8@gmail.com','$2b$10$Yq4mmQgRg2FQuVHMekalLO8tlv/P1G58vmmny6YAvowog5Kc6/yca',NULL,'user',1,'2022-06-02 11:23:48','2022-06-02 11:23:48',NULL),(45,'Abod','abo@gmail.com','111',NULL,'user',1,'2022-06-02 13:17:36','2022-06-02 13:38:04',NULL),(46,'Test9','Test9@gmail.com','$2b$10$EJevT/nKAXVPwiUadW8O9.Q2idQBZ6D3bE435YT9JvfW.3sbtaW8G','profilePic-1654198072258-220289824.jpeg','user',1,'2022-06-02 19:12:19','2022-06-02 19:27:52',NULL),(47,'1234','1234@g.com','111','profilePic-1654259871440-501466709.jpeg','user',1,'2022-06-03 08:45:45','2022-06-03 12:37:51',NULL),(48,'12345','12345@g.com','111','profilePic-1654259938570-793235064.jpeg','user',1,'2022-06-03 12:36:29','2022-06-03 12:38:58',NULL),(49,'ioi','ioi@i.com','$2b$10$NNamyFSlKRB1bPNuuobNYOVlFqz71dYjWlG9ghyI90RIxuzxLIwWS',NULL,'user',1,'2022-06-03 12:45:57','2022-06-03 12:45:57',NULL),(50,'zz','zzzz@gmail.com','111','profilePic-1654261492005-473239038.jpeg','user',1,'2022-06-03 13:02:16','2022-06-03 13:04:52',NULL),(51,'vc','vc@d.com','$2b$10$zl9lqxWS88ZJa/gvUQZCzeLqk8v8N0GyqHVpBV/KxZcj8G1pxuUCW',NULL,'user',1,'2022-06-03 13:19:03','2022-06-03 13:19:03',NULL),(52,'lk','lk@gmail.com','111','profilePic-1654262910300-414774212.jpeg','user',1,'2022-06-03 13:27:14','2022-06-03 13:28:30','2022-06-03 13:45:27'),(53,'jkkk','jkkkk@gmail.com','$2b$10$bmcAPzuzz91mAtlFJ60dBedbzniJ3RxIE1.jy1b1qxf7yWRhp4xf2','profilePic-1654263544583-51561148.jpeg','user',1,'2022-06-03 13:35:42','2022-06-03 13:39:04',NULL),(54,'zx','zx@gmail.com','$2b$10$sdFXRFuaVamZAxSKXWVpXOD41dzHRZBVLnRZ.n7Uid0xEPszx53Fy',NULL,'user',1,'2022-06-03 14:42:02','2022-06-03 14:42:02',NULL),(55,'er','er@gmail.com','$2b$10$hIg9FO8WxjmysVVgv.t0GOTBCrHtCS2p7q0h/PLm/F7SU8hVoUo0.',NULL,'user',1,'2022-06-03 16:59:55','2022-06-03 16:59:55',NULL),(56,'213123','zxsada@fgsdf.com','$2b$10$F57kSkGrdWqJSbuLhDHIe.99MgemlOqZsyhqArETlZj18tEm6xgtm',NULL,'user',1,'2022-06-03 19:23:10','2022-06-03 19:23:10',NULL),(58,'awe','awe@gmail.com','$2b$10$FPGZD.u5n2uFrMS.xUMXeeAS.DlZgicqkWBr3dCBKRiLk6PFdjdSe',NULL,'user',1,'2022-06-03 19:29:11','2022-06-03 19:29:11',NULL),(59,'you','you@o.com','$2b$10$Jg20623syMbURMaTWgFEfOCC321uaEjvWdhfweTOwI/UbQkZWR9c2',NULL,'user',1,'2022-06-04 17:18:23','2022-06-04 17:18:23',NULL),(60,'abood','aboood@gmail.com','$2b$10$NnVaWdhuiZKH62sH1gb.YuB5Nsk/XiPBmTWAqzfK277LTzroDge0q',NULL,'user',1,'2022-06-07 08:25:54','2022-06-07 08:25:54',NULL),(61,'ttt','ttt@h.com','$2b$10$pNDrZB2EDOj0l/9VmSVjn.YM91EbHqYF9OYdR6oQCIQ5EPlwhDWLi',NULL,'user',1,'2022-06-08 04:23:04','2022-06-08 04:23:04',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-08 13:54:30
