<template>
    
                                <div class="form-consent">
                                    <label><input type="checkbox" name="" required="required"><span>プライバシーポリシーに同意する</span></label>
                                </div>
</template>

<style lang="scss" scoped>
@import "~assets/scss/style.scss";

/* ---------------------------------- component --> form-consent */

.form-consent {
  margin: vw-sp(50) 0 vw-sp(60) 0;
  font-size: vw-sp(26);
  font-weight: 700;
  text-align: center;
}

.form-campaign input[type="checkbox"] {
  display: none;
}

.form-campaign input[type="checkbox"] + span {
  position: relative;
  display: inline-block;
  padding: 0 0 0 2em;
  cursor: pointer;
}

.form-campaign input[type="checkbox"] + span::before {
  position: absolute;
  content: '';
  top: 50%;
  left: 0;
  display: block;
  width: 1.3em;
  height: 1.3em;
  background-color: #f8f8f8;
  border: 1px solid $color-main;
  border-radius: 0;
  transform: translateY(-50%);
}

.form-campaign input[type="checkbox"]:checked + span::after {
  position: absolute;
  content: '';
  top: 50%;
  left: 0;
  display: block;
  width: 1.3em;
  height: .6em;
  margin-top: -.2em;
  border-left: vw-sp(5) solid $color-main;
  border-bottom: vw-sp(5) solid $color-main;
  transform: translateY(-50%) rotate(-45deg);
}


@media screen and (min-width: $breakpoint1) {

  .form-consent {
    margin: vw-pc(30) 0 vw-pc(40) 0;
    font-size: vw-pc(16);
  }

  .form-campaign input[type="checkbox"]:checked + span::after {
    border-left: vw-pc(3) solid $color-main;
    border-bottom: vw-pc(3) solid $color-main;
  }
}

@media screen and (min-width: $breakpoint2) {

  .form-consent {
    margin: 30px 0 40px 0;
    font-size: 16px; font-size: 1.6rem;
  }

  .form-campaign input[type="checkbox"]:checked + span::after {
    border-left: 3px solid $color-main;
    border-bottom: 3px solid $color-main;
  }
}

</style>