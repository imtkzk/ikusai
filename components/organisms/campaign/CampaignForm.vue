<template>
    
            <section id="campaign-form" class="sec sec--form">
                <div class="sec__in">
                    <div class="cmn-head cmn-head--form">
                        <p class="cmn-head__en">reservation</p>
                        <h2 class="cmn-head__jp">無料オンライン説明会を予約</h2>
                    </div>
                    <div class="form-label">
                        <p>簡単<span>2ステップ</span>、<span>30秒</span>でお申し込み</p>
                    </div>
                    <div class="reserv">
                        <div class="reserv-box">
                            <ul class="form-step">
                                <li class="is-active">
                                    <p>STEP<br>01</p>
                                </li>
                                <li>
                                    <p>STEP<br>02</p>
                                </li>
                            </ul>
                            <h3 class="reserv-head">ご希望のオンライン説明会の<br class="br--sp">参加日程を選択してください。</h3>
                            <div class="reserv-box__in">
                                <div class="form-campaign-date">
                                    <InputSelectChecked>2020年9月1日 18:00 ~ 19:00</InputSelectChecked>
                                    <InputSelect>2020年9月3日 18:00 ~ 19:00</InputSelect>
                                    <InputSelect>2020年9月3日 18:00 ~ 19:00</InputSelect>
                                    <InputSelect>2020年9月3日 18:00 ~ 19:00</InputSelect>
                                    <InputSelect>2020年9月3日 18:00 ~ 19:00</InputSelect>
                                    <InputSelect>2020年9月3日 18:00 ~ 19:00</InputSelect>
                                </div>
                            </div>
                        </div>
                        <div class="reserv-box">
                            <ul class="form-step">
                                <li>
                                    <p>STEP<br>01</p>
                                </li>
                                <li class="is-active">
                                    <p>STEP<br>02</p>
                                </li>
                            </ul>
                            <h3 class="reserv-head">基本情報を入力して予約</h3>
                            <div class="reserv-box__in form-campaign">
                              <InputText placeholder="例）田中 太郎">名前</InputText>
                              <InputText placeholder="例）ikusai@ikus.ai">メールアドレス</InputText>
                              <InputText placeholder="例）ikusai@ikus.ai">メールアドレス(確認用)</InputText>
                              <InputCheck />>
                                        <SendFormBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
</template>

<script>
import SendFormBtn from '~/components/atoms/buttons/SendFormBtn.vue'
import InputSelect from '~/components/atoms/Forms/InputSelect.vue'
import InputSelectChecked from '~/components/atoms/Forms/InputSelectChecked.vue'
import InputText from '~/components/atoms/Forms/InputText.vue'
import InputCheck from '~/components/atoms/Forms/InputCheck.vue'

export default {
  components: {
    SendFormBtn,
    InputSelect,
    InputSelectChecked,
    InputText,
    InputCheck
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/style.scss";

/*  form
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--form {
  padding: vw-sp(70) 0 vw-sp(100) 0;
  background-image: url(../../../assets/img/form/bg.jpg);
  background-size: cover;
}

@media screen and (min-width: $breakpoint1) {

  .sec--form {
    padding: vw-pc(75) 0 vw-pc(95) 0;
  }
}

@media screen and (min-width: $breakpoint2) {

  .sec--form {
    padding: 75px 0 95px 0;
  }
}


/* ---------------------------------- heading */

.cmn-head--form {
  margin-bottom: vw-sp(60);
}

@media screen and (min-width: $breakpoint1) {

  .cmn-head--form {
    margin-bottom: vw-pc(40);
  }
}

@media screen and (min-width: $breakpoint2) {

  .cmn-head--form {
    margin-bottom: 40px;
  }
}



/* ---------------------------------- component --> form-label */

.form-label {
  margin-bottom: vw-sp(60);
  text-align: center;
  p {
    display: inline-block;
    padding: .7em 2em;
    background-color: $color-main;
    border-radius: vw-sp(45);
    color: $color-base;
    font-size: vw-sp(28);
    text-align: center;
    font-weight: 700;
    letter-spacing: .2em;
    span {
      color: #f9ff49;
    }
  }
}

@media screen and (min-width: $breakpoint1) {

  .form-label {
    margin-bottom: vw-pc(100);
    p {
      padding: .7em 3em;
      border-radius: vw-pc(25);
      font-size: vw-pc(18);
    }
  }
}

@media screen and (min-width: $breakpoint2) {

  .form-label {
    margin-bottom: 80px;
    p {
      border-radius: 25px;
      font-size: 18px; font-size: 1.8rem;
    }
  }
}


/* ---------------------------------- component --> reserv-box */

.reserv-box {
  margin-bottom: vw-sp(80);
  padding: vw-sp(65) vw-sp(30) vw-sp(80) vw-sp(30);
  width: 100%;
  background-color: $color-base;
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.2);
}

.reserv .reserv-box:last-child {
  margin-bottom: 0;
}

.reserv-head {
  margin-bottom: 2em;
  font-size: vw-sp(34);
  font-weight: 700;
  text-align: center;
  line-height: 1.6em;
}

.reserv-box__in {
  margin: 0 auto;
  width: 100%;
}

@media screen and (min-width: $breakpoint1) {

  .reserv-box {
    margin-bottom: vw-pc(50);
    padding: vw-pc(55) vw-pc(50) vw-pc(70) vw-pc(50);
  }

  .reserv-head {
    font-size: vw-pc(24);
  }

  .reserv-box__in {
    width: vw-pc(600);
  }
}

@media screen and (min-width: $breakpoint2) {

  .reserv-box {
    margin-bottom: 50px;
    padding: 55px 50px 70px 50px;
  }

  .reserv-head {
    font-size: 24px; font-size: 2.4rem;
  }

  .reserv-box__in {
    width: 600px;
  }
}


/* ---------------------------------- component --> form-step */

.form-step {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto vw-sp(55) auto;
  width: vw-sp(440);
}

.form-step li {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: vw-sp(130);
  height: vw-sp(130);
  background-color: #e9f9f2;
  border-radius: 50%;
  p {
    margin-top: .2em;
    color: $color-base;
    font-family: $font2;
    font-size: vw-sp(28);
    font-weight: 700;
    text-align: center;
    line-height: 1.4em;
  }
}

.form-step li.is-active {
  background-color: $color-main;
}

.form-step li:after {
  content: '・・・・・・';
  position: absolute;
  top: 50%;
  left: 103%;
  color: $color-main;
  font-family: $font1;
  font-weight: 700;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.form-step li:last-child:after {
  content: none;
}

@media screen and (min-width: $breakpoint1) {

  .form-step {
    margin: 0 auto vw-pc(45) auto;
    width: vw-pc(310)
  }

  .form-step li {
    width: vw-pc(100);
    height: vw-pc(100);
    p {
      font-size: vw-pc(18);
    }
  }
}

@media screen and (min-width: $breakpoint2) {

  .form-step {
    margin: 0 auto 45px auto;
    width: 310px
  }

  .form-step li {
    width: 100px;
    height: 100px;
    p {
      font-size: 18px; font-size: 1.8rem;
    }
  }
}

/* ---------------------------------- component --> form-input */

.form-input {
  margin-bottom: vw-sp(50);
}

.form-input dt {
  display: block;
  width: 100%;
  margin-bottom: .7em;
  font-weight: 700;
}

.form-input dd {
  display: block;
  width: 100%;
}

.form-input input[type="text"], .form-input input[type="email"] {
  padding: 1em 1em;
  background-color: #f8f8f8;
  border: 1px solid $color-main;
  border-radius: .5em;
  width: 100%;
  color: $color-text;
  font-family: $font1;
  font-size: vw-sp(25);
  font-weight: 700;
  letter-spacing: .1em;
}

input::-webkit-input-placeholder,
select::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #dddfe2;
}
input:-ms-input-placeholder,
select:-ms-input-placeholder,
textarea:-ms-input-placeholder,
input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  color: #dddfe2;
}
input::-moz-placeholder,
select::-moz-placeholder,
textarea::-moz-placeholder {
  color: #dddfe2;
}

