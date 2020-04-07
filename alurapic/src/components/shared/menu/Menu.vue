<template>
    <nav class="nav">
      <ul>       
          <li class="caminhos" v-for="route in routes" :key="route.titulo" >
            <router-link class="rota" :to="route.path ? route.path : '/'">{{route.titulo}}</router-link>
          </li>

      </ul>

    </nav>
</template>

<script>

    export default {
        data(){
            return {
                titulo: "My Photos"
            }
        },
        props: {
            routes: {
                type: Array,
                required: true
            }
        } 
    } 
</script>

<style scoped>

    .nav {
        width: 100%;
        margin-top: 0px;
        background-color: rgb(190, 72, 159);
    }

    .caminhos {
        display: inline-block;
        margin: 10px;
    }

    .rota {
        text-decoration:none;
        color: rgb(248, 239, 239);
    }
</style>