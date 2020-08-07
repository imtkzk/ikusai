<template>
        <label ><input type="radio" name="my-radio" checked><span><slot /></span></label>
</template>

<style lang="scss" scoped>
@import "~assets/scss/style.scss";

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