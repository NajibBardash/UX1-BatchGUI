const app = {
    data() {
        return {
            hasImage: false,
            showExportModal: false,

            isCropOpen: false,
            isResizeOpen: false,
            isRotateOpen: false,
            isExposureOpen: false,
            isColorOpen: false,
            isFrameOpen: false,
            isFilterOpen: false,

            activeBox: null,

            resizeMode: "exact",

            brightnessValue: 50,
            contrastValue: 50,
            highlightsValue: 50,
            shadowsValue: 50,

            hueValue: 50,
            saturationValue: 50,
            temperatureValue: 50,

            frameValue: 20,
            colorValue: 72
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
        },

        exportAs() {
            this.showExportModal = true;
        },

        closeExportModal() {
            this.showExportModal = false;
        },

        activateBox(index) {
            this.activeBox = index;
        },
        deactivateBox() {
            this.activeBox = null;
        },

        triggerFileInput() {
            this.$refs.fileInput.click();
        },

        onImageSelected(event) {
            const file = event.target.files[0];
            if (file) {
                console.log('Image selected:', file);
                this.hasImage = true;
            }
        }
    },

    computed: {
        brightnessSliderStyle() {
            const val = this.brightnessValue;
            const percent = val;
            return {
                background: `linear-gradient(to right, white 0%, white ${percent}%, #565656 ${percent}%, #565656 100%)`
            };
        },

        contrastSliderStyle() {
            const val = this.contrastValue;
            const percent = val;
            return {
                background: `linear-gradient(to right, white 0%, white ${percent}%, #565656 ${percent}%, #565656 100%)`
            };
        },

        highlightsSliderStyle() {
            const val = this.highlightsValue;
            const percent = val;
            return {
                background: `linear-gradient(to right, white 0%, white ${percent}%, #565656 ${percent}%, #565656 100%)`
            };
        },

        shadowsSliderStyle() {
            const val = this.shadowsValue;
            const percent = val;
            return {
                background: `linear-gradient(to right, white 0%, white ${percent}%, #565656 ${percent}%, #565656 100%)`
            };
        },

        frameSliderStyle() {
            const val = this.frameValue;
            const percent = val;
            return {
                background: `linear-gradient(to right, white 0%, white ${percent}%, #565656 ${percent}%, #565656 100%)`
            };
        },

        color() {
            return `hsl(${this.colorValue}, 100%, 50%)`;
        }
    }
}

Vue.createApp(app).mount("#app");