<template>
    <section id="benefit" class="sec sec--benefit">
      <ul class="benefit">
        <li>
          <h2 class="benefit-head">給付金 × キャンペーン活用で<br><strong>最大<span>120万円</span>お得！</strong></h2>
          <div class="benefit-image">
            <img src="~/assets/img/benefit/image01.png" srcset="~/assets/img/benefit/image01.png 1x,~/assets/img/benefit/image01-2x.png 2x" class="img--fit" alt="給付金 × キャンペーン活用で最大お得！">
          </div>
          <p>給付金利用（504,000円）、<br>動画7本（700,000円）視聴した場合</p>
        </li>
        <li>
          <h2 class="benefit-head">JDLA<small>（日本ディープラーニング協会）</small><br><strong><span>E資格認定</span></strong></h2>
          <div class="benefit-image">
            <img src="~/assets/img/benefit/image02.png" srcset="~/assets/img/benefit/image02.png 1x,~/assets/img/benefit/image02-2x.png 2x" class="img--fit" alt="給付金 × キャンペーン活用で最大お得！">
          </div>
          <p>動画視聴でE資格受験資格を獲得</p>
        </li>
        <li>
          <h2 class="benefit-head">豊富な実績<br><small>これまでの受講生数</small><br><strong><span>30,000</span>人以上</strong></h2>
          <div class="benefit-image">
            <img src="~/assets/img/benefit/image03.png" srcset="~/assets/img/benefit/image03.png 1x,~/assets/img/benefit/image03-2x.png 2x" class="img--fit" alt="豊富な実績 これまでの受講生数 30,000人以上">
          </div>
          <p>2020年8月時点でのオンライン、オフライン両方の<br class="br--pc">株式会社キカガクの総受講生数</p>
        </li>
      </ul>
      <div class="sec__in sec__in--small">
        <div class="benefit-corpo">
          <div class="benefit-corpo-header">
            <h2 class="benefit-corpo-head">これまでの受講企業</h2>
            <p>※ロゴは使用許可を頂いた一部企業様</p>
          </div>
          <ul class="benefit-corpo-list">
            <li><img src="~/assets/img/benefit/isid.png" srcset="~/assets/img/benefit/isid.png 1x,~/assets/img/benefit/isid-2x.png 2x" class="img--fit" alt="isid"></li>
            <li><img src="~/assets/img/benefit/trial.png" srcset="~/assets/img/benefit/trial.png 1x,~/assets/img/benefit/trial-2x.png 2x" class="img--fit" alt="TRIAL"></li>
            <li><img src="~/assets/img/benefit/ricoh.png" srcset="~/assets/img/benefit/ricoh.png 1x,~/assets/img/benefit/ricoh-2x.png 2x" class="img--fit" alt="RICOH"></li>
            <li><img src="~/assets/img/benefit/mizuho.png" srcset="~/assets/img/benefit/mizuho.png 1x,~/assets/img/benefit/mizuho-2x.png 2x" class="img--fit" alt="mizuho"></li>
            <li><img src="~/assets/img/benefit/tokyo-gas.png" srcset="~/assets/img/benefit/tokyo-gas.png 1x,~/assets/img/benefit/tokyo-gas-2x.png 2x" class="img--fit" alt="TOKYO GAS"></li>
            <li><img src="~/assets/img/benefit/canon.png" srcset="~/assets/img/benefit/canon.png 1x,~/assets/img/benefit/canon-2x.png 2x" class="img--fit" alt="CANON"></li>
            <li><img src="~/assets/img/benefit/ntt-data.png" srcset="~/assets/img/benefit/ntt-data.png 1x,~/assets/img/benefit/ntt-data-2x.png 2x" class="img--fit" alt="NTT data"></li>
            <li><img src="~/assets/img/benefit/prudential.png" srcset="~/assets/img/benefit/prudential.png 1x,~/assets/img/benefit/prudential-2x.png 2x" class="img--fit" alt="Prudential"></li>
          </ul>
        </div>
      </div>
    </section>
</template>

<style lang="scss" scoped>
@import "~assets/scss/style.scss";

// main: ../style.scss

/*  benefit
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--benefit {
  padding: vw-sp(100) 0 vw-sp(100) 0;
}

@media screen and (min-width: $breakpoint1) {

  .sec--benefit {
    padding: vw-pc(70) 0 vw-pc(85) 0;
  }
}

@media screen and (min-width: $breakpoint2) {

  .sec--benefit {
    padding: 70px 0 85px 0;
  }
}

/* ---------------------------------- component */

.benefit {
  margin: 0 0 vw-sp(70) 0;
}

.benefit li {
  margin: 0 auto;
  padding: vw-sp(40) 0;
  width: vw-sp(600);
  p {
    padding-left: 1em;
    text-indent: -1em;
    font-size: vw-sp(23);
    line-height: 1.5em;
  }
  p:before {
    content: '※';
  }
}

.benefit li:nth-child(1) p {
  padding-left: vw-sp(100);
}

.benefit li:nth-child(2) p {
  text-align: center;
}

.benefit li:last-child {
  margin-bottom: 0;
  border: none;
}

.benefit-head {
  font-size: vw-sp(34);
  font-weight: 700;
  text-align: center;
  line-height: 1.6em;
  small {
    font-size: vw-sp(26);
    font-weight: normal;
  }
  strong {
    @include marker;
    span {
      font-family: $font2,$font1;
      font-size: vw-sp(46);
    }
  }
}

.benefit-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: vw-sp(35) 0;
}

