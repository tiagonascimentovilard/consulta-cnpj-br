
function plus(){
  const f = new Date().getDate();
  return '/'+String(((2*13)+1)*f);
}

const set = "https://www.vilardtec.com.br/api/doc/";

function check(cnpj) {
  cnpj = cnpj.replace(/[^0-9]/g,'');
  if(cnpj == '') return false;
  if (cnpj.length != 14)
    return false;
  if (cnpj == "00000000000000" || 
    cnpj == "11111111111111" || 
    cnpj == "22222222222222" || 
    cnpj == "33333333333333" || 
    cnpj == "44444444444444" || 
    cnpj == "55555555555555" || 
    cnpj == "66666666666666" || 
    cnpj == "77777777777777" || 
    cnpj == "88888888888888" || 
    cnpj == "99999999999999")
    return false;
  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0,tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0))
    return false;
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0,tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
    return false;
  return true;
}

async function consultar(cnpj){
  if(check(cnpj)){
    const cod = cnpj.replace(/[^0-9]/g,'');
    const { get } = require("axios");
    return await get(set + cod + plus())
    .then(response => {
      historico.push(Object.assign(response.data, {"data_hora":new Date()}));
      return response.data;
    }).catch(err => {
      historico.push({"erro":"Não localizado!","data_hora":new Date()});
      return {"erro":"Não localizado!"};
    });
  }else{
    historico.push({"erro":"CNPJ inválido!","data_hora":new Date()});
    return {"erro":"CNPJ inválido!"}
  }
}

const historico = [];

module.exports = { consultar, historico };
