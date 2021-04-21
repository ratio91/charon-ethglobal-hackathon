<template>
  <v-row>
    {{ slug }}
  </v-row>
</template>

<script>
export default {
  asyncData ({ params }) {
    const slug = params.slug
    return { slug }
  }
}
</script>
