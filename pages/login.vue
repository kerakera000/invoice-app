<template>
    <NuxtLayout name="other">
        <loginComp/>
        <ringComp/>
    </NuxtLayout>
</template>

<script>
    import loginComp from '~/components/Login/login';
    import ringComp from '~/components/RingAnim/RingComp';

    export default {
        components: {
            loginComp,
            ringComp,
        },
        
        layout: false,
    };
</script>



<style lang="scss" scoped>
    .ringanim{
        top: 20rem !important;
    }
</style>