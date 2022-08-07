<script setup lang="ts">
import Card from '@/components/common/Card.vue';
import SessionListItem from '@/pages/organizer/sessions/components/SessionListItem.vue';
import Button from '@/components/common/Button.vue';
import {useRouter} from 'vue-router';
import BaseLayout from "@/components/layouts/BaseLayout.vue";

const list: number[] = [
    1,
    2,
];

const lastIndex = list.length - 1;

const router = useRouter();

function logout() {
    router.push('/org-login');
}
</script>

<template>
    <BaseLayout class="d-grid gg-4">
        <Card>
            <Button @click="logout">logout</Button>
        </Card>
        
        <Card>
            <div class="d-flex">
                <div>Total sessions count: {{ list.length }}</div>
                <div class="ml-auto">
                    <Button>
                        create session
                    </Button>
                </div>
            </div>
        </Card>
        
        <Card>
            <template v-for="(session, index) in list">
                <SessionListItem/>
    
                <hr v-if="index !== lastIndex" class="my-4">
            </template>
        </Card>
    </BaseLayout>
</template>
