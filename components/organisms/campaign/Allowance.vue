<template>
    
            <section id="arrowance" class="sec sec--arrowance">
                <div class="sec__in">
                    <div class="arrowance-box">
                        <div class="arrowance-box-header">
                            <h2 class="arrowance-box-head"><b>給付金の利用で</b><br class="br--sp"><b>受講料の<strong>最大<span>70</span>%OFF</strong></b></h2>
                        </div>
                        <div class="arrowance-box-content">
                            <ul class="arrowance-price">
                                <li>
                                    <div class="arrowance-price-image">
                                        <p>給付金なし</p>
                                        <div class="arrowance-price-icon">
                                            <img src="~/assets/img/arrowance/monay01.png" srcset="~/assets/img/arrowance/monay01.png 1x,~/assets/img/arrowance/monay01-2x.png 2x" class="img--fit" alt="monay">
                                        </div>
                                    </div>
                                    <p class="arrowance-price-num"><strong>720,000円</strong>（税抜）</p>
                                </li>
                                <li>
                                    <div class="arrowance-price-image">
                                        <p>給付金あり</p>
                                        <div class="arrowance-price-icon">
                                            <img src="~/assets/img/arrowance/monay02.png" srcset="~/assets/img/arrowance/monay02.png 1x,~/assets/img/arrowance/monay02-2x.png 2x" class="img--fit" alt="monay">
                                        </div>
                                    </div>
                                    <p class="arrowance-price-num"><strong><span>216,000</span>円</strong>（税抜）</p>
                                </li>
                            </ul>
                        </div>
                        <div class="arrowance-box-footer">
                            <p>最大<span>504,000</span>円お得！！</p>
                        </div>
                    </div>

                    <div class="arrowance-flow">
                        <div class="arrowance-flow-header">
                            <h3 class="arrowance-flow-head">申請の流れ</h3>
                        </div>
                        <div class="arrowance-flow-content">
                            <ul class="arrowance-step">
                                <li>
                                    <h4 class="arrowance-step-head"><span>STEP 01</span></h4>
                                    <div class="arrowance-step-image">
                                        <img src="~/assets/img/arrowance/icon01.png" srcset="~/assets/img/arrowance/icon01.png 1x,~/assets/img/arrowance/icon01-2x.png 2x" class="img--fit" alt="STEP 01">
                                    </div>
                                    <div class="arrowance-step-content">
                                        <p>ハローワークにて必要な書類を提出</p>
                                    </div>
                                </li>
                                <li>
                                    <h4 class="arrowance-step-head"><span>STEP 02</span></h4>
                                    <div class="arrowance-step-image">
                                        <img src="~/assets/img/arrowance/icon01.png" srcset="~/assets/img/arrowance/icon01.png 1x,~/assets/img/arrowance/icon01-2x.png 2x" class="img--fit" alt="STEP 01">
                                    </div>
                                    <div class="arrowance-step-content">
                                        <p>ハローワークにて必要な書類を提出</p>
                                    </div>
                                </li>
                                <li>
                                    <h4 class="arrowance-step-head"><span>STEP 03</span></h4>
                                    <div class="arrowance-step-image">
                                        <img src="~/assets/img/arrowance/icon01.png" srcset="~/assets/img/arrowance/icon01.png 1x,~/assets/img/arrowance/icon01-2x.png 2x" class="img--fit" alt="STEP 01">
                                    </div>
                                    <div class="arrowance-step-content">
                                        <p>ハローワークにて必要な書類を提出</p>
                                    </div>
                                </li>
                                <li>
                                    <h4 class="arrowance-step-head"><span>STEP 04</span></h4>
                                    <div class="arrowance-step-image">
                                        <img src="~/assets/img/arrowance/icon01.png" srcset="~/assets/img/arrowance/icon01.png 1x,~/assets/img/arrowance/icon01-2x.png 2x" class="img--fit" alt="STEP 01">
                                    </div>
                                    <div class="arrowance-step-content">
                                        <p>ハローワークにて必要な書類を提出</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="arrowance-target">
                        <div class="arrowance-target-header">
                            <h3 class="arrowance-target-head">給付金の対象者/条件</h3>
                        </div>
                        <div class="arrowance-target-content">
                            <ul class="arrowance-target-list">
                                <li>給付金の対象条件 1内容内容内容内容内容内容内容内容内容</li>
                                <li>給付金の対象条件 1内容内容内容内容内容内容内容内容内容</li>
                                <li>給付金の対象条件 1内容内容内容内容内容内容内容内容内容</li>
                                <li>給付金の対象条件 1内容内容内容内容内容内容内容内容内容</li>
                                <li>給付金の対象条件 1内容内容内容内容内容内容内容内容内容</li>
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

