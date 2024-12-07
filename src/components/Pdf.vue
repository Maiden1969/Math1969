/**
 * 在线浏览PDF
 */

<script setup>
const props = defineProps({
    url:{
        type:String,
        default:'',
    }
})
</script>

<template>
    <div class="pdf-container">
        <iframe :src="url" width="100%" height="100%"></iframe>
    </div>
</template>

<style scoped>
.pdf-container {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>