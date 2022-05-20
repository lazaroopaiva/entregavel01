let botao = document.getElementById('botao');
let imagem = document.getElementById('imgNarutoNormal')
let nome = document.getElementById('nome')
let situacao = document.getElementById('situacao')
let ameaca = document.getElementById('ameaca')

function alterarSituacao(){
    if(botao.value=='zero'){
        imagem.src = "./assets/imagens/naruto.png"
        nome.innerText = "Nome: Naruto Uzumaki "
        situacao.innerText = "Situação: Normal "
        ameaca.innerText = " Ameaça: Nível Jounin "
        botao.value = "primeiro"
        
    }else if(botao.value=='primeiro'){
    imagem.src = "./assets/imagens/naruto_3caldas2.png"
    nome.innerText = "Nome: 3 caldas "
    situacao.innerText = "Situação: Perigosa "
    ameaca.innerText = " Situação: Nível Sannin "
    botao.value = "segundo"
    
}else if(botao.value== 'segundo'){
 imagem.src = "./assets/imagens/9_caldas.jpg"
 nome.innerText = " Nome: Kyubui"
 situacao.innerText = "Situação: Extrema"
 ameaca.innerText = "Ameaça: Nível Kage"
 botao.value = 'zero'





}








}



