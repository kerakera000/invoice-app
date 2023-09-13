<template>
    <HeaderOComp/>
    <main>
        <slot/>
    </main>
    <FooterComp/>
</template>

<script>
import HeaderOComp from '~/components/Header/HeaderLoginComp';
import FooterComp from '~/components/Footer/FooterComp';

export default {
    components: {
        HeaderOComp,
        FooterComp,
    }
}
</script>