<template>
    
          <div id="reason">
            <div class="center">
              <div class="diago-header">
                <h3 class="diago-head">選ばれる理由</h3>
              </div>
            </div>
            <ul class="course-reason">
              <li>
                <div class="course-reason-image">
                  <img src="~/assets/img/course/reason01.png" srcset="~/assets/img/course/reason01.png 1x,~/assets/img/course/reason01-2x.png 2x" class="img--fit" alt="JDLA E資格認定講座！">
                </div>
                <div class="course-reason-content">
                  <h4 class="course-cmn-head">JDLA E資格認定講座！</h4>
                  <h5 class="course-reason-sub">機械学習エンジニアの<br>スキルを証明できる<br><strong>E資格の受験資格が取得できる</strong></h5>
                  <p>日本ディープラーニング協会（JDLA）が提供する、機械学習エンジニアのスキルの証明ができる「E資格」の認定講座となっております。</p>
                </div>
              </li>
              <li>
                <div class="course-reason-image">
                  <img src="~/assets/img/course/reason02.png" srcset="~/assets/img/course/reason02.png 1x,~/assets/img/course/reason02-2x.png 2x" class="img--fit" alt="Reスキル認定講座">
                </div>
                <div class="course-reason-content">
                  <h4 class="course-cmn-head">Reスキル認定講座</h4>
                  <h5 class="course-reason-sub">助成金で受講料の<br><strong>最大70%が返ってくる！</strong></h5>
                  <p>経済産業大臣が認定する「第四次産業革命スキル習得講座」の認定講座、厚生労働省指定の「教育訓練支援給付金」の対象講座となっており、最大70％の補助が出ます。<br class="br--sp">詳細は<a href="#">こちら</a></p>
                </div>
              </li>
              <li>
                <div class="course-reason-image">
                  <img src="~/assets/img/course/reason03.png" srcset="~/assets/img/course/reason03.png 1x,~/assets/img/course/reason03-2x.png 2x" class="img--fit" alt="アプリケーション作成までを一気通貫で学べる">
                </div>
                <div class="course-reason-content">
                  <h4 class="course-cmn-head">アプリケーション作成までを<br>一気通貫で学べる</h4>
                  <h5 class="course-reason-sub">機械学習、アプリケーション、<br>データ収集など<br><strong>必要なスキルを全て学べる</strong></h5>
                  <p>一般的な研修によくある機械学習のモデル構築だけでなく、アプリケーション作成までを行う実践的な講座となっております。</p>
                </div>
              </li>
            </ul>
          </div>
</template>


<style lang="scss" scoped>
@import "~assets/scss/style.scss";

/*  course
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--course {
  padding: vw-sp(70) 0 vw-sp(100) 0;
  background-image: url(../../../assets/img/course/bg.jpg);
  background-size: cover;
}

@media screen and (min-width: $breakpoint1) {

  .sec--course {
    padding: vw-pc(115) 0 vw-pc(100) 0;
  }
}

@media screen and (min-width: $breakpoint2) {

  .sec--course {
    padding: 115px 0 100px 0;
  }
}


/* ---------------------------------- heading */

.cmn-head--course {
  margin-bottom: vw-sp(80);
}

@media screen and (min-width: $breakpoint1) {

  .cmn-head--course {
    margin-bottom: vw-pc(65);
  }
}

@media screen and (min-width: $breakpoint2) {

  .cmn-head--course {
    margin-bottom: 65px;
  }
}



/* ---------------------------------- component */

.course > div {
  margin-bottom: vw-sp(80);
}

.course > div:last-child {
  margin-bottom: 0;
}

.course-cmn-head {
  margin-bottom: .7em;
  font-size: vw-sp(34);
  font-weight: 700;
  text-align: center;
  line-height: 1.6em;
}

@media screen and (min-width: $breakpoint1) {

  .course > div {
    margin-bottom: vw-pc(60);
  }

  .course-cmn-head {
    font-size: vw-pc(24);
  }
}

@media screen and (min-width: $breakpoint2) {

  .course > div {
    margin-bottom: 60px;
  }

  .course-cmn-head {
    font-size: 24px; font-size: 2.4rem;
  }
}

/* ---------------------------------- component --> reason */

.course-reason li {
  margin: 0 auto vw-sp(60) auto;
  width: vw-sp(640);
  background-color: $color-base;
}

.course-reason-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: vw-sp(230);
}

.course-reason li:nth-child(1) .course-reason-image img {
  width: vw-sp(102);
}

.course-reason li:nth-child(2) .course-reason-image img {
  width: vw-sp(137);
}

.course-reason li:nth-child(3) .course-reason-image img {
  width: vw-sp(132);
}

.course-reason-content {
  padding: 0 vw-sp(30) vw-sp(40) vw-sp(30);
  p {
    line-height: 1.8em;
  }
}

.course-reason-sub {
  margin-bottom: 1em;
  font-size: vw-sp(28);
  font-weight: 700;
  text-align: center;
  line-height: 1.8em;
  strong {
    color: $color-main;
  }
}

.course-reason-content a {
  padding-bottom: .2em;
  border-bottom: 1px solid $color-text;
  font-weight: 700;
}

.course-reason-content a:hover {
  opacity: .7;
}

@media screen and (min-width: $breakpoint1) {

  .course-reason {
    display: flex;
    justify-content: space-between
  }

  .course-reason li {
    margin: 0;
    width: vw-pc(380);
  }

  .course-reason-image {
    height: vw-pc(180);
  }

  .course-reason li:nth-child(1) .course-reason-image img {
    width: vw-pc(92);
  }

  .course-reason li:nth-child(2) .course-reason-image img {
    width: vw-pc(127);
  }

  .course-reason li:nth-child(3) .course-reason-image img {
    width: vw-pc(122);
  }

  .course-reason-content {
    padding: 0 vw-pc(20) vw-pc(30) vw-pc(20);
  }

  .course-reason-sub {
    font-size: vw-pc(18);
  }
}

@media screen and (min-width: $breakpoint2) {

  .course-reason li {
    width: 380px;
  }

  .course-reason-image {
    height: 180px;
  }

  .course-reason li:nth-child(1) .course-reason-image img {
    width: 92px;
  }

  .course-reason li:nth-child(2) .course-reason-image img {
    width: 127px;
  }

  .course-reason li:nth-child(3) .course-reason-image img {
    width: 122px;
  }

  .course-reason-content {
    padding: 0 20px 30px 20px;
  }

  .course-reason-sub {
    font-size: 18px; font-size: 1.8rem;
  }
}
</style>