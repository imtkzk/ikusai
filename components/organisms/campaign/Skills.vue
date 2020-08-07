<template>
    
          <div id="skills">
            <div class="center">
              <div class="diago-header">
                <h3 class="diago-head">学べるスキル</h3>
              </div>
              <h4 class="course-cmn-head">自走AI人材に<br class="br--sp">必要なスキルを幅広く網羅！</h4>
            </div>
            <ul class="course-skills">
              <li>
                <div class="course-skills-image">
                  <img src="~/assets/img/course/skills01.png" srcset="~/assets/img/course/skills01.png 1x,~/assets/img/course/skills01-2x.png 2x" class="img--fit" alt="数学">
                </div>
                <div class="course-skills-content">
                  <div>
                    <h4 class="course-skills-head">数学</h4>
                    <p>AIの数学学び、理解を本物に！</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="course-skills-image">
                  <img src="~/assets/img/course/skills02.png" srcset="~/assets/img/course/skills02.png 1x,~/assets/img/course/skills02-2x.png 2x" class="img--fit" alt="プログラミング">
                </div>
                <div class="course-skills-content">
                  <div>
                    <h4 class="course-skills-head">プログラミング</h4>
                    <p>Pythonを学び、AI開発する力を身につけます！</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="course-skills-image">
                  <img src="~/assets/img/course/skills03.png" srcset="~/assets/img/course/skills03.png 1x,~/assets/img/course/skills03-2x.png 2x" class="img--fit" alt="環境構築">
                </div>
                <div class="course-skills-content">
                  <div>
                    <h4 class="course-skills-head">環境構築</h4>
                    <p>クラウドやDockerを活用した環境構築方法</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="course-skills-image">
                  <img src="~/assets/img/course/skills04.png" srcset="~/assets/img/course/skills04.png 1x,~/assets/img/course/skills04-2x.png 2x" class="img--fit" alt="データ収集">
                </div>
                <div class="course-skills-content">
                  <div>
                    <h4 class="course-skills-head">データ収集</h4>
                    <p>AIの数学学び、理解を本物に！</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="course-skills-image">
                  <img src="~/assets/img/course/skills05.png" srcset="~/assets/img/course/skills05.png 1x,~/assets/img/course/skills05-2x.png 2x" class="img--fit" alt="データサイエンス">
                </div>
                <div class="course-skills-content">
                  <div>
                    <h4 class="course-skills-head">データサイエンス</h4>
                    <p>AIの数学学び、理解を本物に！</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="course-skills-image">
                  <img src="~/assets/img/course/skills06.png" srcset="~/assets/img/course/skills06.png 1x,~/assets/img/course/skills06-2x.png 2x" class="img--fit" alt="アプリケーション開発">
                </div>
                <div class="course-skills-content">
                  <div>
                    <h4 class="course-skills-head">アプリケーション開発</h4>
                    <p>AIの数学学び、理解を本物に！</p>
                  </div>
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

/* ---------------------------------- component --> skills */

.course-skills {
  margin-top: vw-sp(60);
}

.course-skills li {
  display: flex;
  margin: 0 auto vw-sp(20) auto;
  width: vw-sp(640);
  min-height: vw-sp(200);
  background-color: $color-base;
  border: vw-sp(4) solid $color-main;
}

.course-skills-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: vw-sp(150);
}

.course-skills li:nth-child(1) .course-skills-image img {
  width: vw-sp(82);
}

.course-skills li:nth-child(2) .course-skills-image img {
  width: vw-sp(86);
}

.course-skills li:nth-child(3) .course-skills-image img {
  width: vw-sp(83);
}

.course-skills li:nth-child(4) .course-skills-image img {
  width: vw-sp(74);
}

.course-skills li:nth-child(5) .course-skills-image img {
  width: vw-sp(75);
}

.course-skills li:nth-child(6) .course-skills-image img {
  width: vw-sp(81);
}

.course-skills-content {
  display: flex;
  align-items: center;
  width: vw-sp(450);
  p {
    line-height: 1.8em;
  }
}

.course-skills-head {
  margin-bottom: .5em;
  font-size: vw-sp(28);
  font-weight: 700;
  line-height: 1.4em;
}

