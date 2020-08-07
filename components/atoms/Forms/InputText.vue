<template>
    
                                <dl class="form-input">
                                    <dt><slot /></dt>
                                    <dd><input type="text" :placeholder="placeholder"></dd>
                                </dl>
</template>

<script>
export default {
    props:[`placeholder`]
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/style.scss";

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

</style>