<template>
    
            <section id="flow" class="sec sec--flow">
                <div class="sec__in">
                    <div class="cmn-head cmn-head--flow">
                        <p class="cmn-head__en">flow</p>
                        <h2 class="cmn-head__jp">学習の流れ</h2>
                    </div>
                    <ul class="flow">
                        <li>
                            <p class="flow-label">INPUT</p>
                            <div class="flow-image">
                                <img src="~/assets/img/flow/flow01.jpg" srcset="~/assets/img/flow/flow01.jpg 1x,~/assets/img/flow/flow01-2x.jpg 2x" class="img--fit" alt="一知識のインプット">
                            </div>
                            <div class="flow-content">
                                <div class="flow-header">
                                    <h4 class="flow-head">知識のインプット</h4>
                                    <p class="flow-time">40分</p>
                                </div>
                                <p>プロの講師が解説する動画で知識を約40分でインプット</p>
                            </div>
                        </li>
                        <li>
                            <p class="flow-label">OUTPUT</p>
                            <div class="flow-image">
                                <img src="~/assets/img/flow/flow02.jpg" srcset="~/assets/img/flow/flow02.jpg 1x,~/assets/img/flow/flow02-2x.jpg 2x" class="img--fit" alt="知識のアウトプット">
                            </div>
                            <div class="flow-content">
                                <div class="flow-header">
                                    <h4 class="flow-head">知識のアウトプット</h4>
                                    <p class="flow-time">20分</p>
                                </div>
                                <p>学んだ内容の理解度をチェックする約20分のテストでアウトプット</p>
                            </div>
                        </li>
                        <li>
                            <p class="flow-label">Confirmation</p>
                            <div class="flow-image">
                                <img src="~/assets/img/flow/flow03.jpg" srcset="~/assets/img/flow/flow03.jpg 1x,~/assets/img/flow/flow03-2x.jpg 2x" class="img--fit" alt="進捗を確認">
                            </div>
                            <div class="flow-content">
                                <div class="flow-header">
                                    <h4 class="flow-head">進捗を確認</h4>
                                </div>
                                <p>どのスキルを習得し、どのレベルにいるのかをダッシュボード画面で確認</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
</template>

<style lang="scss" scoped>
@import "~assets/scss/style.scss";

// main: ../style.scss

/*  flow
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--flow {
  padding: vw-sp(70) 0 vw-sp(100) 0;
  z-index: 2;
}

.sec--flow:before,
.sec--flow:after {
  content: '';
  position: absolute;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
}

.sec--flow:before {
  top: vw-sp(25);
  left: 0;
  width: vw-sp(308);
  height: vw-sp(750);
  background-image: url(../../../assets/img/flow/bg-left.png);
}

.sec--flow:after {
  right: 0;
  width: vw-sp(330);
  height: vw-sp(726);
  background-image: url(../../../assets/img/flow/bg-right.png);
}

@media screen and (max-width: $breakpoint1-max) {

  .sec--flow:after {
    bottom: vw-sp(55);
  }
}

@media screen and (min-width: $breakpoint1) {

  .sec--flow {
    padding: vw-pc(90) 0 vw-pc(35) 0;
  }

  .sec--flow:before {
    top: vw-pc(15);
    width: vw-pc(308);
    height: vw-pc(750);
  }

  .sec--flow:after {
    top: vw-pc(45);
    width: vw-pc(330);
    height: vw-pc(726);
  }
}

@media screen and (min-width: $breakpoint2) {

  .sec--flow {
    padding: 90px 0 35px 0;
  }

  .sec--flow:before {
    top: 15px;
    width: 308px;
    height: 750px;
  }

  .sec--flow:after {
    top: 45px;
    width: 330px;
    height: 726px;
  }
}


/* ---------------------------------- heading */

.cmn-head--flow {
  margin-bottom: vw-sp(80);
}

@media screen and (min-width: $breakpoint1) {

  .cmn-head--flow {
    margin-bottom: vw-pc(65);
  }
}

@media screen and (min-width: $breakpoint2) {

  .cmn-head--flow {
    margin-bottom: 65px;
  }
}



/* ---------------------------------- component */

.flow li {
  position: relative;
  margin: 0 auto vw-sp(80) auto;
  width: vw-sp(640);
  border: vw-sp(4) solid #16325e;
}

.flow li:after {
  content: '▼';
  position: absolute;
  color: #16325e;
  font-size: vw-sp(46);
}

.flow li:last-child::after {
  content: none;
}

.flow-label {
  position: absolute;
  top: vw-sp(-40);
  left: vw-sp(30);
  padding: .5em 0;
  background-color: $color-base;
  color: #16325e;
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

.flow-content {
  position: relative;
  padding: vw-sp(60) vw-sp(30) vw-sp(40) vw-sp(30);
  background-color: $color-base;
  p {
    line-height: 1.8em;
  }
}

.flow-header {
  position: absolute;
  top: vw-sp(-30);
  display: flex;
  height: vw-sp(60);
  border: vw-sp(4) solid #16325e;
}

.flow-head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  background-color: #16325e;
  color: $color-base;
  font-size: vw-sp(28);
  font-weight: 700;
}

.flow-time {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em 0 2.5em;
  background-color: $color-base;
  color: #16325e;
  font-size: vw-sp(28);
  font-weight: 700;
}

.flow-time:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 1em;
  display: inline-block;
  width: vw-sp(27);
  height: vw-sp(27);
  background-image: url(../../../assets/img/flow/clock.png);
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

@media screen and (max-width: $breakpoint1-max) {

  .flow li:after {
    top: calc(100% - #{vw-sp(4)});
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}

@media screen and (min-width: $breakpoint1) {

  .flow {
    display: flex;
    justify-content: space-between
  }

  .flow li {
    margin: 0;
    width: vw-pc(380);
    border: vw-pc(2) solid #16325e;
  }

  .flow li:after {
    content: '▶︎';
    top: 50%;
    left: calc(100% - #{vw-pc(2)});
    font-size: vw-pc(36);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .flow-label {
    top: vw-pc(-30);
    left: vw-pc(20);
    font-size: vw-pc(18);
  }

  .flow-content {
    padding: vw-pc(40) vw-pc(20) vw-pc(30) vw-pc(20);
  }


  .flow-header {
    top: vw-pc(-20);
    left: vw-pc(20);
    height: vw-pc(40);
    border: vw-pc(2) solid #16325e;
  }

  .flow-head {
    font-size: vw-pc(18);
  }

  .flow-time {
    font-size: vw-pc(18);
  }

  .flow-time:before {
    width: vw-pc(17);
    height: vw-pc(17);
  }
}

@media screen and (min-width: $breakpoint2) {

  .flow li {
    width: 380px;
    border: 2px solid #16325e;
  }

  .flow li:after {
    left: calc(100% - 2px);
    font-size: 36px; font-size: 3.6rem;
  }

  .flow-label {
    top: -30px;
    left: 20px;
    font-size: 18px; font-size: 1.8rem;
  }

  .flow-content {
    padding: 40px 20px 30px 20px;
  }

  .flow-header {
    top: -20px;
    left: 20px;
    height: 40px;
    border: 2px solid #16325e;
  }

  .flow-head {
    font-size: 18px; font-size: 1.8rem;
  }

  .flow-time {
    font-size: 18px; font-size: 1.8rem;
  }

  .flow-time:before {
    width: 17px;
    height: 17px;
  }
}
</style>