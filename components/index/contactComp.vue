<template>
    <section class="contact">
        <div class="contact__box">
            <div class="contact__box--title">
                <h2>CONTACT</h2>
                <p>お問い合わせ</p>
                <span></span>
            </div>
            <p class="contact__box--text">お客様のビジネスのお力になれるサイト作りを心掛けております。デザインのみ、<br>コーディングのみも受け付けております。是非一度、ご気楽にご相談ください</p>
            <div class="contact__box--button">
                <div class="main-contact-btn">
                    <a href="" class="Mbutton">CONTACT</a>
                </div>
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
    .contact{
        width: 100%;
        background: #96D6D1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70rem;
        &__box{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            &--title{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                color: rgb(39, 39, 39);
                h2{
                    font-size: 6rem;
                    font-family: "Oswald", sans-serif;
                    font-weight: 600;
                    line-height: 60px; /* 100% */
                    letter-spacing: 4.2px;
                }
                p{
                    margin-top: 7px;
                    font-family: "Noto Sans JP", sans-serif;
                    font-weight: 700;
                    letter-spacing: 0.64px;
                    font-size: 1.6rem;
                }
                span{
                    margin-top: 5px;
                    display: block;
                    width: 8.3rem;
                    height: 2px;
                    background: transparent linear-gradient(269deg, #4c4a4d 0%, #2e2e2e 100%) 0% 0% no-repeat padding-box;
                    border-radius: 4px;
                }
            }
            &--text{
                margin-top: 4rem;
                text-align: center;
                width: 90rem;
                font-family: "Noto Sans JP", sans-serif;
                font-weight: 500;
                letter-spacing: inherit;
                line-height: 4rem;
                font-size: 2.4rem;
                color: rgb(39, 39, 39);
            }
            &--button{
                margin-top: 3rem;
                .main-contact-btn{
                    width: 37rem;
                    height: auto;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    .Mbutton{
                        width: 100%;
                        height: 10rem;
                        z-index: 2;
                        font-family: 'Noto Sans JP', sans-serif;
                        font-weight: 500;
                        letter-spacing: inherit;
                        line-height: inherit;
                        font-size: 2.5rem;
                        color: rgb(39, 39, 39);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        @media screen and (max-width: 1000px) {
                            font-size: 3.5rem;
                        }
                    }
                    .Mbutton::after{
                        content: "";
                        width: 9rem;
                        height: 9rem;
                        font-size: 3rem;
                        border-radius: 50%;
                        position: absolute;
                        border:solid 2px rgb(39, 39, 39) ;
                        top: 50%;
                        left: 1%;
                        z-index: -1;
                        transition: 0.2s;
                        transform: translate(0%,-50%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-image: url(../../assets/images/arowright.svg);
                        background-size: 30%;
                        background-repeat: no-repeat;
                        background-position: 53%,50%;
                        @media screen and (max-width: 1000px) {
                            content: "";
                            width: 100%;
                            height: 11rem;
                            border-radius: 54px;
                            position: absolute;
                            border:solid 1px rgb(39, 39, 39) ;
                            background-color: #96D6D1;
                            box-shadow: 0px 3px 10px #00000029;
                            top: 50%;
                            left: 1%;
                            transition: width 0.2s;
                            transform: translate(0%,-50%);
                            padding-right: 4rem;
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                            background-image: url(../../assets/images/arowright.svg);
                            background-size: 10%;
                            background-repeat: no-repeat;
                            background-position: 90%, 50%;
                        }
                    }
                }
                .main-contact-btn:hover{
                    .Mbutton::after{
                        content: "";
                        width: 100%;
                        height: 9rem;
                        border-radius: 54px;
                        position: absolute;
                        border:solid 2px rgb(39, 39, 39) ;
                        background-color: #96D6D1;
                        box-shadow: 0px 3px 10px #00000029;
                        top: 50%;
                        left: 1%;
                        transition: width 0.2s;
                        transform: translate(0%,-50%);
                        padding-right: 4rem;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        background-image: url(../../assets/images/arowright.svg);
                        background-size: 8%;
                        background-repeat: no-repeat;
                        background-position: 95%,0;
                        @media screen and (max-width: 1000px) {
                            content: "";
                            width: 100%;
                            height: 11rem;
                            border-radius: 54px;
                            position: absolute;
                            border:solid 2px #96D6D1 ;
                            background-color: #96D6D1;
                            box-shadow: 0px 3px 10px #00000029;
                            top: 50%;
                            left: 1%;
                            transition: width 0.2s;
                            transform: translate(0%,-50%);
                            padding-right: 4rem;
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                            background-image: url(../../assets/images/arowright.svg);
                            background-size: 10%;
                            background-repeat: no-repeat;
                            background-position: 90%, 50%;
                        }
                    }
                    .form-submit.Mbutton[disabled] {
                        cursor: no-drop;
                    }
                }
            }
        }
    }
</style>