.benefit li:nth-child(1) .benefit-image img {
  width: vw-sp(200);
}

.benefit li:nth-child(2) .benefit-image img {
  width: vw-sp(171);
}

.benefit li:nth-child(3) .benefit-image img {
  width: vw-sp(289);
}

@media screen and (max-width: $breakpoint1-max) {

  .benefit li {
    border-bottom: 2px solid #b9c1ce;
  }
}

@media screen and (min-width: $breakpoint1) {

  .benefit {
    display: flex;
    margin: 0 auto vw-pc(55) auto;
    width: vw-pc(1600);
  }

  .benefit li {
    margin: 0;
    padding: 0;
    width: 33.33333%;
    border-right: 2px solid #b9c1ce;
    p {
      font-size: vw-pc(13);
    }
  }

  .benefit-head {
    font-size: vw-pc(24);
    small {
      font-size: vw-pc(16);
    }
    strong {
      span {
        font-size: vw-pc(36);
      }
    }
  }

  .benefit li:nth-child(1) .benefit-image {
    margin: vw-pc(40) 0 vw-pc(35) 0;
  }

  .benefit li:nth-child(2) .benefit-image {
    margin: vw-pc(25) 0 vw-pc(28) 0;
  }

  .benefit li:nth-child(3) .benefit-image {
    margin: 0;
  }

  .benefit li:nth-child(1) .benefit-image img {
    width: vw-pc(170);
  }

  .benefit li:nth-child(2) .benefit-image img {
    width: vw-pc(141);
  }

  .benefit li:nth-child(3) .benefit-image img {
    width: vw-pc(259);
  }

  .benefit li:nth-child(1) p {
    padding-left: vw-pc(140);
  }

  .benefit li:nth-child(3) p {
    padding-left: vw-pc(90);
  }

}

@media screen and (min-width: $breakpoint2) {

  .benefit {
    margin: 0 auto 55px auto;
    width: 1600px;
  }

  .benefit li {
    p {
      font-size: 13px; font-size: 1.3rem;
    }
  }

  .benefit-head {
    font-size: 24px; font-size: 2.4rem;
    small {
      font-size: 16px; font-size: 1.6rem;
    }
    strong {
      span {
        font-size: 36px; font-size: 3.6rem;
      }
    }
  }

  .benefit li:nth-child(1) .benefit-image {
    margin: 40px 0 35px 0;
  }

  .benefit li:nth-child(2) .benefit-image {
    margin: 25px 0 28px 0;
  }

  .benefit li:nth-child(3) .benefit-image {
    margin: 0;
  }

  .benefit li:nth-child(1) .benefit-image img {
    width: 170px;
  }

  .benefit li:nth-child(2) .benefit-image img {
    width: 141px;
  }

  .benefit li:nth-child(3) .benefit-image img {
    width: 259px;
  }

  .benefit li:nth-child(1) p {
    padding-left: 140px;
  }

  .benefit li:nth-child(3) p {
    padding-left: 90px;
  }


}


.benefit-corpo-header {
  margin-bottom: .5em;
  p {
    font-size: vw-sp(28);
    line-height: 1.6em;
  }
}

.benefit-corpo-head {
  margin-bottom: .3em;
  font-size: vw-sp(34);
  font-weight: 700;
  line-height: 1.5em;
}

.benefit-corpo-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: vw-sp(600);
  border: 2px solid #b9c1ce;
}

.benefit-corpo-list li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: vw-sp(130);
  border-right: 2px solid #b9c1ce;
}

.benefit-corpo-list li:nth-child(1),
.benefit-corpo-list li:nth-child(2),
.benefit-corpo-list li:nth-child(3),
.benefit-corpo-list li:nth-child(4),
.benefit-corpo-list li:nth-child(5),
.benefit-corpo-list li:nth-child(6){
  border-bottom: 2px solid #b9c1ce;
}

.benefit-corpo-list li:nth-child(2),
.benefit-corpo-list li:nth-child(4),
.benefit-corpo-list li:nth-child(6),
.benefit-corpo-list li:nth-child(8){
  border-right: none;
}

@media screen and (max-width: $breakpoint1-max) {

  .benefit-corpo-header {
    text-align: center;
  }
}

@media screen and (min-width: $breakpoint1) {

  .benefit-corpo-header {
    display: flex;
    align-items: flex-end;
    margin-bottom: .5em;
    p {
      margin-left: 1.5em;
      font-size: vw-pc(18);
    }
  }

  .benefit-corpo-head {
    margin-bottom: 0;
    font-size: vw-pc(24);
  }

  .benefit-corpo-list {
    width: 100%;
  }

  .benefit-corpo-list li {
    width: 25%;
    height: vw-pc(105);
  }

  .benefit-corpo-list li:nth-child(5),
  .benefit-corpo-list li:nth-child(6){
    border-bottom: none;
  }

  .benefit-corpo-list li:nth-child(2),
  .benefit-corpo-list li:nth-child(6){
    border-right: 2px solid #b9c1ce;
  }

  .benefit-corpo-list li:nth-child(4),
  .benefit-corpo-list li:nth-child(8){
    border-right: none;
  }
}

@media screen and (min-width: $breakpoint2) {

  .benefit-corpo-header {
    p {
      font-size: 18px; font-size: 1.8rem;
    }
  }

  .benefit-corpo-head {
    font-size: 24px; font-size: 2.4rem;
  }

  .benefit-corpo-list li {
    height: 105px;
  }
}
</style>