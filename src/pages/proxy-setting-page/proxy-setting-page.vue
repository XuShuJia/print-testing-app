<script lang="ts" setup>
import styles from "./style.module.less";
import PageContainer from "../../components/page-container";
</script>

<template>
  <page-container showBackButton showBorder showTitle>
    <template v-slot:title>
      <text>代理设置</text>
    </template>
  </page-container>
</template>
