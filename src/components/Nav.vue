/**
@emits: extend, fold
*/

<script setup>
import { ref } from 'vue';
const transformNav = ref('none');
const isExtend = ref('true');

const emit = defineEmits(['extend', 'fold']);
</script>

<template>
    <div class="nav-container" :style="{ transform:transformNav}">
        <div class="extend" v-if="!isExtend" @click="transformNav = 'none', isExtend = true, $emit('extend')">展开</div>
        <div class="nav">
            <header @click="transformNav = 'translateX(-100%)', isExtend = false, $emit('fold')">导航栏</header>
            <main>
                <div class="tree">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>

<style scoped>
.nav-container {
    position: fixed;
    width: 12rem;
    min-width: 0;
    min-height: 100vh;
    background-color: var(--black);
    transition: .2s linear;
    z-index: 999;
}

.extend{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: var(--white);
    width: 3rem;
    height: 3rem;
    background-color: var(--black);
    border-radius: 50%;
    top:0;
    right:-3rem;
    transition: .2s linear;
    cursor: pointer;
}

.nav {
    width: 100%;
    min-width: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 100%;
    transition: .2s linear;
}


.nav header {
    position: relative;
    width: 100%;
    font-size: 2rem;
    line-height: 3rem;
    color: var(--white);
    text-align: center;
    /* border-bottom: 3px solid var(--white); */
    background: linear-gradient(to right, var(--white), var(--white)) left bottom no-repeat;
    background-size: 100% 3px;
    margin-bottom: 1rem;
    overflow: hidden;
    transition: .2s linear;
}

.nav header:before {
    content: '收起';
    position: absolute;
    display: flex;
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    color: var(--white);
    width: 100%;
    height: 100%;
    inset: 0;
    margin: auto;
    transform: translateY(100%);
    border-radius: 50%;
    transition: .2s linear;
    pointer-events: none;
}

.nav:hover header {
    color: transparent;
    cursor: pointer;
}

.nav:hover header:before {
    transform: translateY(0);
    cursor: pointer;
}

.nav header:hover {
    background-size: 100% 100%;
}

.nav header:hover:before {
    color: var(--black);
}



.nav main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
}

.nav .tree {
    color: var(--white)
}
</style>