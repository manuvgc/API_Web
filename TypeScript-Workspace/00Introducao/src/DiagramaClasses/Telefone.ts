export default class Telefone{
    _ddd: string;
    _numero: number;
    _tipo: string;

    constructor(ddd: string, numero: number, tipo: string){
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
    }

    get ddd(): string {
        return this._ddd;
    }

    set ddd(valor: string) {
        this._ddd = valor;
    }

    get numero(): number {
        return this._numero;
    }

    set numero(type: number) {
        this._numero = type;
    }

    get tipo(): string {
        return this._tipo;
    }

    set tipo(type: string) {
        this._tipo = type;
    }
}