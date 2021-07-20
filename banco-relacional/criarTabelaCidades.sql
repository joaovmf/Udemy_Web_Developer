create table if not exists cidades (
    id int UNSIGNED NOT NULL AUTO_INCREMENT,
    nome varchar(255) not null,
    estado_id int unsigned NOT NULL,
    area decimal(10,2),
    primary key (id),
    foreign key (estado_id) references estados (id)
);