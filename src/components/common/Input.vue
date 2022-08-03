<script setup lang="ts">
defineProps<{
    modelValue: string | number | undefined | null,
    type?: string,
}>()

defineEmits(['update:modelValue'])
</script>

<template>
    <input
        class="k-input"
        :type="type || 'text'"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<style lang="scss">
.k-input {
    padding: .375rem .75rem;
    border-radius: 5px;
    
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    
    border: 1px solid gray;

    background-color: #181818;
    color: white;
    
    &:focus {
        outline: 0;
    }
}
</style>
