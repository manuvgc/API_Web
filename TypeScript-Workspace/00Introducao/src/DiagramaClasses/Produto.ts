export default class Produto{
    _codigo: number;
    _descricao: string;
    _valor: number;

    constructor(codigo: number, descricao: string, valor: number){
        this._codigo = codigo;
        this._descricao = descricao;
        this._valor = valor;
    }

    get codigo(): number{
        return this._codigo;
    }

    get descricao(): string{
        return this._descricao;
    }

    get valor(): number{
        return this._valor;
    }

    set codigo(type: number) {
        this._ddd = type;
    }

    set descricao(type: string) {
        this._descricao = type;
    }

    set valor(type: number) {
        this._valor = type;
    }
}