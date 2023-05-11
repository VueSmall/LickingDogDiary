<script>
import note from "@/components/content.vue";
import timeMessage from '@/components/timeMessage.vue'
import {defineComponent} from "vue";

export default defineComponent({
    components: {
        note,timeMessage
    },
})
</script>
<template>
  <note></note>
  <time-message></time-message>
</template>