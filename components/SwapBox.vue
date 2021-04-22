<template>
  <v-card max-width="600px">
    <v-card-title>
      Migrate your tokens
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
              item-text="name"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-content>
    <v-card-actions>
      <v-spacer />
      <v-btn>Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { activeWorlds } from '@/config/worlds'

export default {
  name: 'SwapBox',
  data: () => ({
    options: {
      from: ['Ethereum'],
      to: activeWorlds
    },
    config: {
      from: 'Ethereum',
      to: null
    }
  })
}
</script>
