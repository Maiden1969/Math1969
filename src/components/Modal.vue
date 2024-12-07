/**
* 一般不直接使用此组件，而是用util.alertModal函数
*/

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: '',
    },

    content: {
        type: String,
        default: '',
    },

    width: {
        type: String,
        default: '30rem',
    },

    height: {
        type: String,
        default: '25rem',
    },

    confirm: {
        type: Function,
        default: () => {
            console.log('confirmed!');
        }
    }
});


</script>

<template>
    <div class="container">
        <div class="mask"></div>
        <div class="modalContainer" :style="{ '--width': width, '--height': height }">
            <header>{{ title }}</header>

            <main>
                <slot name="beforeContent" />
                <div class="contentContainer">
                    <span class="contentText">
                        {{ content }}
                    </span>
                </div>
                <slot name="afterContent" />
            </main>
            <footer>
                <button @click="confirm">知 晓</button>
            </footer>
        </div>
    </div>

</template>

<style scoped>
.mask {
    position: absolute;
    background-color: #000;
    opacity: 0.4;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 998;
}


.modalContainer {
    --width: 30rem;
    --height: 25rem;
    --max-width: 95vw;
    --max-height: 95vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    background-color: var(--white);
    width: var(--width);
    height: var(--height);
    max-width: var(--max-width);
    max-height: var(var(--max-height));
    left: max(calc((100vw - var(--width))/2), calc((100vw - var(--max-width))/2));
    top: max(calc((100vh - var(--height))/2), calc((100vw - var(--max-width))/2));
    border: 3px solid var(--black);
    box-shadow: 1rem 1rem var(--black);
    overflow: auto;
    z-index: 999;
    padding: 0 1rem;
    transition: .5s ease-out;
    opacity: 0;
    animation: modal-in .3s linear forwards;
}

.modalContainer header {
    font-size: 2.5rem;
    font-weight: bold;
    align-self: center;
}

.modalContainer main {
    align-self: center;
    display: block;
    width: 100%;
    height: 70%;
    overflow: auto;
}

.modalContainer main .contentContainer {
    display: block;
    text-indent: 2rem;
}

.modalContainer main .contentContainer .contentText {
    font-size: 1.5rem;
    background: linear-gradient(to left, var(--black), var(--black)) right bottom no-repeat;
    background-size: 0% 3px;
    transition: background-size .5s linear;
    word-break: break-all;
    overflow: auto;

}

.modalContainer footer {
    align-self: center;
    margin-top: auto;
    margin-bottom: 0.7rem;
}

.modalContainer footer button {
    font-size: 1.5rem;
    padding: 0.3rem 2rem;
    pointer-events: all;
    border: none;
    cursor: pointer;
    background: linear-gradient(to right, var(--black), var(--black)) left bottom no-repeat,
        linear-gradient(to top, var(--black), var(--black)) right bottom no-repeat,
        linear-gradient(to left, var(--black), var(--black)) right top no-repeat,
        linear-gradient(to bottom, var(--black), var(--black)) left top no-repeat;
    background-size: 0% 2px, 2px 0%, 0% 2px, 2px 0%;
    transition: background-size .5s linear, transform .2s ease-out;
}

.modalContainer:hover main .contentText {
    background: linear-gradient(to right, var(--black), var(--black)) left bottom no-repeat;
    background-size: 100% 3px;

}

.modalContainer:hover footer button {
    background-size: 100% 2px, 2px 100%, 100% 2px, 2px 100%;
}

.modalContainer footer button:hover {
    transform: scale(1.2);
}

@keyframes modal-in {
    to {
        opacity: 1;
    }
}
</style>