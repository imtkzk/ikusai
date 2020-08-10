<template>
    <div>
        <Header />
        <div class="container">
            <Hero />
            <Campaign />
            <Course />
            <What />
            <Reason />
            <Interview />
            <Apply />
            <About />
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from '~/components/organisms/common/Header.vue'
    import Hero from '~/components/organisms/top/Hero.vue'
    import Campaign from '~/components/organisms/top/Campaign.vue'
    import Course from '~/components/organisms/top/Course.vue'
    import What from '~/components/organisms/top/What.vue'
    import Reason from '~/components/organisms/top/Reason.vue'
    import Interview from '~/components/organisms/top/Interview.vue'
    import Apply from '~/components/organisms/top/Apply.vue'
    import About from '~/components/organisms/top/About.vue'
    import Footer from '~/components/organisms/common/Footer.vue'

    export default {
        components: {
            Header,
            Hero,
            Campaign,
            Course,
            What,
            Reason,
            Apply,
            About,
            Footer
        }
    }
</script>