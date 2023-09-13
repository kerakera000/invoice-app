<template>
    <footer class="Nfooter">
        <div class="Nfooter__cnt">
            <div class="Nfooter__cnt--logo-box">
                <div class="Nfooter-logo">
                    <div class="Nfooter-logo--img">
                        <img src="../../assets/images/NewLogo.png" alt="">
                    </div>
                </div>
                <div class="Nfooter-sns">
                    <div class="Nfooter-sns--box">
                        <img src="../../assets/images/footer-twitter.png" alt="">
                    </div>
                    <div class="Nfooter-sns--box">
                        <img src="../../assets/images/footer-insta.png" alt="">
                    </div>
                </div>
            </div>
            <div class="Nfooter__cnt--col">
                <div class="Nfooter-text">
                    <h3>私たちについて</h3>
                    <p>― 方針</p>
                    <p>― プロフィール</p>
                </div>
                <div class="Nfooter-text">
                    <h3>サービス内容</h3>
                    <p>― Web制作</p>
                    <p>― LP制作</p>
                    <p>― 保守／運用</p>
                    <p>― HD lessCMS</p>
                </div>
            </div>
            <div class="Nfooter__cnt--col">
                <div class="Nfooter-text">
                    <h3>ブログ</h3>
                </div>
                <div class="Nfooter-text">
                    <h3>お知らせ</h3>
                </div>
            </div>
            <div class="Nfooter__cnt--col">
                <div class="Nfooter-text col-row">
                    <h3>お問い合わせ</h3>
                    <h3>プライバシーポリシー</h3>
                </div>
            </div>
            <div class="Nfooter__cnt--gotop ">
                <button @click="NewFootergotop"></button>
            </div>
        </div>
        <div class="Nfooter__inc">
            <p>2023 SOLVIDE.imc</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComp',
    methods: {
        NewFootergotop() {
            const target = document.querySelector('#Newtop');
            target.scrollIntoView({ behavior: 'smooth' });
        }
    },
}
</script>

<style lang="scss">
    .Nfooter{
        height: 312px;
        background: #434343f8 0% 0% no-repeat padding-box;
        margin: 0rem calc(50% - 50vw) 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        z-index: 999;
        @media screen and (max-width: 768px) {
            width: 100vw;
            height: 160rem;
            margin: 0rem calc(50% - 50vw) 0;
        }
        &__cnt{
            width: 80%;
            height: 88%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            @media screen and (max-width: 768px) {
                width: 90%;
                gap: 8rem;
                flex-direction: column;
                margin-top: 8rem;
            }
            &--logo-box{
                width: auto;
                margin-top: 6rem;
                margin-right: auto;
                gap: 2rem;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-direction: column;
                @media screen and (max-width: 768px) {
                    align-items: flex-start;
                }
                .Nfooter-logo{
                    &--img{
                        width: 21rem;
                        height: 4rem;
                        @media screen and (max-width: 768px) {
                            width: 28rem;
                            height: 8rem;
                        }
                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: contain;
                        }
                    }
                }
                .Nfooter-sns{
                    gap: 5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    &--box{
                        width: 4rem;
                        height: 4rem;
                        border-radius: 30px;
                        background-color: white;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        @media screen and (max-width: 768px) {
                            width: 8rem;
                            height: 8rem;
                        }
                        img{
                            width: 70%;
                            height: 70%;
                            object-fit: contain;
                        }
                    }
                }
            }
            &--col{
                margin-top: 7rem;
                margin-right: 9rem;
                display: flex;
                gap: 9rem;
                align-items: flex-start;
                justify-content: center;
                @media screen and (max-width: 768px) {
                    margin: 0%;
                    width: 100%;
                    justify-content: space-around;
                    gap: 4.6rem;
                }
                .Nfooter-text{
                    display: flex;
                    gap: 1.8rem;
                    align-items: flex-start;
                    justify-content: center;
                    flex-direction: column;
                    @media screen and (max-width: 768px) {
                        justify-content: flex-start;
                        width: 50%;
                        gap: 4rem;
                    }
                    h3{
                        color: white;
                        cursor: pointer;
                        font-size: 2rem;
                        @media screen and (max-width: 768px) {
                            font-size:4.2rem
                        }
                    }
                    p{
                        color: #E0E0E0;
                        cursor: pointer;
                        font-size: 1.8rem;
                        @media screen and (max-width: 768px) {
                            font-size: 3.6rem;
                        }
                    }
                }
                .col-row{
                    @media screen and (max-width: 768px) {
                        width: 100%;
                        flex-direction: row;
                        gap: 4.6rem;
                        justify-content: space-around;
                        h3{
                            width: 50%;
                        }
                    }
                }
            }
            &--gotop{
                margin-left: auto;
                @media screen and (max-width: 768px) {
                    margin-right: 6rem;
                }
                button{
                    width: 9rem;
                    height: 9rem;
                    margin-top: 8rem;
                    border: solid 1px white;
                    border-radius: 50%;
                    position: relative;
                    transition: 0.1s;
                    @media screen and (max-width: 768px) {
                        width: 14rem;
                        height: 14rem;
                        border: solid 1px #D16EFD;
                        background: #D16EFD 0% 0% no-repeat padding-box;
                    }
                    &::after{
                        content: "^";
                        color: white;
                        font-size: 3rem;
                        position: absolute;
                        top: 58%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                        @media screen and (max-width: 768px) {
                            font-size: 8rem;
                            top: 65%;
                        }
                    }
                    &:hover{
                        transition: 0.1s;
                        border: solid 1px #D16EFD;
                        background: #D16EFD 0% 0% no-repeat padding-box;
                    }
                }
            }
        }
        &__inc{
            width: 100%;
            height: 12%;
            background-color:#222222;
            display: flex;
            align-items: center;
            justify-content: center;
            p{
                color: white;
                font-size: 1.2rem;
            }
        }
    }
</style>