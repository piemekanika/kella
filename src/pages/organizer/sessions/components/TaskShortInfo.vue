<script setup lang="ts">
import Button from '@/components/common/Button.vue';
import TaskInfoLine from './TaskInfoLine.vue';
</script>

<template>
    <div class="d-grid gg-2">
        <div>
            Task #1. “Create time machine”
        </div>
        
        <TaskInfoLine
            label="Description"
            value="create time machine and think about long des..."
        ></TaskInfoLine>

        <TaskInfoLine
            label="Assigned"
            value="Tony Stark"
        ></TaskInfoLine>

        <TaskInfoLine
            label="Teams involved"
            value="frontend, backend, gateway, qa"
        ></TaskInfoLine>
        
        <Button class="mt-2">
            show full info
        </Button>
    </div>
</template>
