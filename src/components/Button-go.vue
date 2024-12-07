
<!-- 跳转按钮的样式
* @Props: width:String, height:String, marginLeft:String, marginRight: String
* 按钮内部的伪元素可以按照一定比例响应式地缩放
* @Emits: click
-->

<script setup>
const props = defineProps({
    width: {
        type: String,
    },
    height: {
        type: String,
    },
    margin:{
        type: String,
    },
    scale: {
        type: String,
    }
})

const emit = defineEmits(['click']);
</script>

<template>
    <div class="container" :style="{'--width': width, '--height': height,'--scale': scale, '--margin':margin,}">
        <slot name="beforeButton"/>
        <div @click="$emit('click')" class="button-go"></div>
        <slot name="afterButton"/>
    </div>
</template>

<style scoped>
.container {
    display: inline-block;
    --width: 10rem;
    --height: 3rem;
    --scale: 1;
    --margin:0;
    --width-computed: calc(var(--width)*var(--scale));
    --height-computed: calc(var(--height)*var(--scale));
}

.button-go {
    display: inline-block;
    position: relative;
    background-color: var(--white);
    width: var(--width-computed);
    height: var(--height-computed);
    border-radius: calc(var(--width-computed) / 2);
    border: 2.5px solid var(--black);
    pointer-events: all;
    cursor: pointer;
    transition: .5s ease-out;
    padding: 0;
    /* 注意下面这个样式 */
    vertical-align:middle; 
    margin: var(--margin);
}

.button-go:before {
    content: "➨";
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: var(--black);
    position: absolute;
    font-size: calc(var(--height-computed) / 1.5);
    width: calc(var(--height-computed) / 1.5);
    height: calc(var(--height-computed) / 1.5);
    top:calc(var(--height-computed) / 7);
    bottom: calc(var(--height-computed) / 6);
    left:calc(var(--width-computed) / 20);
    margin: 0;
    padding: 0;
    pointer-events: all;
    transition: .5s ease-out;
}

.button-go:after{
    content:'';
    background-color: var(--black);
    border-radius: 50%;
    position: absolute;
    width: calc(var(--height-computed) / 1.5);
    height: calc(var(--height-computed) / 1.5);
    top:calc(var(--height-computed) / 7);
    bottom: calc(var(--height-computed) / 6);
    left:min(calc(var(--width-computed) * 0.75), calc((var(--width-computed) - var(--height-computed)/1.5)*0.9));
    transition: .5s ease-out;
}

.button-go:hover:before {
    left:min(calc(var(--width-computed) * 0.75), calc((var(--width-computed) - var(--height-computed)/1.5)*0.9));
    color: var(--white);
}

.button-go:hover:after{
    left:calc(var(--width-computed) / 20);
    background-color: var(--white);
}

.button-go:hover{
    background-color: var(--black);
    border-color: var(--white);
}
</style>