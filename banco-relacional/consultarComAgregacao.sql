select 
    regiao as 'Região', 
    sum(populacao) as Total 
from estados 
group by regiao 
order by Total desc;    

select 
    regiao as 'Região', 
    avg(populacao) as Média 
from estados 
group by regiao 
order by Média desc;    