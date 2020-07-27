<template>
  <div>
    <!-- <h4>AWS Region:</h4> -->
    <vue-datamaps
      :geographyConfig="geographyConfig"
      :fills="fills"
      :arcConfig="arcConfig"
      arc
      aws-regions
      :awsRegionsConfig="awsRegionsConfig"
      @custom:popup-arc="popupTemplate"
    >
      <div slot="hoverArcInfo" class="hoverinfo">
        <strong>{{ popupData.title }}</strong>
        <br>
        {{ popupData.origin }} ▶▶▶ {{ popupData.destination }}
      </div>
    </vue-datamaps>




    <div class="homepage">
    <div class="prod">
      <div class="head">
        <h1>Product Explanation</h1>
      </div>
      <div class="row">
        <div class="content col-md-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="img col-md-6">
          <img src="../assets/logo.png">
        </div>
      </div>
    </div>
    <div class="beni">
      <div class="head">
        <h1>Benefits</h1>
      </div>
      <div class="row">
        <div class="content col-md-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="img col-md-6">
          <img src="../assets/logo.png">
        </div>
      </div>
    </div>
    <div class="trydemo">
      <div class="head">
        <h1>Try Our Demo</h1>
      </div>
      <div class="row">
        <div class="content col-md-6">
            
<v-flex class="text-xs-center" >
  <video id="my_video_1" class="container video-js vjs-default-skin" width="100%" 
      controls preload="none" poster='http://video-js.zencoder.com/oceans-clip.jpg'
      data-setup='{ "aspectRatio":"200:267", "playbackRates": [1, 1.5, 2] }'>
    <source src="https://vjs.zencdn.net/v/oceans.mp4" type='video/mp4' />
    <source src="https://vjs.zencdn.net/v/oceans.webm" type='video/webm' />
  </video>
</v-flex>
        </div>
        <div class="img col-md-6">
          <img src="../assets/logo.png">
        </div>
      </div>
    </div>
  </div>
  </div>

  
</template>
<style lang="scss" scoped>
@import '.././App.vue/video.scss';
</style>
<script>
  import '.././App.vue/video.js'; 
</script>

<script>
import { VueDatamaps } from "vue-datamaps";
import { Script } from 'vm';
export default {
  components: {
    VueDatamaps
  },
  data() {
    return {
      geographyConfig: {
        dataUrl:
          "https://raw.githubusercontent.com/Seungwoo321/vue-datamaps/master/demo/example-vue-cli3/public/data/world.json",
        popupOnHover: false,
        highlightOnHover: false
      },
      fills: {
        defaultFill: "#cfcfcf",
        active: "#0b5fd6"
      },
      awsRegionsConfig: {
        popupOnHover: true,
        data: [
          {
            code: "ap-northeast-2",
            fillKey: "active"
          },
          { code: "ap-northeast-1", fillKey: "active" },
          { code: "us-east-2", fillKey: "active" },
          { code: "eu-north-1", fillKey: "active" },
          { code: "ca-central-1", fillKey: "active" }
        ]
      },
      arcConfig: {
        popupOnHover: true,
        popupTemplate: true,
        data: [
          {
            origin: "ap-northeast-2",
            destination: "ap-northeast-1",
            options: {
              arcSharpness: 0.5
            }
          },
          {
            origin: "ap-northeast-1",
            destination: "ap-northeast-2",
            options: {
              arcSharpness: 0.5
            }
          },
          {
            origin: "us-east-2",
            destination: "ap-northeast-2",
            options: {
              arcSharpness: 3
            }
          },
          {
            origin: "ap-northeast-2",
            destination: "us-east-2",
            options: {
              arcSharpness: 3
            }
          },
          {
            origin: "eu-north-1",
            destination: "ap-northeast-2",
            options: {
              strokeColor: "red",
              arcSharpness: 2
            }
          },
          {
            origin: "ca-central-1",
            destination: "eu-west-2",
            options: {
              strokeColor: "rgba(100, 10, 200, 0.4)",
              arcSharpness: 3
            }
          }
        ],
        strokeColor: "#0b5fd6",
        greatArc: true,
        animationSpeed: 2000
      },
      popupData: {
        title: "DataTransfer",
        origin: "",
        destination: ""
      }
    };
  },
  methods: {
    popupTemplate(datum) {
      this.popupData.origin = datum.origin.full_name;
      this.popupData.destination = datum.destination.full_name;
    }
  }
};
</script>

<style>
</style>
<style scoped>
.prod,
.beni,
.trydemo {
  /* z-index:-1; */
  padding: 2%;
}
.content{
  z-index:0;

}
h1 {
  text-align: center;
  font-weight: bold;
  font-size: 3em;
  padding: 5% 0 5% 0;
}
img {
  width: 50%;
  display: block;
  margin: auto;
}
</style>


// import $ from 'jquery'

