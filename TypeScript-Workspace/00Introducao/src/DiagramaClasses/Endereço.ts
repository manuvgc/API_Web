export default class Endereco{
    _rua: string;
    _numero: number;
    _cidade: string;
    _estado: string;

    constructor(
        rua: string,
        numero: number,
        cidade: string,
        estado: string,
    ){
        this._rua = rua;
        this._numero = numero;
        this._cidade = cidade;
        this._estado = estado;
    }

    get rua(): string{
        return this._rua;
    }

    get numero(): number{
        return this._numero;
    }

    get cidade(): string{
        return this._cidade;
    }

    get estado(): string{
        return this._estado;
    }

    set rua(type: string) {
        this._rua = type;
    }

    set cidade(type: number) {
        this._numero = type;
    }

    set estado(type: string) {
        this._estado = type;
    }

    set numero(type: number) {
        this._numero = type;
    }
}