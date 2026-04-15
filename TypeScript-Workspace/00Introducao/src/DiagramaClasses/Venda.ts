export default class Venda{
    _codigo: number;
    _data: string;
    _cliente: Cliente;
    _produtos: Produto[];

    constructor(codigo: number, data: string, cliente: Cliente, produtos: Produto[]){
        this._codigo = codigo;
        this._data = data;
        this._cliente = cliente;
        this._produtos = produtos

    }

    get codigo(): number{
        return this._codigo;
    }
    
    get data(): string{
        return this._data;
    }
    
    get cliente(): CLiente{
        return this._cliente;
    }

    get produtos(): Produto[]{
        return this._produtos;
    }

    set codigo(type: number) {
        this._codigo = type;
    }

    set data(type: string) {
        this._data = type;
    }

    set clientes(type: Cliente) {
        this._cliente = type;
    }

    set produtos(type: Produto[]) {
        this._produtos = type;
    }

    calcularTotal(): number{
        return numeroHipotetico;
    }

}