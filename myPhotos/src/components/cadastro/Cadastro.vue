<template>

  <div>
    <img src="../../assets/flamingoCadastro.jpg" class="flamingo">
    <h1 class="centralizado cadastro-titulo">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form @submit.prevent="gravar()">
      <div class="controle">
        <label for="titulo">Título</label>
        <input id="titulo" autocomplete="off" 
        v-model.lazy="foto.titulo">
      </div>

      <div class="controle">
        <label for="url">Url</label>
        <input id="url" autocomplete="off" 
        v-model.lazy="foto.url">
        <imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo" class="imagem-cadastrada"/>
      </div>

      <div class="controle">
        <label for="descricao">Descrição</label>
        <textarea id="descricao" autocomplete="off" 
        v-model="foto.descricao">
        </textarea>
      </div>

      <div class="centralizado botoes">
        <meu-botao texto="Salvar" tipo="submit"/>
        <router-link to="/"><meu-botao texto="Voltar" tipo="button" estilo="neutro"/></router-link>
      </div>

    </form>

  </div>
</template>

<script>

import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';
import Foto from '../../model/foto/Foto';
import FotoService from '../../service/fotoService';


export default {

  components: {
    'imagem-responsiva': ImagemResponsiva, 
    'meu-botao': Botao
  },

  data(){
      return {
          foto: new Foto()
      }
  },

  methods: {
      gravar(){
        
        this.service = new FotoService(this.$resource);

        this.service.cadastrar(this.foto)
        .then(() => {
          this.foto = new Foto()
          this.$toast.open({
            message: 'Imagem cadastrada com sucesso!',
            type: 'success',
            position: 'top-right',
          });
        }, err => console.log(err));

        this.foto = new Foto();
      }
  }
}

</script>
<style scoped>
  body{
    height:100%;
  }

  .centralizado {
    text-align: center;
  }
  .botoes{
    display: inline-flex;
    margin-left: 20%;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;
    
  }
  .controle label {
    display: block;
    font-weight: bold;
    margin-left: 100px;
  }

 .controle label + input, .controle textarea {
    display: flex;
    width: 35%;
    position: relative; 
    align-self: center;
    padding: 12px 20px;
    margin: 20px;
    margin-top: 10px;
    margin-left: 100px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .centralizado {
    text-align: center;
  }

  .flamingo {
    width: 50%;
    height: 20%;
    float: right;
    margin-top: -20px;
  }

  .imagem-cadastrada {
    max-width: 30%;
    max-height: 30%;
    margin-left: 10%;
  }
</style>