class Negociacoes extends View{

    //private _negociacoes :Array<Negociacao> = [];
    private _negociacoes :Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[]{
        return [].concat(this._negociacoes);
    }

}