/*  arrowance
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--arrowance {
  padding: vw-sp(145) 0 vw-sp(90) 0;
  background-image: -moz-linear-gradient( -60deg, rgb(41,108,0) 0%, rgb(137,221,175) 0%, rgb(37,208,115) 100%);
  background-image: -webkit-linear-gradient( -60deg, rgb(41,108,0) 0%, rgb(137,221,175) 0%, rgb(37,208,115) 100%);
}

@media screen and (min-width: $breakpoint1) {

  .sec--arrowance {
    padding: vw-pc(135) 0 vw-pc(70) 0;
  }
}

@media screen and (min-width: $breakpoint2) {

  .sec--arrowance {
    padding: 135px 0 70px 0;
  }
}


/* ---------------------------------- component --> arrowance-box */

.arrowance-box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: vw-sp(200);
  padding: vw-sp(150) vw-sp(40) vw-sp(80) vw-sp(40);
  width: 100%;
  background-color: $color-base;
  border: vw-sp(8) solid $color-text;
  > p {
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

.arrowance-box-header {
  position: absolute;
  top: vw-sp(-70);
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: vw-sp(560);
  height: vw-sp(140);
  background-color: $color-text;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.arrowance-box-head {
  color: $color-base;
  font-size: vw-sp(36);
  font-weight: 700;
  letter-spacing: .2em;
  b {
    background:linear-gradient(transparent 60%, #43597c 60%);
  }
  strong {
    color: #f9ff49;
    font-family: $font2,$font1;
    span {
      font-size: vw-sp(56);
    }
  }
}

.arrowance-box-footer {
  position: absolute;
  bottom: vw-sp(-50);
  left: 50%;
  width: 100%;
  height: vw-sp(98);
  background-image: url(../../../assets/img/arrowance/ribbon.png);
  background-size: 100%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  p {
    position: absolute;
    bottom: vw-sp(28);
    left: 50%;
    color: $color-base;
    font-size: vw-sp(28);
    font-weight: 700;
    letter-spacing: .2em;
    white-space: nowrap;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    span {
      color: #f9ff49;
      font-family: $font2;
      font-size: vw-sp(48);
    }
  }
}

@media screen and (min-width: $breakpoint1) {

  .arrowance-box {
    margin-bottom: vw-pc(215);
    padding: vw-pc(115) vw-pc(95);
    border: vw-pc(6) solid $color-text;
    > p {
      font-size: vw-pc(24);
    }
  }

  .arrowance-box-header {
    top: vw-pc(-60);
    width: vw-pc(890);
    height: vw-pc(120);
  }

  .arrowance-box-head {
    font-size: vw-pc(36);
    strong {
      span {
        font-size: vw-pc(56);
      }
    }
  }

  .arrowance-box-footer {
    bottom: vw-pc(-47);
    width: vw-pc(933);
    height: vw-pc(133);
    p {
      bottom: vw-pc(40);
      font-size: vw-pc(36);
      span {
        font-size: vw-pc(56);
      }
    }
  }

  .arrowance-box-footer {
    bottom: vw-pc(-47);
    width: vw-pc(933);
    height: vw-pc(133);
    p {
      bottom: vw-pc(40);
      font-size: vw-pc(36);
      span {
        font-size: vw-pc(56);
      }
    }
  }
}

@media screen and (min-width: $breakpoint2) {

  .arrowance-box {
    margin-bottom: 215px;
    padding: 115px 95px;
    border: 6px solid $color-text;
    > p {
      font-size: 24px; font-size: 2.4rem;
    }
  }

  .arrowance-box-header {
    top: -60px;
    width: 890px;
    height: 120px;
  }

  .arrowance-box-head {
    font-size: 36px; font-size: 3.6rem;
    strong {
      span {
        font-size: 56px; font-size: 5.6rem;
      }
    }
  }

  .arrowance-box-footer {
    bottom: -47px;
    width: 933px;
    height: 133px;
    p {
      bottom: 40px;
      font-size: 36px; font-size: 3.6rem;
      span {
        font-size: 56px; font-size: 5.6rem;
      }
    }
  }
}

.arrowance-box-content {
  position: relative;
  width: 100%;
}

.arrowance-price {
  position: relative;
}

.arrowance-price li {
  position: relative;
  display: flex;
  align-items: center;
}

.arrowance-price-num {
  font-family: $font2,$font1;
  font-size: vw-sp(24);
  strong {
    font-size: vw-sp(30);
    font-weight: 700;
  }
}

.arrowance-price li:nth-child(1):after {
  content: '▼';
  position: absolute;
  color: $color-main;
  font-size: vw-sp(46);
  font-weight: 700;

}

.arrowance-price li:nth-child(2) {
  width: 100%;
  .arrowance-price-num {
    color: #f18d27;
    font-size: vw-sp(30);
    @include marker;
    strong {
      font-size: vw-sp(42);
    }
  }
}

.arrowance-price-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: vw-sp(30);
  border-radius: 50%;
  color: $color-base;
  font-weight: 700;
  letter-spacing: .2em;
}

.arrowance-price li:nth-child(1) .arrowance-price-image {
  width: vw-sp(180);
  height: vw-sp(180);
  background-color: #cccccc;
  font-size: vw-sp(24);
}

.arrowance-price li:nth-child(2) .arrowance-price-image {
  width: vw-sp(200);
  height: vw-sp(200);
  background-image: -moz-linear-gradient( 130deg, rgba(250,209,38,0.99608) 0%, rgb(255,183,79) 100%);
  background-image: -webkit-linear-gradient( 130deg, rgba(250,209,38,0.99608) 0%, rgb(255,183,79) 100%);
  font-size: vw-sp(26);
}

.arrowance-price-icon {
  position: absolute;
  top: vw-sp(-40);
  left: 50%;
  width: vw-sp(86);
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

@media screen and (max-width: $breakpoint1-max) {

  .arrowance-price li:nth-child(1) {
    margin-bottom: vw-sp(60);
  }

  .arrowance-price li:nth-child(1):after {
    bottom: vw-sp(-40);
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

}

@media screen and (min-width: $breakpoint1) {

  .arrowance-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .arrowance-price li {
    display: flex;
    align-items: center;
  }

  .arrowance-price-num {
    font-size: vw-pc(18);
    strong {
      font-size: vw-pc(24);
    }
  }

  .arrowance-price li:nth-child(1):after {
    content: '▶︎';
    top: 50%;
    right: vw-pc(-50);
    font-size: vw-pc(36);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .arrowance-price li:nth-child(2) {
    width: vw-pc(510);
    .arrowance-price-num {
      font-size: vw-pc(24);
      strong {
        font-size: vw-pc(36);
      }
    }
  }

  .arrowance-price-image {
    margin-right: vw-pc(25);
  }

  .arrowance-price li:nth-child(1) .arrowance-price-image {
    width: vw-pc(150);
    height: vw-pc(150);
    font-size: vw-pc(18);
  }

  .arrowance-price li:nth-child(2) .arrowance-price-image {
    width: vw-pc(180);
    height: vw-pc(180);
    font-size: vw-pc(24);
  }

  .arrowance-price-icon {
    top: vw-pc(-30);
    width: vw-pc(76);
  }
}

@media screen and (min-width: $breakpoint2) {

  .arrowance-price-num {
    font-size: 18px; font-size: 1.8rem;
    strong {
      font-size: 24px; font-size: 2.4rem;
    }
  }

  .arrowance-price li:nth-child(1):after {
    right: -50px;
    font-size: 36px; font-size: 3.6rem;

  }

  .arrowance-price li:nth-child(2) {
    width: 510px;
    .arrowance-price-num {
      font-size: 24px; font-size: 2.4rem;
      strong {
        font-size: 36px; font-size: 3.6rem;
      }
    }
  }

  .arrowance-price-image {
    margin-right: 25px;
  }

  .arrowance-price li:nth-child(1) .arrowance-price-image {
    width: 150px;
    height: 150px;
    font-size: 18px; font-size: 1.8rem;
  }

  .arrowance-price li:nth-child(2) .arrowance-price-image {
    width: 180px;
    height: 180px;
    font-size: 24px; font-size: 2.4rem;
  }

  .arrowance-price-icon {
    top: -30px;
    width: 76px;
  }
}


/* ---------------------------------- component --> arrowance-flow */

.arrowance-flow {
  position: relative;
  margin-bottom: vw-sp(75);
  background-color: $color-base;
  border: vw-sp(8) solid #f9ff49;
  border-radius: vw-sp(20);
  z-index: 2;
}

.arrowance-flow-header {
  position: absolute;
  top: vw-sp(-120);
  left: 50%;
  display: flex;
  justify-content: center;
  width: vw-sp(300);
  height: vw-sp(300);
  background-color: $color-base;
  border: vw-sp(8) solid #f9ff49;
  border-radius: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: -1;
}

.arrowance-flow-head {
  margin-top: vw-sp(55);
  padding-left: .2em;
  font-size: vw-sp(36);
  font-weight: 700;
  letter-spacing: .2em;
}

.arrowance-flow-content {
  padding: vw-sp(75) vw-sp(50);
  background-color: $color-base;
  z-index: 1;
}

.arrowance-step li {
  position: relative;
  margin-bottom: vw-sp(60);
  width: 100%;
}

.arrowance-step li:last-child {
  margin-bottom: 0;
}

.arrowance-step-head {
  font-family: $font2;
  font-size: vw-sp(28);
  font-weight: 700;
  text-align: center;
  span {
    @include marker;
  }
}

.arrowance-step-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: vw-sp(190);
  height: vw-sp(190);
  background-color: #f8f8f8;
  border-radius: 50%;
  z-index: 2;
  img {
    width: vw-sp(65);
    height: auto;
  }
}

.arrowance-step li:nth-child(1) .arrowance-step-image:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: vw-sp(15);
  height: vw-sp(770);
  background-color: #f8f8f8;
  z-index: -1;
}

.arrowance-step-content p {
  font-weight: 700;
  line-height: 1.8em;
}

@media screen and (max-width: $breakpoint1-max) {

  .arrowance-step li {
    display: flex;
    justify-content: space-between;
  }

  .arrowance-step-head {
    position: absolute;
    top: 0;
    left: vw-sp(220);
  }

  .arrowance-step-content {
    padding-top: vw-sp(50);
    width: vw-sp(350);
  }

  .arrowance-step li:nth-child(1) .arrowance-step-image:after {
    transform: translateX(-50%);
  }

}

@media screen and (min-width: $breakpoint1) {

  .arrowance-flow {
    margin-bottom: vw-pc(65);
    border: vw-pc(6) solid #f9ff49;
    border-radius: vw-pc(10);
  }

  .arrowance-flow-header {
    top: vw-pc(-110);
    width: vw-pc(295);
    height: vw-pc(295);
    border: vw-pc(6) solid #f9ff49;
  }

  .arrowance-flow-head {
    margin-top: vw-pc(65);
    font-size: vw-pc(30);
  }

  .arrowance-flow-content {
    padding: vw-pc(65) vw-pc(40);
  }

  .arrowance-step {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .arrowance-step li {
    margin-bottom: 0;
    width: vw-pc(250);
  }

  .arrowance-step-head {
    font-size: vw-pc(18);
  }

  .arrowance-step-image {
    margin: vw-pc(20) auto;
    width: vw-pc(180);
    height: vw-pc(180);
    img {
      width: vw-pc(58);
    }
  }

  .arrowance-step li:nth-child(1) .arrowance-step-image:after {
    width: vw-pc(785);
    height: vw-pc(10);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}

@media screen and (min-width: $breakpoint2) {

  .arrowance-flow {
    margin-bottom: 65px;
    border: 6px solid #f9ff49;
    border-radius: 10px;
  }

  .arrowance-flow-header {
    top: -110px;
    left: 50%;
    width: 295px;
    height: 295px;
    border: 6px solid #f9ff49;
  }

  .arrowance-flow-head {
    margin-top: 65px;
    font-size: 30px; font-size: 3.0rem;
  }

  .arrowance-flow-content {
    padding: 65px 40px;
  }

  .arrowance-step li {
    width: 250px;
  }

  .arrowance-step-head {
    font-size: 18px; font-size: 1.8rem;
  }

  .arrowance-step-image {
    margin: 20px auto;
    width: 180px;
    height: 180px;
    img {
      width: 58px;
    }
  }

  .arrowance-step li:nth-child(1) .arrowance-step-image:after {
    width: 785px;
    height: 10px;
  }
}

/* ---------------------------------- component --> arrowance-target */

.arrowance-target {
  margin: 0 auto;
  width: 100%;
}

.arrowance-target-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: vw-sp(40);
  width: 100%;
  height: vw-sp(120);
  border: vw-sp(3) solid $color-base;
}

.arrowance-target-head {
  color: $color-base;
  font-size: vw-sp(34);
  font-weight: 700;
  letter-spacing: .2em;
}

.arrowance-target-content {
  margin: 0 auto;
  width: vw-sp(620);
}

.arrowance-target-list {
  align-self: center;
}

.arrowance-target-list li {
  position: relative;
  margin-bottom: 1em;
  padding-left: vw-sp(40);
  color: $color-base;
  font-size: vw-sp(28);
  font-weight: 700;
  line-height: 1.8em;
}

.arrowance-target-list li:last-child {
  position: relative;
  margin-bottom: 0;
}

.arrowance-target-list li:before {
  content: '';
  position: absolute;
  top: .4em;
  left: 0;
  display: inline-block;
  width: vw-sp(29);
  height: vw-sp(29);
  background-image: url(../../../assets/img/arrowance/check.png);
  background-size: contain;
  background-repeat: no-repeat;
}


@media screen and (min-width: $breakpoint1) {

  .arrowance-target {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: vw-pc(1000);
  }

  .arrowance-target-header {
    margin-bottom: 0;
    width: vw-pc(370);
    height: auto;
    border: vw-pc(2) solid $color-base;
  }

  .arrowance-target-head {
    font-size: vw-pc(24);
  }

  .arrowance-target-content {
    margin: 0;
    width: vw-pc(585);
  }

  .arrowance-target-list {
    padding: vw-pc(20) 0;
  }

  .arrowance-target-list li {
    padding-left: vw-pc(30);
    font-size: vw-pc(18);
  }

  .arrowance-target-list li:before {
    width: vw-pc(19);
    height: vw-pc(19);
  }
}

@media screen and (min-width: $breakpoint2) {

  .arrowance-target {
    width: 1000px;
  }

  .arrowance-target-header {
    width: 370px;
    border: 2px solid $color-base;
  }

  .arrowance-target-head {
    font-size: 24px; font-size: 2.4rem;
  }

  .arrowance-target-content {
    width: 585px;
  }

  .arrowance-target-list {
    padding: 20px 0;
  }

  .arrowance-target-list li {
    padding-left: 30px;
    font-size: 18px; font-size: 1.8rem;
  }

  .arrowance-target-list li:before {
    width: 19px;
    height: 19px;
  }
}

</style>