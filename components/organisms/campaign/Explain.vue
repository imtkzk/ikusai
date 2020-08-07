<template>
    <section id="explan" class="sec sec--explan">
      <div class="sec__in sec__in--small">
        <div class="cmn-head cmn-head--explan">
          <p class="cmn-head__en">campaign</p>
          <h2 class="cmn-head__jp">動画見放題キャンペーンとは？</h2>
        </div>
        <div class="explan-box">
          <div class="explan-box-header">
            <p>約<span>70</span>万円分の動画が<span>無料</span>！</p>
          </div>
          <p class="explan-box-desc">今なら長期コースの受講で、<br class="br--sp">AI、Web開発などの<br class="br--sp"><strong><span>動</span><span>画</span><span>が</span><span>す</span><span>べ</span><span>て</span><span>見</span><span>放</span><span>題</span>！</strong></p>
        </div>
        <div class="explan-desc">
          <p>本格的なWeb開発のためのスキルや、<br class="br--sp">AIに関するより発展的な内容など<br>豊富なikus.aiのコンテンツを<strong>1年間無料で見放題！</strong></p>
        </div>
        <ul class="explan">
          <li>
            <div class="explan-image">
              <img src="~/assets/img/explan/image01.png" srcset="~/assets/img/explan/image01.png 1x,~/assets/img/explan/image01-2x.png 2x" class="img--fit" alt="長期コースとは">
            </div>
            <h3 class="explan-head">長期コースとは</h3>
            <p>AIのプログラミングや数学はもちろん、本格的なAI搭載のWebアプリケーション開発までぶことができます。〇〇時間の動画でスキルを身に付け、プロトタイプ（試作品）が作成し、自走できるスキルを身につけることを目指します。</p>
          </li>
          <li>
            <div class="explan-image">
              <img src="~/assets/img/explan/image02.png" srcset="~/assets/img/explan/image02.png 1x,~/assets/img/explan/image02-2x.png 2x" class="img--fit" alt="ikus.ai とは？">
            </div>
            <h3 class="explan-head">ikus.ai とは？</h3>
            <p>動画学習プラットフォームです。AIやWeb開発様々な動画コンテンツがあります。</p>
          </li>
        </ul>
        <div class="explan-btn">
          <p class="explan-btn-period">キャンペーンは2021年9月30日まで！</p>
          <CampaignCTABtn>無料オンライン説明会を予約する</CampaignCTABtn>
        </div>
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

/*  explan
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--explan {
  padding: vw-sp(70) 0 vw-sp(90) 0;
  background-image: url(../../../assets/img/explan/bg.jpg);
  background-size: cover;
}

@media screen and (min-width: $breakpoint1) {

  .sec--explan {
    padding: vw-pc(65) 0 vw-pc(85) 0;
  }
}

@media screen and (min-width: $breakpoint2) {

  .sec--explan {
    padding: 65px 0 85px 0;
  }
}


/* ---------------------------------- heading */

.cmn-head--explan {
  margin-bottom: vw-sp(145);
}

@media screen and (min-width: $breakpoint1) {

  .cmn-head--explan {
    margin-bottom: vw-pc(135);
  }
}

@media screen and (min-width: $breakpoint2) {

  .cmn-head--explan {
    margin-bottom: 135px;
  }
}

/* ---------------------------------- component --> explan-box */

.explan-box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: vw-sp(30);
  padding: vw-sp(60) vw-sp(30) vw-sp(30) vw-sp(30);
  width: 100%;
  background-color: $color-base;
  border: vw-sp(8) solid $color-text;
  p {
    font-size: vw-sp(34);
    font-weight: 700;
    letter-spacing: .2em;
    strong {
      @include marker;
      span {
        position: relative;
      }
      span:before {
        content: '・';
        position: absolute;
        top: -.8em;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
      }
    }
  }
}

.explan-box-header {
  position: absolute;
  top: vw-sp(-55);
  left: 50%;
  width: 100%;
  height: vw-sp(86);
  background-image: url(../../../assets/img/explan/ribbon.png);
  background-size: 100%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  p {
    position: absolute;
    bottom: vw-sp(28);
    left: 50%;
    color: $color-base;
    font-size: vw-sp(34);
    font-weight: 700;
    letter-spacing: .2em;
    white-space: nowrap;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    span {
      color: #f9ff49;
    }

    span:nth-child(1) {
      margin-left: -.2em;
      font-size: vw-sp(54);
      font-style: italic;
    }
  }
}

.explan-desc {
  position: relative;
  margin: 0 auto vw-sp(210) auto;
  padding-left: vw-sp(120);
  width: 100%;
  font-size: vw-sp(28);
  line-height: 1.8em;
  strong {
    @include marker;
    font-weight: 700;
  }
}

.explan-desc:before {
  content: '';
  position: absolute;
  top: vw-sp(-55);
  left: vw-sp(20);
  display: inline-block;
  width: 59px;
  height: vw-sp(136);
  background-image: url(../../../assets/img/explan/people.png);
  background-size: contain;
  background-repeat: no-repeat;
}

@media screen and (max-width: $breakpoint1-max) {

  .explan-box-desc{
    text-align: center;
    line-height: 1.6em;
    strong {
      display: inline-block;
      margin-top: .8em;
    }
    span {
      line-height: 1em;
    }
  }
}

