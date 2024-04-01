var ativador = 0;
var ativar = 0;

function ir() {    
    if (ativador == 0) {
        var menu = document.getElementById('categorias');
        menu.style.animation = "aparecer-categoria 0.5s forwards, borda-inicial 0.5s forwards";

            var barra1 = document.getElementById('barra1');
            barra1.style.animation = "largura-inicial 0.5s forwards";

            var barra2 = document.getElementById('barra2');
            barra2.style.animation = "largura-inicial 0.5s forwards";

            var barra3 = document.getElementById('barra3');
            barra3.style.animation = "largura-inicial 0.5s forwards";

        var botao = document.getElementById('botao');
        botao.style.animation = "girar-menu 0.5s forwards, flexe 0.5s forwards";

    } if (ativador == 1) {
        var menu = document.getElementById('categorias');
        menu.style.animation = "desaparecer-categoria 0.5s forwards, borda-final 0.5s forwards";

            var barra1 = document.getElementById('barra1');
            barra1.style.animation = "largura-final 0.5s forwards";

            var barra2 = document.getElementById('barra2');
            barra2.style.animation = "largura-final 0.5s forwards";

            var barra3 = document.getElementById('barra3');
            barra3.style.animation = "largura-final 0.5s forwards";

        var botao = document.getElementById('botao');
        botao.style.animation = "regirar-menu 0.5s forwards, reflexe 0.5s forwards";

        ativador = ativador-2;
    }
    ativador = ativador+1;
}

