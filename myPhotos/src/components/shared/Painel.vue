<template>
        
    <div class="painel">
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

    .fechar-painel-enter, .fechar-painel-leave-active {
        opacity: 0
    }

    .fechar-painel-enter-active, .fechar-painel-leave-active {
        transition: opacity .4s
    }

</style>
