<template>
    <div>
        <Header />
        <div class="container">
            <Hero />
            <Benefit />
            <Explain />
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
            <Flow />
            <LearningStyle />
            <AvailableContents />
            <Allowance />
            <CampaignForm />
            <QnA />
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from '~/components/organisms/common/Header.vue'
    import Hero from '~/components/organisms/campaign/Hero.vue'
    import Benefit from '~/components/organisms/campaign/Benefit.vue'
    import Explain from '~/components/organisms/campaign/Explain.vue'
    import Target from '~/components/organisms/campaign/Target.vue'
    import Reason from '~/components/organisms/campaign/Reason.vue'
    import Skills from '~/components/organisms/campaign/Skills.vue'
    import Examples from '~/components/organisms/campaign/Examples.vue'
    import Flow from '~/components/organisms/campaign/Flow.vue'
    import LearningStyle from '~/components/organisms/campaign/LearningStyle.vue'
    import AvailableContents from '~/components/organisms/campaign/AvailableContents.vue'
    import Allowance from '~/components/organisms/campaign/Allowance.vue'
    import CampaignForm from '~/components/organisms/campaign/CampaignForm.vue'
    import QnA from '~/components/organisms/campaign/QnA.vue'
    import Footer from '~/components/organisms/common/Footer.vue'

    export default {
        components: {
            Header,
            Hero,
            Benefit,
            Explain,
            Target,
            Reason,
            Skills,
            Examples,
            Flow,
            LearningStyle,
            AvailableContents,
            Allowance,
            CampaignForm,
            QnA,
            Footer
        }
    }
</script>
