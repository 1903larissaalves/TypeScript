class NegociacaoController{

    private _data: HTMLInputElement;
    private _quantidade: HTMLInputElement;
    private _valor: HTMLInputElement;

    constructor(){
        this._data = <HTMLInputElement>document.querySelector("#data");
        this._quantidade = <HTMLInputElement>document.querySelector("#quantidade");
        this._valor = <HTMLInputElement>document.querySelector("#valor");
    }

    adiciona(event: Event){

        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._data.value.replace(/-/g, ',')),
            parseInt(this._quantidade.value),
            parseFloat(this._valor.value)
        );

        console.log(negociacao);
        
    }
}