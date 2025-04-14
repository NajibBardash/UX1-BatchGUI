const app = {
    data() {
        return {
            hasImage: false,
            isOpen: false,
            resizeMode: "exact"
        }
    },
    methods: {
        show() {
            this.hasImage = true;
        },

        changeArrow() {
            this.isOpen = !this.isOpen;
        },

        displayScaleOption() {
            this.hasImage = false;
        }
    }
}
Vue.createApp(app).mount("#app");