<script setup>
const props = defineProps({
    width:{
        type:String,
    },

    height:{
        type:String,
    },

    margin:{
        type:String,
    }
})
</script>

<template>
    <span :style="{'--width':width, '--height':height, '--margin':margin}"></span>
</template>

<style scoped>
span{
    --width: 3px;
    --height:3rem;
    --margin:0;
    display: inline;
    width: var(--width);
    height: var(--height);
    margin:0 var(--margin);
    vertical-align:middle;
    background-color: var(--black);
}
</style>