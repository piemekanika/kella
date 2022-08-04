<script setup lang="ts">
import Card from '@/components/common/Card.vue';
</script>

<template>
    <main class="layout layout--base">
        <Card>
            <slot></slot>
        </Card>
    </main>
</template>
