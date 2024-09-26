-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 25, 2024 at 03:53 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dho9_dmit2025`
--

-- --------------------------------------------------------

--
-- Table structure for table `planets_catalogue`
--

CREATE TABLE `planets_catalogue` (
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `diameter` int(255) NOT NULL,
  `moons` int(255) NOT NULL,
  `description` longtext NOT NULL,
  `id` int(11) NOT NULL,
  `radius` int(255) NOT NULL,
  `orbital_period` int(255) NOT NULL,
  `discovered` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `planets_catalogue`
--

INSERT INTO `planets_catalogue` (`name`, `type`, `diameter`, `moons`, `description`, `id`, `radius`, `orbital_period`, `discovered`) VALUES
('Mars', 'Gas Giant', 6779, 2, '', 14, 3389, 687, 1609),
('Jupiter', 'Gas Giant', 139820, 79, '0', 15, 69911, 4333, 1610),
('Venus', 'Terrestrial', 12104, 0, '0', 17, 6051, 225, 1610),
('Uranus ', 'Ice Giant', 50724, 27, '0', 18, 25362, 84, 1610),
('Saturn ', 'Gas Giant', 116460, 82, '0', 19, 58232, 30, 1610),
('Mars', 'Gas Giant', 6779, 2, '', 20, 3389, 687, 1610);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `planets_catalogue`
--
ALTER TABLE `planets_catalogue`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `planets_catalogue`
--
ALTER TABLE `planets_catalogue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
