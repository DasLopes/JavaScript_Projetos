/*
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. 
Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - pipoca – 10 segundos (padrão);
      2 - macarrao – 8 segundos (padrão);
      3 - carne – 15 segundos (padrão);
      4 - feijao – 12 segundos (padrão);
      5 - brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 

- Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/

microondas('arroz')
microondas('bolo')
microondas('pizza')
microondas('peixe')

function microondas (prato, segundos){
  //1 - pipoca – 10 segundos (padrão);
  if(prato == 'pipoca' && segundos > 2 * 10 && segundos < 3 * 10){
    console.log('Comida queimou')
  }else if (prato == 'pipoca' && segundos < 10){
    console.log('Tempo insuficiente')
  }else if (prato == 'pipoca' && segundos > 3 * 10){
    console.log('kabumm')
  }else if (prato == 'pipoca' && segundos == 10){
    console.log('Prato pronto, bom apetite!!!')
  }
  //2 - macarrao – 8 segundos (padrão);
  else if(prato == 'macarrao' && segundos > 2 * 8 && segundos < 3 * 8){
    console.log('comida queimou')
  }else if (prato == 'macarrao' && segundos < 8){
    console.log('tempo insuficiente')
  }else if (prato == 'macarrao' && segundos > 3 * 8){
    console.log('kabum!!')
  }else if (prato == 'macarrao' && segundos == 8){
    console.log('Prato pronto, bom apetite')
  }
  //3 - carne – 15 segundos (padrão);
  else if(prato == 'carne' && segundos > 2 * 15 && segundos < 3 * 15){
    console.log('comida queimou')
  }else if(prato == 'carne' && segundos < 15){
    console.log('tempo insuficiente')
  }else if(prato == 'carne' && segundos > 3 * 15){
    console.log('kabumm!!')
  }else if(prato == 'carne' && segundos == 15){
    console.log('Prato pronto, bom apetite')
  }
  //4 - feijao – 12 segundos (padrão);
  else if(prato == 'feijao' && segundos > 2 * 12 && segundos < 3 * 12){
    console.log('comida queimou')
  }else if (prato == 'feijao' && segundos < 12){
    console.log('tempo insuficiente')
  }else if (prato == 'feijao' && segundos > 3 * 12){
    console.log('kabumm!!')
  }else if(prato == 'feijao' && segundos == 12){
    console.log('Prato pronto, bom apetite')
  }
  //5 - brigadeiro – 8 segundos (padrão);
  else if(prato == 'brigadeiro' && segundos > 2 * 8 && segundos < 3 * 8){
    console.log('comida queimou')
  }else if(prato == 'brigadeiro' && segundos < 8){
    console.log('tempo insuficiente')
  }else if(prato == 'brigadeiro' && segundos > 3 * 8){
    console.log('kabumm!!')
  }else if(prato == 'brigadeiro' && segundos == 8){
    console.log('Prato pronto, bom apetite')
  }
  // Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
  else (prato !== 'pipoca' || prato !== 'macarrao' || prato !== 'carne' || prato !== 'feijao' || prato !== 'brigadeiro');{
    console.log('Prato inexistente')
  }
}
