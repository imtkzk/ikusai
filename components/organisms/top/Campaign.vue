<template>
    <section id="campaign" class="sec sec--campaign">
      <div class="sec__in">
        <div class="cmn-head cmn-head--campaign">
          <p class="cmn-head__en">campaign</p>
          <h2 class="cmn-head__jp">AI、Web開発の動画が見放題</h2>
          <p class="cmn-head__desc">プロダクトを作り抜き、<br class="br--sp">自走する力を身につけるキカガク長期コースを<br class="br--sp">申し込めば、<strong>全ての動画が見放題</strong></p>
        </div>
        <ul class="campaign">
          <li>
            <h3 class="campaign-head">こんな方にオススメ</h3>
            <div class="campaign-image">
              <img src="~/assets/img/campaign/image01.png" srcset="~/assets/img/campaign/image01.png 1x,~/assets/img/campaign/image01-2x.png 2x" class="img--fit" alt="こんな方にオススメ">
            </div>
            <ul class="campaign-list">
              <li>エンジニアスキルを身に付け、転職を考えている方</li>
              <li>AI、機械学習について基礎から実践まで学びたい方</li>
              <li>プロトタイプを作り切る、Web開発スキルを身に付けたい方</li>
            </ul>
          </li>
          <li>
            <h3 class="campaign-head">見放題の動画</h3>
            <div class="campaign-image">
              <img src="~/assets/img/campaign/image02.png" srcset="~/assets/img/campaign/image02.png 1x,~/assets/img/campaign/image02-2x.png 2x" class="img--fit" alt="見放題の動画">
            </div>
            <ul class="campaign-list">
              <li>AIの基礎</li>
              <li>Pythonの基礎</li>
              <li>ニューラルネットワークの数学・プログラミング</li>
              <li>FlaskでWebアプリケーション作成</li>
              <li>Web開発の基礎 (HTML、CSS、JavaScript)</li>
              <li>Web開発の実践（NuxtでWebアプリケーション作成）</li>
            </ul>
          </li>
        </ul>
        <TopCTABtn />
      </div>
    </section>
</template>

<script>
    import TopCTABtn from '~/components/atoms/buttons/TopCTABtn.vue'

    export default {
        components: {
            TopCTABtn
        }
    }
</script>

<style lang="scss" scoped>
    @import "~assets/scss/style.scss";
    /*  campaign
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--campaign {
  padding: vw-sp(100) 0 vw-sp(100) 0;
  background-image: url(../../../assets/img/campaign/bg.jpg);
  background-size: cover;
}

@media screen and (min-width: $breakpoint1) {

  .sec--campaign {
    padding: vw-pc(115) 0 vw-pc(100) 0;
  }
}

@media screen and (min-width: $breakpoint2) {

  .sec--campaign {
    padding: 115px 0 100px 0;
  }
}


/* ---------------------------------- heading */

.cmn-head--campaign {
  margin-bottom: vw-sp(120);
}

@media screen and (min-width: $breakpoint1) {

  .cmn-head--campaign {
    margin-bottom: vw-pc(90);
  }
}

@media screen and (min-width: $breakpoint2) {

  .cmn-head--campaign {
    margin-bottom: 90px;
  }
}


/* ---------------------------------- component */

.campaign {
  margin-bottom: vw-sp(150);
}

.campaign > li {
  position: relative;
  margin: 0 auto vw-sp(80) auto;
  padding: vw-sp(65) vw-sp(30);
  width: vw-sp(650);
  background-color: $color-base;
  border: vw-sp(3) solid $color-text;
}

.campaign > li:last-child {
  margin-bottom: 0;
}

.campaign-head {
  position: absolute;
  top: vw-sp(-30);
  height: vw-sp(60);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  background-color: $color-text;
  color: $color-base;
  font-size: vw-sp(28);
  font-weight: 700;
  text-align: center;
  line-height: 1.6em;
}

.campaign > li:nth-child(1) .campaign-head {
  left: vw-sp(-3);
}

.campaign > li:nth-child(2) .campaign-head {
  right: vw-sp(-3);
}

@media screen and (min-width: $breakpoint1) {

  .campaign {
    display: flex;
    justify-content: space-between;
    margin-bottom: vw-pc(125);
  }

  .campaign > li {
    margin-bottom: 0;
    padding: vw-pc(35) vw-pc(30);
    width: vw-pc(610);
    border: vw-pc(2) solid $color-text;
  }

  .campaign-head {
    top: vw-pc(-20);
    height: vw-pc(40);
    font-size: vw-pc(18);
  }

  .campaign > li:nth-child(1) .campaign-head {
    left: vw-pc(-2);
  }

  .campaign > li:nth-child(2) .campaign-head {
    right: vw-pc(-2);
  }
}

@media screen and (min-width: $breakpoint2) {

  .campaign {
    margin-bottom: 125px;
  }

  .campaign > li {
    padding: 35px 30px;
    width: 560px;
    border: 2px solid $color-text;
  }

  .campaign-head {
    top: -20px;
    height: 40px;
    font-size: 18px; font-size: 1.8rem;
  }

  .campaign > li:nth-child(1) .campaign-head {
    left: -2px;
  }

  .campaign > li:nth-child(2) .campaign-head {
    right: -2px;
  }
}

.campaign-image {
  position: relative;
  text-align: center;
}

.campaign > li:nth-child(1) .campaign-image img {
  width: vw-sp(259);
}

.campaign > li:nth-child(2) .campaign-image img {
  width: vw-sp(222);
}

@media screen and (min-width: $breakpoint1) {

  .campaign > li:nth-child(1) .campaign-image img {
    width: vw-pc(259);
  }

  .campaign > li:nth-child(2) .campaign-image {
    top: vw-pc(-90);
    margin-bottom: vw-pc(-114);
  }

  .campaign > li:nth-child(2) .campaign-image img {
    width: vw-pc(222);
  }
}

@media screen and (min-width: $breakpoint2) {

  .campaign > li:nth-child(1) .campaign-image img {
    width: 259px;
  }

  .campaign > li:nth-child(2) .campaign-image {
    top: -90px;
    margin-bottom: -114px;
  }

  .campaign > li:nth-child(2) .campaign-image img {
    width: 222px;
  }
}

/* ---------------------------------- component --> list */


.campaign-list {
  margin-top: 1.5em;
}

.campaign-list li {
  position: relative;
  margin-bottom: .5em;
  padding-left: vw-sp(40);
  font-size: vw-sp(26);
  line-height: 1.8em;
}

.campaign-list li:last-child {
  position: relative;
  margin-bottom: 0;
}

.campaign-list li:before {
  content: '';
  position: absolute;
  top: .4em;
  left: 0;
  display: inline-block;
  width: vw-sp(29);
  height: vw-sp(29);
  background-image: url(../../../assets/img/common/check_b.png);
  background-size: contain;
  background-repeat: no-repeat;
}


@media screen and (min-width: $breakpoint1) {

  .campaign-list li {
    padding-left: vw-pc(30);
    font-size: vw-pc(16);
  }

  .campaign-list li:before {
    width: vw-pc(19);
    height: vw-pc(19);
  }
}

@media screen and (min-width: $breakpoint2) {

  .campaign-list li {
    padding-left: 30px;
    font-size: 16px; font-size: 1.6rem;
  }

  .campaign-list li:before {
    width: 19px;
    height: 19px;
  }
}
</style>