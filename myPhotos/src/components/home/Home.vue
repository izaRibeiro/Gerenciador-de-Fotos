<template>
  <div>
    <div class="search">
      <div>
        <h1 class='titulo'> {{ titulo }}</h1>
        <break></break>
        <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
        <input type='search' class='filtro' v-on:input='filtro = $event.target.value' placeholder='Pesquisar'>
      </div>
    </div>

  <div>
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
  </div>
</template>

<script>
import Painel from '../shared/Painel';
import Imagem from '../shared/imagem-responsiva/ImagemResponsiva';
import Botao from '../shared/botao/Botao';
import FotoService from '../../service/fotoService';

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
      filtro: '',
      mensagem: ''
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
    this.service = new FotoService(this.$resource);

    this.service.listar()
    .then(fotos => this.fotos = fotos,
      err => console.log(err));
  },

  methods: {
      remover(foto){

        this.service.deletar(foto._id)
        .then(() => {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.mensagem = 'Imagem removida com sucesso';
        },
        err => {
          console.log(err);
          this.mensagem = "Não foi possível remover a imagem"
        }
        );
      }
  }
}
</script>

<style>
  .corpo{
    height: 12%;
    bottom: 10px;
    width: 178px;
    left: calc(50% - 75px);
  }
 
  .titulo {
    margin: 0;
    margin-bottom: 10px;
  }

  break{
    flex-basis: 100%;
  }

  .search{
    background-color: #810c55;
    height: 400px;
  }

  .search div{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    position: relative;
    top: 50%;
    width: 100%;
  }

  .lista-fotos {
    list-style: none;
    margin: 10%;
    margin-bottom: 0;
    margin-top: 80px;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
    margin-left: 10px;
  }

  .filtro {
    display: flex;
    width: 70%;
    position: relative; 
    padding: 12px 20px;
    margin-bottom: 0;
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
