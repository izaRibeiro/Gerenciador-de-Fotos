<template>
    <nav class="nav">
      <ul>       
          <li class="logo">
            My Photos
          </li>
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
        position: relative; 
        display: inline-block;
        left: 75%;
        margin: 10px;
    }

    .logo{
        position: relative;
        display: inline-block;
        left: 15%;
    }
    .rota {
        text-decoration:none;
        color: rgb(248, 239, 239);
    }
</style>