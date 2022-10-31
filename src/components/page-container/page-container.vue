<script lang="ts" setup>
import { computed } from "vue";
import styles from "./style.module.less";
import { PageContainerProps } from "./types";
const props = defineProps(PageContainerProps);
const emit = defineEmits<{
  (e: "back"): void;
  (e: "clickTitle"): void;
}>();
const showNavigationBar = computed(() => {
  if (props.showBackButton || props.showTitle) {
    return true;
  } else {
    return false;
  }
});
const headerClassList = computed(() => {
  const classList = [styles.header];
  if (showNavigationBar.value) {
    classList.push(styles["header-show-navgation-bar"]);
  }
  if (props.border) {
    classList.push(styles["header-border"]);
  }
  return classList;
});
const handleBackButtonClick = () => {
  emit("back");
};
const handleTitleClick = () => {
  emit("clickTitle");
};
</script>

<template>
  <view :class="styles.container">
    <!-- header -->
    <view :class="headerClassList">
      <slot name="header"></slot>
      <view v-if="showNavigationBar" :class="styles['navigation-bar']">
        <view v-if="props.showBackButton" :class="styles['back-button']" @click="handleBackButtonClick">
          <text class="iconfont">&#xe7ee;</text>
        </view>
        <view v-if="props.showTitle" :class="styles['title']" @click="handleTitleClick">
          <slot name="title"></slot>
        </view>
      </view>
    </view>
    <view>
      <slot name="default"></slot>
    </view>
  </view>
</template>
