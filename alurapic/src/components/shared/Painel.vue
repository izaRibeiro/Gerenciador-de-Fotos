<template>
        
    <div class="painel">
        <h4 class="painel-titulo"> {{ titulo }} </h4>
        <slot class="painel-conteudo">
        </slot>
    </div>

</template>

<script>
export default {
    props: ['titulo']
}
</script>

<style scoped>

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
    margin-bottom: 0px;
  }

  .imagem-responsiva {
    width: 100%;
  }
</style>
