-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 30 oct. 2024 à 08:54
-- Version du serveur : 10.11.9-MariaDB
-- Version de PHP : 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `u340854927_portfolio`
--
DROP DATABASE IF EXISTS `portfolio`;
CREATE DATABASE `portfolio`;
USE `portfolio`;


-- --------------------------------------------------------

--
-- Structure de la table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `theme` varchar(45) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `userId` int(11) NOT NULL,
  `typeId` int(11) NOT NULL,
  `link` varchar(500) NOT NULL,
  `img` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `project`
--

INSERT INTO `project` (`id`, `name`, `theme`, `description`, `userId`, `typeId`, `link`, `img`) VALUES
(1, 'bass music', 'musique', 'Mon premier site est un projet dans lequel j\'ai présenté différents échantillons de musique drum n\' bass et dubstep, accompagnés d\'une sélection de collectifs locaux qui organisent des événements musicaux dans ma ville. L\'objectif était de mettre en valeur ces genres de musique sous-estimés et de le partager avec vous.', 1, 1, 'https://brrrrrbrrrr.github.io/Project_1-Wild-Code-School/', '/project/cover/bassmusic.webp'),
(2, 'feel motion', 'film', 'Nous avons travaillé en équipe sur un projet qui impliquait l\'utilisation d\'une API REST. Nous avons choisi TheMovieDatabase pour créer un site qui offre une sélection de films en fonction de l\'émotion que l\'utilisateur souhaite ressentir. L\'interface est simple et interactive pour une expérience utilisateur optimale. TW : L\'API TheMovieDatabase a été modifiée, ce qui entraîne un rendu inattendu des différentes catégories', 1, 2, 'https://harmonious-tarsier-de5f7a.netlify.app/', '/project/cover/feelmotion.webp'),
(3, 'externatic', 'recrutement', 'J\'ai travailler avec une équipe sur un projet visant à créer un site de recrutement dans le domaine de l\'informatique. Nous avons développé la partie front-end et back-end, en répondant aux exigences spécifiques du cahier des charges. Le site comprend des fonctionnalités telles qu\'une messagerie intégrée, un système d\'authentification et de notification, la gestion de profils, et bien plus encore. J\'ai été enthousiasmé par l\'opportunité de travailler sur ce premier projet complexe et ambitieux, et je suis ravi de voir le produit final en action.', 1, 3, 'videos', '/project/cover/externatic.png'),
(22, 'Space Invaders 2 ', 'Jeu vidéo', 'Notre projet, intitulé Space Invaders 2, est une réinterprétation moderne du célèbre jeu d\'arcade Space Invaders. Réalisé en JavaScript et utilisant la bibliothèque Canvas pour les rendus graphiques, ce projet a été développé en équipe sur une période de trois semaines.', 1, 1, 'https://space-invaders-2-wcs.netlify.app/', '/project/cover/space.webp'),
(23, 'Gaïa', 'nature & déconnexion', 'Lors d\'un hackathon sur le thème de la nature et de la déconnexion, j\'ai développé  en équipe, une application innovante visant à aider les utilisateurs à se reconnecter avec leurs chakras. Cette application propose une expérience apaisante, favorisant l\'équilibre intérieur et la sérénité.', 1, 1, 'https://hackathon-wcs-gaia.netlify.app/', '/project/cover/gaia.png'),
(24, 'Wild Chart Lib', 'librairie npm', 'En collaboration avec mon équipe, j\'ai créé une librairie REACT, légère et facile à utiliser pour réaliser des graphiques interactifs avec l\'API Canvas. Cette librairie se distingue par sa simplicité d\'utilisation et son minimalisme en termes de dépendances, permettant ainsi une intégration rapide et efficace pour visualiser des données de manière claire et esthétique.', 1, 1, 'https://github.com/WildCodeSchool-CDA-LYON-02-2024/wcs-chart-lib', '/project/cover/chart.webp');

-- --------------------------------------------------------

--
-- Structure de la table `projecthastech`
--

