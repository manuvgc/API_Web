import model

user = ""
senha = ""

def varUser():
    global user
    user = input()

def varSenha():
    global senha
    senha = input()

def getUser():
    return user

def getSenha():
    return senha

def salvar():
    model.escreve(user, senha)