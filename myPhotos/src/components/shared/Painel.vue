<template>
        
    <div class="painel">
        <h4 class="painel-titulo" v-on:dblclick="visivel = !visivel"> {{ titulo }} </h4>
        
        <transition name="fechar-painel">
            <div class="painel-conteudo" v-show="visivel">
                <slot></slot>
            </div>
        </transition>

    </div>

</template>

<script>
export default {
    props: ['titulo'],

    data() {
        return {
            visivel: true
        }
    }
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
    background-color: #2d0000;
    margin: 0 0 15px 0;
    padding: 10px;
    margin-bottom: 0px;
  }

    .fechar-painel-enter, .fechar-painel-leave-active {
        opacity: 0
    }

    .fechar-painel-enter-active, .fechar-painel-leave-active {
        transition: opacity .4s
    }

</style>
