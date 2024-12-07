<script setup>
import Math1969 from '@/components/Math1969.vue';
import ButtonDownload from '@/components/Button-download.vue';
import ButtonGo from '@/components/Button-go.vue';
import Card from '@/components/Card.vue';
import CardContainer from '@/components/Card-container.vue';
import Divider from '@/components/Divider.vue';
import util from '@/utils/util';
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance();
const apkUrl = '/math1969.apk';
const apkName = 'math1969.apk';
const exeUrl = '/math1969.exe';
const exeName = 'math1969.exe';
const downloadExeModalContent = `
如果浏览器将下载后的文件报告为不安全，请按照以下步骤进行：
点击下载栏目右侧的三个点 -> 保留 -> 显示详细信息 -> 仍然保留 。
(不同的浏览器，流程基本相同)随后点击“打开”进入安装界面，一直点击“Next”，最后“Finish”即可。
`;  //下载exe文件时的提示内容
const downloadExeModalTitle = '提示';  //提示标题

function download(url, name) {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

//公告
const announcementTitle = '公告';
const announcementContent = `
本网站的视觉建设、功能建设已经基本完成，
接下来主要是更新文章。每周六、周日会尽量更新，
邻近期中、期末时可能断更，寒暑假时更新加快。
记住网址:math1969.com，感谢支持！(若网站使用过程中有不便之处，可以发送邮件至 1520131241@qq.com 或者 zkr230527@mail.ustc.edu.cn)`;

//只显示一次公告
if (!instance.appContext.config.globalProperties.$hasSeenAnouncement) {
    instance.appContext.config.globalProperties.$hasSeenAnouncement = true;
    util.alertModal(announcementTitle, announcementContent);
}

</script>

<template>
    <Math1969 />

    <div class="download">
        <ButtonDownload class="R1" margin="0 1rem" @download="download(apkUrl, apkName)">
            <template #beforeButton>
                <span class="downloadText">下载安卓App</span>
            </template>
        </ButtonDownload>
        <Divider class="R2" />
        <ButtonDownload class="R1" margin="0 1rem"
            @download="download(exeUrl, exeName), util.alertModal(downloadExeModalTitle, downloadExeModalContent)">
            <template #beforeButton>
                <span class="downloadText">下载桌面应用程序</span>
            </template>
        </ButtonDownload>
    </div>

    <div class="container">
        <CardContainer width="100vw">
            <Card>
                <template #tag>
                    1
                </template>
                <template #title>
                    <b>专题练习 & 集萃</b>
                </template>
                <template #content>
                    <div class="content-container">
                        <div class="content-text">
                            针对不同章节的专项训练，以及各类难题的集锦。配有详尽的解析,完整呈现解题的思维流程。
                        </div>
                        <ButtonGo scale="0.7" @click="$router.push('/practice')" />
                    </div>
                </template>
            </Card>
            <Card>
                <template #tag>
                    2
                </template>
                <template #title>
                    <b>复习参考</b>
                </template>
                <template #content>
                    <div class="content-container">
                        <div class="content-text">
                            本人编写的复习资料，尽可能涵盖每本书的热点和冷门，回顾知识点的同时，给出相关例题以及拓展知识。
                        </div>
                        <ButtonGo scale="0.7" @click="$router.push('/review')" />
                    </div>
                </template>
            </Card>
            <Card>
                <template #tag>
                    3
                </template>
                <template #title>
                    <b>试卷评讲</b>
                </template>
                <template #content>
                    <div class="content-container">
                        <div class="content-text">
                            收集太湖中学月考试卷，对其中的部分题目给予解析。
                        </div>
                        <ButtonGo scale="0.7" @click="$router.push('/paper')"/>
                    </div>
                </template>
            </Card>
        </CardContainer>
    </div>

</template>

<style scoped>
.download {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    margin-bottom: 3rem;
}

.download .downloadText {
    font-size: 1.5rem;
    font-weight: bold;

    @media only screen and (max-width:1000px) {
        font-size: 1.2rem
    }

    @media only screen and (max-width:500px) {
        font-size: 1rem;
    }
}

.container {
    position: relative;
    min-width: 100%;
    height: max-content;
    padding-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #999; */
}

.content-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding: 0 1rem;
}

.content-container .content-text {
    font-size: 1.2rem;
}

.R1 {
    @media only screen and (max-width:500px) {
        --width: 1.5rem;
        --height: 1.5rem;
    }
}

.R2 {
    --height: 3rem;
    --margin: 1rem;

    @media only screen and (max-width:500px) {
        --height: 2rem;
        --margin: 0.5rem;
    }
}

.R3 {
    position: absolute;
    inset: 0;
    margin: auto;

    @media only screen and (max-width: 512px) {
        --scale: 0.6
    }
}
</style>