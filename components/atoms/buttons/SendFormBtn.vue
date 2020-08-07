<template>

                                <div class="form-btn">
                                    <div class="cmn-btn cmn-btn--main cmn-btn--low">
                                        <div></div>
                                        <p><button type="submit" name="" value="submit" class="form-submit-btn">記入内容で申し込む（無料）</button></p>
                                    </div>
                                </div>
</template>

<style lang="scss" scoped>
@import "~assets/scss/style.scss";

/*  button
------------------------------------------------------------------------------*/

/* ---------------------------------- btn */
/* ---------------------------------- component --> form-btn */

.form-btn {
  margin: 0 auto;
  width: vw-sp(500);
  .cmn-btn {
    border: none !important;
  }
}

.form-submit-btn {
  display: block;
  width: 100%;
  height: 100%;
  color: $color-base;
  font-size: vw-sp(26);
  font-weight: 700;
  letter-spacing: .1em;
}

.form-submit-btn:hover {
  color: #ff9f01;
}

@media screen and (min-width: $breakpoint1) {

  .form-btn {
    width: vw-pc(345);
  }

  .form-submit-btn {
    font-size: vw-pc(16);
  }
}

@media screen and (min-width: $breakpoint2) {

  .form-btn {
    width: 345px;
  }

  .form-submit-btn {
    font-size: 16px; font-size: 1.6rem;
  }
}


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

  .cmn-btn {
    border: vw-pc(3) solid $color-base !important;
  }

  .cmn-btn a,
  .cmn-btn p {
    font-size: vw-pc(24);
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



</style>