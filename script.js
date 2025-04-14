const app = {
    data() {
        return {
            hasImage: false,
            isCropOpen: false,
            isResizeOpen: false,
            isRotateOpen: false,
            isExposureOpen: false,
            isColorOpen: false,
            isFrameOpen: false,
            isFilterOpen: false,
            resizeMode: "exact"
        }
    },
    methods: {
        show() {
            this.hasImage = true;
        },

        changeCropArrow() {
            this.isCropOpen = !this.isCropOpen;
        },

        changeResizeArrow() {
            this.isResizeOpen = !this.isResizeOpen;
        },

        changeRotateArrow() {
            this.isRotateOpen = !this.isRotateOpen;
        },

        changeExposureArrow() {
            this.isExposureOpen = !this.isExposureOpen;
        },

        changeColorArrow() {
            this.isColorOpen = !this.isColorOpen;
        },

        changeFrameArrow() {
            this.isFrameOpen = !this.isFrameOpen;
        },

        changeFilterArrow() {
            this.isFilterOpen = !this.isFilterOpen;
        },
        
        displayScaleOption() {
            this.hasImage = false;
        }
    }
}
Vue.createApp(app).mount("#app");