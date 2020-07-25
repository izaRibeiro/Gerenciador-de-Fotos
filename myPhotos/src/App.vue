<template>
  <div class='corpo'>

    <meu-menu :routes="routes"></meu-menu>

    <router-view></router-view>
  </div>
</template>

<script>
  import { routes }  from './routes';
  import Menu from './components/shared/menu/Menu';

  export default {
    components: {
      'meu-menu': Menu
    },

    data() {

      return {

        routes
      }

    }
  }

</script>

<style>

  .corpo {
    font-family: Helvetica, sans-serif;
    width: 100%;
    margin: 0 auto;
    background-color:#FFFFFF;
  }

</style>
