/**
 * @slots: tag, title, content
 * @props: width:string, height:string, scale:string
 */

<script setup>
const props = defineProps({
    width: String,
    height: String,
    scale: String,
})
</script>

<template>
    <div class="card" :style="{'--width':width, '--height':height, '--scale':scale}">
        <div class="tag">
            <slot name="tag" />
        </div>

        <div class="title">
            <slot name="title" />
        </div>

        <div class="content">
            <slot name="content" />
        </div>
    </div>
</template>

<style scoped>
.card {
    position: relative;
    --width: 20rem;
    --height: 15rem;
    --scale: 1;
    --width-computed: calc(var(--width)*var(--scale));
    --height-computed:calc(var(--height)*var(--scale));
    background: var(--white);
    width: var(--width-computed);
    height: var(--height-computed);
    max-width: 90vw;
    border: 3px solid var(--black);
    overflow: hidden;
    word-break: break-all;
    pointer-events: all;
    overflow: hidden;
    box-shadow: 0.7rem 0.7rem var(--black);
    transition: all .2s ease-out;
}

/* 左上角的tag区域 */
.card:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-50%, -50%);
    width: calc(var(--width-computed)*0.34);
    height: calc(var(--width-computed)*0.34);
    background-color: var(--black);
    border-radius: 50%;
}

.card .tag {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    color: var(--white);
    font-size: 1.5rem;
    width: calc(var(--width-computed)*0.17);
    height: calc(var(--height-computed)*0.17);
    overflow: hidden;
}

.card .title {
    position: absolute;
    display: block;
    text-align: center;
    font-size: 1.7rem;
    left: calc(var(--width-computed)*0.17);
    height: calc(var(--width-computed)*0.17);
    width: calc(var(--width-computed)*0.83);
    overflow: hidden;

}

.card .content {
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    top: calc(var(--width-computed)*0.17);
}

.card:hover{
    transform: scale(1.1);
    box-shadow: 1.2rem 1.2rem var(--black), 0 0 0.5rem var(--black);
}
</style>