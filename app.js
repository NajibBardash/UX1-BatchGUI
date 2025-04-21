const app = Vue.createApp({
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
            imageFormat: "png",

            brightnessValue: 50,
            contrastValue: 50,
            highlightsValue: 50,
            shadowsValue: 50,

            hueValue: 50,
            saturationValue: 50,
            temperatureValue: 50,

            frameValue: 20,
            colorValue: 72,

            qualityValue: 50,
            markAll: false,
            images: [false, false, false],

            appliedTools: [],

            preview: true,
            imageSize: Number(100),
            exportSize: Number(100)
        }
    },

    methods: {

        clear() {
            this.hasImage = !this.hasImage;
        },

        toggleAll() {
            this.images = this.images.map(() => this.markAll);
        },
        checkIfAllSelected() {
            this.markAll = this.images.every(val => val);
        },

        applyTool(toolName) {
            if (!this.appliedTools.includes(toolName)) {
                this.appliedTools.push(toolName);
            }
        },

        setPreviewTrue() {
            this.preview = true;
        },

        setPreviewFalse() {
            this.preview = false;
        },

        decreaseImageSize() {
            if (this.imageSize > 1) {
                this.imageSize--;

            }
        },

        increaseImageSize() {
            this.imageSize++;
        },

        resetImageSize() {
            this.imageSize = Number(100);
        },

        decreaseExportSize() {
            if (this.exportSize > 1) {
                this.exportSize--;

            }
        },

        increaseExportSize() {
            this.exportSize++;
        },

        resetExportSize() {
            this.exportSize = Number(100);
        },

        refreshPage() {
            window.location.reload();
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

        closeSummary(id) {
            document.getElementById(id).click();
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
                this.hasImage = true;
            }
        },

        removeTool(toolName) {
            const index = this.appliedTools.indexOf(toolName);
            if (index !== -1) {
                this.appliedTools.splice(index, 1);
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
        },

        qualitySliderStyle() {
            const val = this.qualityValue;
            const percent = val;
            return {
                background: `linear-gradient(to right, white 0%, white ${percent}%, #565656 ${percent}%, #565656 100%)`
            };
        },
    }
});

app.mount("#app");