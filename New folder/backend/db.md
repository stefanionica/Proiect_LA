-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gazdă: 127.0.0.1
-- Timp de generare: sept. 02, 2022 la 08:55 AM
-- Versiune server: 10.4.24-MariaDB
-- Versiune PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Bază de date: `myproject`
--

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `bilete`
--

CREATE TABLE `bilete` (
  `id` int(10) UNSIGNED NOT NULL,
  `tipdebilet` varchar(10) NOT NULL,
  `numarbilete` char(255) NOT NULL,
  `oras` varchar(50) NOT NULL,
  `locatie` varchar(50) NOT NULL,
  `dataconcert` date NOT NULL,
  `dataadaugare` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Eliminarea datelor din tabel `bilete`
--

INSERT INTO `bilete` (`id`, `tipdebilet`, `numarbilete`, `oras`, `locatie`, `dataconcert`, `dataadaugare`) VALUES
(5, 'VIP', '50', 'Brasov', 'Piata Centrala', '2022-09-25', '2022-08-25 09:10:55'),
(8, 'Standard', '100', 'Bucuresti', 'Beraria_H', '2022-08-27', '2022-08-25 22:10:17'),
(9, 'Categoria ', '100', 'Bucuresti', 'Beraria_H', '2022-08-26', '2022-08-26 11:33:12');

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `produse`
--

CREATE TABLE `produse` (
  `id` int(255) UNSIGNED NOT NULL,
  `suvenir` varchar(50) NOT NULL,
  `pret` float NOT NULL,
  `cantitate` int(64) NOT NULL,
  `img` varchar(255) NOT NULL,
  `dataadaugare` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Eliminarea datelor din tabel `produse`
--

INSERT INTO `produse` (`id`, `suvenir`, `pret`, `cantitate`, `img`, `dataadaugare`) VALUES
(19, 'Album ABBA', 12, 50, 'C:\\fakepath\\ABBA.jpg', '2022-08-24 14:16:34'),
(21, 'Album Smokie', 100, 30, 'C:\\fakepath\\Smoky band.jpg', '2022-08-25 06:46:45'),
(22, 'Album The Beatles', 300, 50, 'C:\\fakepath\\The Beatles.png', '2022-08-27 15:28:18'),
(24, 'Album AC/DC', 250, 60, 'C:\\fakepath\\acdc.png', '2022-09-01 12:23:45');

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `turnee`
--

CREATE TABLE `turnee` (
  `id` int(11) UNSIGNED NOT NULL,
  `formatie` varchar(50) NOT NULL,
  `tara` varchar(50) NOT NULL,
  `oras` varchar(50) NOT NULL,
  `locatie` varchar(50) NOT NULL,
  `dataconcert` date NOT NULL,
  `img` varchar(50) NOT NULL,
  `dataadaugare` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Eliminarea datelor din tabel `turnee`
--

INSERT INTO `turnee` (`id`, `formatie`, `tara`, `oras`, `locatie`, `dataconcert`, `img`, `dataadaugare`) VALUES
(14, 'Smokie', 'Romania', 'Bucuresti', 'Beraria_H', '2022-09-03', 'C:\\fakepath\\Smoky band.jpg', '2022-08-24'),
(15, 'ABBA', 'Romania', 'Brasov', 'Piata Centrala', '2022-10-05', 'C:\\fakepath\\ABBA.jpg', '2022-08-25'),
(17, 'The Beatles', 'Romania', 'Bucuresti', 'Sala Palatului', '2022-09-10', 'C:\\fakepath\\The Beatles.png', '2022-08-25'),
(18, 'AC/DC', 'Romania', 'Timisoara', 'Sala Teatrului', '2022-09-30', 'C:\\fakepath\\acdc.png', '2022-09-01');

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `nume` varchar(50) NOT NULL,
  `prenume` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cnp` char(13) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `datanastere` date NOT NULL,
  `telefon` char(10) NOT NULL,
  `dataadaugare` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Eliminarea datelor din tabel `users`
--

INSERT INTO `users` (`id`, `nume`, `prenume`, `email`, `cnp`, `img`, `datanastere`, `telefon`, `dataadaugare`) VALUES
(4, 'Popescu', 'Marian', 'popescu@marian.com', '1234567891234', 'C:\\fakepath\\pescar.png', '2022-08-11', '0727777777', '2022-08-20 17:38:03'),
(16, 'Nae', 'Ion', 'nae@ion.ro', '1670719452015', 'C:\\fakepath\\1.png', '2022-08-11', '+49 456 25', '2022-08-22 15:03:07');

--
-- Indexuri pentru tabele eliminate
--

--
-- Indexuri pentru tabele `bilete`
--
ALTER TABLE `bilete`
  ADD PRIMARY KEY (`id`);

--
-- Indexuri pentru tabele `produse`
--
ALTER TABLE `produse`
  ADD PRIMARY KEY (`id`);

--
-- Indexuri pentru tabele `turnee`
--
ALTER TABLE `turnee`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexuri pentru tabele `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT pentru tabele eliminate
--

--
-- AUTO_INCREMENT pentru tabele `bilete`
--
ALTER TABLE `bilete`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pentru tabele `produse`
--
ALTER TABLE `produse`
  MODIFY `id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT pentru tabele `turnee`
--
ALTER TABLE `turnee`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pentru tabele `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
