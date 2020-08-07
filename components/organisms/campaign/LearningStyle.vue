<template>
    
            <section id="larning-style" class="sec sec--style">
                <div class="style-illust style-illust01">
                    <img src="~/assets/img/style/illust01.png" srcset="~/assets/img/style/illust01.png 1x,~/assets/img/style/illust01-2x.png 2x" class="img--fit" alt="calc">
                </div>
                <div class="style-illust style-illust02">
                    <img src="~/assets/img/style/illust02.png" srcset="~/assets/img/style/illust02.png 1x,~/assets/img/style/illust02-2x.png 2x" class="img--fit" alt="books">
                </div>
                <div class="style-illust style-illust03">
                    <img src="~/assets/img/style/illust03.png" srcset="~/assets/img/style/illust03.png 1x,~/assets/img/style/illust03-2x.png 2x" class="img--fit" alt="board">
                </div>
                <div class="sec__in">
                    <div class="cmn-head cmn-head--style">
                        <p class="cmn-head__en">style</p>
                        <h2 class="cmn-head__jp">選べる学習スタイル</h2>
                    </div>
                    <div class="style-tabs">
                        <input id="style-tab01" type="radio" name="style-tab" class="style-tab-switch" checked="checked"><label class="style-tab-label" for="style-tab01">チーム学習</label>
                        <div class="style-tab-content fade">
                            <ul class="style">
                                <li>
                                    <div class="style-image">
                                        <img src="~/assets/img/style/image01.jpg" srcset="~/assets/img/style/image01.jpg 1x,~/assets/img/style/image01-2x.jpg 2x" class="img--fit" alt="学習する時間を指定">
                                        <h3 class="style-head">学習する時間を指定</h3>
                                    </div>
                                    <div class="style-content">
                                        <p>教室で講義をうけるのとどうように決まった時間で開催されるため、半強制的に学ぶ時間を確実に確保することができます。</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="style-image">
                                        <img src="~/assets/img/style/image02.jpg" srcset="~/assets/img/style/image02.jpg 1x,~/assets/img/style/image02-2x.jpg 2x" class="img--fit" alt="チーム内で相談、協力、問題解決">
                                        <h3 class="style-head">チーム内で相談、協力、問題解決</h3>
                                    </div>
                                    <div class="style-content">
                                        <p>同じ時刻に動画を視聴することで、他の参加者と同じ進行速度で講義が進んでいきます。</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="style-image">
                                        <img src="~/assets/img/style/image03.jpg" srcset="~/assets/img/style/image03.jpg 1x,~/assets/img/style/image03-2x.jpg 2x" class="img--fit" alt="モチベーションを維持">
                                        <h3 class="style-head">モチベーションを維持</h3>
                                    </div>
                                    <div class="style-content">
                                        <p>オンライン講義の受講完了はとても低いです。しかし、チームで受講することによってモチベーション高く学習を進めることが可能です。</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <input id="style-tab02" type="radio" name="style-tab" class="style-tab-switch"><label class="style-tab-label" for="style-tab02">個人学習</label>
                        <div class="style-tab-content fade">
                            <ul class="style">
                                <li>
                                    <div class="style-image">
                                        <img src="~/assets/img/style/image01.jpg" srcset="~/assets/img/style/image01.jpg 1x,~/assets/img/style/image01-2x.jpg 2x" class="img--fit" alt="学習する時間を指定">
                                        <h3 class="style-head">学習する時間を指定</h3>
                                    </div>
                                    <div class="style-content">
                                        <p>教室で講義をうけるのとどうように決まった時間で開催されるため、半強制的に学ぶ時間を確実に確保することができます。</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="style-image">
                                        <img src="~/assets/img/style/image02.jpg" srcset="~/assets/img/style/image02.jpg 1x,~/assets/img/style/image02-2x.jpg 2x" class="img--fit" alt="チーム内で相談、協力、問題解決">
                                        <h3 class="style-head">チーム内で相談、協力、問題解決</h3>
                                    </div>
                                    <div class="style-content">
                                        <p>同じ時刻に動画を視聴することで、他の参加者と同じ進行速度で講義が進んでいきます。</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="style-image">
                                        <img src="~/assets/img/style/image03.jpg" srcset="~/assets/img/style/image03.jpg 1x,~/assets/img/style/image03-2x.jpg 2x" class="img--fit" alt="モチベーションを維持">
                                        <h3 class="style-head">モチベーションを維持</h3>
                                    </div>
                                    <div class="style-content">
                                        <p>オンライン講義の受講完了はとても低いです。しかし、チームで受講することによってモチベーション高く学習を進めることが可能です。</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                            <CampaignCTABtn>より詳しく知りたい方は<br>無料オンライン説明会を予約する</CampaignCTABtn>
                </div>
            </section>
</template>

<script>
import CampaignCTABtn from '~/components/atoms/buttons/CampaignCTABtn.vue'

