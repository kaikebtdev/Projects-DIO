#!/bin/bash

# Script de provisionamento de diretórios, usuários e grupos
# Autor: Kaike Yury Borges Teotonio

# Função para limpar recursos anteriores
limpar_recursos_anteriores() {
    echo "Removendo diretórios, usuários e grupos anteriores..."
    
    # Remover diretórios
    rm -rf /publico /adm /ven /sec 2>/dev/null
    
    # Remover usuários
    for user in carlos maria joao debora sebastiana roberto josefina amanda rogerio; do
        userdel -r $user 2>/dev/null
    done
    
    # Remover grupos
    for group in GRP_ADM GRP_VEN GRP_SEC; do
        groupdel $group 2>/dev/null
    done
}

# Função para criar grupos
criar_grupos() {
    echo "Criando grupos..."
    groupadd GRP_ADM
    groupadd GRP_VEN
    groupadd GRP_SEC
}

# Função para criar usuários e adicionar aos grupos
criar_usuarios() {
    echo "Criando usuários e adicionando aos grupos..."
    
    # Usuários do departamento administrativo
    for user in carlos maria joao; do
        useradd -m -s /bin/bash $user
        usermod -aG GRP_ADM $user
    done
    
    # Usuários do departamento de vendas
    for user in debora sebastiana roberto; do
        useradd -m -s /bin/bash $user
        usermod -aG GRP_VEN $user
    done
    
    # Usuários do departamento de secretariado
    for user in josefina amanda rogerio; do
        useradd -m -s /bin/bash $user
        usermod -aG GRP_SEC $user
    done
}

# Função para criar diretórios e configurar permissões
criar_diretorios() {
    echo "Criando diretórios e configurando permissões..."
    
    # Criar diretórios
    mkdir /publico
    mkdir /adm
    mkdir /ven
    mkdir /sec
    
    # Definir dono como root para todos os diretórios
    chown root:root /publico /adm /ven /sec
    
    # Configurar permissões para o diretório público
    chmod 777 /publico
    
    # Configurar permissões para os diretórios de departamentos
    chmod 770 /adm
    chmod 770 /ven
    chmod 770 /sec
    
    # Definir grupos donos dos diretórios
    chown :GRP_ADM /adm
    chown :GRP_VEN /ven
    chown :GRP_SEC /sec
}

# Executar as funções
limpar_recursos_anteriores
criar_grupos
criar_usuarios
criar_diretorios

echo "Provisionamento concluído com sucesso!"
