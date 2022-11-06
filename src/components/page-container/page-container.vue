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
const pageClassList = computed(() => {
  let classList = [styles.container];
  if (props.pageClass) {
    if (Array.isArray(props.pageClass)) {
      classList = [...classList, ...props.pageClass];
    } else {
      classList.push(props.pageClass);
    }
  }
  return classList;
});
const headerClassList = computed(() => {
  let classList = [styles.header];
  if (showNavigationBar.value) {
    classList.push(styles["header-show-navgation-bar"]);
  }
  if (props.showBorder) {
    classList.push(styles["header-border"]);
  }
  if (props.headerClass) {
    if (Array.isArray(props.headerClass)) {
      classList = [...classList, ...props.headerClass];
    } else {
      classList.push(props.headerClass);
    }
  }
  return classList;
});
const bodyClassList = computed(() => {
  let classList = [styles.body];
  if (props.bodyPadding) {
    classList.push(styles["body-padding"]);
  }
  if (props.bodyClass) {
    if (Array.isArray(props.bodyClass)) {
      classList = [...classList, ...props.bodyClass];
    } else {
      classList.push(props.bodyClass);
    }
  }
  return classList;
});
const handleBackButtonClick = () => {
  uni.navigateBack();
  emit("back");
};
const handleTitleClick = () => {
  emit("clickTitle");
};
</script>

<template>
  <view :class="pageClassList">
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
    <scroll-view :class="bodyClassList" scroll-y>
      <slot name="default"></slot>
    </scroll-view>
  </view>
</template>
