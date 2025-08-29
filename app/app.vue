<template>
  <div>
    <NuxtRouteAnnouncer />
    <h1 class="text-3xl font-bold underline">{{ $t('welcome') }}</h1>
    <Button>111</Button>
  </div>
</template>
<script setup>
const { locales, setLocale} = useI18n()
setLocale('zh-hans')

</script>