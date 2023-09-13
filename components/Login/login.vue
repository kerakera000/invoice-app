<template>
    <section class="login">
        <FormComp/>
        <div class="login__text-box">
            <h2>
                Welcome to <span>SOLVIDE</span> service.
            </h2>
            <p>ログインして請求書を作成</p>
        </div>
    </section>
</template>

<script>
    import FormComp from '~/components/Login/FormComp';
    export default {
        FormComp,
    }
</script>

<style lang="scss">
    .login{
        height: 100vh;
        width: 100%;
        background: #F2F2F2;
        position: relative;
        &::after{
            content: '';
            display: block;
            width: 50%;
            height: 100%;
            background: #96D6D1;
        }
        &__text-box{
            position: absolute;
            top: 50%;
            left: 5rem;
            h2{
                color: #2B2C30;
                font-family: 'Oswald', sans-serif;
                font-size: 3.4rem;
                font-style: normal;
                font-weight: 400;
                letter-spacing: 1.1px;
                span{
                    color: #2B2C30;
                    font-family: 'Chakra Petch', sans-serif;
                    font-size: 3.4rem;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    letter-spacing: 0.44px;
                }
            }
            p{
                color: #2B2C30;
                font-family: 'Chakra Petch', sans-serif;
                font-size: 2rem;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 0.8px;
            }
        }
    }
</style>