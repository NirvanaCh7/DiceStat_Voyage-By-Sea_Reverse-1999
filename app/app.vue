<template>
  <div >
    <NuxtRouteAnnouncer />
    <div class="flex gap-4">
      <Card v-for="(card, idx) in cards" :key="card.id">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
          <Button class="ml-2" color="red" @click="removeCard(idx)">删除Card</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
        </CardContent>
        <CardFooter>
          <Button @click="addCard">添加Card</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const cards = ref([
  { id: 1 },
  { id: 2 },
  { id: 3 }
])

function addCard() {
  cards.value.push({ id: Date.now() })
}

function removeCard(idx: number) {
  cards.value.splice(idx, 1)
}

const { locales, setLocale} = useI18n()
setLocale('zh-hans')

</script>