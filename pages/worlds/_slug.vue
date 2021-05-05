<template>
  <v-row>
    <v-toolbar color="transparent" flat>
      <v-btn text nuxt to="/">
        <v-icon left>arrow_back</v-icon>
        Back
      </v-btn>
    </v-toolbar>
    <v-card shaped light>
      <v-card-title>
        {{ post.title }}
      </v-card-title>
      <v-card-text>
        <nuxt-content :document="post" />
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
export default {
  async asyncData ({ params, $content }) {
    const post = await $content(params.slug).fetch()
    return { post }
  }
}
</script>
