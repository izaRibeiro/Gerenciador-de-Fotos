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
            }
        },

        computed: {
            estiloBotao(){
                if(this.estilo == 'padrao') return 'botao botao-padrao';
                if(this.estilo == 'perigo') return 'botao botao-perigo';
                return 'botao botao-padrao';
            }
        }
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