CREATE TABLE `projecthastech` (
  `projectId` int(11) NOT NULL,
  `projectUserId` int(11) NOT NULL,
  `techId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `projecthastech`
--

INSERT INTO `projecthastech` (`projectId`, `projectUserId`, `techId`) VALUES
(1, 1, 1),
(1, 1, 2),
(2, 1, 2),
(2, 1, 4),
(3, 1, 4),
(3, 1, 6),
(3, 1, 7),
(22, 1, 21),
(22, 1, 23),
(23, 1, 4),
(24, 1, 23);

-- --------------------------------------------------------

--
-- Structure de la table `tech`
--

CREATE TABLE `tech` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `tech`
--

INSERT INTO `tech` (`id`, `name`) VALUES
(1, 'html'),
(2, 'css'),
(4, 'react'),
(6, 'express'),
(7, 'mysql'),
(21, 'JavaScript'),
(23, 'canva');

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`id`, `name`) VALUES
(1, 'Front-End'),
(2, 'Back-End'),
(3, 'Full-Stack');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `age` varchar(45) NOT NULL,
  `picture` varchar(200) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `typeId` int(11) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `city` varchar(45) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `name`, `firstname`, `age`, `picture`, `description`, `typeId`, `mail`, `password`, `city`, `role`) VALUES
(1, 'CHAILLAN', 'Benjamin', '32', 'test.jpg', 'Je m\'appelle Benjamin (Ben), jeune développeur passionné par la compréhension de mon travail. J\'essaie de trouver un équilibre entre l\'utilisation d\'outils facilitants et le fait de tout faire moi-même afin d\'acquérir des compétences solides.#       Pour l\'instant, je ne me spécialise ni en front-end ni en back-end, car j\'aime les deux aspects du développement.#       D\'un point de vue plus personnel, je suis engagé dans deux associations événementielles à Lyon pour promouvoir la bass music (drum n\' bass & dubstep).#      Mon expérience managériale en restauration m\'a permis de facilement prendre position, de favoriser la communication au sein d\'un groupe et d\'affiner mon esprit critique, y compris envers moi-même.#      N\'hésitez pas à prendre contact avec moi !', 1, 'benjamin.chaillan-pro@laposte.net', '$argon2i$v=19$m=16,t=2,p=1$YXpvZW9wYXppZWtsOTg5ZXo4cjVlZjF6NWU0cno4cjcxZGYxemUxcjZ6NHI4OXplcjc4OXpmMXplMWZ6ZWY0eXQ4NHU4eTR1dGgxNXloMXJ0OTh0NHplMXI4NA$0vBg4KG9WCzO9zq3ol89+g', 'Lyon', 3);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`,`userId`,`typeId`),
  ADD KEY `fk_project_user_idx` (`userId`),
  ADD KEY `fk_project_type1_idx` (`typeId`);

--
-- Index pour la table `projecthastech`
--
ALTER TABLE `projecthastech`
  ADD PRIMARY KEY (`projectId`,`projectUserId`,`techId`),
  ADD KEY `fk_project_has_tech_tech1_idx` (`techId`),
  ADD KEY `fk_project_has_tech_project1_idx` (`projectId`,`projectUserId`);

--
-- Index pour la table `tech`
--
ALTER TABLE `tech`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`,`typeId`),
  ADD KEY `fk_user_type1_idx` (`typeId`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT pour la table `tech`
--
ALTER TABLE `tech`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `fk_project_type1` FOREIGN KEY (`typeId`) REFERENCES `type` (`id`),
  ADD CONSTRAINT `fk_project_user` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `projecthastech`
--
ALTER TABLE `projecthastech`
  ADD CONSTRAINT `fk_project_has_tech_tech1` FOREIGN KEY (`techId`) REFERENCES `tech` (`id`),
  ADD CONSTRAINT `projecthastech_ibfk_1` FOREIGN KEY (`projectId`,`projectUserId`) REFERENCES `project` (`id`, `userId`) ON DELETE CASCADE;

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_user_type1` FOREIGN KEY (`typeId`) REFERENCES `type` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
