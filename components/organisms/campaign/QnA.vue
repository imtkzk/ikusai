<template>
    
            <section id="faq" class="sec sec--faq">
                <div class="sec__in sec__in--small">
                    <div class="cmn-head cmn-head--faq">
                        <p class="cmn-head__en">Q & A</p>
                        <h2 class="cmn-head__jp">よくあるご質問</h2>
                    </div>
                    <ul class="faq">
                        <li>
                            <h3 class="faq-head">動画見放題の期間はどれくらいですか？</h3>
                            <div class="faq-content">
                                <p>期間は１年間です。お支払いより1年間すべての動画を無料で見ることが可能です。新たに追加された動画も確認することができます。</p>
                            </div>
                        </li>
                        <li>
                            <h3 class="faq-head">動画見放題の期間はどれくらいですか？</h3>
                            <div class="faq-content">
                                <p>期間は１年間です。お支払いより1年間すべての動画を無料で見ることが可能です。新たに追加された動画も確認することができます。</p>
                            </div>
                        </li>
                        <li>
                            <h3 class="faq-head">動画見放題の期間はどれくらいですか？</h3>
                            <div class="faq-content">
                                <p>期間は１年間です。お支払いより1年間すべての動画を無料で見ることが可能です。新たに追加された動画も確認することができます。</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
</template>


<style lang="scss" scoped>
@import "~assets/scss/style.scss";

// main: ../style.scss

/*  faq
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--faq {
  padding: vw-sp(70) 0 vw-sp(100) 0;
  background-color: $color-thin;
}

@media screen and (min-width: $breakpoint1) {

  .sec--faq {
    padding: vw-pc(75) 0 vw-pc(105) 0;
  }
}

@media screen and (min-width: $breakpoint2) {

  .sec--faq {
    padding: 75px 0 105px 0;
  }
}


/* ---------------------------------- heading */

.cmn-head--faq {
  margin-bottom: vw-sp(80);
}

@media screen and (min-width: $breakpoint1) {

  .cmn-head--faq {
    margin-bottom: vw-pc(100);
  }
}

@media screen and (min-width: $breakpoint2) {

  .cmn-head--faq {
    margin-bottom: 100px;
  }
}



/* ---------------------------------- component */

.faq li {
  margin-bottom: vw-sp(35);
}

.faq li:last-child {
  margin-bottom: 0;
}

.faq-head {
  position: relative;
  margin-bottom: vw-sp(30);
  padding: 0 0 vw-sp(25) vw-sp(65);
  border-bottom: vw-sp(4) solid $color-main;
  color: $color-main;
  font-size: vw-sp(28);
  font-weight: 700;
  line-height: 1.8em;
}

.faq-content {
  position: relative;
  padding-left: vw-sp(65);
  p {
    font-weight: 700;
    line-height: 1.8em;
  }
}

.faq-head:before,
.faq-content:before {
  position: absolute;
  top: -.1em;
  left: 0;
  font-family: $font2;
  font-size: vw-sp(46);
  font-weight: 700;
}

.faq-head:before {
  content: 'Q';
  color: $color-main;
}


.faq-content:before {
  content: 'A';
  color: #fbad7d;
}


@media screen and (min-width: $breakpoint1) {

  .faq li {
    margin-bottom: vw-pc(25);
  }

  .faq-head {
    margin-bottom: vw-pc(20);
    padding: 0 0 vw-pc(15) vw-pc(55);
    border-bottom: vw-pc(2) solid $color-main;
    font-size: vw-pc(18);
  }

  .faq-content {
    padding-left: vw-pc(55);
  }

  .faq-head:before,
  .faq-content:before {
    font-size: vw-pc(36);
  }
}

@media screen and (min-width: $breakpoint2) {

  .faq li {
    margin-bottom: 25px;
  }

  .faq-head {
    margin-bottom: 20px;
    padding: 0 0 15px 55px;
    border-bottom: 2px solid $color-main;
    font-size: 18px; font-size: 1.8rem;
  }

  .faq-content {
    padding-left: 55px;
  }

  .faq-head:before,
  .faq-content:before {
    font-size: 36px; font-size: 3.6rem;
  }
}
</style>