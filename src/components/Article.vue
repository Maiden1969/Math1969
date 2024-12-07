/**文章显示区域，使用时用一个父容器包裹，来规定大小 */
<script setup>
import { ref, watchEffect } from 'vue';
import MarkdownIt from 'markdown-it';
import markdownItKatex from 'markdown-it-katex';
import { figure } from "@mdit/plugin-figure";

const props = defineProps({
    url: {
        type: String,
    },
    textType: {
        type: String,
        default: 'markdown',
    },
})


var mdit = new MarkdownIt();
mdit.use(markdownItKatex);
mdit.use(figure);

const isLoading = ref('true');
const content = ref('') //要显示的文本


watchEffect(async () => {
    try {
        isLoading.value = true;
        content.value = '';
        const response = await fetch(props.url);
        if (!response.ok) {
            console.log('error!');
            throw new Error('Network response was not ok');
        }
        content.value = await response.text(); //原始文本，是markdown或者html
        if (props.textType.toLowerCase() === 'markdown') {
            content.value = mdit.render(content.value);  //解析markdown文本
        }
        isLoading.value = false;
    } catch (error) {
        console.error('Error fetching file:', error);
    }
})

</script>

<template>
    <div class="article-container" v-html="content">
    </div>
    <div class="loading" v-if="isLoading">
        Loading...
    </div>
</template>

<style scoped>
@property --loading-rotate1 {
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
}

@property --loading-rotate2 {
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
}


.article-container {
    width: 100%;
    height: 100%;
    transition: .2s linear;
}

.loading {
    display: inline-block;
    position: relative;
    font-size: 5rem;
    line-height: 7rem;
}

.loading:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 7rem;
    height: 7rem;
    background: conic-gradient(from var(--loading-rotate1) at 50% 50%, #222 15.5%, transparent 16.5%),
        conic-gradient(from var(--loading-rotate2) at 50% 50%, #222 15.5%, transparent 16.5%);
    transform: translate(calc(-50% + 28rem), calc(-50% + 3rem));
    border-radius: 50%;
    animation: anim-loading1 2s linear infinite, anim-loading2 3s linear infinite;
}

.loading::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6rem;
    height: 6rem;
    transform: translate(calc(-50% + 28rem), calc(-50% + 3rem));
    background: var(--white);
    border-radius: 50%;
}

@keyframes anim-loading1 {
    to {
        --loading-rotate1: 360deg;
    }
}

@keyframes anim-loading2 {
    to {
        --loading-rotate2: 360deg;
    }
}
</style>
