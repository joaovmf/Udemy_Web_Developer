    -- criando a tabela estado
    create table estados (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT,
        nome VARCHAR(45) NOT NULL, -- coloco quantos caracteres eu quiser até 200
        sigla VARCHAR(2) NOT NULL,
        regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
        populacao DECIMAL(5,2) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY (nome),
        UNIQUE KEY (sigla)
    );
