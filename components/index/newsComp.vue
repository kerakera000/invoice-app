<template>
    <section class="news">
        <a href="">
            <p class="day">2023/08/31</p>
            <p class="text">ver 1 ベータ版を公開しました！</p>
        </a>
    </section>
</template>

<script>
    export default {
        name: 'newsComp',
    }
</script>

<style lang="scss" scoped>
    .news{
        width: 100%;
        height: 5.8rem;
        position: relative;
        background: #F2F2F2;
        a{
            position: absolute;
            top: -0%;
            right: 0%;
            transform: translate(-0%,-50%);
            display: block;
            width: 70%;
            height: 100%;
            background: #116A7B;
            border-radius: 1rem 0 0 1rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 3.8rem;
            gap: 6.5rem;
            z-index: 999;
            .day{
                color: #FFF;
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                font-size: 1.6rem;
            }
            .text{
                color: #FFF;
                font-family: 'Inter', sans-serif;
                font-size: 1.6rem;
                font-style: italic;
                font-weight: 500;
            }
        }
    }
</style>