# Mapa do Brasil Interativo

Este projeto exibe um mapa interativo do Brasil que colore os estados
conforme um status numérico enviado via parâmetro de URL `?q=`. Além
disso, possui uma legenda para explicar as cores e uma tabela que mostra
a tradução da query string para os estados. O projeto também inclui um
botão para gerar uma configuração aleatória dos estados.

## Funcionalidades

- **Mapa Interativo**: Mapa SVG do Brasil com todos os estados.
- **Coloração por Status**: Cada estado é colorido de acordo com um
  status numérico fornecido via parâmetro `?q=`.
- **Legenda**: Mostra as cores e seus significados.
- **Tabela de Tradução**: Exibe os estados e seus respectivos valores
  da query string.
- **Botão Randomizar**: Gera e aplica uma configuração aleatória de
  estados.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Como Usar

### Passo 1: Clonar o Repositório

Clone este repositório em sua máquina local usando o seguinte comando:

      git clone https://github.com/thi747/onde-estive-br.git

### Passo 2: Abrir o Projeto

Navegue até o diretório do projeto e abra o arquivo `index.html` em um navegador web, preferencialmente atráves de um web server ou live server.

### Passo 3: Usar o Parâmetro `?q=`

Para colorir os estados, adicione o parâmetro `?q=` na URL, seguido por
uma string de 27 números (0-6), onde cada dígito representa o status de
um estado, na ordem alfabética dos códigos UF.

Exemplo: https://thi747.github.io/onde-estive-br/?q=430435133060063604300005030

### Passo 4: Botão Randomizar

Clique no botão "Randomizar" para gerar uma configuração aleatória dos
estados.

## Cores de Status

| Código | Cor      | Significado       |
| ------ | -------- | ----------------- |
| 0      | Branco   | Nenhuma interação |
| 1      | Verde    | Reside            |
| 2      | Laranja  | Já residiu        |
| 3      | Azul     | Lazer             |
| 4      | Vermelho | Trabalho          |
| 5      | Roxo     | Lazer + Trabalho  |
| 6      | Amarelo  | Apenas passagem   |

## Estrutura do Projeto

- `index.html`: Estrutura básica do HTML;
- `css/styles.css`: Estilos para o layout e cores do mapa;
- `js/scripts.js`: Lógica para colorir o mapa, preencher a legenda e manipular o botão de randomização;
- `js/utils.js`: Lógica comum para inserir os vetores no mapa;
- `js/uf/*`: Dados de vetorização e localização de cada UF;

## Licença

Este projeto está licenciado sob a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).  
Você pode usar este projeto conforme os termos da licença, desde que dê o devido crédito ao repositório original.

---
