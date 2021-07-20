select * from estados

select nome, sigla from estados

select sigla,nome from estados

select sigla as 'Siglas', nome as 'Nome do Estado' from estados
where regiao = 'Sul'

select nome,regiao,populacao from estados 
where populacao >= 10
order by populacao desc


