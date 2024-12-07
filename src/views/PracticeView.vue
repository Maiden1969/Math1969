<script setup>
import Nav from '@/components/Nav.vue';
import Tree from '@/components/Tree.vue';
import Article from '@/components/Article.vue';
import Theme from '@/components/Theme.vue';

import { ref, watch } from 'vue';

const puzzles = ref([
    {
        section: "直线与圆",
        count: 1,
    },
    {
        section: "空间向量",
        count: 1,
    },
    {
        section: "圆锥曲线",
        count: 3,
    },
])

const themes = ref([
    'Vue',
    'VueDark',
    'Han',
    'LCARS'
])

const treasuryCount = ref(3);   //集萃的数目
const baseUrl = '/puzzles/专题练习/';
const baseUrl2 = '/puzzles/集萃/';
const url = ref('/default.html');
const curTreasury = ref(0);
const curSection = ref('');
const curIndex = ref(0);
const curTheme = ref('Vue');
const articleWidth = ref('calc(100vw - 12rem)');
const isTreasury = ref('false');  //当前正在阅读的是否集萃

function changeSection(currentSection, currentIndex) {
    curSection.value = currentSection;
    curIndex.value = currentIndex;
}

function changeTheme(newTheme) {
    curTheme.value = newTheme;
    isTreasury.value = false;
}

watch([curSection, curIndex], () => {
    url.value = baseUrl + curSection.value + '/题集' + curIndex.value + '/' + curTheme.value + '_专题练习_' + curSection.value + '_' + curIndex.value + '.html';
})

watch(curTreasury, () => {
    url.value = baseUrl2 + "集萃" + curTreasury.value + "/" + curTheme.value + "_集萃_" + curTreasury.value + ".html";
})

watch(curTheme, () => {
    if (isTreasury.value)
        url.value = baseUrl2 + "集萃" + curTreasury.value + "/" + curTheme.value + "_集萃_" + curTreasury.value + ".html";
    else
        url.value = baseUrl + curSection.value + '/题集' + curIndex.value + '/' + curTheme.value + '_专题练习_' + curSection.value + '_' + curIndex.value + '.html';
})



</script>

<template>
    <Nav @extend="articleWidth = 'calc(100vw - 12rem)'" @fold="articleWidth = '100vw'">
        <Tree isRoot="true" root="集萃" >
            <Tree v-for="i in treasuryCount" :key="i" isLeaf="true" :root="'集萃' + i"
                @click="curTreasury = i, isTreasury = true" />
        </Tree>

        <Tree v-for="(item, index) in puzzles" :key="index" isRoot="true" :root="item.section"
            @click="changeSection('', 0)">
            <Tree v-for="i in item.count" :key="i" isLeaf="true" :root="'题集' + i"
                @click="changeSection(item.section, i)"></Tree>
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