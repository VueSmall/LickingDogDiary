<script>
// 舔狗日记
import note from "@/components/content.vue";
// 获取时间
import timeMessage from '@/components/timeMessage.vue'
// 滚动通知
import notice from "@/components/notice.vue";
import {defineComponent} from "vue";

export default defineComponent({
    components: {
        note, timeMessage, notice
    },
})
</script>
<template>
    <notice></notice>
    <notice></notice>
    <notice></notice>
    <note></note>
    <time-message></time-message>
</template>