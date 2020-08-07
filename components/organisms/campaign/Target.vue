<template>
          <div id="target">
            <div class="center">
              <div class="diago-header">
                <h3 class="diago-head">こんな方にオススメ</h3>
              </div>
            </div>
            <ul class="course-target">
              <li>
                <div class="course-target-image">
                  <img src="~/assets/img/course/target01.jpg" srcset="~/assets/img/course/target01.jpg 1x,~/assets/img/course/target01-2x.jpg 2x" class="img--fit" alt="一気通貫で学びたい">
                </div>
                <div class="course-target-content">
                  <h4 class="course-cmn-head">一気通貫で学びたい</h4>
                  <p>ものづくりが好きでAIを組み込んだアプリケーションを作成したい方</p>
                </div>
              </li>
              <li>
                <div class="course-target-image">
                  <img src="~/assets/img/course/target02.jpg" srcset="~/assets/img/course/target02.jpg 1x,~/assets/img/course/target02-2x.jpg 2x" class="img--fit" alt="転職に活かしたい">
                </div>
                <div class="course-target-content">
                  <h4 class="course-cmn-head">転職に活かしたい</h4>
                  <p>機械学習スキルを身に付け市場価値を高めることで転職を有利に進めたい方</p>
                </div>
              </li>
              <li>
                <div class="course-target-image">
                  <img src="~/assets/img/course/target03.jpg" srcset="~/assets/img/course/target03.jpg 1x,~/assets/img/course/target03-2x.jpg 2x" class="img--fit" alt="最短で学びたい">
                </div>
                <div class="course-target-content">
                  <h4 class="course-cmn-head">最短で学びたい</h4>
                  <p>回り道なく最短でAIアプリを作るスキルを最短距離で学びたい方</p>
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

/* ---------------------------------- component --> target */

.course-target li {
  margin: 0 auto vw-sp(60) auto;
  width: vw-sp(640);
}

.course-target-content {
  padding: vw-sp(30) vw-sp(30) vw-sp(40) vw-sp(30);
  background-color: $color-base;
  p {
    line-height: 1.8em;
  }
}

@media screen and (min-width: $breakpoint1) {

  .course-target {
    display: flex;
    justify-content: space-between
  }

  .course-target li {
    margin: 0;
    width: vw-pc(380);
  }

  .course-target-content {
    padding: vw-pc(20) vw-pc(20) vw-pc(30) vw-pc(20);
  }
}

@media screen and (min-width: $breakpoint2) {

  .course-target li {
    width: 380px;
  }

  .course-target-content {
    padding: 20px 20px 30px 20px;
  }
}
</style>