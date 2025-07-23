<script setup>

import {computed,ref} from 'vue';
import {getInventory} from './../store';
const inventoryList = ref(getInventory);

const lowOnStockItems = computed(()=>inventoryList.value.filter((item)=> item.actualAmount<item.minimumAmount));

</script>

<template>
    <div>
        <h2>Items that are short on stocks</h2>
    </div>
    <div>
        <table border="1px,black">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Amount</th>
                    <th>Minimum stock</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in lowOnStockItems" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.actualAmount }}</td>
                    <td>{{ item.minimumAmount }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped></style>