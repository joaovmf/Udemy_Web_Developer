function bi (ano) {
if ((ano % 4 == 0 && ano % 100 !== 0) || ano % 400 == 0){
    console.log ('este ano é bissexto')
}else{
    console.log ('este ano não é bissexto')
}
}

bi (2020)
bi (2021)
bi (2024)
bi (2100)