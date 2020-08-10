<template>
        <div class="apply-btn">
          <p class="apply-btn-deals">今なら 最大<strong><span>7</span><span>0</span>%OFF</strong>約<span>50</span>万円お得</p>
          <div class="cmn-btn cmn-btn--main cmn-btn--alte">
            <div></div>
            <p><span><small>キカガク長期コース</small></span><br class="br--sp"><span>動画見放題キャンペーンの詳細へ</span></p>
          </div>
        </div>
</template>

<style lang="scss" scoped>
    @import "~assets/scss/style.scss";

    /*  button
------------------------------------------------------------------------------*/
    /* ---------------------------------- btn */

/* ---------------------------------- cmn btn */

.cmn-btn {
  position: relative;
  font-family: $font2,$font1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: vw-sp(5) solid $color-base !important;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  p {
    line-height: 1.4em;
  }
}

.cmn-btn--low {
  border-radius: 2.5em;
}

.cmn-btn--high {
  border-radius: 3.5em;
}

.cmn-btn--low,
.cmn-btn--low p,
.cmn-btn--low > div {
  height: vw-sp(90);
}

.cmn-btn--high,
.cmn-btn--high a,
.cmn-btn--high > div {
  height: vw-sp(120);
}

.cmn-btn--alte,
.cmn-btn--alte a,
.cmn-btn--alte > div {
  height: vw-sp(130);
  border-radius: 3.5em;
}

.cmn-btn a,
.cmn-btn p {
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $color-base;
  width: 100%;
  font-size: vw-sp(28);
  font-weight: 700;
  text-decoration:none;
  transition:all .5s ease;
  z-index: 2;
  small {
    font-size: 0.86em;
  }
}

.cmn-btn > div {
  position: absolute;
  width: 100%;
  top: 0;
  left: -100%;
  background-color: $color-base;
  transition:all .5s ease;
  z-index: 1;
}

@media screen and (max-width: $breakpoint1-max) {

  .cmn-btn--alte,
  .cmn-btn--alte a,
  .cmn-btn--alte > div {
    p {
      flex-wrap: wrap;
    }
    span {
      display: block;
      width: 100%;
    }
    span:nth-child(1) {
      margin-bottom: .2em;
    }
  }
}

@media screen and (min-width: $breakpoint1) {

  .cmn-btn--low,
  .cmn-btn--low p,
  .cmn-btn--low > div {
    height: vw-pc(70);
  }

  .cmn-btn--high,
  .cmn-btn--high a,
  .cmn-btn--high > div {
    height: vw-pc(100);
  }

  .cmn-btn--alte,
  .cmn-btn--alte p,
  .cmn-btn--alte > div {
    height: vw-pc(70);
    border-radius: 2.5em;
  }


  .cmn-btn {
    border: vw-pc(3) solid $color-base !important;
  }

  .cmn-btn a,
  .cmn-btn p {
    font-size: vw-pc(24);
    small {
      font-size: 0.66em;
    }
  }
}

@media screen and (min-width: $breakpoint2) {

  .cmn-btn--low,
  .cmn-btn--low p,
  .cmn-btn--low > div {
    height: 70px;
  }

  .cmn-btn--high,
  .cmn-btn--high a,
  .cmn-btn--high > div {
    height: 100px;
  }

  .cmn-btn--alte,
  .cmn-btn--alte p,
  .cmn-btn--alte > div {
    height: 70px;
  }

  .cmn-btn {
    border: 3px solid $color-base !important;
  }

  .cmn-btn a,
  .cmn-btn p {
    font-size: 24px; font-size: 2.4rem;
  }
}

.cmn-btn a:before {
  content: '';
  display: inline-block;
  margin-right: .5em;
  background-size: contain;
  background-repeat: no-repeat;
}

.cmn-btn--main {
  background-image: -moz-linear-gradient( 0deg, rgb(255,158,0) 0%, rgb(255,181,23) 100%);
  background-image: -webkit-linear-gradient( 0deg, rgb(255,158,0) 0%, rgb(255,181,23) 100%);
}

.cmn-btn--main:hover p {
  color: #ff9e00;
}

.cmn-btn:hover > div {
  left: 0;
  background-color: $color-base;
}



/* ---------------------------------- btn */

.cta-btn {
  margin: vw-sp(60) auto 0 auto;
  width: vw-sp(660);
}

@media screen and (min-width: $breakpoint1) {

  .cta-btn {
    margin: vw-pc(65) auto 0 auto;
    width: vw-pc(600);
  }
}

@media screen and (min-width: $breakpoint2) {

  .cta-btn {
    margin: 65px auto 0 auto;
    width: 600px;
  }
}


/* ---------------------------------- component --> apply-btn */

.apply-btn {
  position: relative;
  margin: 0 auto;
  width: vw-sp(650);
}

.apply-btn-deals {
  position: absolute;
  top: vw-sp(-70);
  left: 50%;
  display: inline-block;
  font-family: $font2,$font1;
  font-size: vw-sp(28);
  font-weight: 700;
  white-space: nowrap;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  > span {
    font-size: 1.5em;
  }
  strong {
    margin: 0 .2em;
    padding: 0 .1em;
    @include marker;
    font-size: 1.5em;
    span {
      position: relative;
    }

    span:before {
      content: '・';
      position: absolute;
      top: -.7em;
      left: 50%;
      font-size: .8em;
      -webkit-transform: translateX(-50%);
transform: translateX(-50%);
    }
  }
}

.apply-btn-deals:before,
.apply-btn-deals:after {
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

.apply-btn-deals:before {
  left: -1.5em;
  background-image: url(../../../assets/img/common/accent-l.png);
}

.apply-btn-deals:after {
  right: -1.5em;
  background-image: url(../../../assets/img/common/accent-r.png);
}

@media screen and (min-width: $breakpoint1) {

  .apply-btn {
    width: vw-pc(660);
    div > p > span {
      margin-right: 1em;
    }
  }

  .apply-btn-deals {
    top: vw-pc(-55);
    font-size: vw-pc(24);
  }

  .apply-btn-deals:before,
  .apply-btn-deals:after {
    width: vw-pc(16);
    height: vw-pc(24);
  }
}

@media screen and (min-width: $breakpoint2) {

  .apply-btn {
    width: 660px;
  }

  .apply-btn-deals {
    top: -55px;
    font-size: 24px; font-size: 2.4rem;
  }

  .apply-btn-deals:before,
  .apply-btn-deals:after {
    width: 16px;
    height: 24px;
  }
}

</style>
