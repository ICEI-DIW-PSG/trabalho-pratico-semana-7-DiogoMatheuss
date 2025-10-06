
const personagens = [
    {
        "id": 1,
        "nome": "Monkey D. Luffy",
        "funcao": "Capitão",
        "sonho": "Se tornar o Rei dos Piratas",
        "habilidade": "Fruta Gomu Gomu no Mi (Homem-Borracha)",
        "recompensa": "3.000.000.000 Berries",
        "imagem": "luffy.png",
        "descricao_curta": "Capitão dos Chapéus de Palha e futuro Rei dos Piratas.",
        "descricao_completa": "Luffy é o protagonista da série, conhecido por sua personalidade alegre e seu desejo inabalável de liberdade. Comeu a Fruta do Diabo Gomu Gomu no Mi, transformando seu corpo em borracha. Sua busca pelo One Piece é a força motriz da história."
    },
    {
        "id": 2,
        "nome": "Roronoa Zoro",
        "funcao": "Espadachim",
        "sonho": "Ser o maior Espadachim do mundo",
        "habilidade": "Estilo Santoryu (Três Espadas)",
        "recompensa": "1.111.000.000 Berries",
        "imagem": "zoro.jpg",
        "descricao_curta": "Espadachim que sonha em ser o melhor do mundo.",
        "descricao_completa": "Zoro foi o primeiro membro a se juntar a Luffy. Ele usa o estilo de luta Santoryu, manejando três espadas simultaneamente. Apesar de seu senso de direção terrível, ele é um lutador leal e determinado a cumprir seu voto."
    },
    {
        "id": 3,
        "nome": "Sanji",
        "funcao": "Cozinheiro",
        "sonho": "Encontrar o All Blue",
        "habilidade": "Estilo de luta com as pernas (Black Leg)",
        "recompensa": "1.032.000.000 Berries",
        "imagem": "sanji.jpg",
        "descricao_curta": "Cozinheiro que busca o mar lendário All Blue.",
        "descricao_completa": "Sanji é o cozinheiro da tripulação, com uma regra de nunca usar as mãos para lutar, protegendo-as para cozinhar. Seu sonho é encontrar o All Blue, um mar lendário onde peixes de todos os oceanos se reúnem."
    },
    {
        "id": 4,
        "nome": "Nami",
        "funcao": "Navegadora/Cartógrafa",
        "sonho": "Mapear o mundo inteiro",
        "habilidade": "Controle climático (Clima-Tact)",
        "recompensa": "366.000.000 Berries",
        "imagem": "nami.jpg",
        "descricao_curta": "Cartógrafa que deseja mapear o mundo inteiro.",
        "descricao_completa": "Nami é a navegadora e cartógrafa da tripulação. Possui uma habilidade incrível para prever o clima e é responsável pela navegação precisa nos mares perigosos. Seu objetivo é desenhar um mapa completo de todo o mundo."
    }
];

// Função para gerar o HTML do Card
function criarCard(personagem) {
    return `
        <div class="col-sm-6 col-lg-6">
            <article class="text-center border rounded p-3 h-100 bg-light">
                <a href="detalhes.html?id=${personagem.id}" class="text-decoration-none text-dark">
                    <img src="${personagem.imagem}" class="img-fluid mb-2 rounded" alt="${personagem.nome}">
                    <h3 class="h6">${personagem.nome}</h3>
                    <p>${personagem.descricao_curta}</p>
                </a>
            </article>
        </div>
    `;
}

// Função principal para carregar os cards na Home Page
function carregarCardsNaHome() {
    const container = document.getElementById('lista-personagens');
    if (container) {
        let htmlContent = '';
        personagens.forEach(personagem => {
            htmlContent += criarCard(personagem);
        });
        container.innerHTML = htmlContent;
    }
}

// Executar a função ao carregar a página (apenas se for a index.html)
if (document.getElementById('lista-personagens')) {
    carregarCardsNaHome();
}


// Função para buscar um item pelo ID na Query String
function carregarDetalhesDoItem() {
    const container = document.getElementById('detalhes-personagem');
    if (!container) return; 

    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id')); 

    const personagem = personagens.find(p => p.id === id);

    if (personagem) {
        container.innerHTML = `
            <div class="row">
                <div class="col-md-4 text-center">
                    <img src="${personagem.imagem}" class="img-fluid rounded shadow" alt="${personagem.nome}">
                </div>
                <div class="col-md-8">
                    <h1 class="display-4 border-bottom pb-2 mb-3">${personagem.nome} <span class="badge bg-secondary h5">${personagem.funcao}</span></h1>
                    <p class="lead">${personagem.descricao_completa}</p>
                    
                    <h4 class="mt-4">Informações Chave:</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Sonho:</strong> ${personagem.sonho}</li>
                        <li class="list-group-item"><strong>Habilidade Principal:</strong> ${personagem.habilidade}</li>
                        <li class="list-group-item"><strong>Recompensa:</strong> ${personagem.recompensa}</li>
                    </ul>
                    
                    <a href="index.html" class="btn btn-primary mt-4">Voltar para a Home</a>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = '<h1 class="text-danger">Personagem não encontrado!</h1><p>Verifique o ID na URL.</p>';
    }
}

// Executar a função ao carregar a página (apenas se for a detalhes.html)
if (document.getElementById('detalhes-personagem')) {
    carregarDetalhesDoItem();
}