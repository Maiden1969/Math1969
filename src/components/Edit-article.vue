<script setup>
import { computed, ref, watchEffect } from 'vue';
import MarkdownIt from 'markdown-it';
import markdownItKatex from 'markdown-it-katex';
import { figure } from "@mdit/plugin-figure";

var mdit = new MarkdownIt();
mdit.use(markdownItKatex);
mdit.use(figure);


const props = defineProps({
    url: String,
})


const md = ref('');
const content = computed(() => {
    return mdit.render(md.value);
})
</script>

<template>
    <div class="article-container">
        <textarea v-model="md" class="edit"></textarea>
        <div class="preview" v-html="content">
        </div>
    </div>
</template>

<style scoped>
.article-container {
    display: flex;
}

.edit {
    width: 48%;
    min-height: 100vh;
    margin-right:4%;
}

.preview {
    background-color: #fff;
    width: 48%;
    min-height: 100vh;
}
</style>