-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-06-2018 a las 04:04:12
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gestiondeturnos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consultorios`
--

CREATE TABLE `consultorios` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Observaciones` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidades`
--

CREATE TABLE `especialidades` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

CREATE TABLE `turnos` (
  `ID` int(11) NOT NULL,
  `UsuarioMedicoID` int(11) NOT NULL,
  `UsuarioPacienteID` int(11) NOT NULL,
  `Consultorios_ID` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` enum('09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Apellido` varchar(100) NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `TipoDocumento` enum('DNI','LC','LE','CI') NOT NULL,
  `NumeroDocumento` varchar(15) NOT NULL,
  `Rol_ID` int(11) NOT NULL,
  `Especialidad_ID` int(11) DEFAULT NULL,
  `Email` varchar(100) NOT NULL,
  `Contraseña` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `consultorios`
--
ALTER TABLE `consultorios`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `UsuarioMedicoFK` (`UsuarioMedicoID`) USING BTREE,
  ADD KEY `UsuarioPacienteFK` (`UsuarioPacienteID`) USING BTREE,
  ADD KEY `Consultorios_FK` (`Consultorios_ID`);
-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-07-2018 a las 04:33:40
-- Versión del servidor: 10.1.29-MariaDB
-- Versión de PHP: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gestiondeturnos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consultorios`
--

CREATE TABLE `consultorios` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Observaciones` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `consultorios`
--

INSERT INTO `consultorios` (`ID`, `Nombre`, `Observaciones`) VALUES
(1, 'A', 'pasillo a la derecha'),
(2, 'B', 'pasillo a la izquierda'),
(3, 'C', 'pasillo siguiente al A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidades`
--

CREATE TABLE `especialidades` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `especialidades`
--

INSERT INTO `especialidades` (`ID`, `Nombre`) VALUES
(1, 'Cardiologo'),
(2, 'Odontologo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`ID`, `Nombre`) VALUES
(1, 'Medico'),
(2, 'Paciente'),
(3, 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

CREATE TABLE `turnos` (
  `ID` int(11) NOT NULL,
  `UsuarioMedicoID` int(11) NOT NULL,
  `UsuarioPacienteID` int(11) NOT NULL,
  `Consultorios_ID` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` enum('09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Apellido` varchar(100) NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `TipoDocumento` enum('DNI','LC','LE','CI') NOT NULL,
  `NumeroDcomento` varchar(15) NOT NULL,
  `Rol_ID` int(11) NOT NULL,
  `Especialidad_ID` int(11) DEFAULT NULL,
  `Email` varchar(100) NOT NULL,
  `Contraseña` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID`, `Nombre`, `Apellido`, `FechaNacimiento`, `TipoDocumento`, `NumeroDcomento`, `Rol_ID`, `Especialidad_ID`, `Email`, `Contraseña`) VALUES
(1, 'Lucas', 'Hidalgo', '1995-10-18', 'DNI', '39243287', 1, 1, 'hidalgolucas95@gmail.com', '123456'),
(2, 'paciente', 'paciente', '1990-05-20', 'DNI', '24879654', 2, NULL, 'paciente@paciente.com', '123456'),
(3, 'Administrador', 'Administrador', '1992-11-14', 'DNI', '36478189', 3, NULL, 'administrador@administrador.com', '123456');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `consultorios`
--
ALTER TABLE `consultorios`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `UsuarioMedicoFK` (`UsuarioMedicoID`) USING BTREE,
  ADD KEY `UsuarioPacienteFK` (`UsuarioPacienteID`) USING BTREE,
  ADD KEY `Consultorios_FK` (`Consultorios_ID`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Rol_FK` (`Rol_ID`) USING BTREE,
  ADD KEY `Especialidad_FK` (`Especialidad_ID`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD CONSTRAINT `turnos_ibfk_1` FOREIGN KEY (`Consultorios_ID`) REFERENCES `consultorios` (`ID`),
  ADD CONSTRAINT `turnos_ibfk_2` FOREIGN KEY (`UsuarioMedicoID`) REFERENCES `usuarios` (`ID`),
  ADD CONSTRAINT `turnos_ibfk_3` FOREIGN KEY (`UsuarioPacienteID`) REFERENCES `usuarios` (`ID`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`Rol_ID`) REFERENCES `roles` (`ID`),
  ADD CONSTRAINT `usuarios_ibfk_2` FOREIGN KEY (`Especialidad_ID`) REFERENCES `especialidades` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Rol_FK` (`Rol_ID`) USING BTREE,
  ADD KEY `Especialidad_FK` (`Especialidad_ID`);

--
-- Restricciones para tablas volcadas
--


--
--
-- Filtros para la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD CONSTRAINT `turnos_ibfk_1` FOREIGN KEY (`Consultorios_ID`) REFERENCES `consultorios` (`ID`),
  ADD CONSTRAINT `turnos_ibfk_2` FOREIGN KEY (`UsuarioMedicoID`) REFERENCES `usuarios` (`ID`),
  ADD CONSTRAINT `turnos_ibfk_3` FOREIGN KEY (`UsuarioPacienteID`) REFERENCES `usuarios` (`ID`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`Rol_ID`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `usuarios_ibfk_2` FOREIGN KEY (`Especialidad_ID`) REFERENCES `especialidades` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
