<template>
  <div>
    <h1 class='titulo'> {{ titulo }}</h1>

    <input type='search' class='filtro' v-on:input='filtro = $event.target.value' placeholder='Pesquisar'>
    
    <ul class='lista-fotos'>
      <li class='lista-fotos-item'
        v-for='foto of fotosComFiltro' :key='foto.titulo'>
        
        <meu-painel :titulo='foto.titulo'>
            <minha-imagem-responsiva :url="foto.url" :titulo="foto.titulo"></minha-imagem-responsiva>
        </meu-painel>
        
      </li>
    </ul>
    
  </div>
</template>

<script>
import Painel from '../shared/Painel';
import Imagem from '../shared/imagem-responsiva/ImagemResponsiva';

export default {

  components: {
    'meu-painel': Painel,
    'minha-imagem-responsiva': Imagem
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
  }
}
</script>

<style>



  .titulo {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 80%; 
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
  }
</style>
