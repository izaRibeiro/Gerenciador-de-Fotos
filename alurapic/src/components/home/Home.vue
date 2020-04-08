<template>
  <div>
    <h1 class='titulo'> {{ titulo }}</h1>

    <input type='search' class='filtro' v-on:input='filtro = $event.target.value' placeholder='Pesquisar'>
    
    <ul class='lista-fotos'>
      <li class='lista-fotos-item'
        v-for='foto of fotosComFiltro' :key='foto.titulo'>
        
        <meu-painel :titulo='foto.titulo'>
            <minha-imagem-responsiva :url="foto.url" :titulo="foto.titulo"></minha-imagem-responsiva>

            <meu-botao tipo="button" texto="Remover" 
            @botaoAtivado="remover(foto)" v-bind:confirmacao="true"
            estilo="perigo"/>
        </meu-painel>
        
      </li>
    </ul>
    
  </div>
</template>

<script>
import Painel from '../shared/Painel';
import Imagem from '../shared/imagem-responsiva/ImagemResponsiva';
import Botao from '../shared/botao/Botao';

export default {

  components: {
    'meu-painel': Painel,
    'minha-imagem-responsiva': Imagem,
    'meu-botao': Botao
  },

  data(){
    return{
      titulo: 'My Photos',
      fotos: [],
      filtro: ''
    }
  },

  computed: {

    fotosComFiltro(){
      if(this.filtro){
        let regra = new RegExp(this.filtro.trim(), 'i');

        return this.fotos.filter(foto => regra.test(foto.titulo));
      }else{
        return this.fotos;
      }
    }

  },

  created() {
    let promise = this.$http.get('http://localhost:3000/v1/fotos');

    promise.then(res => {
      res.json().then(
        fotos => this.fotos = fotos,
        err => console.log(err));
    });
  },

  methods: {
      remover(foto){
        alert('Removendo foto ' + foto.titulo);
      }
  }
}
</script>

<style>

  .titulo {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
    margin-left: 100px;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
    margin-left: 10px;
  }

  .filtro {
    display: flex;
    width: 80%;
    position: relative; 
    align-self: center;
    padding: 12px 20px;
    margin: 20px;
    margin-left: 100px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
 }

</style>
