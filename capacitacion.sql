/*
Navicat MySQL Data Transfer

Source Server         : xampp
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : capacitacion

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-04-03 16:16:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for directorio
-- ----------------------------
DROP TABLE IF EXISTS `directorio`;
CREATE TABLE `directorio` (
  `idDirectorio` int(11) NOT NULL AUTO_INCREMENT,
  `IdUsuario` int(11) NOT NULL,
  `Calle` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `Numero` int(11) DEFAULT NULL,
  `Colonia` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `Ciudad` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `Estado` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `CodPostal` varchar(5) COLLATE utf8_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`idDirectorio`),
  KEY `IdUsuario` (`IdUsuario`),
  CONSTRAINT `directorio_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- ----------------------------
-- Records of directorio
-- ----------------------------
INSERT INTO `directorio` VALUES ('27', '62', '', '34', '', 'Prolongacion San Sebastian', 'Puerto Moral', '21209');
INSERT INTO `directorio` VALUES ('28', '63', '', '34', '', 'Plaza Maior', 'Calvarrasa de Arriba', '37191');

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `ApPat` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `ApMat` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `Tel` varchar(10) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `CorreoE` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `Contrasena` varchar(16) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- ----------------------------
-- Records of usuarios
-- ----------------------------
INSERT INTO `usuarios` VALUES ('62', 'Gisel', 'GuzmÃ¡n', 'Madera', '767983473', 'GiselGuzmanMadera@superrito.com', 'IeP9paich');
INSERT INTO `usuarios` VALUES ('63', 'AngÃ©lica', 'BriseÃ±o', 'Valdivia', '711129826', 'AngelicaBrisenoValdivia@gustr.com', 'thai5ohk0Ae');
