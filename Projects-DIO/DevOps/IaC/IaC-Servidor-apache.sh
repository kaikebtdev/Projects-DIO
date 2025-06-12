#!/bin/bash

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
