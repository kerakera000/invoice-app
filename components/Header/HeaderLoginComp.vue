<template>
    <header class="header aaaa">
        <a href="" class="icon">
            <div class="icon-img">
                <img src="../../assets/images/sol.png" alt="">
            </div>
            <h2 class="h2">SOLVIDE</h2>
        </a>
    </header>
</template>

<script>
export default {
    name: 'HeaderComp',
}
</script>


<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 7rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5.3rem;
        position: fixed;
        top: 0%;
        left: 50%;
        transform: translate(-50%,-0%);
        z-index: 9999;
        .icon{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 1.6rem;
            &-img{
                width: 4rem;
                height: 4rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .h2{
            font-size: 3rem;
            font-family: 'Chakra Petch', sans-serif;
            font-weight: 600;
            color: #2B2C30;;
            letter-spacing: 2.88px;
        }
        .text{
            color: #FFF;
            font-family: 'Inter', sans-serif;
            font-size: 2rem;
            font-weight: 500;
            line-height: normal;
        }
    }
</style>