@media screen and (min-width: $breakpoint1) {

  .course-skills {
    display: flex;
    flex-wrap: wrap;
    margin: vw-pc(60) 0 0 vw-pc(-30);
  }

  .course-skills li {
    margin: 0 0 vw-pc(15) vw-pc(30);
    width: vw-pc(380);
    min-height: vw-pc(140);
    border: vw-pc(2) solid $color-main;
  }

  .course-skills-image {
    width: vw-pc(100);
  }

  .course-skills li:nth-child(1) .course-skills-image img {
    width: vw-pc(72);
  }

  .course-skills li:nth-child(2) .course-skills-image img {
    width: vw-pc(76);
  }

  .course-skills li:nth-child(3) .course-skills-image img {
    width: vw-pc(73);
  }

  .course-skills li:nth-child(4) .course-skills-image img {
    width: vw-pc(64);
  }

  .course-skills li:nth-child(5) .course-skills-image img {
    width: vw-pc(65);
  }

  .course-skills li:nth-child(6) .course-skills-image img {
    width: vw-pc(71);
  }

  .course-skills-content {
    width: vw-pc(255);
  }

  .course-skills-head {
    font-size: vw-pc(18);
  }
}

@media screen and (min-width: $breakpoint2) {

  .course-skills {
    margin: 60px 0 0 -30px;
  }

  .course-skills li {
    margin: 0 0 15px 30px;
    width: 380px;
    min-height: 140px;
    border: 2px solid $color-main;
  }

  .course-skills-image {
    width: 100px;
  }

  .course-skills li:nth-child(1) .course-skills-image img {
    width: 72px;
  }

  .course-skills li:nth-child(2) .course-skills-image img {
    width: 76px;
  }

  .course-skills li:nth-child(3) .course-skills-image img {
    width: 73px;
  }

  .course-skills li:nth-child(4) .course-skills-image img {
    width: 64px;
  }

  .course-skills li:nth-child(5) .course-skills-image img {
    width: 65px;
  }

  .course-skills li:nth-child(6) .course-skills-image img {
    width: 71px;
  }

  .course-skills-content {
    width: 255px;
  }

  .course-skills-head {
    font-size: 18px; font-size: 1.8rem;
  }
}



.course-example {
  position: relative;
  margin-top: vw-sp(55);
  overflow: visible;
}

.course-example-list li {
  position: relative;
  padding: vw-sp(20);
  background-color: $color-base;
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.2);
  border-radius: vw-sp(20);
}

.course-example-list li:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: vw-sp(20);
  background-color: rgba(0,0,0,.06);
}

.course-example-list li.swiper-slide-active:before {
  content: none;
}

.course-example-image {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1em;
  height: vw-sp(233);
}

.course-example-image img {
  width: vw-sp(258);
  height: auto;
}

.course-example-head {
  margin: .5em vw-sp(25) .5em vw-sp(25);
  color: $color-main;
  font-size: vw-sp(28);
  font-weight: 700;
  line-height: 1.5em;
}

