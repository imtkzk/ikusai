<template>
    <div>
        <Header />
        <div class="container">
            <Hero />
            <Benefit />
            <Explain />
            <Course />
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
    import Course from '~/components/organisms/campaign/Course.vue'
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
            Course,
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