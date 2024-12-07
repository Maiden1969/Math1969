<script setup>
const props = defineProps({
    width: String,
    gap:String,
})
</script>

<template>
<div class="card-container" :style="{'--width':width, '--gap':gap}">
    <slot />
</div>
</template>

<style scoped>
.card-container {
    --width:85vw;
    --gap:5rem;
    display: flex;
    width: var(--width);
    justify-content:center;
    align-items: start;
    gap:var(--gap);
    flex-wrap: wrap;
    min-height: auto;
}

</style>