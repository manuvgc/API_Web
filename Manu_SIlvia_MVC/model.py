def escreve(user, senha):
    with open('base.txt', 'a') as file:
        file.write("Usuario: " + user + '\n')
        file.write("Senha: " + senha + '\n')
        file.write('\n')