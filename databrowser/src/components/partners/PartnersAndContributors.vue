<template>
  <div class="flex flex-col gap-3">
    <span class="text-xl font-semibold lg:text-2xl">
      Partners and contributors
    </span>
    <CardText>
      The Data Browser provides all necessary information and access to Open
      Data from different fields and sources.
    </CardText>
    <div class="grid grid-cols-2 gap-3 rounded lg:grid-cols-4">
      <a
        v-for="(partner, index) in partners"
        :key="index"
        :href="partner.url"
        :title="partner.linkTitle"
        class="flex items-center justify-center rounded border p-3 hover:border-green-500"
        target="_blank"
      >
        <img
          class="h-16 rounded"
          :alt="partner.imageAlt"
          :src="partner.imageSrc"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardText from '../card/CardText.vue';

interface Partner {
  imageAlt: string;
  imageSrc: string;
  linkTitle: string;
  url: string;
}

const partners: Partner[] = [
  {
    imageAlt: 'Noi Techpark company logo',
    imageSrc: 'https://noi.bz.it/themes/custom/noi_techpark/logo_bn.svg',
    linkTitle: 'NOI Techpark homepage',
    url: 'https://noi.bz.it/',
  },
  {
    imageAlt: 'studiohug company logo',
    imageSrc: '/logo-studio-hug-black.svg',
    linkTitle: 'studiohug homepage',
    url: 'https://www.studiohug.com/',
  },
  {
    imageAlt: 'Christian Gapp company logo',
    imageSrc:
      'https://gappc.net/wp-content/uploads/2022/10/logo-full-black.png',
    linkTitle: 'Christian Gapp homepage',
    url: 'https://gappc.net/',
  },
];
</script>
