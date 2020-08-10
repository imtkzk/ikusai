<template>
    
    <section id="interview" class="sec sec--inter">
      <div class="sec__in">
        <div class="cmn-head cmn-head--inter">
          <p class="cmn-head__en">interview</p>
          <h2 class="cmn-head__jp">受講生の声</h2>
        </div>
        <ul class="inter">
          <li>
            <p class="inter-label">VOICE</p>
            <h3 class="inter-head">TARO<br>YAMADA</h3>
            <div class="inter-image">
              <img src="~/assets/img/interview/image01.png" class="img--fit" alt="TARO YAMADA">
            </div>
            <div class="inter-content">
              <div class="inter-fukidashi">
                <p>ずっと気になっていた英会話をＥＣＣで始めることを決意し着実に英語力を伸ばしていたら、半年後に海外勤務が決まりました!!</p>
              </div>
            </div>
          </li>
          <li>
            <p class="inter-label">VOICE</p>
            <h3 class="inter-head">TARO<br>YAMADA</h3>
            <div class="inter-image">
              <img src="~/assets/img/interview/image01.png" class="img--fit" alt="TARO YAMADA">
            </div>
            <div class="inter-content">
              <div class="inter-fukidashi">
                <p>ずっと気になっていた英会話をＥＣＣで始めることを決意し着実に英語力を伸ばしていたら、半年後に海外勤務が決まりました!!</p>
              </div>
            </div>
          </li>
          <li>
            <p class="inter-label">VOICE</p>
            <h3 class="inter-head">TARO<br>YAMADA</h3>
            <div class="inter-image">
              <img src="~/assets/img/interview/image01.png" class="img--fit" alt="TARO YAMADA">
            </div>
            <div class="inter-content">
              <div class="inter-fukidashi">
                <p>ずっと気になっていた英会話をＥＣＣで始めることを決意し着実に英語力を伸ばしていたら、半年後に海外勤務が決まりました!!</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
</template>

<style lang="scss" scoped>
@import "~assets/scss/style.scss";

/*  interview
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--inter {
  padding: vw-sp(70) 0 vw-sp(100) 0;
  background-color: #f4fcf8;
}

@media screen and (min-width: $breakpoint1) {

  .sec--inter {
    padding: vw-pc(75) 0 vw-pc(120) 0;
  }
}

@media screen and (min-width: $breakpoint2) {

  .sec--inter {
    padding: 75px 0 120px 0;
  }
}


/* ---------------------------------- heading */

.cmn-head--inter {
  margin-bottom: vw-sp(80);
}

@media screen and (min-width: $breakpoint1) {

  .cmn-head--inter {
    margin-bottom: vw-pc(60);
  }
}

@media screen and (min-width: $breakpoint2) {

  .cmn-head--inter {
    margin-bottom: 60px;
  }
}


/* ---------------------------------- component */

.inter li {
  position: relative;
  margin: 0 auto vw-sp(80) auto;
  width: vw-sp(640);
  background-color: $color-base;
  border: vw-sp(4) solid $color-text;
}

.inter-label {
  position: absolute;
  top: vw-sp(-40);
  left: vw-sp(30);
  padding: .5em 0;
  background-color: $color-text;
  color: $color-base;
  font-family: $font2;
  font-size: vw-sp(28);
  font-weight: 700;
  line-height: 1.4em;
  text-transform: uppercase;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  transform:rotate(180deg);
  z-index: 2;
}


.inter-image {
  margin: vw-sp(60) auto;
  width: vw-sp(300);
  img {
    border-radius: 50%;
  }
}

.inter-content {
  position: relative;
  padding: 0 vw-sp(30) vw-sp(30) vw-sp(30);
  background-color: $color-base;
  p {
    line-height: 1.8em;
  }
}

.inter-head {
  position: absolute;
  top: vw-sp(270);
  left: vw-sp(460);
  color: $color-text;
  font-family: $font2;
  font-size: vw-sp(23);
  font-weight: 500;
  line-height: 1.8em;
}

@media screen and (min-width: $breakpoint1) {

  .inter {
    display: flex;
    justify-content: space-between
  }

  .inter li {
    margin: 0;
    width: vw-pc(410);
    border: vw-pc(2) solid $color-text;
  }

  .inter-label {
    top: vw-pc(-30);
    left: vw-pc(20);
    font-size: vw-pc(18);
  }

  .inter-head {
    top: vw-pc(120);
    left: vw-pc(285);
    font-size: vw-pc(13);
  }

  .inter-image {
    margin: vw-pc(30) auto;
    width: vw-pc(150);
  }

  .inter-content {
    padding: 0 vw-pc(20) vw-pc(20) vw-pc(20);
  }
}

@media screen and (min-width: $breakpoint2) {

  .inter li {
    width: 380px;
    border: 2px solid $color-text;
  }

  .inter-label {
    top: -30px;
    left: 20px;
    font-size: 18px; font-size: 1.8rem;
  }

  .inter-head {
    top: 120px;
    left: 270px;
    font-size: 13px; font-size: 1.3rem;
  }

  .inter-image {
    margin: 30px auto;
    width: 150px;
  }

  .inter-content {
    padding: 0 20px 20px 20px;
  }
}


/* ---------------------------------- component --> inter-fukidashi */

.inter-fukidashi {
  position: relative;
  padding: 1.3em 1.5em;
  background-color: #f8f8f8;
  border-radius: vw-sp(20);
  p {
    font-weight: 700;
    line-height: 1.8em;
  }
}

.inter-fukidashi:before {
  content: '';
  position: absolute;
  top: vw-sp(-23);
  left: 50%;
  display: block;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 vw-sp(25) vw-sp(25) vw-sp(15);
  border-color: transparent transparent #f8f8f8 transparent;
  z-index: 0;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

@media screen and (min-width: $breakpoint1) {


  .inter-fukidashi {
    border-radius: vw-pc(10);
  }

  .inter-fukidashi:before {
    top: vw-pc(-13);
    border-width: 0 vw-pc(15) vw-pc(15) vw-pc(15);
  }
}

@media screen and (min-width: $breakpoint2) {

  .inter-fukidashi {
    border-radius: 10px;
  }

  .inter-fukidashi:before {
    top: -13px;
    border-width: 0 15px 15px 15px;
  }
}


</style>