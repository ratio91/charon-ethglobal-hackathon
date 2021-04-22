<template>
  <v-app>
    <v-app-bar app color="transparent" flat>
      <v-app-bar-title>Charon</v-app-bar-title>
      <v-spacer />
      <v-btn text>
        Connect Metamask
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      fixed
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
}
</script>
