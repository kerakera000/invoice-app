<template>
    <section class="kv">
        <div class="kv__left">
            <div class="text-box">
                <p class="first">データを入力して即PDF化できるアプリ。</p>
                <h1 class="title">請求書 作成君</h1>
                <p class="secon">無料で使える個人事業主向けの簡単に請求書<br>を作成出来るソフトを作成しました！</p>
                <router-link to="/login" class="button">
                    <button>無料で請求書を作成する</button>
                </router-link>
            </div>
        </div>
        <div class="kv__right">
            <div class="kvimg">
                <img src="../../assets/images/kvimg.png" alt="">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'kvComp',
    }
</script>

<style lang="scss" scoped>
    .kv{
        height: 87.1rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        &__left{
            background: #96D6D1;
            height: 100%;
            width: 50%;
            display: flex;
            align-content: center;
            justify-content: center;
            padding-bottom: 9rem;
            padding-left: 12rem;
            .text-box{
                display: flex;
                align-content: center;
                justify-content: center;
                flex-direction: column;
                gap: 1.2rem;
                .first{
                    font-size: 2.2rem;
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                }
                .title{
                    font-size: 6.4rem;
                    font-family: 'Inter', sans-serif;
                    font-weight: 500;
                }
                .secon{
                    font-size: 2rem;
                    font-family: 'Inter', sans-serif;
                    font-weight: 500;
                    line-height: 3rem;
                }
                .button{
                    width: 40.1rem;
                    height: 6.1rem;
                    border-radius: 10px;
                    margin-top: 1rem;
                    button{
                        width: 100%;
                        height: 100%;
                        border-radius: 10px;
                        background: #FFDA3A;
                        color: #1a1a1a;
                        font-family: 'Inter', sans-serif;
                        font-size: 2rem;
                        font-weight: 700;
                        letter-spacing: 2px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }
        }
        &__right{
            height: 100%;
            width: 50%;
            background-color: #F2F2F2;
            position: relative;
            .kvimg{
                width: 105rem;
                height: 60rem;
                position: absolute;
                top: 55%;
                left: 50%;
                z-index: 2;
                transform: translate(-50%,-50%);
                img{
                    width: 100%;
                    height: 100%;

                }
            }
        }
    }
</style>