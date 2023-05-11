<script>
export default {
    data() {
        return {
            time: '',
        }
    },
    methods: {
        getTime() {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate()
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();
            this.time = year + '-' + month + '-' + day + '\n' +
                '' + hour + ':' + minute + '\t' + second
            return null;
        }
    },
    mounted() {
        this.getTime()
        this.timer = setInterval(() => {
            setTimeout(this.getTime(), 0)
        }, 1000)
    }
}
</script>

<template>
    <div id="time">
        {{ time }}
    </div>
</template>

<style>
#time {
    float: right;
}
</style>