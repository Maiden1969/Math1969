<script setup>
import { ref } from 'vue';

const props = defineProps({
    isRoot: Boolean,
    isLeaf: Boolean,
    root: String,
    fontSize: String,
    color: String,
    subTree: Boolean,
})

const emit = defineEmits(['click']);
const isExtend = ref(false);

function handleClick() {
    if (props.isLeaf) {
        emit('click');
    }
    else{
        isExtend.value = !isExtend.value;
    }
}


</script>

<template>
    <div class="tree-container" :style="{ '--font-size': fontSize, '--color': color }">
        <div class="rootTree">
            <span class="root" @click="handleClick" :id="isLeaf ? 'leaf' : ''">
                <span class="go">
                    GO!
                </span>
                <span class="text">
                    {{ (isRoot ? '' : '> ') + root }}
                </span>
            </span>
            <div class="sub" :id="isExtend ? 'extend' : ''">
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
.tree-container {
    --font-size: 1.5rem;
    --color: var(--white);
    min-height: 0;
    transition: .2s linear;
}

.rootTree {
    display: block;
    overflow: hidden;
    transition: .2s ease-out;
    cursor: pointer;
    min-height: 0;
}

.rootTree .root {
    position: relative;
    font-size: var(--font-size);
    color: var(--color);
    cursor: pointer;
    transition: .2s linear;
    overflow: hidden;
    background: linear-gradient(to right,var(--white), var(--white)) left bottom no-repeat;
    background-size: 0% 2.5px;
}

.rootTree .root .go {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    transform: translateX(-102%);
    transition: .2s linear;
}

.rootTree .root .text {
    position: relative;
    transition: .2s linear;
}

.rootTree .sub {
    height: 0;
    margin-left: 2rem;
    transition: height .2s linear;
    opacity: 0;
    overflow: hidden;
    min-height: 0;
}

.rootTree:hover .root {
    background-size: 100% 2.5px;
}

.rootTree:hover #leaf {
    background-size: 0% 2.5px;
}

.rootTree #leaf:hover .go {
    transform: translateX(0%);
}

.rootTree #leaf:hover .text{
    opacity: 0;
}

#extend {
    height: calc-size(max-content, size);
    opacity: 1;
}
</style>
