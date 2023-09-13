<template>
    <div class="form">
        <div class="form__box">
            <h2>Login</h2>
            <p>※ ベータ版はゲストログインしかできません。</p>
            <a class="form__box--button buttons1" href="">
                <div class="buttons-main">
                    <div class="buttons-main__img icon1">
                        <img src="../../assets/images/googleicon.png" alt="">
                    </div>
                    <button class="buttons1__text">Googleで続ける</button>
                </div>
            </a>
            <router-link to="invoice" class="form__box--button buttons2" href="">
                <div class="buttons-main">
                    <div class="buttons-main__img icon2">
                        <img src="../../assets/images/usericon.png" alt="">
                    </div>
                    <button class="buttons2__text">ゲストで続ける</button>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .form{
        width: 46rem;
        height: 54rem;
        border-radius: 2.2rem;
        background: #F8F4E5;
        box-shadow: 4px -2px 4px 0px rgba(0, 0, 0, 0.25);
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        &__box{
            position: relative;
            display: block;
            width: 46rem;
            height: 54rem;
            border-radius: 2.2rem 23rem;
            background: #FFF;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            h2{
                font-family: 'Roboto', sans-serif;
                font-size: 5rem;
                font-weight: 700;
                letter-spacing: 4px;
                position: absolute;
                top:11rem;
                left: 50%;
                transform: translate(-50%,-50%);
                color: #2a2a2a;
            }
            p{
                font-family: 'Palanquin Dark', sans-serif;
                font-size: 1.5rem;
                font-weight: 400;
                letter-spacing: 0.8px;
                color: #D91C1C;
                width: 100%;
                text-align: center;
                position: absolute;
                top:22rem;
                left: 50%;
                transform: translate(-50%,-50%);
                opacity: 1;
            }
            &--button{
                display: block;
                width: 30rem;
                height: 5.5rem;
                border-radius: 4rem;
                background: #96D6D1;
                .buttons-main{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    &__img{
                        position: absolute;
                        top: 50%;
                        left: 4rem;
                        transform: translate(-50%,-50%);
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .icon1{
                        width: 2.6rem;
                        height: 2.6rem;
                    }
                    .icon2{
                        width: 3.6rem;
                        height: 3.6rem;
                    }
                }
                button{
                    color: #2a2a2a;
                    font-family: 'Palanquin Dark', sans-serif;
                    font-size: 2rem;
                    font-weight: 400;
                }
            }
            .buttons1{
                position: absolute;
                top:27rem;
                left: 50%;
                transform: translate(-50%,-50%);
                background: #B6D6D3;
                cursor: not-allowed;
                &__text{
                    cursor: not-allowed;
                }
            }
            .buttons2{
                position: absolute;
                top:35rem;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
    }
</style>