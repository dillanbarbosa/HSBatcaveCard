function cafe() {
    fetch('PDP.json')
        .then(response => response.json())
        .then(dadinho => {
            document.getElementById('prod').innerHTML =
                `<div class="model">
                <img src="Imgs/`+ dadinho.imagem + `>
                <p`+ dadinho.nome + `</p>
                <p`+ dadinho.preco + `</p>
                    <a href="`+ dadinho.link + `">
                        <button type="button">AAAAaa</button>
                    </a>
            </div>`;
        })
}
