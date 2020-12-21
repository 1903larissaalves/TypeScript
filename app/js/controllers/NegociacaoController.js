class NegociacaoController {
    constructor() {
        this._data = document.querySelector("#data");
        this._quantidade = document.querySelector("#quantidade");
        this._valor = document.querySelector("#valor");
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._data.value.replace(/-/g, ',')), parseInt(this._quantidade.value), parseFloat(this._valor.value));
        console.log(negociacao);
    }
}
