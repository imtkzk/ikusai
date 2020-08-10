<template>
    <section id="apply" class="sec sec--apply">
      <div class="sec__in">
        <h2 class="apply-head">今だけ特別キャンペーン実施中！<br><strong>長期コースに応募して、</strong><br class="br--sp"><strong>全ての動画を見放題！</strong></h2>
        <TopCTABtn />
      </div>
    </section>
</template>

<script>
    import TopCTABtn from '~/components/atoms/buttons/TopCTABtn.vue'

    export default {
        components: {
            TopCTABtn
        }
    }
</script>

<style lang="scss" scoped>
    @import "~assets/scss/style.scss";

/*  apply
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--apply {
  padding: vw-sp(120) 0;
  background-image: url(../../../assets/img/apply/bg.jpg);
  background-size: cover;
}

@media screen and (min-width: $breakpoint1) {

  .sec--apply {
    padding: vw-pc(90) 0;
  }
}

@media screen and (min-width: $breakpoint2) {

  .sec--apply {
    padding: 90px 0;
  }
}


/* ---------------------------------- heading */

.apply-head {
  margin-bottom: vw-sp(120);
  color: $color-base;
  font-size: vw-sp(38);
  font-weight: 700;
  line-height: 1.8em;
  text-align: center;
  letter-spacing: .2em;
  strong {
    display: inline-block;
    background: linear-gradient( to right,  #f9ff49 25%, #f9ff49 75% );
    color: transparent;
    -webkit-background-clip: text;
  }
}

@media all and (-ms-high-contrast: none) { /* IE10,11用 */
  .apply-head strong {
    background: none;
    color: #f9ff49;
  }
}

@media screen and (min-width: $breakpoint1) {

  .apply-head {
    margin-bottom: vw-pc(90);
    font-size: vw-pc(36);
  }
}

@media screen and (min-width: $breakpoint2) {

  .apply-head {
    margin-bottom: 90px;
    font-size: 36px; font-size: 3.6rem;
  }
}

</style>