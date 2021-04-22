<template>
  <v-row justify="center" align="center">
    <v-col cols="12" class="my-5">
      <SwapBox />
    </v-col>

    <v-col cols="12" class="my-5">
      <h1 class="text-h4 font-weight-bold py-2">
        Ethereum is scaling
      </h1>
      <h2 class="text-h5 font-weight-light py-2">
        New worlds await, and charon is here to helps you reach them
      </h2>
      <v-btn rounded outlined>
        More info
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="12">
          <h3 class="text-h6">
            Worlds
          </h3>
        </v-col>
        <v-col v-for="dest in destinations" :key="'dest_' + dest.id" cols="12" md="4">
          <v-card shaped :color="dest.color" dark>
            <v-card-title>
              {{ dest.name }}
            </v-card-title>
            <v-card-subtitle>
              {{ dest.type }}
            </v-card-subtitle>
            <v-card-text>
              {{ dest.description }}
            </v-card-text>
            <v-card-actions>
              <v-btn light>
                explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import SwapBox from '@/components/SwapBox'

export default {
  components: { SwapBox },
  data: () => ({
    destinations: [
      { id: 1, name: 'Optimism', description: 'Super cool L2 technology', type: 'Optimistic Rollup', isAvailable: true, color: 'error' },
      { id: 2, name: 'Matic', description: 'Super cool L2 technology', type: 'Sidechain', isAvailable: true, color: 'primary' },
      { id: 3, name: 'Arbitrum', description: 'Super cool L2 technology', type: 'Optimistic Rollup', isAvailable: false, color: 'secondary' }
    ]
  })
}
</script>
