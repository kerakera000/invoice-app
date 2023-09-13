<template>
    <section class="main">
        <h2>シンプルで使いやすい請求書作成サービス、作りました。</h2>
        <div class="main__realtime">
            <div class="main__realtime--textbox">
                <div class="box">
                    <img src="../../assets/images/sec1img.png" alt="">
                    <h2>リアルタイム編集可能！</h2>
                    <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
            </div>
            <div class="main__realtime--img">
                <img src="../../assets/images/kvimg.png" alt="">
            </div>
        </div>
        <div class="main__pdf">
            <div class="main__pdf--img">
                <img src="" alt="">
            </div>
            <div class="main__pdf--textbox">
                <div class="box">
                    <img src="../../assets/images/sec2img.png" alt="">
                    <h2>PDF化してダウンロード可能！</h2>
                    <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
            </div>
        </div>

        <a>
            <button class="go-invoice">
                無料で請求書を作成する
            </button>
        </a>
    </section>
</template>

<script>
    export default {
        name: 'mainComp',
    }
</script>

<style lang="scss" scoped>
    .main{
        padding: 5rem 22rem 0;
        background: #F2F2F2;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        h2{
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            font-size: 4rem;
        }
        &__realtime{
            margin-top: 12rem;
            height: 53rem;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: relative;
            margin-bottom: 11rem;
            &--textbox{
                width: 98rem;
                height: 100%;
                background: #F8F4E5;
                border-radius: 15px;
                filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
                padding: 8rem 0 0 8rem;
                flex-shrink: 0;
                .box{
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 2rem;
                    flex-direction: column;
                    img{
                        width: 14rem;
                        height: 14rem;
                        object-fit: contain;
                    }
                    h2{
                        font-size: 3rem;
                        font-family: "Inter", sans-serif;
                        font-weight: 500;
                    }
                    p{
                        width: 54rem;
                        line-height: 3rem;
                        font-size: 2rem;
                        font-family: "Inter", sans-serif;
                        font-weight: 500;
                    }
                }
            }
            &--img{
                position: absolute;
                right: 10rem;
                bottom: -10rem;
                width: 98rem;
                height: 51rem;
                border-radius: 15px;
                background: url(<path-to-image>), lightgray 50% / cover no-repeat;
                box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.408);
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 15px;
                }
            }
        }

        &__pdf{
            margin-top: 25rem;
            height: 53rem;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            position: relative;
            margin-bottom: 11rem;
            &--textbox{
                width: 98rem;
                height: 100%;
                background: #F8F4E5;
                border-radius: 15px;
                filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
                padding: 8rem 0 0 35rem;
                .box{
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 2rem;
                    flex-direction: column;
                    img{
                        width: 14rem;
                        height: 14rem;
                        object-fit: contain;
                    }
                    h2{
                        font-size: 3rem;
                        font-family: "Inter", sans-serif;
                        font-weight: 500;
                    }
                    p{
                        width: 54rem;
                        line-height: 3rem;
                        font-size: 2rem;
                        font-family: "Inter", sans-serif;
                        font-weight: 500;
                    }
                }
            }
            &--img{
                position: absolute;
                left: 10rem;
                bottom: -10rem;
                z-index: 2;
                border: 4px solid #D1CFCF;
                width: 98rem;
                height: 51rem;
                border-radius: 15px;
                background: url(<path-to-image>), lightgray 50% / cover no-repeat;
                box-shadow: -4px 4px 10px 0px  rgba(0, 0, 0, 0.408);
                flex-shrink: 0;
            }
        }
        a{
            background-color: #FFDA3A;
            width: auto;
            height: auto;
            border-radius: 1rem;
            margin: 15rem 0;
            .go-invoice{
                width: 40rem;
                height: 6rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Inter', sans-serif;
                font-style: italic;
                font-weight: 700;
                font-size: 2rem;
                border-radius: 2rem;
            }
        }
    }
</style>