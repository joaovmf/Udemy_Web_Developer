insert into estados (id, nome, sigla, regiao, populacao)
values (1000, 'Novo Estado', 'NV', 'Sul', 2.54)

insert into estados (nome, sigla, regiao, populacao)
values ('Mais Novo', 'MV', 'Norte', 2.51)

select * from estados

--o auto insert sempre irá a partir do ultimo id. Se quero personalisar um id, tenho que inseri-lo manualmente. 