<script setup>
import {computed,ref} from 'vue';
import {getInventory,removeItem} from './../store';
const inventoryList = ref(getInventory);

</script>

<template>
    <div>
        <h2>Inventory overview</h2>
    </div>
    <router-link to="/order">Order</router-link>
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
                <tr v-for="(item, index) in inventoryList" :key="index">
                    <td>{{ item.name }}</td>
                    <td>
                        <input v-model.number="item.actualAmount" type="number" placeholder="0" min="0" name="current_stocks"/>
                    </td>
                    <td> {{ item.minimumAmount }} </td>
                    <td>
                        <router-link :to="{ name:'edit', params: { id: item.id}}">Edit</router-link>
                    </td>
                    <td>
                        <button @click="removeItem(item.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped></style>