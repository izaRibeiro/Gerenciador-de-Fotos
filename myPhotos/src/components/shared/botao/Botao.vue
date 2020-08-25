<template>
    <div>
        <button :class="estiloBotao" :type="tipo"
        @click="disparaAcao()"
        > {{ texto }} </button>

        <v-dialog />
    </div>
</template>

<script>

    export default {
        props: ['tipo', 'texto','confirmacao', 'estilo'],

        methods: {
            disparaAcao(){
                if(this.confirmacao){
                    this.$modal.show('dialog', {
                            title: 'Tem certeza que deseja remover essa imagem?',
                            text: 'Essa ação não pode ser desfeita.',
                            buttons: [
                            {
                                title: 'Fechar',
                                handler: () => {
                                    this.$modal.hide('dialog')
                                }
                            },
                            {
                                title: 'Remover',
                                handler: () => {
                                    this.remover();
                                }
                            }
                        ]
                    });
                   return null;   
                }

                this.$emit('botaoAtivado');
            },

            remover(){
                this.$emit('botaoAtivado');
                this.$modal.hide('dialog');
            }

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
        cursor: pointer;
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