<script lang="ts" setup>
import PageContainer from "../../components/page-container";
const handleSignIn = () => {
  uni.switchTab({
    url: "/pages/home-page/home-page",
  });
};
</script>

<template>
  <page-container>
    <template v-slot:header>
      <view>
        <text>Header</text>
      </view>
    </template>
    <template v-slot:title> Hello World~ </template>
    <view>
      <text>Sign In</text>
    </view>
  </page-container>
</template>
