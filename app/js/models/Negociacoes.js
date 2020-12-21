class Negociacoes {
    constructor() {
        //private _negociacoes :Array<Negociacao> = [];
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    pataArray() {
        return this._negociacoes;
    }
}
