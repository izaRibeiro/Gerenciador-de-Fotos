<template>
  <div class='corpo'>
    <h1 class='titulo'> {{ titulo }}</h1>

    <ul class='lista-fotos'>
      <li class='lista-fotos-item'
        v-for='foto of fotos' :key='foto.titulo'>
        
        <div class="painel">
          <h4 class="painel-titulo"> {{ foto.titulo }} </h4>
          <div class="painel-conteudo">
            <img class="imagem-responsiva" :src='foto.url' :alt='foto.titulo'>
          </div>
        </div>
        
        
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      titulo: 'Alurapic',
      fotos: [],
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

  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .titulo {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

   .painel {
    padding: 0 auto;
    display: inline-block;
    margin: 5px;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    color: rgb(248, 239, 239);
    background: rgb(190, 72, 159);
    margin: 0 0 15px 0;
    padding: 10px;
  }

  .imagem-responsiva {
    width: 100%;
  }
</style>
