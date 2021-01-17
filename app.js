var itens = [];

document.querySelector('input[type=submit]').addEventListener('click',()=>{
  var nomeProduto = document.querySelector('input[name=nome_produto]')
  var valProduto = document.querySelector('input[name=valor_produto]')

  itens.push({
      nome: nomeProduto.value,
      valor: valProduto.value
  })

  let listaProdutos = document.querySelector('.lista-produtos');
  listaProdutos.innerHTML = "";
  var soma = 0;
  itens.map(function(val){
    soma+=parseFloat(val.valor);

    listaProdutos.innerHTML+=`
    <div class="produto-single">
      <h3>`+val.nome+`</h3>
      <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
    </div>  
    `;
  })
  soma = soma.toFixed(2);
  nomeProduto.value = "";
  valProduto.value = "";

  let ElementoSoma = document.querySelector('.soma-produto h1')

  ElementoSoma.innerHTML=`
    Total : R$`+soma+`
  `
});

document.querySelector('button[name=limpar]').addEventListener('click',()=>{
  itens = [];
  
  document.querySelector('.lista-produtos').innerHTML = "";
  document.querySelector('.soma-produto h1').innerHTML = "Total: R$ 0,00";
})