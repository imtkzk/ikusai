<template>
    <div class="hero">
      <div class="hero__in">
        <div class="hero-content">
          <p class="hero-desc none--sp"><span>未経験から</span><br class="br--sp"><span>プロフェッショナルを目指す全ての方へ</span></p>
          <p class="hero-catch"><strong>最先端</strong>スキルを<strong>最速</strong>で学び<br>新たなキャリアに<br>挑戦する<strong>チャンスを掴む</strong></p>
          <p class="hero-desc none--pc"><span>未経験から</span><br class="br--sp"><span>プロフェッショナルを目指す全ての方へ</span></p>
          <TopHeroBtn />
        </div>
      </div>
    </div>
</template>

<script>
    import TopHeroBtn from '~/components/atoms/buttons/TopHeroBtn.vue'

    export default {
        components: {
            TopHeroBtn
        }
    }

</script>

<style lang="scss" scoped>
    @import "~assets/scss/style.scss";
/*  hero
------------------------------------------------------------------------------*/

.hero {
  position: relative;
  height: vw-sp(1300);
  background-image: url(../../../assets/img/hero/hero_sp.jpg);
  background-size: cover;
  background-position: center bottom;
}

.hero__in {
  position: relative;
  margin: 0 auto;
  width: vw-sp(700);
}

.hero-content {
  padding-top: vw-sp(365);
}

@media screen and (min-width: $breakpoint1) {

  .hero {
    height: vw-pc(600);
    background-image: url(../../../assets/img/hero/hero.jpg);
    background-position: center;
  }

  .hero__in {
    width: vw-pc(580);
  }

  .hero-content {
    padding-top: vw-pc(120);
  }
}

@media screen and (min-width: $breakpoint2) {

  .hero {
    height: 600px;
  }

  .hero__in {
    width: 545px;
  }

  .hero-content {
    padding-top: 120px;
  }
}

/* ----------------- テキスト - */


.hero-catch {
  position: relative;
  color: $color-base;
  font-size: vw-sp(48);
  font-weight: 700;
  line-height: 1.8em;
  letter-spacing: .2em;
  white-space: nowrap;
}

.hero-catch strong {
  color: #f9ff49;
}

.hero-desc {
  display: inline-block;
  padding: .3em 0;
  font-size: vw-sp(30);
  font-weight: 700;
  line-height: 2.2em;
  letter-spacing: .2em;
}

@media screen and (max-width: $breakpoint1-max) {

  .hero-desc span {
    padding: .1em .5em;
    background-color: $color-text;
    color: $color-base;
  }
}

@media screen and (min-width: $breakpoint1) {


  .hero-catch {
    font-size: vw-pc(36);
    text-align: center;
  }

  .hero-desc {
    display: block;
    margin-bottom: vw-pc(25);
    padding: .3em 1em;
    background-color: $color-text;
    color: $color-base;
    font-size: vw-pc(18);
    text-align: center;
    line-height: 1.6em;
  }
}

@media screen and (min-width: $breakpoint2) {

  .hero-catch {
    font-size: 36px; font-size: 3.6rem;
  }

  .hero-desc {
    margin-bottom: 25px;
    font-size: 18px; font-size: 1.8rem;
  }
}


/* ---------------------------------- btn */

.hero-btn {
  margin: vw-sp(40) auto 0 auto;
  width: vw-sp(365);
}

@media screen and (min-width: $breakpoint1) {

  .hero-btn {
    margin: vw-pc(30) auto 0 auto;
    width: vw-pc(280);
  }
}

@media screen and (min-width: $breakpoint2) {

  .hero-btn {
    margin: 30px auto 0 auto;
    width: 280px;
  }
}
</style>