<template>
    <button class="botao botao-perigo" :type="tipo"> {{ texto }} </button>
</template>

<script>

    export default {
        props: ['tipo', 'texto']
    }

</script>

<style scoped>
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 50px;
        margin: 5px;
        font-size: 15px;
        border: 1px solid #ccc;
        color: rgb(248, 239, 239);
    }

    .botao-perigo {
        background: rgb(158, 28, 28);
    }

    .botao-padrao {
        background: darkcyan;
    }
</style>