export default {
  components: {
    CampaignCTABtn
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/style.scss";

// main: ../style.scss

/*  style
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--style {
  padding: vw-sp(50) 0 vw-sp(100) 0;
}

@media screen and (min-width: $breakpoint1) {

  .sec--style {
    padding: vw-pc(40) 0 vw-pc(75) 0;
  }
}

@media screen and (min-width: $breakpoint2) {

  .sec--style {
    padding: 40px 0 75px 0;
  }
}


/* ---------------------------------- heading */

.cmn-head--style {
  margin-bottom: vw-sp(100);
}

@media screen and (min-width: $breakpoint1) {

  .cmn-head--style {
    margin-bottom: vw-pc(70);
  }
}

@media screen and (min-width: $breakpoint2) {

  .cmn-head--style {
    margin-bottom: 70px;
  }
}


/* ---------------------------------- component */

.style-tab-label {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: vw-sp(330);
  height: vw-sp(80);
  background-image: -moz-linear-gradient( 180deg, rgb(70,174,247) 0%, rgb(29,213,230) 100%);
  background-image: -webkit-linear-gradient( 180deg, rgb(70,174,247) 0%, rgb(29,213,230) 100%);
  border-radius: vw-sp(45);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
  color: $color-base;
  font-size: vw-sp(32);
  font-weight: 700;
  letter-spacing: .3em;
  order: -1;
}

.style-tab-label:after {
  content: '▼';
  margin-left: .5em;
  font-size: vw-sp(26);
}

.style-tab-content {
  margin-top: vw-sp(130);
  width: 100%;
  display: none;
  transition: .3s;
}

.style-tab-switch:checked+.style-tab-label {
  background-image: none;
  background-color: #e9f9f2;
  box-shadow: none;
  color: $color-main;
}

.style-tab-switch:checked+.style-tab-label:after {
  position: absolute;
  left: 50%;
  bottom: vw-sp(-60);
  margin-left: 0;
  color: $color-main;
  font-size: vw-sp(46);
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.style-tab-switch:checked+.style-tab-label+.style-tab-content {
  display: block;
}

.style-tab-switch {
  display: none;
}

.fade{
  animation: fadeIn 1s linear;
}

@keyframes fadeIn {
  0% {opacity: 0}
  100% {opacity: 1}
}

.style-tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

@media screen and (min-width: $breakpoint1) {

  .style-tab-label {
    width: vw-pc(580);
    height: vw-pc(70);
    border-radius: vw-pc(35);
    font-size: vw-pc(24);
  }

  .style-tab-label:after {
    margin-left: 1em;
    font-size: vw-pc(18);
  }

  .style-tab-content {
    margin-top: vw-pc(120);
  }

  .style-tab-switch:checked+.style-tab-label:after {
    bottom: vw-pc(-50);
    font-size: vw-pc(36);
  }
}

@media screen and (min-width: $breakpoint2) {

  .style-tab-label {
    width: 580px;
    height: 70px;
    border-radius: 35px;
    font-size: 24px; font-size: 2.4rem;
  }

  .style-tab-label:after {
    font-size: 18px; font-size: 1.8rem;
  }

  .style-tab-content {
    margin-top: 120px;
    width: 100%;
  }

  .style-tab-switch:checked+.style-tab-label:after {
    bottom: -50px;
    font-size: 36px; font-size: 3.6rem;
  }
}


.style {
  position: relative;
  margin: 0 0 vw-sp(45) 0;
  z-index: 2;
}

.style:before {
  content: '';
  position: absolute;
  top: vw-sp(200);
  left: 50%;
  width: vw-sp(750);
  height: calc(100% - #{vw-sp(130)});
  background-color: #e9f9f2;
  z-index: -1;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.style li {
  margin: 0 auto vw-sp(80) auto;
  width: vw-sp(650);
}

.style-image {
  position: relative;
}

.style-head {
  position: absolute;
  left: 0;
  bottom: vw-sp(-35);
  display: inline-flex;
  align-items: center;
  padding: 0 1em;
  height: vw-sp(70);
  background-color: $color-main;
  color: $color-base;
  font-size: vw-sp(28);
  font-weight: 700;
}

.style-content {
  padding-top: vw-sp(45);
  p {
    line-height: 1.8em;
  }
}

@media screen and (min-width: $breakpoint1) {

  .style {
    display: flex;
    margin: 0 0 vw-pc(35) vw-pc(-60);
  }

  .style:before {
    top: vw-pc(100);
    width: vw-pc(1400);
    height: vw-pc(325);
  }

  .style li {
    margin: 0 0 0 vw-pc(60);
    width: calc(33.33333% - #{vw-pc(60)});
  }

  .style-head {
    bottom: vw-pc(-20);
    height: vw-pc(40);
    font-size: vw-pc(18);
  }

  .style-content {
    padding-top: vw-pc(35);
  }
}

@media screen and (min-width: $breakpoint2) {

  .style {
    margin: 0 0 35px -60px;
  }

  .style:before {
    top: 100px;
    width: 1400px;
    height: 325px;
  }

  .style li {
    margin: 0 0 0 60px;
    width: calc(33.33333% - 60px);
  }

  .style-head {
    bottom: -20px;
    height: 40px;
    font-size: 18px; font-size: 1.8rem;
  }

  .style-content {
    padding-top: 35px;
  }
}


/* ---------------------------------- illust */

.style-illust {
  display: none;
}

@media screen and (min-width: $breakpoint1) {

  .style-illust {
    position: absolute;
    display: block;
  }

  .style-illust01 {
    top: vw-pc(270);
    left: vw-pc(-20);
    width: vw-pc(165);
  }

  .style-illust02 {
    bottom: vw-pc(65);
    left: vw-pc(-20);
    width: vw-pc(209);
  }

  .style-illust03 {
    bottom: vw-pc(30);
    right: vw-pc(-20);
    width: vw-pc(143);
  }
}

@media screen and (min-width: $breakpoint2) {

  .style-illust01 {
    top: 280px;
    left: 0;
    width: 165px;
  }

  .style-illust02 {
    bottom: 65px;
    left: 0;
    width: 209px;
  }

  .style-illust03 {
    bottom: 40px;
    right: 0;
    width: 143px;
  }
}
</style>