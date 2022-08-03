<script setup lang="ts">
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import Input from '@/components/common/Input.vue';
import Button from '@/components/common/Button.vue';

let username = '';
let password = '';
</script>

<template>
    <AuthLayout>
        <div class="d-grid gg-2">
            <div>
                Organizer login
            </div>
            
            <Input v-model="username" />
            <Input v-model="password" type="password" />

            <Button>Login</Button>
        </div>
    </AuthLayout>
</template>
