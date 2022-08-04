<script setup lang="ts">

import TaskShortInfo from './TaskShortInfo.vue'
import Button from '@/components/common/Button.vue';
import Card from '@/components/common/Card.vue';
</script>

<template>
    <div class="session-item">
        <div class="d-grid gg-2">
            <div class="d-flex">
                <div class="d-grid gg-2">
                    <div>
                        Session #23. "Angry bird"
                    </div>
                    
                    <div>
                        Date planned: 12 aug 2022.
                    </div>
                </div>
               
                <Button class="ml-auto mb-auto">
                    start session
                </Button>
            </div>

            <Card class="mt-3">
                <TaskShortInfo></TaskShortInfo>
            </Card>
        </div>
    </div>
</template>
