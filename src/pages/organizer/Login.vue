<script setup lang="ts">
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import Input from '@/components/common/Input.vue';
import Button from '@/components/common/Button.vue';

import { useRouter } from 'vue-router';
import { reactive } from 'vue'; 
import {api} from "@/api";

const state = reactive({
    username: '',
    password: '',
});

const router = useRouter();

function handleClick() {
    api.login({
        username: state.username,
        password: state.password,
    })
        .then(() => {
            router.push('org/sessions');
        })
        .catch(e => alert(e.message))
}
</script>

<template>
    <AuthLayout>
        <div class="d-grid gg-2">
            <div class="mb-3">
                Organizer login
            </div>
            
            <Input v-model="state.username" />
            <Input v-model="state.password" type="password" />

            <Button class="mt-2" @click="handleClick">
                Login
            </Button>
        </div>
    </AuthLayout>
</template>
