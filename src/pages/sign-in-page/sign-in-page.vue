<script lang="ts" setup>
import {} from "vue";
import styles from "./style.module.less";
import PageContainer from "../../components/page-container";
const handleSignIn = () => {
  uni.switchTab({
    url: "/pages/home-page/home-page",
  });
};
const handleClickSettingProxyButton = () => {
  uni.navigateTo({
    url: "/pages/proxy-setting-page/proxy-setting-page",
  });
};
</script>

<template>
  <page-container :pageClass="styles['page']" :headerClass="styles['page-header']" :bodyClass="styles['page-body']">
    <view :class="styles.header">
      <view :class="styles.title">
        <text>Sign In</text>
      </view>
      <view :class="styles.slogan">
        <text>Print testing app</text>
      </view>
    </view>
    <view :class="styles['sign-in-form']">
      <view :class="styles['form-top']">
        <view :class="styles['form-item']">
          <view :class="styles['form-label']">
            <text>账号</text>
          </view>
          <input data-focus="" type="texr" :class="styles['input']" />
        </view>
        <view :class="styles['form-item']">
          <view :class="styles['form-label']">
            <text>密码</text>
          </view>
          <view>
            <input type="password" :class="styles['input']" />
          </view>
        </view>
        <view :class="styles['form-item-row']">
          <checkbox id="enable_proxy" :class="styles['checkbox']" />
          <label for="enable_proxy">
            <text>启用代理</text>
          </label>
        </view>
        <view :class="styles['form-item-row']">
          <checkbox id="auto_signin" :class="styles['checkbox']" />
          <label for="auto_signin">
            <text>自动登陆</text>
          </label>
        </view>
      </view>
      <view :class="styles['form-bottom']">
        <view :class="[styles['form-item-row'], styles['proxy-setting-button']]" @click="handleClickSettingProxyButton">
          <text>代理设置</text>
          <view :class="['iconfont', styles['proxy-setting-button-icon']]">&#xe7ec;</view>
        </view>
        <button type="primary" :class="styles['sign-in-button']">登 录</button>
      </view>
    </view>
  </page-container>
</template>
