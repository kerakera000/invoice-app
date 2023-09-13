<template>
    <div class="ringanim">
        <div class="ringbox">
            <div class="ring">
                <div class="ring__one">
                    <div class="ring__two">
                        <div class="ring__three"></div>
                    </div>
                </div>
            </div>
            <div class="ring__boal">
                <div class="boal"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ringComp',
    }
</script>

<style lang="scss" scoped>
    .ringanim{
        width: 85rem;
        height: 85rem;
        position: absolute;
        z-index: 1;
        top: 3rem;
        right: -45rem;
    }
    .ringbox{
        width: 85rem;
        height: 85rem;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ring{
        width: 85rem;
        height: 85rem;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        &__one{
            width: 100%;
            height: 100%;
            border: 3px solid #96D6D1;
            border-radius: 85rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__two{
            width: 65rem;
            height: 65rem;
            background: #96D6D1;
            border-radius: 65rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__three{
            width: 50rem;
            height: 50rem;
            border-radius: 50rem;
            background: #CBEAE7;
        }

        &__boal{
            width: 67rem;
            height: 67rem;
            animation: move 8s linear infinite;
            .boal{
                width: 60px;
                height: 60px;
                background-color: #96D6D1;
                border-radius: 50rem;
            }
        }
    }

    @keyframes move {
        100% {
            transform: rotate(360deg);
        }
    }
</style>