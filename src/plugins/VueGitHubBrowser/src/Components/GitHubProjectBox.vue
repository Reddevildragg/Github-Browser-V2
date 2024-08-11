<template>
  <div class="card">
    <a :href="cardDetails?.html_url" target="_blank" class="card-link">
      <img :src=GetImage()
           alt="Card Image" class="card-image"/>
      <div class="card-content ghb-bg-card-background">
        <h3 class="ghb-txt-card-title">{{ cardDetails?.name }}</h3>
        <p class="ghb-txt-card-text">{{ cardDetails?.description }}</p>
      </div>
    </a>

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
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: calc(33.333% - 16px); // Adjust based on the number of cards per row
    position: relative;
    box-sizing: border-box; // Include padding and border in the element's width and height

    @media (max-width: 768px) {
      width: calc(50% - 16px);
    }

    @media (max-width: 480px) {
      width: 100%;
    }

    .card-link{
      text-decoration: none;
      color: inherit;
      width: 100%;
    }

    .card-image {
      height: 250px; // Fixed height for the image
      object-fit: scale-down;
      width: 100%;
      padding: 5%;
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

      @media (max-width: 480px) {
        transform: translateY(0);
      }

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