<script setup>
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <text y = "85%" x = "50%">
            Math1969
        </text>
    </svg>
</template>

<style scoped>


svg {
    width: 100vw;
    height: max(10vw,10vh);
    stroke: var(--black);
    stroke-width: 0.5px;
    fill: transparent;
    stroke-dashoffset: 2000;
    stroke-dasharray: 0, 2000;
    animation: anim1 5s linear forwards, anim2 2s 2s linear forwards;
}

svg text{
    text-anchor: middle;
    font-size: 6vmax;
}

@keyframes anim1 {
    to {
        stroke-dashoffset: 2000;
        stroke-dasharray: 1000, 1000;
    }
}

@keyframes anim2 {
    to {
        fill: #222;
        stroke-width: 0.2px;
    }
}

</style>