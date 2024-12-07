<script setup>
import { ref, watch } from 'vue';
import Theme from '@/components/Theme.vue';
import Nav from '@/components/Nav.vue';
import Tree from '@/components/Tree.vue';
import Article from '@/components/Article.vue';

const baseUrl = "/tz_papers/";
const url = ref('/default.html');
const curTheme = ref('Vue');
const paperName = ref('');
const articleWidth = ref('calc(100vw - 12rem)');
const papers = [
    '高二上学期十月段考',
];

watch([paperName,curTheme],() => {
    url.value = baseUrl + paperName.value + '/' + curTheme.value + '_' + paperName.value + '.html';
})

function changeTheme(newTheme) {
    curTheme.value = newTheme;
}
</script>

<template>
    <Nav @extend="articleWidth = 'calc(100vw - 12rem)'" @fold="articleWidth = '100vw'">
        <Tree isRoot="true" root="2024年">
            <Tree v-for="(name, index) in papers" :key="index" isLeaf="true" :root="name" @click="paperName = name"/>
            <!-- <Tree isLeaf="true" root="高二上10月段考" @click="paperName = '2023级高二上学期十月段考'"></Tree> -->
        </Tree>
    </Nav>

    <div class="article" :style="{ width: articleWidth }">
        <Article :url="url" textType="HTML" />
    </div>

    <Theme @change-theme="changeTheme"></Theme>
</template>

<style scoped>
.article {
    position: absolute;
    min-height: 100vh;
    /* overflow: scroll; */
    width: calc(100vw - 12rem);
    right: 0;
    padding: 2.5rem 1.5rem 0;
    transition: .2s linear;
}
</style>