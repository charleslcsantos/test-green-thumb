# test-green-thumb

## Test Description

A aplicação é um simulador de plantas; nele é possível escolher o tipo de planta ideal para você com base em 3 perguntas: quantidade de sol, frequência de regamento e a presença de animais. Com as 3 perguntas respondidas através dos selects, é possível visualizar uma lista com recomendações de plantas baseadas nas respostas.

Algumas considerações:

- se preocupe em estilizar o select apenas quando fechado (o comportamento dele aberto pode ser o default de cada sistema operacional).
- a API espera sempre os valores das 3 perguntas citadas; fique a vontade para pensar na melhor experiência para lidar com essa situação.
- esperamos que não utilize nenhum framework (Angular, React, Ember, Vue, etc).
- coloque no README do projeto, as instruções para rodar a sua aplicação. 

A lista das plantas recomendadas é obtida através de uma requisição GET.

Rota | [Exemplo de chamada](https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=high&water=rarely&pets=false)

Caso algum parâmetro não seja enviado, o serviço retorna um status 422 com a mensagem missing argument.
Parâmetros e valores aceitos

sun :high , low ou no

water: daily , regularly ou rarely

pets: false ou true

Assets
 
Os assets e layouts que você irá precisar para fazer o teste estão no Figma nesse [link](https://www.figma.com/file/k5X5vEHSM0MeElKtzvkEr7/greenthumb-pocket) (p/ usar só precisa se registrar). Nele é possível exportar as imagens e inspecionar os elementos para ver distâncias e valores.
