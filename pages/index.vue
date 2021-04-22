<template>
  <v-row justify="center" align="center">
    <v-col cols="12" class="my-7">
      <SwapBox />
    </v-col>

    <v-col cols="12" class="my-7">
      <h1 class="text-h4 font-weight-bold my-2">
        Ethereum is scaling
      </h1>
      <h2 class="text-h5 font-weight-light my-2">
        New worlds await, and charon is here to helps you reach them
      </h2>
      <v-btn class="my-2" rounded outlined>
        More info
      </v-btn>
    </v-col>
    <v-col cols="12" class="my-7">
      <v-row>
        <v-col cols="12">
          <h3 class="text-h5 font-weight-bold">
            <v-icon class="mr-1" large>
              explore
            </v-icon>
            Discover
          </h3>
        </v-col>
        <v-col v-for="world in worlds" :key="'dest_' + world.id" cols="12" md="4">
          <v-card shaped light :to="'/worlds/' + world.slug" nuxt hover>
            <v-card-title>
              {{ world.name }}, Layer {{ world.layer }}
            </v-card-title>
            <v-card-subtitle>
              {{ world.type }}
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer />
              <v-chip v-for="(tag, index) in world.tags" :key="'tag_' + index" color="secondary" class="ml-2">
                {{ tag }}
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import SwapBox from '@/components/SwapBox'
import { worlds } from '@/config/worlds'

export default {
  components: { SwapBox },
  data: () => ({
    worlds
  })
}
</script>
