<template>
  <img :src=GetImage()
       alt="Card Image" class="card-image"/>
  <div class="card-content ghb-bg-card-background">
    <h3>{{ cardDetails.name }}</h3>
    <p>{{ cardDetails.description }}</p>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

const props = defineProps({
  cardDetails: Object,
  fallbackImage:
      {
        type: String,
        default: "https://wallup.net/wp-content/uploads/2018/10/06/708179-kittens-kitten-cat-cats-baby-cute-s.jpg"
      }
})

function GetImage() {
  if (props.cardDetails?.CustomData && props.cardDetails.CustomData.image_url && props.cardDetails.CustomData.image_url.length > 0) {
    return props.cardDetails.CustomData.image_url[0];
  } else if (props.cardDetails?.owner && props.cardDetails?.owner.avatar_url) {
    return props.cardDetails.owner.avatar_url;
  } else {
    return props.fallbackImage;
  }
}
</script>

<style lang="scss" scoped>
.card-grid {
  .card {

    .card-image {
      height: 250px; // Fixed height for the image
      object-fit: cover;
      width: 100%;
    }

    .card-content {
      bottom: 0;
      left: 0;
      padding: 16px;
      position: absolute;
      transform: translateY(100%);
      transition: transform 0.3s ease-in-out;
      width: 100%;
      box-sizing: border-box; // Include padding and border in the element's width and height
      text-align: center;

      h3 {
        font-size: 1.2rem;
        margin-bottom: 8px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2; /* Limit to 2 lines */
      }

      p {
        color: #666;
        font-size: 1rem;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3; /* Number of lines to show */
      }
    }

    &:hover .card-content {
      transform: translateY(0);
    }
  }
}
</style>