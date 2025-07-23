<script setup>
import ItemForm from './../../../components/ItemForm.vue';
import{addItem} from './../store';
    const item = {name:'', minimumAmount: 0, actualAmount:0};
</script>

<template>
    <ItemForm :item="item" @submit="addItem"/>
</template>

<style scoped></style>