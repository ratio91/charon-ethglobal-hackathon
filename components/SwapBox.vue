<template>
  <v-card color="primaryDarker" max-width="600px" dark>
    <v-card-title>
      Swap between worlds
    </v-card-title>
    <v-card-content>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-select
              v-model="config.from"
              :items="options.from"
              label="From"
            />
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="config.to"
              :items="options.to"
              label="To"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-content>
    <v-card-actions>
      <v-spacer />
      <v-btn text>Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { activeWorlds } from '@/config/worlds'

export default {
  name: 'SwapBox',
  data: () => ({
    options: {
      from: ['Ethereum, L1'],
      to: activeWorlds
    },
    config: {
      from: 'Ethereum, L1',
      to: null
    }
  }),
  created () {
    this.options.to = activeWorlds.map(world => ({
      ...world,
      text: world.name + ', L' + world.layer
    }))
  }
}
</script>
