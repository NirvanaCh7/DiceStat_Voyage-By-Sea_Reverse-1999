<template>
  <div class="flex flex-col min-h-screen">
    <header class="w-full py-4 bg-gray-100 text-center text-xl font-semibold">
      111
      <Switch/><Switch/>
    </header>
    <NuxtRouteAnnouncer />
    <main class="flex-1 flex justify-center items-center">
      <div class="flex gap-4 items-center">
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
    </main>
    <footer class="w-full py-4 bg-gray-100 text-center text-base">
      222
    </footer>
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