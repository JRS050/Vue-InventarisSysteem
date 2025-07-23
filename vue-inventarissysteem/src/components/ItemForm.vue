<script setup>
import {ref} from 'vue';

const props = defineProps({
    item: Object,
});
const emit = defineEmits(['submit']);

const newItem = ref({...props.item});

const submit = () =>{
    emit('submit', newItem.value);
}
</script>

<template>
    <div>
        <a @click="$router.back()">Cancel</a>
    </div>
    <div>
        <form @submit.prevent="submit" name="item_form">
            
            <p>Name</p>
            <input type="text" name="product name" v-model="newItem.name">
            <br>
            
            <p>Minimum stock</p>
            <input type="number" name="minimum stock" v-model="newItem.minimumAmount" step="1" min="0">
            <br>
            
            <p>Current stock</p>
            <input type="number" name="current stock" v-model="newItem.actualAmount" step="1" min="0">
            <br>

            <button  @click="$router.back()">Submit</button>
        </form>
    </div>
</template>

<style scoped></style>