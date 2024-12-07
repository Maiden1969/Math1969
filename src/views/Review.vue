<script setup>
import Nav from '@/components/Nav.vue';
import Pdf from '@/components/Pdf.vue';
import Tree from '@/components/Tree.vue';

import { ref } from 'vue';

const baseUrl = '/reviews/';
const articleWidth = ref('calc(100vw - 12rem)');
const url = ref('');
</script>

<template>
    <Nav @extend="articleWidth = 'calc(100vw - 12rem)'" @fold="articleWidth = '100vw'">
        <Tree root="必修一复习" isLeaf="true" @click="url = baseUrl + '必修一review.pdf'" />
    </Nav>
    <div class="pdf" :style="{ width: articleWidth }">
        <Pdf :url="url"/>
    </div>
</template>

<style scoped>
.pdf {
    position: absolute;
    min-height: 100vh;
    /* overflow: scroll; */
    width: calc(100vw - 12rem);
    right: 0;
    /* padding: 2.5rem 1.5rem 0; */
    transition: .2s linear;
}
</style>