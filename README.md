# Cypress, do Zero à Nuvem ☁️

[![main](https://github.com/brunotineli/cypress-do-zero-a-nuvem/actions/workflows/ci.yml/badge.svg)](https://github.com/brunotineli/cypress-do-zero-a-nuvem/actions)

Projeto usado no curso "Cypress, do Zero à Nuvem" da escola online Talking About Testing.

## Pré-requisitos

É necessário ter o Node.js e npm instalados para rodar este projeto.

> Eu usei as versões `v20.19.1` and `10.8.2` do Node.js e npm, respectivamente. Sugiro usar as versões mencionadas ou superiores.

## Instalação

Execute `npm install` (ou `npm i`) para instalar todas as dependências de desenvolvimento.

## Testes

É possível executar os testes simulando dimensões de tela tamano desktop ou mesmo de dispositivos móveis.

Desktop: 1280x880
Dispositivo móvel: 860x410

### Desktop viewport

Execute `npm test` (ou `npm t`) para executar os testes no modo headless.

Ou, execute `npm run cy:open` para abrir o Cypress no modo interativo.

### Mobile viewport

Execute `npm test:mobile`para executar os testes no modo headless.

Ou, execute `npm run cy:open:mobile` para abrir o Cypress no modo interativo.

## Ajude este projeto

Se você quiser ajudar este projeto, deixe uma ⭐.
