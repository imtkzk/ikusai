<template>
    <section id="about" class="sec sec--about">
      <div>
        <div class="about-box">
          <h2 class="about-head">法人様向け<br>採用支援・<br class="br--sp">社内研修サービスについて</h2>
          <div class="about-content">
            <p>ikus.aiでは学び、成長されたユーザー様に対し、転職支援を行っております。ikus.aiで学び、スキルが検証された方を法人企業様にご紹介させていただいております。</p>
            <p>また、豊富なコンテンツをオンライン学習コンテンツを活用した、社内研修の提供も行っております。</p>
          </div>
          <TopLinkBtn btnNumber="about-btn--01">お問い合わせ</TopLinkBtn>
          <div class="about-image about-image--01">
            <img src="~/assets/img/about/image01.png" srcset="~/assets/img/about/image01.png 1x,~/assets/img/about/image01-2x.png 2x" class="img--fit" alt="illust">
          </div>
        </div>
      </div>
      <div>
        <div class="about-box">
          <h2 class="about-head">ikus.aiで教えたい方<br>認定クリエイター<br class="br--sp">システムについて</h2>
          <div class="about-content">
            <p>ikus.aiであなたの知識・スキルを教えてみませんか？ikus.aiでは「認定クリエイター」と呼ばれる、ikus.ai公認のクリエイターがコースの作成を行い、コースの質を安定して高く保つ努力をしています。</p>
            <p>ikus.aiの認定クリエイターとなり、ただ教えるのではなく、「活用できる」スキルが学べるコースを私達と一緒に作り、世の中の成長をより加速させていきませんか？</p>
          </div>
          <TopLinkBtn btnNumber="about-btn--02">ikus.aiの認定クリエイターになるには？</TopLinkBtn>
          <div class="about-image about-image--02">
            <img src="~/assets/img/about/image02.png" srcset="~/assets/img/about/image02.png 1x,~/assets/img/about/image02-2x.png 2x" class="img--fit" alt="illust">
          </div>
        </div>
      </div>
    </section>
</template>

<script>
    import TopLinkBtn from '~/components/atoms/buttons/TopLinkBtn.vue'

    export default {
        components: {
            TopLinkBtn
        }
    }
</script>

<style lang="scss" scoped>
    @import "~assets/scss/style.scss";

/*  about
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--about > div {
  padding: vw-sp(40) vw-sp(50);
  background-size: cover;
}

.sec--about > div:nth-child(1) {
  background-image: url(../../../assets/img/about/bg01.jpg);
}

.sec--about > div:nth-child(2) {
  background-image: url(../../../assets/img/about/bg02.jpg);
}

@media screen and (min-width: $breakpoint1) {

  .sec--about {
    display: flex;
    > div {
      padding: vw-pc(90) vw-pc(100);
      width: 50%;
    }
  }
}

@media screen and (min-width: $breakpoint2) {

  .sec--about > div {
    padding: 90px 100px;
  }
}


@media screen and (min-width: 1700px) {

  .sec--about > div {
    padding: 90px 5%;
  }
}

/* ---------------------------------- component */

.about-box {
  position: relative;
  padding: vw-sp(60) vw-sp(30);
  border: vw-sp(3) solid $color-text;
}

.about-head {
  margin-bottom: 1.5em;
  font-size: vw-sp(34);
  font-weight: 700;
  text-align: center;
  line-height: 1.8em;
  letter-spacing: .2em;
}

.about-content {
  position: relative;
  p {
    margin-bottom: 2em;
    line-height: 2.3em;
  }
  p:last-child {
    margin-bottom: 0;
  }
}

.about-btn {
  margin: vw-sp(60) auto 0 auto;
}

.about-btn--01 {
  width: vw-sp(300);
}

.about-btn--02 {
  width: 100%;
}

.about-image {
  position: absolute;
}

.about-image--01 {
  bottom: vw-sp(130);
  right: vw-sp(-20);
  width: vw-sp(180);
}

.about-image--02 {
  top: vw-sp(-30);
  right: vw-sp(50);
  width: vw-sp(67);
}


@media screen and (min-width: $breakpoint1) {

  .about-box {
    position: relative;
    padding: vw-pc(55) vw-pc(45);
    height: vw-pc(650);
    border: vw-pc(2) solid $color-text;
  }

  .about-head {
    font-size: vw-pc(24);
  }

  .about-btn {
    margin: vw-pc(40) auto 0 auto;
  }

  .about-btn--01 {
    width: vw-pc(230);
  }

  .about-btn--02 {
    width: vw-pc(460);
  }

  .about-image--01 {
    bottom: vw-pc(20);
    right: vw-pc(-50);
    width: vw-pc(258);
  }

  .about-image--02 {
    top: vw-pc(-30);
    right: vw-pc(50);
    width: vw-pc(67);
  }
}

@media screen and (min-width: $breakpoint2) {

  .about-box {
    padding: 55px 55px;
    height: 625px;
    border: 2px solid $color-text;
  }

  .about-head {
    font-size: 24px; font-size: 2.4rem;
  }

  .about-btn {
    margin: 40px auto 0 auto;
  }

  .about-btn--01 {
    width: 230px;
  }

  .about-btn--02 {
    width: 460px;
  }

  .about-image--01 {
    bottom: 20px;
    right: -50px;
    width: 258px;
  }

  .about-image--02 {
    top: -30px;
    right: 50px;
    width: 67px;
  }
}

@media screen and (min-width: 2000px) {

  .about-box {
    height: auto;
    min-height: 40%;
  }
}

</style>