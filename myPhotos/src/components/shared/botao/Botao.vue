<template>
    <button :class="estiloBotao" :type="tipo"
    @click="disparaAcao()"
    > {{ texto }} </button>
</template>

<script>

    export default {
        props: ['tipo', 'texto','confirmacao', 'estilo'],

        methods: {
            disparaAcao(){
                if(this.confirmacao){
                    if(confirm('Tem certeza que deseja remover a imagem?')){
                        this.$emit('botaoAtivado');

                    }
                    return null;
                }

                this.$emit('botaoAtivado');
            },

        },

        computed: {
            estiloBotao(){
                if(this.estilo == 'padrao') return 'botao botao-padrao';
                if(this.estilo == 'perigo') return 'botao botao-perigo';
                if(this.estilo == 'neutro') return 'botao botao-neutro';
                return 'botao botao-padrao';
            }
        }
    }

</script>

<style scoped>
    .botao {
        display: inline-block;
        padding: 10px;
        margin: 5px;
        font-size: 15px;
        border: none;
        border-radius: 5%; 
    }

    .botao-perigo {
        background: #FF6969;
    }

    .botao-padrao {
        background: #37E8B3;
    }

    .botao-neutro {
        background: #FF9B52;
    }
</style>