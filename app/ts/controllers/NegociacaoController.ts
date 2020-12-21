class NegociacaoController{

    private _data: HTMLInputElement;
    private _quantidade: HTMLInputElement;
    private _valor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView = new MensagemView("#mensagemView");

    constructor(){
        this._data = <HTMLInputElement>document.querySelector("#data");
        this._quantidade = <HTMLInputElement>document.querySelector("#quantidade");
        this._valor = <HTMLInputElement>document.querySelector("#valor");
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event){

        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._data.value.replace(/-/g, ',')),
            parseInt(this._quantidade.value),
            parseFloat(this._valor.value)
        );


        this._negociacoes.paraArray().forEach(negociacao =>{
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
            
        });

        
        this._negociacoes.adiciona(negociacao);
        
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!");
        console.log(negociacao);
        
    }
}