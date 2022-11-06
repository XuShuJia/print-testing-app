<script lang="ts" setup>
import { computed } from "vue";
import styles from "./style.module.less";
import { CardContainerProps } from "./types";

const props = defineProps(CardContainerProps);
const titleClass = computed(() => {
  let classList = [styles.title];
  if (props.titleClass) {
    if (Array.isArray(props.titleClass)) {
      classList = [...classList, ...props.titleClass];
    } else {
      classList.push(props.titleClass);
    }
  }
});
const cardClass = computed(() => {
  let classList = [styles.card];
  if (props.cardClass) {
    if (Array.isArray(props.cardClass)) {
      classList = [...classList, ...props.cardClass];
    } else {
      classList.push(props.cardClass);
    }
  }
});
</script>

<template>
  <view v-if="props.title" :class="titleClass">
    <text>{{ props.title }}</text>
  </view>
  <view :class="cardClass"></view>
</template>
