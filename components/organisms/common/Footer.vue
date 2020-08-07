<template>
    
        <footer id="footer" class="footer">
            <div class="footer-top">
                <div class="footer-logo">
                    <ul class="footer-logo-list">
                        <li><img src="~/assets/img/common/ikusai-logo.svg" class="img--fit" alt="ikus.ai"></li>
                        <li><img src="~/assets/img/common/kikagaku-logo.svg" class="img--fit" alt="キカガク"></li>
                    </ul>
                </div>
                <ul class="footer-navi">
                    <li><a href="#">助成金について</a></li>
                    <li><a href="#">法人向けサービスのお問い合わせ</a></li>
                    <li><a href="#">ikus.ai認定クリエイターとは</a></li>
                    <li><a href="#">利用規約</a></li>
                    <li><a href="#">プライバシーポリシー</a></li>
                </ul>
            </div>
            <div class="footer-bottom">
                <div class="footer-social">
                    <a href="#" target="_blank"><img src="~/assets/img/common/facebook.png" class="img--fit" alt="facebook"></a>
                    <a href="#" target="_blank"><img src="~/assets/img/common/youtube.png" class="img--fit" alt="youtube"></a>
                    <a href="#" target="_blank"><img src="~/assets/img/common/twitter.png" class="img--fit" alt="twitter"></a>
                </div>
                <p class="footer-copy">&copy; <script>
                        document.write(new Date().getFullYear());

                    </script> kikagakaku</p>
            </div>
            <div id="pagetop" class="pagetop" data-mt-duration="300">
                <a href="#top"><img src="~/assets/img/common/pagetop.png" class="img--fit" alt="PAGE TOP"></a>
            </div>
        </footer>
</template>



<style lang="scss" scoped>
@import "~assets/scss/style.scss";

// main: ../style.scss

/*  footer
------------------------------------------------------------------------------*/

.footer {
  position: relative;
  padding: vw-sp(50) vw-sp(30) vw-sp(35) vw-sp(30);
  background-color: $color-main;
}

@media screen and (min-width: $breakpoint1) {

  .footer {
    padding: vw-pc(92) vw-pc(30) vw-pc(25) vw-pc(30);
  }
}

@media screen and (min-width: $breakpoint2) {

  .footer {
    padding: 92px 30px 25px 30px;
  }
}

.footer-logo {
  padding: vw-sp(30) vw-sp(30);
  width: vw-sp(230);
  background-color: $color-base;
}

.footer-logo li:first-child {
  margin-bottom: vw-sp(20);
  img {
    width: vw-sp(181);
  }
}

.footer-logo li:last-child {
  img {
    width: vw-sp(135);
  }
}

@media screen and (max-width: $breakpoint1-max) {

  .footer-top {
    display: flex;
    align-items: flex-start;
    margin-bottom: vw-sp(30);
  }

  .footer-logo {
    margin-right: vw-sp(35);
  }

  .footer-navi {
    width: calc(100% - #{vw-sp(265)});
  }
}

@media screen and (min-width: $breakpoint1) {

  .footer-logo {
    position: absolute;
    left: vw-pc(30);
    bottom: vw-pc(30);
    padding: vw-pc(40) vw-pc(45);
    width: vw-pc(300);
  }

  .footer-logo li:first-child {
    margin-bottom: vw-pc(28);
    img {
      width: vw-pc(181);
    }
  }

  .footer-logo li:last-child {
    img {
      width: vw-pc(157);
    }
  }
}

@media screen and (min-width: $breakpoint2) {

  .footer-logo {
    position: absolute;
    left: 30px;
    bottom: 30px;
    padding: 40px 45px;
    width: 300px;
  }

  .footer-logo li:first-child {
    margin-bottom: 28px;
    img {
      width: 181px;
    }
  }

  .footer-logo li:last-child {
    img {
      width: 157px;
    }
  }
}

/* ----------------- メニュー - */

.footer-navi {
  margin-bottom: vw-sp(40);
}

.footer-navi li a {
  position: relative;
  display: block;
  padding: .5em 0;
  color: $color-base;
  font-size: vw-sp(24);
  font-weight: 700;
  line-height: 1.3em;
}

.footer-navi li a:hover {
  color: #ff9e00;
}

@media screen and (min-width: $breakpoint1) {

  .footer-navi {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: vw-pc(40);
  }

  .footer-navi > li {
    border-right: 1px solid #95e2c2;
  }

  .footer-navi > li:last-child {
    border-right: none;
  }


  .footer-navi > li a {
    padding: .2em 2em;
    font-size: vw-pc(15);
  }

  .footer-navi > li:first-child a {
    padding-left: 0;
  }

  .footer-navi > li:last-child a {
    padding-right: 0;
  }
}

@media screen and (min-width: $breakpoint2) {

  .footer-navi {
    margin-bottom: 40px;
  }

  .footer-navi > li a {
    font-size: 15px; font-size: 1.5rem;
  }
}


/* ----------------- コピーライト - */

.footer-social {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto vw-sp(60) auto;
  width: vw-sp(200);
  a {
    display: block;
    width: vw-sp(50);
  }
}

.footer-social a:hover {
  opacity: 0.7;
}

.footer-copy {
  color: $color-base;
  font-family: $font2;
  font-size: vw-sp(20);
  font-weight: 600;
  text-align: center;
}

@media screen and (min-width: $breakpoint1) {

  .footer-bottom {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .footer-social {
    margin: 0 vw-pc(30) 0 0;
    width: vw-pc(130);
    a {
      width: vw-pc(29);
    }
  }

  .footer-copy {
    font-size: vw-pc(13);
    text-align: right;
  }
}

@media screen and (min-width: $breakpoint2) {

  .footer-social {
    margin: 0 30px 0 0;
    width: 130px;
    a {
      width: 29px;
    }
  }

  .footer-copy {
    font-size: 13px; font-size: 1.3rem;
  }
}


.pagetop {
  position: fixed;
  bottom: vw-sp(35);
  right: vw-sp(30);
  width: vw-sp(70);
  height: vw-sp(70);
  transition: all 1s ease-out;
  transition: bottom 0.2s ease-out;
  opacity: 0;
  z-index: 888;
}

.pagetop.is-show {
  opacity: 1;
}

.pagetop a {
  display: block;
  width: vw-sp(70);
  height: vw-sp(70);
}

.pagetop a:hover {
  opacity: 0.7;
}

@media screen and (min-width: $breakpoint1) {

  .pagetop {
    bottom: vw-pc(180);
    right: vw-pc(30);
    width: vw-pc(60);
    height: vw-pc(60);
  }

  .pagetop a {
    width: vw-pc(60);
    height: vw-pc(60);
  }
}

@media screen and (min-width: $breakpoint2) {

  .pagetop {
    bottom: 180px;
    right: 30px;
    width: 60px;
    height: 60px;
  }

  .pagetop a {
    width: 60px;
    height: 60px;
  }
}
</style>