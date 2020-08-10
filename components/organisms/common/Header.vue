<template>
    <div>
        <header id="header" class="header">
            <div class="header-logo">
                <h1><a href="index.html" class="on--opa"><img src="~/assets/img/common/ikusai-logo.svg" class="img--fit" alt="ikus.ai"></a></h1>
            </div>
            <div id="navigation" class="header-navi">
                <nav class="header-navi__in">
                    <div class="navi">
                        <div>
                            <p><a href="#"><span>CAMPAIGN</span><span>キャンペーン</span></a></p>
                        </div>
                        <div>
                            <p><a href="#"><span>FOR ENTERPRISE</span><span>法人様向け</span></a></p>
                        </div>
                        <div>
                            <p><a href="#"><span>TEACH</span><span>ikus.aiで教える</span></a></p>
                        </div>
                    </div>
                    <div class="navi-member">
                        <div class="login"><a href="#">ログイン</a></div>
                        <div class="signup-btn">
                            <div></div>
                            <a href="#"><span>SIGN UP</span><span>新規登録</span></a>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="toggle" class="toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    </div>
</template>

<style lang="scss" scoped>
    @import "~assets/scss/style.scss";

    /* ---------------------------------- signup btn */

    .signup-btn {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: vw-sp(400);
        max-width: 100%;
        height: vw-sp(90);
        background-image: -moz-linear-gradient(0deg, rgb(41, 108, 0) 0%, rgb(104, 224, 159) 0%, rgb(36, 203, 112) 100%);
        background-image: -webkit-linear-gradient(0deg, rgb(41, 108, 0) 0%, rgb(104, 224, 159) 0%, rgb(36, 203, 112) 100%);
        border-radius: 2em;
        box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.2);
        font-family: $font2, $font1;
        text-align: center;
        overflow: hidden;
        cursor: pointer;
    }

    .signup-btn a {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: .5em 0;
        width: 100%;
        height: vw-sp(90);
        color: $color-base;
        font-size: vw-sp(28);
        font-weight: 700;
        text-decoration: none;
        transition: all .5s ease;
        z-index: 2;
    }

    .signup-btn a:hover {
        color: $color-main;
    }

    .signup-btn>div {
        position: absolute;
        top: 0;
        width: 100%;
        height: vw-sp(90);
        left: -100%;
        background-color: $color-base;
        transition: all .5s ease;
        z-index: 1;
    }

    .signup-btn:hover>div {
        left: 0;
        height: 100%;
    }

    .signup-btn span {
        display: block;
        width: 100%;
        font-size: vw-sp(20);
    }

    .signup-btn span:nth-of-type(1) {
        margin-bottom: .5em;
    }


    @media screen and (min-width: $breakpoint1) {

        .signup-btn {
            margin: 0;
            width: vw-pc(200);
            height: vw-pc(60);
        }

        .signup-btn a {
            height: vw-pc(60);
            font-size: vw-pc(18);
        }

        .signup-btn>div {
            height: vw-pc(60);
        }
    }

    @media screen and (min-width: $breakpoint2) {

        .signup-btn {
            width: 200px;
            height: 60px;
        }

        .signup-btn a {
            height: 60px;
            font-size: 18px;
            font-size: 1.8rem;
        }

        .signup-btn>div {
            height: 60px;
        }
    }


    @media screen and (min-width: $breakpoint1) {

        .signup-btn:hover {
            border: vw-pc(3) solid $color-main;
        }

        .signup-btn span {
            font-size: vw-pc(15);
        }

    }

    @media screen and (min-width: $breakpoint2) {

        .signup-btn:hover {
            border: 3px solid $color-main;
        }

        .signup-btn span {
            font-size: 15px;
            font-size: 1.5rem;
        }
    }

    /*  header
------------------------------------------------------------------------------*/

    .header {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: vw-sp(150);
        /* ヘッダー高さ */
        background-color: rgba(255, 255, 255, 1);
        z-index: 10;
    }

    .header--white {
        background-color: $color-base;
    }

    .header-logo {
        position: relative;
        padding-left: 4vw;
        width: vw-sp(300);
        z-index: 999;
    }


    @media screen and (min-width: $breakpoint1) {
        .header {
            justify-content: space-between;
            height: vw-pc(100);
        }

        .header-logo {
            padding-left: vw-pc(30);
            width: vw-pc(200);
        }

        .header-navi {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: calc(100% - #{vw-pc(280)});
        }
    }

    @media screen and (min-width: $breakpoint2) {
        .header {
            height: 100px;
            /* ヘッダー高さ */
        }

        .header-logo {
            padding-left: 30px;
            width: 200px;
        }

        .header-navi {
            width: calc(100% - 280px);
        }
    }


    /* ------------------------------------ ナビコンテナ */

    .header-navi {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    @media screen and (max-width: $breakpoint1) {
        .header-navi {
            display: inline-block;
            position: fixed;
            top: vw-sp(150);
            left: 0;
            width: 100%;
            height: 0%;
            background-image: url(../../../assets/img/common/bg.jpg);
            background-position: center top;
            background-repeat: no-repeat;
            background-size: cover;
            opacity: 0;
            visibility: hidden;
            transition: opacity .1s linear, visibility .1s linear;
            overflow: hidden;
            overflow-x: scroll;
            z-index: 99999;
        }

        .header-navi::before {
            content: ' ';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: rgba(51, 178, 109, 0.75);
        }

        .header-navi.is-open {
            opacity: 1;
            visibility: visible;
            height: calc(100vh - #{vw-sp(150)});
            transition: opacity .1s linear .1s, visibility .1s linear .1s;
        }
    }

    /* ------------------------------------ グローバルナビ */

    .header-navi__in {
        position: relative;
        display: flex;
    }

    .navi {
        position: relative;
        width: 100%;
    }

    .navi>div>p {
        position: relative;
        display: block;
        font-weight: 700;
    }

    .navi>div>p:hover {
        cursor: pointer;
    }

    .navi>div>p span:nth-of-type(1) {
        font-family: $font2;
        font-weight: 600;
        letter-spacing: .15em;
    }

    .navi>div>p span:nth-of-type(2) {
        font-weight: 700;
    }

    .login {
        margin-bottom: vw-sp(40);
    }

    .login a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: vw-sp(60);
        font-weight: 700;
    }

    .login a:hover {
        color: $color-base;
    }

    /* ------------------------------------ グローバルナビ（PC） */

    @media screen and (min-width: $breakpoint1) {

        .header-navi__in {
            align-items: center;
        }

        .navi {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-right: vw-pc(30);
            width: calc(100% - #{vw-pc(390)} - #{vw-pc(30)});
        }

        .navi>div {
            padding: 0 1em;
        }

        .navi>div>p {
            padding: 1em;
            font-size: vw-pc(15);
            text-align: center;
        }

        .navi>div>p span {
            display: block;
        }

        .navi>div>p span:nth-of-type(1) {
            margin-bottom: 1em;
        }

        .navi>div>p:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0%;
            height: 1px;
            background-color: $color-main;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            transition: .3s;
        }

        .navi>div>p:hover::before {
            width: 100%;
        }

        .navi-member {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-left: vw-pc(2) solid #b9c1ce;
            padding: 0 vw-pc(20) 0 vw-pc(45);
            width: vw-pc(390);
            text-align: center;
        }

        .login {
            margin-bottom: 0;
        }

        .login a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: vw-pc(95);
            height: auto;
        }

        .login a:hover {
            color: $color-main;
        }
    }

    @media screen and (min-width: $breakpoint2) {

        .navi {
            margin-right: 30px;
            width: calc(100% - 390px - 30px);
        }

        .navi>div>p {
            font-size: 15px;
            font-size: 1.5rem;
        }

        .navi-member {
            border-left: 2px solid #b9c1ce;
            padding: 0 20px 0 45px;
            width: 390px;
        }

        .login a {
            width: 95px;
        }
    }

    /* ------------------------------------ グローバルナビ（SP） */


    @media screen and (max-width: $breakpoint1) {

        .header-navi__in {
            display: block;
            padding-top: vw-sp(30);
            height: calc(100vh - 16vw);
            overflow-y: scroll;
        }

        .navi-member {
            margin: 0 auto;
            width: vw-sp(650);
        }

        .navi {
            margin-bottom: vw-sp(60);
        }

        .navi>div {
            width: 100%;
            font-weight: 700;
            border-bottom: 1px dotted $color-base;
        }

        .navi>div>p {
            padding: 1.5em 2em;
            color: $color-base;
            font-size: vw-sp(25);
        }

        .navi>div>p span:nth-of-type(1) {
            margin-right: 1.5em;
        }

        .navi>div>p:hover {
            background-color: $color-text;
        }
    }


    /* ----------------- トグルボタン - */

    .toggle {
        position: fixed;
        top: vw-sp(20);
        right: vw-sp(15);
        width: vw-sp(120);
        height: vw-sp(110);
        cursor: pointer;
        z-index: 555;
        transition: opacity 0.25s ease;
    }

    .toggle span {
        position: absolute;
        left: vw-sp(20);
        width: vw-sp(80);
        height: vw-sp(6);
        background-color: $color-text;
        -webkit-transition: all 0.35s ease;
        transition: all 0.35s ease;
        cursor: pointer;
    }

    .toggle span:nth-of-type(1) {
        top: vw-sp(24);
    }

    .toggle span:nth-of-type(2) {
        top: vw-sp(52);
    }

    .toggle span:nth-of-type(3) {
        top: vw-sp(80);
    }

    .toggle.is-active span:nth-of-type(1) {
        top: vw-sp(52); // 2番目のtopと同一値に
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .toggle.is-active span:nth-of-type(2) {
        display: none;
    }

    .toggle.is-active span:nth-of-type(3) {
        top: vw-sp(52); // 2番目のtopと同一値に
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    @media screen and (min-width: $breakpoint1) {
        .toggle {
            display: none;
        }
    }

</style>
