<script setup lang="ts">
import Card from '@/components/common/Card.vue';
</script>

<template>
    <div class="layout layout--auth">
        <main class="layout__content">
            <Card>
                <slot></slot>
            </Card>
        </main>
    </div>
</template>
