let dataAtual = 09/01/2022
let dataEvento = 12/03/2022
idadeDoParticipante = 18;
capacidadeDoEvento = 100;
listaDeParticipantes = ["João", "Maria", "José", "Pedro", "Joaquim" ];
PalestrantesEvento = ["Geraldo", " Ana", " Márcia"];
qtdeInscritos = listaDeParticipantes.length;

if (dataEvento < dataAtual) {
    console.log("Casdrasto não permitido: Data inválida");    

    }else if (idadeDoParticipante < 18) {
    console.log("Casdrasto não permitido: Idade inferior a 18 anos");

        }else if (qtdeInscritos > capacidadeDoEvento) {
        console.log("Casdrasto não permitido: Numero de participantes excedido");
        
}else {
    console.log("Inscritos: " + listaDeParticipantes + ". Palestrantes: "+PalestrantesEvento);
}