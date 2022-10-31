<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
  const token = uni.getStorageSync("token");
  if (token) {
    uni.redirectTo({
      url: "/pages/home-page/home-page",
      success() {
        plus.navigator.closeSplashscreen();
      },
    });
  } else {
    uni.redirectTo({
      url: "/pages/sign-in-page/sign-in-page",
      success() {
        plus.navigator.closeSplashscreen();
      },
    });
  }
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
