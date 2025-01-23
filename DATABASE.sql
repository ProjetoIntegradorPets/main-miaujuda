CREATE TABLE `ANIMAL` (
  `id` int(11) NOT NULL,
  `nome` varchar(20) DEFAULT NULL,
  `descricao` varchar(230) DEFAULT NULL,
  `FK_TIPO_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `ANIMAL` (`id`, `nome`, `descricao`, `FK_TIPO_id`) VALUES
(1, 'Rex', 'Cachorro amigável', 1),
(2, 'Luna', 'Gato brincalhão', 2),
(3, 'Max', 'Cachorro enérgico', 1),
(4, 'Mia', 'Gato tranquilo', 2),
(5, 'Buddy', 'Cachorro fiel', 1),
(6, 'Lola', 'Gato carinhoso', 2),
(7, 'Rocky', 'Cachorro protetor', 1),
(8, 'Nala', 'Gato curioso', 2),
(9, 'Charlie', 'Cachorro brincalhão', 1),
(10, 'Bucky', 'Cachorro esperto', 1),
(11, 'Jonny', 'Gato esperto', 2),
(12, 'Pumba', 'Cachorro foda', 1),
(13, 'Timao', 'Gato medroso', 2),
(14, 'Alvin', 'Cachorro bobo', 1),
(15, 'Bella', 'Cachorro alegre', 1),
(16, 'Simba', 'Gato brincalhão', 2),
(17, 'Duke', 'Cachorro fiel', 1),
(18, 'Zoe', 'Gato curioso', 2),
(19, 'Bentley', 'Cachorro brincalhão', 1),
(20, 'Shadow', 'Gato carinhoso', 2),
(21, 'Ranger', 'Cachorro protetor', 1),
(22, 'Chloe', 'Gato tranquilo', 2),
(23, 'Diesel', 'Cachorro enérgico', 1),
(24, 'Gracie', 'Gato esperto', 2),
(25, 'Toby', 'Cachorro amigável', 1),
(26, 'Tiger', 'Gato medroso', 2),
(27, 'Copper', 'Cachorro brincalhão', 1),
(28, 'Mittens', 'Gato curioso', 2),
(29, 'Moose', 'Cachorro fiel', 1),
(30, 'Peanut', 'Gato carinhoso', 2),
(33, 'cleiton', 'Cão maluco', 1),
(34, 'morena', 'palhaça', 2),
(35, 'LuanGameplays', 'FOFO DMS', 2),
(36, 'DUDU', 'Do Balacobaco', 2),
(37, 'Luisinha', 'Tortuguita', 1),
(39, 'Cleiton Doido', '1', 2),
(40, 'Cleiton Doido', '1', 2),
(41, 'raphael brandão', '1', 1),
(42, 'dudu', '1', 1),
(46, 'Madu', 'Dócil', 2),
(48, 'Soares', 'Bicho brabo', 1),
(49, 'SoaresA', 'Bicho brabo', 1),
(52, 'Camila', 'Dócil', 2),
(53, 'Anna julia', 'A mais linda', 2),
(55, 'Juninho', 'ruindade pura', 1),
(56, 'Jack', 'Fofo', 1),
(57, 'Petico', 'Gato dócil e amigável, bem peludo fofinho e gordinho', 2),
(58, 'Luisa', 'muito pobre coitada', 2),
(59, 'manolo', 'gato lindinho', 2),
(60, 'vanelope', 'ela parece uma coxinha', 2),
(61, 'manolo', 'gatinho gordo', 2),
(62, 'pantera', 'gata gordinha e fofa', 2),
(63, 'Totó', 'pitbull Fofíssimo', 1),
(64, 'totó', 'manso demais', 1);

CREATE TABLE `ANIMAL_ADOCAO` (
  `tamanho` int(11) DEFAULT NULL,
  `peso` decimal(5,3) DEFAULT NULL,
  `sexo` char(1) DEFAULT NULL,
  `raca` varchar(25) DEFAULT NULL,
  `FK_ANIMAL_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `ANIMAL_ADOCAO` (`tamanho`, `peso`, `sexo`, `raca`, `FK_ANIMAL_id`) VALUES
(50, '20.500', 'M', 'Labrador', 1),
(30, '4.500', 'F', 'Siamês', 2),
(55, '22.000', 'M', 'Pastor Alemão', 3),
(35, '5.000', 'F', 'Persa', 4),
(60, '25.000', 'F', 'Golden Retriever', 5),
(33, '4.800', 'F', 'Maine Coon', 6),
(52, '23.000', 'M', 'Bulldog', 7),
(32, '5.200', 'F', 'Bengal', 8),
(48, '19.000', 'M', 'Beagle', 9),
(34, '4.900', 'M', 'Ragdoll', 10),
(61, '25.500', 'M', 'Golden Retriever', 15),
(32, '4.600', 'F', 'Maine Coon', 16),
(53, '23.500', 'M', 'Bulldog', 17),
(31, '5.000', 'F', 'Bengal', 18),
(47, '18.500', 'M', 'Beagle', 19),
(35, '5.000', 'M', 'Ragdoll', 20),
(49, '20.000', 'M', 'Labrador', 21),
(31, '4.400', 'F', 'Siamês', 22),
(57, '23.000', 'M', 'Pastor Alemão', 23),
(34, '5.300', 'F', 'Persa', 24),
(62, '26.000', 'M', 'Golden Retriever', 25),
(30, '4.900', 'F', 'Maine Coon', 26),
(12, '41.000', 'M', 'Beagle', 49),
(1, '1.000', 'M', 'Golden Retriever', 48),
(30, '13.000', 'F', 'Beagle', 46),
(12, '1.000', 'F', '123', 52),
(1, '1.000', 'F', 'Bulldog', 53),
(120, '40.000', 'M', 'bulldog', 56),
(60, '12.000', 'M', 'Vira-Lata', 57),
(60, '10.000', 'M', 'vira-lata', 59),
(60, '10.000', 'M', 'vira-lata', 61),
(40, '20.000', 'F', 'vira-lata', 62),
(60, '15.000', 'M', 'pitbull', 63);

CREATE TABLE `AVISTAMENTO` (
  `id` int(11) NOT NULL,
  `fk_ANIMAL_id` int(11) DEFAULT NULL,
  `fk_ENDERECO_id` int(11) DEFAULT NULL,
  `data` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `AVISTAMENTO` (`id`, `fk_ANIMAL_id`, `fk_ENDERECO_id`, `data`) VALUES
(1, 11, 1, '2023-06-01'),
(2, 12, 2, '2023-06-02'),
(3, 13, 3, '2023-06-03'),
(4, 14, 4, '2023-06-04'),
(6, 32, 32, '2023-06-04'),
(7, 33, 33, '2023-06-04'),
(8, 34, 34, '2023-06-04'),
(9, 35, 35, '2023-06-04'),
(10, 36, 36, '2023-06-04'),
(11, 37, 37, '2023-06-04'),
(12, 39, 39, '2023-06-04'),
(13, 40, 40, '2023-06-04'),
(14, 41, 41, '2023-06-04'),
(15, 42, 42, '2023-06-04'),
(16, 47, 47, '2023-06-04'),
(17, 50, 50, '2023-06-04'),
(18, 55, 55, '2023-06-04'),
(19, 58, 58, '2023-06-04'),
(20, 60, 60, '2023-06-04'),
(21, 64, 64, '2023-06-04');

CREATE TABLE `ENDERECO` (
  `id` int(11) NOT NULL,
  `cep` varchar(10) DEFAULT NULL,
  `estado` varchar(2) DEFAULT NULL,
  `cidade` varchar(40) DEFAULT NULL,
  `bairro` varchar(50) DEFAULT NULL,
  `rua` varchar(40) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `complemento` varchar(40) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `ENDERECO` (`id`, `cep`, `estado`, `cidade`, `bairro`, `rua`, `numero`, `complemento`) VALUES
(11, '12345-678', 'SP', 'São Paulo', 'Centro', 'Rua A', 101, 'Apto 1'),
(12, '23456-789', 'RJ', 'Rio de Janeiro', 'Copacabana', 'Avenida Atlântica', 1502, ''),
(13, '34567-890', 'MG', 'Belo Horizonte', 'Savassi', 'Rua B', 202, 'Bloco B'),
(14, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2'),
(32, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2'),
(33, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2'),
(34, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2'),
(35, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2'),
(36, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2'),
(37, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2'),
(39, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2'),
(40, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2'),
(41, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2'),
(42, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2'),
(47, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2'),
(50, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2'),
(55, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2'),
(58, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2'),
(60, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2'),
(64, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2');

CREATE TABLE `PETS_USUARIO` (
  `id` int(11) NOT NULL,
  `email` varchar(80) NOT NULL,
  `FK_pet_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `PETS_USUARIO` (`id`, `email`, `FK_pet_id`) VALUES
(2, 'raphael.brandao0204@gmail.com', 33),
(3, 'raphael.brandao0204@gmail.com', 34),
(4, 'raphael.brandao0204@gmail.com', 35),
(5, 'raphael.brandao0204@gmail.com', 36),
(6, 'isabelly@gmail.com', 37),
(7, 'raphael.brandao0204@gmail.com', 39),
(8, 'raphael.brandao0204@gmail.com', 40),
(9, 'raphael.brandao0204@gmail.com', 41),
(10, 'raphael.brandao0204@gmail.com', 42),
(14, 'raphael.brandao0204@gmail.com', 52),
(15, 'raphael.brandao0204@gmail.com', 53),
(17, 'projetopet.pi@gmail.com', 55),
(18, 'lulu@gmail.com', 56),
(19, 'vanelope@gmail.com', 57),
(20, 'vanelope@gmail.com', 58),
(21, 'luisalinda@gmail.com', 59),
(22, 'luisalinda@gmail.com', 60),
(23, 'petico@gmail.com', 61),
(24, 'petico@gmail.com', 62),
(25, 'ses@gmail.com', 63),
(26, 'ses@gmail.com', 64);

CREATE TABLE `TIPO` (
  `id` int(11) NOT NULL,
  `categoria` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `TIPO` (`id`, `categoria`) VALUES
(1, 'Cachorro'),
(2, 'Gato');

CREATE TABLE `USUARIO` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(80) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `token` varchar(120) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `telefone` varchar(15) DEFAULT '(00) 00000-0000'
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `USUARIO` (`id`, `nome`, `email`, `senha`, `token`, `created_at`, `telefone`) VALUES
(1, 'Raphael Brandão', 'raphael.brandao0204@gmail.com', '$2y$10$KLLjX7EYy1CPPo.o87LRq.9HaSIJLZMoq.YlpGn7GR7vdSW1hNS/a', '517513670e0ded1e10c592202d42c8e5', '2024-10-22 18:33:53', '(27) 99286-7573'),
(2, 'raphael.brandao0204@gmail.com', 'raphael.brandao02024@gmail.com', '$2y$10$YX64Ljtrx2cBMhsPWDYUGeJlN00QIxwGvGaqqV23Fhf9PR1MmqzwC', 'f95fc5337139e078495f34fbcc387eaf', '2024-10-22 18:58:48', '(00) 00000-0000'),
(3, 'raphael.brandao0204@gmail.com', 'raphael.brandao020z4@gmail.com', '$2y$10$9Q4t2GImPe5.R.GR39V6zOpOisIj1cJcWgLmFpN5uFZaqGM8fonB2', '2a3630f3a8e289127647b254d171ca69', '2024-10-22 18:59:54', '(00) 00000-0000'),
(4, 'raphael.brandao0204@gmail.com', 'raphael.brandao0204z@gmail.com', '$2y$10$TDN894idb26U7zGH4PV/3umyqfkBHVtxUdLj94sTsh5j2nhfz5F3i', '2c1b54af7395f21fd4ba8396e5ebe214', '2024-10-23 19:35:13', '(00) 00000-0000'),
(5, 'raphael.brandao0204q@gmail.com', 'raphael.brandao0204q@gmail.com', '$2y$10$mjm67DLsQJ6V1PbW5gBaBO7vG0qdB3K536DoeYaKqgSCaJ22Kvd8O', 'ab3cde2feef793168179eaeefa34d640', '2024-10-24 13:09:34', '(00) 00000-0000'),
(6, 'raphael.brandao0204zz@gmail.com', 'raphael.brandao0204zz@gmail.com', '$2y$10$G4KLc.fSSN5NUFCo2eEqYOo5gCkl2CmEhh8UbJATIoezxLZkq6Ney', '3246f31b94972bb66dc75b9741c200b2', '2024-10-24 13:23:25', '(00) 00000-0000'),
(7, 'manolo', 'lolo@gmail.com', '$2y$10$KbifddU8CorV.uy2miSekOHRzNVYIzU4xWC6bKjBQHW.GhByxv17i', '59de47695bdea7661f341ec67895208e', '2024-10-24 13:31:28', '(00) 00000-0000'),
(8, 'isabelly', 'isabelly@gmail.com', '$2y$10$D4UCxm.SbFfn37cVqYDkyek3eM06iJEDI/g9aQbJaER/rRpjLlXZy', '288f4e524fe517f0c8c1f1f98c9d882d', '2024-11-18 16:40:51', '(00) 00000-0000'),
(9, 'annaajuliaft@gmail.com', 'annaajuliaft@gmail.com', '$2y$10$gBQaJFr4YnOCU3Kdb3Jy9ePoEKMBiUMeBi9lqAnsP2weyA7xYITPG', 'c0f2acdef242ac3ff1c2d842f05caaf2', '2024-11-25 14:58:59', '(00) 00000-0000'),
(10, 'projete', 'projetopet.pi@gmail.com', '$2y$10$FfD8/4Vl8y/ei04DvYFqoedlWEpjTblt3EXI.KfUVYQnhjwQLsNfW', 'cc5d2e976cf931c27240b9601a2122f2', '2024-11-27 18:09:00', '(0) -'),
(11, 'Eduardo', 'duduoliveirae11@gmail.com', '$2y$10$YKk2kCfruY1OdUpsMB/xjOcXw1bPDdkviO9eGCYXtwRZCb0NxlNya', '2c94314b1493304fffb7b017fe19963f', '2024-11-27 19:52:02', '(00) 00000-0000'),
(12, 'Guilherme do Carmo Souza', 'guilhermesouza3278@gmail.com', '$2y$10$Kzm4heR0gHFHw2NL6pmw4eTB.i.LH1beZGHIWCUVSiAOorcrMipO.', '71503985121533c100e410c1afbb5a48', '2024-11-28 11:55:31', '(0) -'),
(13, 'cleitin do rasta', 'cleitin@gmail.com', '$2y$10$n5CDpe6gv0nHAYdTw/qs7ulem2BCG6veV8Z2PlXIzld09uCe32CYK', 'a14c12c33546abb59aaa297003c4bbdc', '2024-11-28 15:24:29', '(00) 00000-0000'),
(14, 'bing', 'bing@gmail.com', '$2y$10$iDUj0qf0iQcs8OWDW.x8/ulVJYIODSIS9pSLauHGbQqZNMkljpHbG', '424d01a59354b63f953e5f9bc7e38299', '2024-11-28 16:23:09', '(00) 00000-0000'),
(15, 'chat', 'chat@gmail.com', '$2y$10$9YB5IbYQuoTyMfMRCj1h..nva6JYPniodi3UzwViugEP9VTYOQvRy', '20dd8a7275ade630772f5966026d972d', '2024-11-28 16:24:39', '(00) 00000-0000'),
(16, 'luisa', 'lulu@gmail.com', '$2y$10$lNATmnRHY.aHeoIbkApZb.j13twQc.hm9xpPU3hMDWwzpZ/rBvUK.', 'caa14aacc7f2093be44c3c6bbc2683c4', '2024-12-05 13:57:14', '(00) 00000-0000'),
(17, 'vania lopes', 'vanelope@gmail.com', '$2y$10$7VfYdrffGdRdBzV55uA.t.4lUYInCftk.DxEoqLLq95Pob4HPsZ.S', 'cf63a341a147619e44050acd0b577348', '2024-12-16 23:48:18', '(00) 00000-0000'),
(18, 'luisa coutinho', 'luisalinda@gmail.com', '$2y$10$5hYUttmcTo4SKgQ0MCWEtu59OpDbG6U5JX2izkT9BArGSZMcTRDz2', '35bf0c819a727acef6ce531671c09fc9', '2024-12-17 00:31:31', '(00) 00000-0000'),
(19, 'petico', 'petico@gmail.com', '$2y$10$MKp4Hs9yPLqqY7a1N9NaDeApO9ncQEqLp15LeAC/YHmn2OFppILpe', 'b29c8dc70fbac11c673b85a9ba4787f5', '2024-12-17 01:00:21', '(00) 00000-0000'),
(20, 'monica', 'monica@gmail.com', '$2y$10$tBixx1SvMKrICmrG.8frt.LrUy9JeheDvp4Wvema8KOy7FY.eURWm', '5b4a6ca0a0a47a008e84473e2c14b927', '2024-12-17 01:13:23', '(00) 00000-0000'),
(21, 'Moi', 'ses@gmail.com', '$2y$10$4WDye/rfIN/QoDecHeCVIuA7W/DvnbGVN8Jf/iCPpDXCbe/1ZgI.q', '4ec68e5951fc94f87fe203bd51b87846', '2024-12-17 11:54:35', '(00) 00000-0000');

ALTER TABLE `ANIMAL`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ANIMAL_2` (`FK_TIPO_id`);

ALTER TABLE `ANIMAL_ADOCAO`
  ADD PRIMARY KEY (`FK_ANIMAL_id`);

ALTER TABLE `AVISTAMENTO`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_AVISTAMENTO_1` (`fk_ANIMAL_id`),
  ADD KEY `FK_AVISTAMENTO_2` (`fk_ENDERECO_id`);

ALTER TABLE `ENDERECO`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `PETS_USUARIO`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `TIPO`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `USUARIO`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

ALTER TABLE `ANIMAL`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

ALTER TABLE `ANIMAL_ADOCAO`
  MODIFY `FK_ANIMAL_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

ALTER TABLE `AVISTAMENTO`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

ALTER TABLE `ENDERECO`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

ALTER TABLE `PETS_USUARIO`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

ALTER TABLE `TIPO`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `USUARIO`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;