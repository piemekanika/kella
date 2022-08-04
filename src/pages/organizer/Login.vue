<script setup lang="ts">
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import Input from '@/components/common/Input.vue';
import Button from '@/components/common/Button.vue';

import { useRouter } from 'vue-router';

let username = '';
let password = '';
const router = useRouter();

function handleClick() {
    router.push('org/sessions');
}
</script>

<template>
    <AuthLayout>
        <div class="d-grid gg-2">
            <div class="mb-3">
                Organizer login
            </div>
            
            <Input v-model="username" />
            <Input v-model="password" type="password" />

            <Button class="mt-2" @click="handleClick">
                Login
            </Button>
        </div>
    </AuthLayout>
</template>
