import Modal from "@/components/Modal.vue"
import { createApp } from "vue";

//工具 
const util = {

    /**
     * 创建一个弹出框，包括标题，内容，和一个确认按钮
     * @param {string} title 
     * @param {string} content 
     * @param {string} width 
     * @param {string} height 
     */
    alertModal: function(title, content, width, height) {
        const div = document.createElement('div');
        const app = document.querySelector('#app')
        const paramsObj = {};
        if (title) paramsObj.title = title;
        if (content) paramsObj.content =  content;
        if (width) paramsObj.width = width;
        if (height) paramsObj.height = height;
        paramsObj.confirm = () => {
            modal.unmount();
            div.remove();
        };
        const modal = createApp(Modal, paramsObj);
        div.style.setProperty('z-index', 999);
        app.insertBefore(div, app.firstChild);
        modal.mount(div);
    }
}

export default util;