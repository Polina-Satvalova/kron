import { computed, onMounted, ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { Keys } from '@/core/constants/keys.js'

export const useBasketStore = defineStore('counter', () => {
  const basket = ref([])

  onMounted(() => {
    basket.value = JSON.parse(localStorage.getItem(Keys.Basket)) ?? []
  })

  function setInStorage() {
    localStorage.setItem(Keys.Basket, JSON.stringify(basket.value))
  }

  const totalCost = computed(() => {
    return basket.value.map((item) => ({ ...item, sum: item.cost * item.count }))
  })

  const sum = computed(() => {
    return totalCost.value.reduce((acc, item) => acc + item.sum, 0)
  })

  function addToBasket(newItem) {
    if (basket.value.some((item) => item.id === newItem.id)) {
      basket.value.find((item) => item.id === newItem.id).count++
    } else {
      basket.value.push({
        ...newItem,
        count: 1,
      })
    }
    setInStorage()
  }

  function removeFromBasket(itemForRemove) {
    if (itemForRemove.count > 1) {
      basket.value.find((item) => item.id === itemForRemove.id).count--
    } else {
      basket.value = basket.value.filter((item) => item.id !== itemForRemove.id)
    }
    setInStorage()
  }

  function clearBasket() {
    basket.value = []
    setInStorage()
  }

  return {
    totalCost,
    sum,
    addToBasket,
    removeFromBasket,
    clearBasket,
  }
})
