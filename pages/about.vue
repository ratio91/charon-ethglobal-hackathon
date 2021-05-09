<template>
  <v-row>
    <v-toolbar color="transparent" flat>
      <v-btn text nuxt to="/">
        <v-icon left>arrow_back</v-icon>
        Back
      </v-btn>
    </v-toolbar>
    <v-col cols="12" class="text-center">
      <blockquote class="blockquote">
        &#8220;Something.&#8221;
        <footer>
          <small>
            <em>&mdash;Charon</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
    <v-col cols="12">
      <v-card shaped light>
        <v-card-title>
          {{ post.title }}
        </v-card-title>
        <v-card-text>
          <nuxt-content :document="post" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData ({ params, $content }) {
    const post = await $content('about').fetch()
    return { post }
  }
}
</script>
