<script setup>
const props = defineProps({
    width: {
        type: String,
    },

    height: {
        type: String,
    },

    scale: {
        type: String,
    },

    margin: {
        type: String,
    },

})

const emit = defineEmits(['download']);

</script>

<template>
    <div class="download-container" :style="{ '--width': width, '--height': height, '--scale': scale, '--margin': margin, }">
        <slot name="beforeButton" />
        <div class="button" @click="$emit('download')">
        </div>
        <slot name="afterButton" />
    </div>
</template>

<style scoped>
.download-container {
    display: inline-block;
    --width: 2.5rem;
    --height: 2.5rem;
    --margin: 0;
    --scale: 1;
    --width-computed: calc(var(--width)*var(--scale));
    --height-computed: calc(var(--height)*var(--scale));
}

.download-container .button {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: var(--margin);
    border: 3px solid var(--black);
    width: var(--width-computed);
    height: var(--height-computed);
    border-radius: 50%;
    overflow: hidden;
    pointer-events: all;
    cursor: pointer;
    transition: .3s ease-out;
}

.download-container .button:before {
    content: '↓';
    color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    inset: 0;
    margin: auto;
    font-size: calc(var(--width-computed) * 0.65);
    transition: .3s ease-out;
}

.download-container .button:after {
    content: '↓';
    color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    inset: 0;
    margin: auto;
    font-size: calc(var(--width-computed) * 0.65);
    transform: translateY(-100%);
    transition: .3s ease-out;
}

.download-container:hover .button:before {
    transform: translateY(100%);
    color: var(--white);
}

.download-container:hover .button:after {
    transform: translateY(0%);
    color: var(--white);
}

.download-container:hover .button {
    background-color: var(--black);
    border-color: var(--white);
}

.download-container .button:hover {
    transform: scale(1.4);
}
</style>