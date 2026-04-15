import Telefone = require("./Telefone");

export default class Cliente{
    _nome: string;
    _cpf: string;
    _dataNascimento: string;
    _genero: string;
    _endereco: Endereco;
    _telefones: Telefone[];

    constructor(
        nome: string,
        cpf: string,
        dataNascimento: string,
        genero: string,
        endereco: Endereco,
        telefones: Telefone[]
    ){
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._genero = genero;
        this._endereco = endereco;
        this._telefones = telefones;
    }
    
    get nome(): string{
        return this._nome;
    }

    get dataNascimento(): string{
        return this._dataNascimento;
    }

    get cpf(): string{
        return this._cpf;
    }

    get genero(): string{
        return this._genero;
    }

    get endereco(): Endereco{
        return this._endereco;
    }

    get telefones(): Telefone[]{
        return this._telefones;
    }

    set nome(type: string) {
        this._nome = type;
    }

    set cpf(type: string) {
        this._cpf = type;
    }

    set dataNascimento(type: string) {
        this._dataNascimento = type;
    }

    set genero(type: string) {
        this._genero = type;
    }

    set endereco(type: Endereco) {
        this._endereco = type;
    }

    set telefones(type: Telefone[]) {
        this._telefones = type;
    }
}