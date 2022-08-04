<script setup lang="ts">
defineProps<{
    label: string,
    value: string,
}>();
</script>

<template>
    <div class="d-grid task-info-line">
        <div>
            {{ label }}:
        </div>

        <div>
            {{ value }}
        </div>
    </div>
</template>

<style lang="scss">
.task-info-line {
    grid-template-columns: 1fr 2fr;
}
</style>
