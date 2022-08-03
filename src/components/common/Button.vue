<script setup lang="ts">
import {defineEmits} from 'vue';

defineProps<{
    disabled?: boolean;
}>()

defineEmits(['click'])
</script>

<template>
    <button
        class="k-button"
        :disabled="disabled"
        @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<style lang="scss">

$btn-bg-color: #005fb8;

.k-button {
    padding: .375rem .75rem;
    border-radius: 5px;

    font-family: 'Open Sans', sans-serif;
    font-size: .9rem;
    text-transform: uppercase;

    border: 1px solid darken($btn-bg-color, 30%);
    
    cursor: pointer;
    
    transition: background-color .2s ease-in-out;

    background-color: $btn-bg-color;
    color: white;
    
    &:hover {
        background: darken($btn-bg-color, 10%);
    }
    
    &:active {
        background-color: darken($btn-bg-color, 20%);
    }
}
</style>
