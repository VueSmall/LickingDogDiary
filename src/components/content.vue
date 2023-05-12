<!--author:steam-404-->
<!--舔狗日记-->
<script>

import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
    data() {
        return {
            url: 'https://v.api.aa1.cn/api/tiangou/index.php',
            note: '',
            error: '',
            show: false,
        }
    },
    methods: {
        getMessage() {
            axios({
                method: 'post',
                url: this.url
            }).then(response => {
                this.note = response.data
            }).catch(error => {
                this.error = error
            })
        },
        notice() {
            this.show.value = true;
            setTimeout(() => {
                this.show.value = false;
            }, 2000);
        }
    },
    mounted() {
        this.getMessage()
    }
})
</script>

<template>
    <p>舔狗日记:</p>
    <a href="#">#深情</a>
    <a href="#">#舔狗</a>
    <div id="content">
        <span id="note" v-html="note"></span>
        <span style="color: red">{{ error }}</span>
    </div>
</template>

<style scoped>
* {

}

a {
    margin: 2vh;
}

#content {
    width: 100%;
    border: 1px solid rebeccapurple;
    height: 70%;
}

#note {
    color: #fc27ff;
}
</style>
