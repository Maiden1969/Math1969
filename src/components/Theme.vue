<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['changeTheme']);
const currentTheme = ref('Vue');
const extend = ref(false);
const showDescription = ref(false);
watch(extend, () => {
    if (!extend.value) {
        showDescription.value = false;
    }
})
</script>

<template>
    <div class="theme-container" @click="extend = !extend">
        <span class="theme" style="--i:5">
            {{ extend ? '收起' : '切换主题' }}
        </span>
        <span class="theme" style="--i:4" :class="{ move1: extend }" @click.stop="$emit('changeTheme', 'Vue'),showDescription = !showDescription, currentTheme = 'Vue'">
            Vue
            <span class="theme-description" v-if="showDescription && currentTheme === 'Vue'">
                这是一款以深绿色和浅绿色为主要颜色的文档主题，它和建构本网站时所使用的主要技术同名，因此以本主题作为文档的默认主题。
            </span>
        </span>
        <span class="theme" style="--i:3" :class="{ move2: extend }" @click.stop="$emit('changeTheme', 'VueDark'),showDescription = !showDescription, currentTheme = 'VueDark'">
            VueDark
            <span class="theme-description" v-if="showDescription && currentTheme === 'VueDark'">
                Vue 主题的暗黑版
            </span>
        </span>
        <span class="theme" style="--i:2" :class="{ move3: extend }" @click.stop="$emit('changeTheme', 'Han'),showDescription = !showDescription, currentTheme = 'Han'">
            Han
            <span class="theme-description" v-if="showDescription && currentTheme === 'Han'">
                Han 是一款非常少见的面向中文设计的主题，它以浅绿色为主要颜色，页边距为左右10mm。专为打印设计，因此本网站文档的PDF基本上都是 Han 主题。
            </span>
        </span>
        <span class="theme" style="--i:1" :class="{ move4: extend }" @click.stop="$emit('changeTheme', 'LCARS'), showDescription = !showDescription, currentTheme = 'LCARS'">
            LCARS
            <span class="theme-description" v-if="showDescription && currentTheme === 'LCARS'">
                LCARS 是一款风格非常独特的主题，以黑色和黄色为主要颜色，有很强的视觉冲击力。
            </span>
        </span>
    </div>
</template>

<style setup>
.theme-container {
    position: fixed;
    width: 5rem;
    color: var(--white);
    height: 1.5rem;
    right: 0;
    top: 0;
    background-color: var(--black);
    pointer-events: all;
    cursor: pointer;
    transition: .2s linear;
}

.theme-container .theme {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: var(--black);
    z-index: var(--i);
    transition: .2s linear;
}

.theme-container .theme .theme-description {
    position: absolute;
    display: flex;
    justify-content: center;
    word-break: break-all;
    width: 200%;
    height: max-content;
    top: 120%;
    opacity: 1;
    background-color: var(--black);
    transition: .2s linear;

}

.move1 {
    transform: translateX(-100%);
    pointer-events: all;
    cursor: pointer;
}

.move2 {
    transform: translateX(-200%);
    pointer-events: all;
    cursor: pointer;
}

.move3 {
    transform: translateX(-300%);
    pointer-events: all;
    cursor: pointer;
}

.move4 {
    transform: translateX(-400%);
    pointer-events: all;
    cursor: pointer;
}
</style>