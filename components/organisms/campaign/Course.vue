<template>
                <section id="course" class="sec sec--course">
                <div class="sec__in">
                    <div class="cmn-head cmn-head--course">
                        <p class="cmn-head__en">course</p>
                        <h2 class="cmn-head__jp">JDLA E資格認定！<br class="br--sp">基礎から実践まで長期コース</h2>
                    </div>
                    <div class="course">
                        <Target />
                        <Reason />
                        <Skills />
                        <Examples />
                    </div>
                </div>
            </section>
</template>

<script>
    import Target from '~/components/organisms/campaign/Target.vue'
    import Reason from '~/components/organisms/campaign/Reason.vue'
    import Skills from '~/components/organisms/campaign/Skills.vue'
    import Examples from '~/components/organisms/campaign/Examples.vue'
    
    export default {
        components: {
            Target,
            Reason,
            Skills,
            Examples
        }
    }
</script>

<style lang="scss" scoped>
@import "~assets/scss/style.scss";

/*  course
------------------------------------------------------------------------------*/

/* ---------------------------------- section */

.sec--course {
  padding: vw-sp(70) 0 vw-sp(100) 0;
  background-image: url(../../../assets/img/course/bg.jpg);
  background-size: cover;
}

@media screen and (min-width: $breakpoint1) {

  .sec--course {
    padding: vw-pc(115) 0 vw-pc(100) 0;
  }
}

@media screen and (min-width: $breakpoint2) {

  .sec--course {
    padding: 115px 0 100px 0;
  }
}
/* ---------------------------------- heading */

.cmn-head--course {
  margin-bottom: vw-sp(80);
}

@media screen and (min-width: $breakpoint1) {

  .cmn-head--course {
    margin-bottom: vw-pc(65);
  }
}

@media screen and (min-width: $breakpoint2) {

  .cmn-head--course {
    margin-bottom: 65px;
  }
}

</style>