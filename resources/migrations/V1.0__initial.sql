-- -----------------------------------------------------
-- Schema hitgame-api
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hitgame-api` ;
USE `hitgame-api` ;

-- -----------------------------------------------------
-- Table `hitgame-api`.`team`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hitgame-api`.`team` (
  `id` CHAR(36) NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `openning_date` DATETIME NOT NULL,
  `state` ENUM('AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO') NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hitgame-api`.`player`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hitgame-api`.`player` (
  `id` CHAR(36) NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `position` ENUM('STRIKER', 'DEFENDER', 'GOALKEEPER', 'FULLBACK', 'MIDFIELD') NOT NULL,
  `height` DECIMAL(10,2) NOT NULL,
  `weight` DECIMAL(10,2) NOT NULL,
  `team_id` CHAR(36) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_player_team_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `fk_player_team`
    FOREIGN KEY (`team_id`)
    REFERENCES `hitgame-api`.`team` (`id`)
    ON DELETE SET NULL
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