function voltar() {
    if (ativador == 1) {
        var menu = document.getElementById('categorias');
        menu.style.animation = "desaparecer-categoria 0.5s forwards";

            var barra1 = document.getElementById('barra1');
            barra1.style.animation = "largura-final 0.5s forwards";

            var barra2 = document.getElementById('barra2');
            barra2.style.animation = "largura-final 0.5s forwards";

            var barra3 = document.getElementById('barra3');
            barra3.style.animation = "largura-final 0.5s forwards";

        var botao = document.getElementById('botao');
        botao.style.animation = "regirar-menu 0.5s forwards, reflexe 0.5s forwards";
        
        ativador = ativador-1;
    }
}
function mudarinput() {
    
    const input = document.getElementById("testedeusuario");
    const larguraInput = (input.offsetWidth);
    
    var regua = document.createElement("span");
    document.body.appendChild(regua);
  
    regua.style.fontFamily = "arial";
    regua.style.fontSize = "35px";
    regua.style.width = "auto"
    regua.style.height = "35px";
    regua.style.position = 'absolute';
    regua.style.whiteSpace = 'no-wrap';

    regua.textContent = input.value;

    medida = regua.clientWidth;
    medidaformatada = medida + "px";

    document.body.removeChild(regua);

    if (medida > larguraInput) {
        input.style.width = medidaformatada;
    } else if (medida < larguraInput) {
        input.style.width = medidaformatada;
    }
    
}
function escrevercomando() {
    const textoUsuario = document.getElementById("testedeusuario").value;
    document.getElementById("textousuario").textContent = textoUsuario;

}
function alerta() {
    alert("Hello Moto");
}
function enviaralert() {
    const textoUsuario2 = document.getElementById("inputAlert").value;
    alert(textoUsuario2);
}
function mudarAlert() {
    const input2 = document.getElementById("inputAlert");
    const larguraInput2 = (input2.offsetWidth);
    
    var regua2 = document.createElement("span");
    document.body.appendChild(regua2);
  
    regua2.style.fontFamily = "arial";
    regua2.style.fontSize = "35px";
    regua2.style.width = "auto"
    regua2.style.height = "35px";
    regua2.style.position = 'absolute';
    regua2.style.whiteSpace = 'no-wrap';

    regua2.textContent = input2.value;

    medida2 = regua2.clientWidth;
    medida2formatada = medida2 + "px";

    document.body.removeChild(regua2);

    input2.style.width = medida2formatada;
}
function TFor() {
    const For = document.getElementById("forin");
    const valueF = For.value;

    var reguaFor = document.createElement("span");
    document.body.appendChild(reguaFor);

    reguaFor.style.fontFamily = "arial";
    reguaFor.style.fontSize = "35px";
    reguaFor.style.width = "auto"
    reguaFor.style.height = "35px";
    reguaFor.style.position = 'absolute';
    reguaFor.style.whiteSpace = 'no-wrap';

    reguaFor.textContent = For.value;

    medidaFor = reguaFor.clientWidth;
    medidaForPX = reguaFor + "px";

    document.body.removeChild(reguaFor)

    For.style.width = medidaFor+10+"px";

    if (valueF > 100) {
        document.getElementById("alertando").textContent = "O número máximo de repetições é 100!!";
    } else if (valueF <= 100) {
        document.getElementById("alertando").textContent = "";
    }
}
function repetir() {
    const FOR = parseInt(document.getElementById("forin").value);
    const For = document.getElementById("forin");
    const valueF = For.value;
    let saida = "";

    if (valueF > 100) {
        for (let i = 1; i <= 100; i++) {
            saida += i + "; ";
        }
    } else
        for (let i = 1; i <= FOR; i++) {
            saida += i + "; ";
    }

    document.getElementById("resultadoFor").innerHTML = saida;
}
function mudarCalculadora() {
    const calculo = document.getElementById("calculo");
    const CalV = calculo.value;

    var reguaCal = document.createElement("span");
    document.body.appendChild(reguaCal);

    reguaCal.style.fontFamily = "arial";
    reguaCal.style.fontSize = "35px";
    reguaCal.style.width = "auto"
    reguaCal.style.height = "35px";
    reguaCal.style.position = 'absolute';
    reguaCal.style.whiteSpace = 'no-wrap';

    reguaCal.textContent = calculo.value;

    medidacalculo = reguaCal.clientWidth;
    medidacalculoPX = reguaCal + "px";

    document.body.removeChild(reguaCal)

    calculo.style.width = medidacalculo+10+"px";

}
function mudarCalculadora2() {
    const calculo2 = document.getElementById("calculo2");
    const CalV2 = calculo2.value;

    var reguaCal2 = document.createElement("span");
    document.body.appendChild(reguaCal2);

    reguaCal2.style.fontFamily = "arial";
    reguaCal2.style.fontSize = "35px";
    reguaCal2.style.width = "auto"
    reguaCal2.style.height = "35px";
    reguaCal2.style.position = 'absolute';
    reguaCal2.style.whiteSpace = 'no-wrap';

    reguaCal2.textContent = CalV2;

    medidacalculo2 = reguaCal2.clientWidth;
    medidacalculo2PX = reguaCal2 + "px";

    document.body.removeChild(reguaCal2)

    calculo2.style.width = medidacalculo2+10+"px";

}
function somaCalculo(){
    const conta1 = parseInt(document.getElementById("calculo").value);
    const conta2 = parseInt(document.getElementById("calculo2").value);
    const p =  document.getElementById("textoCalculadora");

    p.style.color = "white";
    p.style.fontSize = "45px";
    p.style.fontFamily = "arial";
    p.style.fontStyle = "italic";
    p.style.fontWeight = "bold"
    p.textContent = conta1+conta2;

}
function subtracaoCalculo(){
    const conta1 = parseInt(document.getElementById("calculo").value);
    const conta2 = parseInt(document.getElementById("calculo2").value);
    const p =  document.getElementById("textoCalculadora");

    p.style.color = "white";
    p.style.fontSize = "45px";
    p.style.fontFamily = "arial";
    p.style.fontStyle = "italic";
    p.style.fontWeight = "bold"
    p.textContent = conta1-conta2;

}
function multiplicacaoCalculo(){
    const conta1 = parseInt(document.getElementById("calculo").value);
    const conta2 = parseInt(document.getElementById("calculo2").value);
    const p =  document.getElementById("textoCalculadora");

    p.style.color = "white";
    p.style.fontSize = "45px";
    p.style.fontFamily = "arial";
    p.style.fontStyle = "italic";
    p.style.fontWeight = "bold"
    p.textContent = conta1*conta2;

}
function divisaoCalculo(){
    const conta1 = parseInt(document.getElementById("calculo").value);
    const conta2 = parseInt(document.getElementById("calculo2").value);
    const p =  document.getElementById("textoCalculadora");

    p.style.color = "white";
    p.style.fontSize = "45px";
    p.style.fontFamily = "arial";
    p.style.fontStyle = "italic";
    p.style.fontWeight = "bold"
    p.textContent = conta1/conta2;

}
function restoCalculo(){
    const conta1 = parseInt(document.getElementById("calculo").value);
    const conta2 = parseInt(document.getElementById("calculo2").value);
    const p = document.getElementById("textoCalculadora");

    p.style.color = "white";
    p.style.fontSize = "45px";
    p.style.fontFamily = "arial";
    p.style.fontStyle = "italic";
    p.style.fontWeight = "bold"
    p.textContent = conta1%conta2;

}
function elevarCalculo(){
    const conta1 = parseInt(document.getElementById("calculo").value);
    const conta2 = parseInt(document.getElementById("calculo2").value);
    const p =  document.getElementById("textoCalculadora");

    p.style.color = "white";
    p.style.fontSize = "45px";
    p.style.fontFamily = "arial";
    p.style.fontStyle = "italic";
    p.style.fontWeight = "bold"
    p.textContent = conta1**conta2;

}
/*
Régua para console
document.getElementById("textodeconsole").textContent = medidaFor+"x"+For.offsetWidth;

parte de HTML:
<p class="textodeconsole" id="textodeconsole"></p>
*/