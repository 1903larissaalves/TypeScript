class Negociacoes{

    //private _negociacoes :Array<Negociacao> = [];
    private _negociacoes :Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this._negociacoes.push(negociacao);
    }

    pataArray(){
        return this._negociacoes;
    }

}