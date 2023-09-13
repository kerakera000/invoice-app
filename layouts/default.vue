<template>
    <HeaderComp/>
    <main>
        <slot/>
    </main>
    <FooterComp/>
</template>

<script>
import HeaderComp from '~/components/Header/HeaderComp';
import FooterComp from '~/components/Footer/FooterComp';

export default {
    components: {
        HeaderComp,
        FooterComp,
    }
}
</script>