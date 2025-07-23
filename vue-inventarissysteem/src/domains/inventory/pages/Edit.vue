<script setup>
import ItemForm from './../../../components/ItemForm.vue';
import {getItemById, updateItem} from './../store';
import { useRoute } from 'vue-router';

const route = useRoute();
const item = getItemById(route.params.id);


</script>

<template>
    <ItemForm :item="item" @submit="updateItem"/>
</template>

<style scoped></style>