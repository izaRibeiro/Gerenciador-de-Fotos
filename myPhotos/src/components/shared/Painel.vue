<template>
        
    <div class="painel" @click="detalhar(foto)">
        <transition name="fechar-painel">
            <div class="painel-conteudo" v-show="visivel">
                <slot></slot>
            </div>
        </transition>
    </div>

</template>

<script>
export default {
    props: ['titulo', 'foto'],

    data() {
        return {
            visivel: true
        }
    },
    methods: {
        detalhar(foto ){
            this.$modal.show('dialog', {
                title: foto.titulo,
                text: `
                    <img class="imagem imagem-modal" src=${foto.url} alt=${foto.titulo} />
                    <hr>
                    <h5>${foto.descricao != undefined ? foto.descricao : "" }</h5>
                `,
                buttons: [
                {
                    title: 'Fechar',
                    handler: () => {
                        this.$modal.hide('dialog')
                    }
                },
            ]
            });
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
        font-family: Helvetica, sans-serif;
    }

    .fechar-painel-enter, .fechar-painel-leave-active {
        opacity: 0
    }

    .fechar-painel-enter-active, .fechar-painel-leave-active {
        transition: opacity .4s
    }

</style>