.course-example-target {
  display: inline-flex;
  margin: 0 vw-sp(25) vw-sp(30) vw-sp(25);
  border: 1px solid $color-text;
  dt {
    align-items: center;
    padding: .5em .5em .6em .5em;
    font-weight: 700;
  }

  dd {
    position: relative;
    border-left: 1px solid $color-text;
    padding: .5em 2em .6em .5em;
    font-weight: 700;
    text-align: center;
  }

  dd:after {
    content: '';
    position: absolute;
    top: 50%;
    right: .7em;
    display: inline-block;
    width: vw-sp(21);
    height: vw-sp(27);
    background-image: url(../../../assets/img/course/mark.png);
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}

.course-example-fukidashi {
  position: relative;
  padding: 1.3em 1em;
  background-color: #f8f8f8;
  border-radius: vw-sp(20);
  p {
    line-height: 1.5em;
  }
}

.course-example-fukidashi:before {
  content: '';
  position: absolute;
  top: vw-sp(-23);
  left: vw-sp(30);
  display: block;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 vw-sp(25) vw-sp(25) vw-sp(15);
  border-color: transparent transparent #f8f8f8 transparent;
  z-index: 0;
}

@media screen and (min-width: $breakpoint1) {

  .course-example {
    margin-top: vw-pc(45);
  }

  .course-example-list li {
    padding: vw-pc(10);
    border-radius: vw-pc(10);
  }

  .course-example-list li:before {
    border-radius: vw-pc(10);
  }

  .course-example-list li.swiper-slide-next:before,
  .course-example-list li.swiper-slide-next + li:before {
    content: none;
  }

  .course-example-image {
    height: vw-pc(175);
  }

  .course-example-image img {
    width: vw-pc(183);
  }


  .course-example-head {
    margin: .5em vw-pc(15) .5em vw-pc(15);
    font-size: vw-pc(18);
  }

  .course-example-target {
    margin: 0 vw-pc(15) vw-pc(20) vw-pc(15);
    dd:after {
      width: vw-pc(11);
      height: vw-pc(17);
    }
  }

  .course-example-fukidashi {
    border-radius: vw-pc(10);
  }

  .course-example-fukidashi:before {
    top: vw-pc(-13);
    left: vw-pc(20);
    border-width: 0 vw-pc(15) vw-pc(15) vw-pc(15);
  }
}

@media screen and (min-width: $breakpoint2) {

  .course-example {
    margin-top: 45px;
  }

  .course-example-list li {
    padding: 10px;
    border-radius: 10px;
  }

  .course-example-list li:before {
    border-radius: 10px;
  }

  .course-example-image {
    height: 175px;
  }

  .course-example-image img {
    width: 183px;
  }

  .course-example-head {
    margin: .5em 15px .5em 15px;
    font-size: 18px; font-size: 1.8rem;
  }

  .course-example-target {
    margin: 0 15px 20px 15px;
    dd:after {
      width: 11px;
      height: 17px;
    }
  }

  .course-example-fukidashi {
    border-radius: 10px;
  }

  .course-example-fukidashi:before {
    top: -13px;
    left: 20px;
    border-width: 0 15px 15px 15px;
  }
}

.example-slide-prev,
.example-slide-next {
  position: absolute;
  top: 50%;
  display: inline-block;
  margin-top: vw-sp(-20);
  width: vw-sp(60);
  height: vw-sp(60);
  background-size: contain;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 5;
  transition: .3s;
}

.example-slide-prev:hover,
.example-slide-next:hover {
  opacity: 0.7;
}

.example-slide-prev {
  left: 0;
  background-image: url(../../../assets/img/course/arrow-prev.png);
}

.example-slide-next {
  right: 0;
  background-image: url(../../../assets/img/course/arrow-next.png);
}

.example-slide-pagination {
  padding: vw-sp(60) 0 0 0;
  text-align: center;
}

.example-slide-pagination .swiper-pagination-bullet {
  left: 50%;
  bottom: 0 !important;
  margin: 0 .7em !important;
  width: vw-sp(12);
  height: vw-sp(12);
  display: inline-block;
  border-radius: 50%;
  background: #cccccc;
}


.example-slide-pagination .swiper-pagination-bullet-active {
  opacity: 1;
  background: #15b48a
}

@media screen and (min-width: $breakpoint1) {

  .example-slide-prev,
  .example-slide-next {
    margin-top: vw-pc(-20);
    width: vw-pc(50);
    height: vw-pc(50);
  }

  .example-slide-prev {
    left: vw-pc(-30);
  }

  .example-slide-next {
    right: vw-pc(-30);
  }

  .example-slide-pagination {
    padding: vw-pc(40) 0 0 0;
  }

  .example-slide-pagination .swiper-pagination-bullet {
    width: vw-pc(7);
    height: vw-pc(7);
  }
}

@media screen and (min-width: $breakpoint2) {

  .example-slide-prev,
  .example-slide-next {
    margin-top: -20px;
    width: 50px;
    height: 50px;
  }

  .example-slide-prev {
    left: -30px;
  }

  .example-slide-next {
    right: -30px;
  }

  .example-slide-pagination {
    padding: 40px 0 0 0;
  }

  .example-slide-pagination .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
  }
}
</style>