<template>
    <div id="cafe-map">

    </div>
</template>
<script>
import {ROAST_CONFIG} from '../../config.js';
export default {
    props: {
        'latitude': {  // 经度
            type: Number,
            default: function () {
                return 120.21
            }
        },
        'longitude': {  // 纬度
            type: Number,
            default: function () {
                return 30.29
            }
        },
        'zoom': {   // 缩放级别
            type: Number,
            default: function () {
                return 4
            }
        }
    },
    data() {
        return {
            markers: [],
            infoWindows: []
        }
    },
    computed: {
        cafes(){
            return this.$store.getters.getCafes;
        }
    },
    mounted() {
        this.map = new AMap.Map('cafe-map', {
            center: [this.latitude, this.longitude],
            zoom: this.zoom
        });
        // 清除并重构点标记
        this.clearMarkers();
        this.buildMarkers();
    },
    methods: {
        // 为所有咖啡店创建点标记
        buildMarkers() {
            // 清空点标记数组
            this.markers = []

            // 自定义点标记图标
            var image = ROAST_CONFIG.APP_URL + '/storage/img/coffee-marker.png'
            var icon = new AMap.Icon({
                image: image,  // 图像 URL
                imageSize: new AMap.Size(19, 33)  // 设置图标尺寸
            });

            // 遍历所有咖啡店并为每个咖啡店创建点标记
            for (let i = 0; i < this.cafes.length; i++) {

                // 通过高德地图 API 为每个咖啡店创建点标记并设置经纬度
                var marker = new AMap.Marker({
                    position: AMap.LngLat(parseFloat(this.cafes[i].latitude), parseFloat(this.cafes[i].longitude)),
                    title: this.cafes[i].name,
                    icon: icon,  // 通过 icon 对象设置自定义点标记图标来替代默认蓝色图标
                    map: this.map
                })

                // 为每个咖啡店创建信息窗体
                var infoWindow = new AMap.InfoWindow({
                    content: this.cafes[i].name
                });
                this.infoWindows.push(infoWindow)

                // 绑定点击事件到点标记对象，点击打开上面创建的信息窗体
                marker.on('click', function () {
                    infoWindow.open(this.getMap(), this.getPosition())
                });

                // 将每个点标记放到点标记数组中
                this.markers.push(marker)
            }

            // 将所有点标记显示到地图上
            this.map.add(this.markers)
        },
        // 从地图上清理点标记
        clearMarkers() {
            // 遍历所有点标记并将其设置为 null 从而从地图上将其清除
            for (var i = 0; i < this.markers.length; i++) {
                this.markers[i].setMap(null)
            }
        }
    }
}
</script>
<style scoped>
    #cafe-map {
        width: 100%;
        height: 400px;
    }
</style>