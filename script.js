const imagens = [
    "empresa de tecnologia.jpeg",
    "empresa de tecnologia 2.jpeg",
    "empresa de tecnologia 3.jpeg"
];

const legendas = [
    "Tranformamos tecnologia em resultados: soluções inovadoras para impulsionar sua empresa e levar seu negócio para o futuro.",
    "Segurança digital para proteger o que realmente importa: protegemos seus dados, sistemas e informações com as melhores tecnologias e práticas do mercado.",
    "Soluções completas para acelerar o seu negócio: tecnologia, estratégia e inovação juntas para transformar desafios em resultados reais e sustentáveis."
];

let indice = 0;
function mostrarBanner() {
    document.getElementById("banner").src = imagens[indice];
    document.getElementById("banner").title = indice;
    document.getElementById("legenda").innerHTML = legendas[indice];
}

function Proximo(){
    
    //indice++;
    indice = document.getElementById("banner").title;
    indice++;
    if(indice >= imagens.length) {
        indice = 0;
    }
    mostrarBanner();
}

function Anterior(){
    //indice--;
    indice = document.getElementById("banner").title;
    indice--;
    if(indice = 0) {
        indice >= imagens.length - 1;
    }
    mostrarBanner();
}