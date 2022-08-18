# consulta-cnpj-br
Consulta básica por CNPJ. Retorna Nome, endereço e situação.
Usado em:
 - Processo de autopreenchimento de formulário de cadastro de empresa, com base no CNPJ informado
 - Validação periódica de cadastro de empresa, com dados públicos atuais


## Instalação
```bash
$ npm install consulta-cnpj-br
```

## Exemplo
```bash
const {consultar} = require('consulta-cnpj-br');

consultar("00360305000104").then(res =>{
  console.log(res)
})
```

### Resultado JSON
```bash
{
  razaosocial: 'CAIXA ECONOMICA FEDERAL',
  situacao: 'Ativa',
  logradouro: 'BANCARIO SUL QUADRA 04',
  numero: '34',
  complemento: 'BLOCO A',
  bairro: 'ASA SUL',
  cep: '70092900',
  uf: 'DF',
  municipio: 'Brasília',
  nomefantasia: 'CEF MATRIZ',
  atualizado: '2022-07-09T03:00:00.000Z'
}
```


### Listar histórico
```bash
const {consultar, historico} = require('consulta-cnpj-br')

consultar("00000000000191").then(res =>{
  console.log(res)
})

consultar("00360305000104").then(res =>{
  console.log(historico)
})
```

### Resultado 
```bash
[
  {
    razaosocial: 'BANCO DO BRASIL SA',
    situacao: 'Ativa',
    logradouro: 'SAUN QUADRA 5 LOTE B TORRES I, II E III',
    numero: 'SN',
    complemento: 'ANDAR 1 A 16 SALA  101 A 1601 ANDAR 1 A 16',
    bairro: 'ASA NORTE',
    cep: '70040912',
    uf: 'DF',
    municipio: 'Brasília',
    nomefantasia: 'DIRECAO GERAL',
    atualizado: '2022-07-09T03:00:00.000Z',
    data_hora: 2022-08-18T16:51:26.563Z
  },
  {
    razaosocial: 'CAIXA ECONOMICA FEDERAL',
    situacao: 'Ativa',
    logradouro: 'BANCARIO SUL QUADRA 04',
    numero: '34',
    complemento: 'BLOCO A',
    bairro: 'ASA SUL',
    cep: '70092900',
    uf: 'DF',
    municipio: 'Brasília',
    nomefantasia: 'CEF MATRIZ',
    atualizado: '2022-07-09T03:00:00.000Z',
    data_hora: 2022-08-18T16:51:26.577Z
]
```

## Descrição técnica

### Formato da consulta
O CNPJ pode ser digitado com seu formato padrão ou somente numeros

### Limite
Máximo de 2 consultas por minuto

## License
[MIT](LICENSE)

