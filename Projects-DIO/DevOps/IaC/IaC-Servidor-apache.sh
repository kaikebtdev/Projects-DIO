#!/bin/bash

# Script de criação de um servidor web utilizando Apache
# Autor: Kaike Yury Borges Teotonio

# Configurações importantes
set -e  # Encerra o script imediatamente em caso de erro
set -u  # Trata variáveis não definidas como erro

# Função para tratamento de erros
handle_error() {
    echo "Erro no script: linha $1, comando: $2" >&2
    echo "or favor, verifique os logs para solucionar o problema"
    exit 1
}

trap 'handle_error $LINENO "$BASH_COMMAND"' ERR

echo "Atualizando lista de pacotes..."
apt-get update -qq

echo "Atualizando sistema..."
DEBIAN_FRONTEND=noninteractive apt-get upgrade -y -qq

echo "Instalando Apache e Unzip..."
DEBIAN_FRONTEND=noninteractive apt-get install -y -qq apache2 unzip

echo "Baixando e configurando conteúdo do site..."
TMP_DIR="/tmp/web-content-$(date +%s)"
mkdir -p "$TMP_DIR"
cd "$TMP_DIR"

echo "aixando arquivos do GitHub..."
wget -q https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip

echo("Descompactando arquivos...")
unzip -q main.zip

echo "Copiando arquivos para o diretório web..."
cp -R linux-site-dio-main/* /var/www/html/

echo "Limpando arquivos temporários..."
rm -rf "$TMP_DIR"

echo "Reiniciando serviço do Apache..."
systemctl restart apache2

echo "Verificando status do Apache..."
if systemctl is-active --quiet apache2; then
    echo "Apache está funcionando corretamente!"
    echo "Você pode acessar o servidor em:"
    echo "http://$(hostname -I | awk '{print $1}')"
else
    echo "tenção: Apache instalado mas não está rodando"
    echo "or favor, verifique com: systemctl status apache2"
fi

echo "Script concluído com sucesso!"#!/bin/bash

# Script de criação de um servidor web utilizando apache
# Autor: Kaike Yury Borges Teotonio

echo "Padronização do sistema..."
apt-get update 
apt-get upgrade -y
apt-get install apache2 -y
apt-get install unzip -y

echo "Busca do diretório, download e descompactação do arquivo"
cd /tmp
wget https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip
unzip main.zip
cd /linux-site-dio-main
cp -R * /var/www/html/
