<template>
  <div class="wrapper">
    <nav-bar class="nav-profile">
      <div slot="center">我的</div>
    </nav-bar>
    <b-scroll class="content" ref="scroll" :probe-type="probeType" @scroll="contentScroll">
      <profile-top></profile-top>
      <profile-center :numbers="numbers"></profile-center>
      <profile-menu></profile-menu>
    </b-scroll>
  </div>
</template>

<script>
import BScroll from "../../components/common/scroll/Scroll";
import NavBar from "../../components/common/navbar/NavBar";
import ProfileTop from "./childComponents/ProfileTop";
import ProfileCenter from "./childComponents/ProfileCenter";
import ProfileMenu from "./childComponents/ProfileMenu";
export default {
  name: "Profile",
  data() {
    return {
      probeType: 1,
      numbers: ["0.00", "0", "0"],
    
    };
  },
  components: {
    BScroll,
    NavBar,
    ProfileTop,
    ProfileCenter,
    ProfileMenu,
  },
  methods: {
    contentScroll(position) {
      console.log(position);
    },
  },
};
</script>

<style scoped>

.nav-profile {
  background-color: var(--color-tint);
  color: white;
  font-weight: 700;
}
.content {
  background-color:rgb(245, 245, 245);
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>