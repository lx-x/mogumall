import BackTop from "../components/common/backTop/BackTop.vue";


export const backTopMinxin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backTopClick() {
            console.log("Detail回到顶部");
            this.$refs.scroll.scrollTo(0, 0);
        },
    }
}