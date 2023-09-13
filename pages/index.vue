<template>
    <NuxtLayout>
        <kvComp/>
        <newsComp/>
        <ringComp/>
        <mainComp/>
        <contactComp/>
    </NuxtLayout>
</template>

<script>
    import kvComp from '~/components/index/kvComp';
    import ringComp from '~/components/RingAnim/RingComp';
    import newsComp from '~/components/index/newsComp';
    import mainComp from '~/components/index/main';
    import contactComp from '~/components/index/contactComp';

export default {
    components: {
        kvComp,
        ringComp,
        newsComp,
        mainComp,
        contactComp,
    },
};

</script>