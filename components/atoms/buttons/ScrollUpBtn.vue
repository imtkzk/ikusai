<template>
            <div id="pagetop" class="pagetop" data-mt-duration="300">
                <a href="#top"><img src="~/assets/img/common/pagetop.png" class="img--fit" alt="PAGE TOP"></a>
            </div>
</template>

<style lang="scss" scoped>
@import "~assets/scss/style.scss";

.pagetop {
  position: fixed;
  bottom: vw-sp(35);
  right: vw-sp(30);
  width: vw-sp(70);
  height: vw-sp(70);
  transition: all 1s ease-out;
  transition: bottom 0.2s ease-out;
  opacity: 0;
  z-index: 888;
}

.pagetop.is-show {
  opacity: 1;
}

.pagetop a {
  display: block;
  width: vw-sp(70);
  height: vw-sp(70);
}

.pagetop a:hover {
  opacity: 0.7;
}

@media screen and (min-width: $breakpoint1) {

  .pagetop {
    bottom: vw-pc(180);
    right: vw-pc(30);
    width: vw-pc(60);
    height: vw-pc(60);
  }

  .pagetop a {
    width: vw-pc(60);
    height: vw-pc(60);
  }
}

@media screen and (min-width: $breakpoint2) {

  .pagetop {
    bottom: 180px;
    right: 30px;
    width: 60px;
    height: 60px;
  }

  .pagetop a {
    width: 60px;
    height: 60px;
  }
}
</style>