@media screen and (min-width: $breakpoint1) {

  .explan-box {
    margin-bottom: vw-pc(20);
    padding: vw-pc(50) 0 0 0;
    height: vw-pc(160);
    border: vw-pc(6) solid $color-text;
    p {
      font-size: vw-pc(24);
    }
  }

  .explan-box-header {
    top: vw-pc(-55);
    width: vw-pc(792);
    height: vw-pc(100);
    p {
      bottom: vw-pc(37);
      font-size: vw-pc(36);
      span:nth-child(1) {
        font-size: vw-pc(56);
      }
    }
  }

  .explan-desc {
    margin: 0 auto vw-pc(200) auto;
    padding-left: vw-pc(95);
    width: vw-pc(750);
    font-size: vw-pc(18);
  }

  .explan-desc:before {
    top: vw-pc(-45);
    left: 0;
    width: vw-pc(59);
    height: vw-pc(126);
  }
}

@media screen and (min-width: $breakpoint2) {

  .explan-box {
    margin-bottom: 20px;
    padding: 50px 0 0 0;
    height: 160px;
    border: 6px solid $color-text;
    p {
      font-size: 24px; font-size: 2.4rem;
    }
  }

  .explan-box-header {
    top: -55px;
    left: 50%;
    width: 792px;
    height: 100px;
    p {
      bottom: 37px;
      font-size: 36px; font-size: 3.6rem;
      span:nth-child(1) {
        font-size: 56px; font-size: 5.6rem;
      }
    }
  }

  .explan-desc {
    margin: 0 auto 200px auto;
    padding-left: 95px;
    width: 730px;
    font-size: 18px; font-size: 1.8rem;
  }

  .explan-desc:before {
    top: -45px;
    width: 59px;
    height: 126px;
  }
}

/* ---------------------------------- component --> explan */

.explan li {
  position: relative;
  margin: 0 auto vw-sp(200) auto;
  padding: vw-sp(100) vw-sp(40) vw-sp(30) vw-sp(30);
  width: vw-sp(640);
  background-color: $color-base;
  p {
    line-height: 1.8em;
  }
}

.explan li:last-child {
  margin-bottom: 0;
}

.explan-image {
  position: absolute;
  top: vw-sp(-155);
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.explan li:nth-child(1) .explan-image {
  width: vw-sp(275);
}

.explan li:nth-child(2) .explan-image {
  width: vw-sp(365);
}

.explan-head {
  margin-bottom: .8em;
  font-size: vw-sp(28);
  font-weight: 700;
  line-height: 1.5em;
}

@media screen and (min-width: $breakpoint1) {

  .explan {
    display: flex;
    margin-left: vw-pc(-80);
  }

  .explan li {
    margin: 0 0 0 vw-pc(80);
    padding: vw-pc(90) vw-pc(30) vw-pc(30) vw-pc(30);
    width: calc(50% - #{vw-pc(80)});
  }

  .explan-image {
    top: vw-pc(-135);
  }

  .explan li:nth-child(1) .explan-image {
    width: vw-pc(225);
  }

  .explan li:nth-child(2) .explan-image {
    width: vw-pc(315);
  }

  .explan-head {
    font-size: vw-pc(18);
  }
}

@media screen and (min-width: $breakpoint2) {

  .explan {
    margin-left: -80px;
  }

  .explan li {
    margin: 0 0 0 80px;
    padding: 90px 30px 30px 30px;
    width: calc(50% - 80px);
  }

  .explan-image {
    top: -135px;
  }

  .explan li:nth-child(1) .explan-image {
    width: 225px;
  }

  .explan li:nth-child(2) .explan-image {
    width: 315px;
  }

  .explan-head {
    font-size: 18px; font-size: 1.8rem;
  }
}


/* ---------------------------------- component --> explan-btn */

.explan-btn {
  position: relative;
  margin: vw-sp(150) auto 0 auto;
  width: vw-sp(660);
}

.explan-btn-period {
  position: absolute;
  top: vw-sp(-50);
  left: 50%;
  display: inline-block;
  font-size: vw-sp(30);
  font-weight: 700;
  white-space: nowrap;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.explan-btn-period:before,
.explan-btn-period:after {
  content: '';
  position: absolute;
  top: 50%;
  display: inline-block;
  width: vw-sp(26);
  height: vw-sp(39);
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.explan-btn-period:before {
  left: -1.5em;
  background-image: url(../../../assets/img/common/accent-l.png);
}

.explan-btn-period:after {
  right: -1.5em;
  background-image: url(../../../assets/img/common/accent-r.png);
}

@media screen and (min-width: $breakpoint1) {

  .explan-btn {
    margin: vw-pc(85) auto 0 auto;
    width: vw-pc(600);
  }

  .explan-btn-period {
    top: vw-pc(-35);
    font-size: vw-pc(24);
  }

  .explan-btn-period:before,
  .explan-btn-period:after {
    width: vw-pc(16);
    height: vw-pc(24);
  }
}

@media screen and (min-width: $breakpoint2) {

  .explan-btn {
    margin: 85px auto 0 auto;
    width: 600px;
  }

  .explan-btn-period {
    top: -35px;
    font-size: 24px; font-size: 2.4rem;
  }

  .explan-btn-period:before,
  .explan-btn-period:after {
    width: 16px;
    height: 24px;
  }
}
</style>