@media screen and (min-width: $breakpoint1) {

  .form-input {
    margin-bottom: vw-pc(25);
  }

  .form-input input[type="text"], .form-input input[type="email"] {
    font-size: vw-pc(15);
  }
}

@media screen and (min-width: $breakpoint2) {

  .form-input {
    margin-bottom: 25px;
  }

  .form-input input[type="text"], .form-input input[type="email"] {
    font-size: 15px;
  }
}

/* ---------------------------------- component --> form-campaign-date */

.form-campaign-date label {
  margin-bottom: vw-sp(30);
}

.form-campaign-date label:last-child {
  margin-bottom: 0;
}

.form-campaign-date span {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: vw-sp(30);
  padding: 0 vw-sp(50) 0 vw-sp(125);
  width: 100%;
  background-color: #e9f9f2;
  border-radius: .8em;
  height: vw-sp(110);
  font-size: vw-sp(28);
  font-weight: 700;
  cursor: pointer;
}

.form-campaign-date input[type="radio"]:checked + span {
  background-color: $color-main;
  color: $color-base;
}

.form-campaign-date input[type="radio"] {
  display: none;
}

.form-campaign-date input[type="radio"] + span::before {
  position: absolute;
  content: '';
  top: 50%;
  left: vw-sp(50);
  display: block;
  width: vw-sp(50);
  height: vw-sp(50);
  background-color: $color-base;
  border-radius: 50%;
  transform: translateY(-50%);
}

.form-campaign-date input[type="radio"]:checked + span::after {
  position: absolute;
  content: '';
  top: 50%;
  left: vw-sp(50);
  transform: translateY(-50%);
  background-color: $color-text;
  border-radius: 50%;
  width: vw-sp(30);
  height: vw-sp(30);
  border: vw-sp(10) solid $color-base;
  display: block;
}

@media screen and (min-width: $breakpoint1) {

  .form-campaign-date label {
    margin-bottom: vw-pc(20);
  }

  .form-campaign-date span {
    margin-bottom: vw-pc(20);
    padding: 0 vw-pc(50) 0 vw-pc(115);
    height: vw-pc(100);
    border-radius: 1em;
    font-size: vw-pc(18);
  }

  .form-campaign-date input[type="radio"] + span::before {
    left: vw-pc(50);
    width: vw-pc(40);
    height: vw-pc(40);
  }

  .form-campaign-date input[type="radio"]:checked + span::after {
    left: vw-pc(50);
    width: vw-pc(20);
    height: vw-pc(20);
    border: vw-pc(10) solid $color-base;
  }
}

@media screen and (min-width: $breakpoint2) {

  .form-campaign-date label {
    margin-bottom: 20px;
  }

  .form-campaign-date span {
    margin-bottom: 20px;
    padding: 0 50px 0 115px;
    height: 100px;
    font-size: 18px; font-size: 1.8rem;
  }

  .form-campaign-date input[type="radio"] + span::before {
    left: 50px;
    width: 40px;
    height: 40px;
  }

  .form-campaign-date input[type="radio"]:checked + span::after {
    left: 50px;
    width: 20px;
    height: 20px;
    border: 10px solid $color-base;
  }
}

</style>