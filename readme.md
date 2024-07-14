

<div class="card">
  <div class="card-title">
    <span class="subtitle"></span>
  </div>
  <div class="card-content">
    <span class="paragraph"></span>
  </div>
  <div class="card-buttons">
    <button id="editarBotao" class="editar-botao" >Editar</button>
    <button id="excluirBotao" class="excluir-botao">Excluir</button>
</div>
</div>


# Documentando algumas funções interessantes que mexi pela primeira vez.

 const cadastrarId = () => {

  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

  if (tarefas.length < 1) {
    return 1;
  } else {
    const maiorId = tarefas.reduce((max, value) => {

      if(max.id > value.id) {

        return max;
      } else {
      
        return value;
      }
    });
    return maiorId.id +1;
  }
};

**Função `cadastrarId`**

A função `cadastrarId` é responsável por gerar um novo identificador único para uma lista de tarefas armazenadas localmente. Ela realiza a seguinte lógica:

1. **Obtenção das tarefas**: Primeiro, a função obtém a lista de tarefas do armazenamento local usando `localStorage.getItem('tarefas')`. Esta lista é convertida de volta de JSON para um array JavaScript usando `JSON.parse`. Se não houver nenhuma tarefa armazenada, inicializa a variável `tarefas` como um array vazio `[]`.

2. **Verificação de tarefas existentes**: Em seguida, verifica se o array `tarefas` está vazio (`tarefas.length < 1`). Se estiver vazio, isso significa que não há tarefas armazenadas, então a função retorna `1` como o primeiro identificador disponível.

3. **Cálculo do maior ID**: Se houver tarefas na lista, a função precisa determinar o próximo ID disponível. Para isso, utiliza o método `reduce` do JavaScript para iterar sobre o array `tarefas`.

4. **Uso do `reduce`**: Dentro do `reduce`, a função compara os IDs das tarefas para encontrar o maior. O parâmetro `max` representa o acumulador que armazena o objeto com o maior ID até o momento. O parâmetro `value` é o elemento atual sendo avaliado no array `tarefas`.

5. **Condicional de comparação**: A condicional dentro do `reduce` compara os IDs de `max` e `value`. Se `max.id` for maior que `value.id`, `max` é mantido como está. Caso contrário, `value` é considerado como o objeto com o maior ID até o momento.

6. **Retorno do próximo ID**: Após percorrer todo o array `tarefas` com `reduce`, a função retorna o próximo ID disponível, que é `maiorId.id + 1`.

**Documentação para Estudo Futuro**

Esta função utiliza um método avançado, `reduce`, para encontrar o maior ID dentro de um array de objetos. Este é um conceito útil para gerenciamento de dados em JavaScript, onde `reduce` é empregado para iterar sobre um array e reduzir seus elementos a um único valor. No contexto desta função, `reduce` é utilizado para determinar o maior ID presente nas tarefas armazenadas localmente, facilitando a geração do próximo ID para novas tarefas a serem cadastradas.

Ao estudar este código no futuro, lembre-se de que `reduce` é uma ferramenta poderosa para operações de agregação em arrays JavaScript, permitindo uma manipulação concisa e eficiente de conjuntos de dados.

