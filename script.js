const inTitulo = document.querySelector("#inputTitulo");
const inDesc = document.querySelector("#descricao");
const buttonAdd = document.querySelector("#adicionarBotao");

const listarTarefas = {};

//? funções base

const cadastrarId = () => {
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  if (tarefas.length < 1) {
    return 1;
  } else {
    const maiorId = tarefas.reduce((max, value) => {
      if (max.id > value.id) {
        return max;
      } else {
        return value;
      }
    });
    return maiorId.id + 1;
  }
};

const mostrarCard = () => {

  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  const divCard = document.querySelector('#cardPosition');
  
  const card = document.createElement('div');
  const cardTitle = document.createElement('div');
  const subtitle = document.createElement('span');
  const cardContent = document.createElement('div');
  const paragraph = document.createElement('span');
  const cardButtons = document.createElement('div');
  const editButton = document.createElement('button');
  const removeButton = document.createElement('button');
  
  tarefas.map( (tarefa, index) => {
  
  const id = tarefa.id
  const titulo = tarefa.titulo;
  const descricao = tarefa.descricao;
 

  divCard.append(card, cardTitle, subtitle, cardContent, paragraph, cardButtons, editButton, removeButton);
    card.classList.add('card');
  card.append(cardTitle, subtitle, cardContent, paragraph, cardButtons, editButton, removeButton);
    cardTitle.classList.add('card-title');
    cardContent.classList.add('card-content');
    cardButtons.classList.add('card-buttons');
  cardTitle.appendChild(subtitle);
    subtitle.classList.add('subtitle');
      subtitle.innerHTML = `${titulo} id: ${id}`;
  cardContent.appendChild(paragraph);
    paragraph.classList.add('paragraph');
      paragraph.innerHTML = descricao;
  cardButtons.append(editButton, removeButton)
    editButton.classList.add('editar-botao');
      editButton.innerHTML = "Editar";
    removeButton.classList.add('excluir-botao');
      removeButton.innerHTML = 'Excluir';
  });

};

const cadastrar = () => {
  listarTarefas.titulo = inTitulo.value;
  listarTarefas.descricao = inDesc.value;
  const id = cadastrarId();
  const titulo = listarTarefas.titulo;
  const descricao = listarTarefas.descricao;
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.push({ id, titulo, descricao });
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  inTitulo.value = "";
  inDesc.value = "";
};

//? Botão de adicionar

buttonAdd.addEventListener("click", () => {


  if (inTitulo.value === "") {
   alert("Digite o título");
    inTitulo.focus();
  } else if (inDesc.value === "") {
    alert("Digite a descrição");
    inDesc.focus();
  } else {
    cadastrar();
    mostrarCard();
  }
});


document.addEventListener('DOMContentLoaded', mostrarCard);
