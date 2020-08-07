<template>
    <div class="hero">
      <div class="hero__in">
        <div class="hero-content">
          <p class="hero-catch">次の時代に求められる<br class="br--sp">AI人材を目指し、<br>あなたの人生を<strong>次のレベル</strong>へ</p>
          <p class="hero-desc"><span>未経験から</span><br class="br--sp"><span>プロフェッショナルを目指す全ての方へ</span></p>
            <CampaignHeroBtn />
        </div>
      </div>
    </div>
</template>


<script>
import CampaignHeroBtn from '~/components/atoms/buttons/CampaignHeroBtn.vue'

export default {
  components: {
    CampaignHeroBtn
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/style.scss";

/*  hero
------------------------------------------------------------------------------*/

.hero {
  position: relative;
  height: vw-sp(1100);
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
  padding-top: vw-sp(60);
}

@media screen and (min-width: $breakpoint1) {

  .hero {
    height: vw-pc(600);
    background-image: url(../../../assets/img/hero/hero.jpg);
    background-position: center;
  }

  .hero__in {
    width: vw-pc(1400);
  }

  .hero-content {
    padding-top: vw-pc(145);
  }
}

@media screen and (min-width: $breakpoint2) {

  .hero {
    height: 600px;
  }

  .hero__in {
    width: 1400px;
  }

  .hero-content {
    padding-top: 145px;
  }
}

/* ----------------- テキスト - */


.hero-catch {
  position: relative;
  color: $color-base;
  font-size: vw-sp(44);
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
  margin-top: 1em;
  padding: .3em 1em;
  font-size: vw-sp(28);
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
  }

  .hero-desc {
    background-color: $color-text;
    color: $color-base;
    font-size: vw-pc(18);
    line-height: 1.6em;
  }
}

@media screen and (min-width: $breakpoint2) {

  .hero-catch {
    font-size: 36px; font-size: 3.6rem;
  }

  .hero-desc {
    font-size: 18px; font-size: 1.8rem;
  }
}


/* ---------------------------------- btn */

.hero-btn {
  margin: vw-sp(40) auto 0 auto;
  width: vw-sp(660);
}

@media screen and (min-width: $breakpoint1) {

  .hero-btn {
    margin: vw-pc(30) 0 0 0;
    width: vw-pc(600);
  }
}

@media screen and (min-width: $breakpoint2) {

  .hero-btn {
    margin: 30px 0 0 0;
    width: 600px;
  }
}
</style>