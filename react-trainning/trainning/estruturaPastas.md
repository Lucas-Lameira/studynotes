# Estrutura de pastas

assets
  styles - estilos globais
  imagens
  fonts

containers ou pages
  spa - single page aplication 
  vale a pena ter uma pasta chamada containers ou uma pages 😕 

resources 
  chamadas de serviço
  apis (axios, fetch)

components - smart and dumb
  tips and tricks
  1 - criar um index.js
  2 - importar todos os components no index.js
  3 - exportar os components la de dentro 
  4 - importar o index.js em um arquivo e extrair qualquer component de lá

common/
  tudo que for comum no sistema

common/utils 
  arquivos utilitários / funções utilitárias
    - formatação de data
    - calculos gerais do app
    - validação

common/constan
  valores que não mudam
  reaproveitar código

routes
  rotas da aplicação durr