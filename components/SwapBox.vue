<template>
  <v-card max-width="600px" light>
    <v-card-title>
      Swap between worlds
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-select
              v-model="selectedFrom"
              :items="fromOptions"
              label="From"
              return-object
              :readonly="step > 0"
            />
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="selectedTo"
              :items="toOptions"
              label="To"
              return-object
              :readonly="step > 0"
            />
          </v-col>
          <v-col v-if="step > 0" cols="6">
            <v-text-field
              v-model="amount"
              :readonly="depositing"
              label="Amount"
              :hint="'Fees : ' + fees"
              persistent-hint
            />
          </v-col>
          <v-col v-if="step > 1" cols="6">
            <v-text-field
              v-model="address"
              :readonly="depositing"
              label="Address"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-btn text @click="connect">
        Connect Metamask
      </v-btn>
      <v-spacer />
      <v-btn
        v-if="step > 0"
        text
        color="grey"
        @click="reset"
      >
        Reset
      </v-btn>
      <v-btn
        v-if="step === 0"
        text
        color="primary"
        :loading="initing"
        :disabled="!selectedFrom || !selectedTo"
        @click="initConnext"
      >
        Continue
      </v-btn>
      <v-btn
        v-if="step === 1"
        text
        color="primary"
        :loading="depositing"
        :disabled="!amount"
        @click="deposit"
      >
        Continue
      </v-btn>
      <!-- <v-btn v-if="step === 3" text :loading="swaping" @click="swap">
        Cross Swap
      </v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>
// import { activeWorlds } from '@/config/worlds'
import networks from '@/config/networks'
import { ConnextSdk } from '@connext/vector-sdk'
import { providers } from 'ethers'

export default {
  name: 'SwapBox',
  data: () => ({
    account: null,
    connextSdk: null,
    webProvider: null,
    initing: false,
    estimating: false,
    depositing: false,
    swaping: false,
    selectedFrom: null,
    selectedTo: null,
    step: 0,
    amount: '0',
    address: '0x4CcAE7acA0c3Ec55E1496F4db45f615A99A919Ae',
    fees: 0
  }),
  computed: {
    fromOptions () {
      return networks
        .map(network => ({
          ...network,
          text: network.name,
          value: network.id
        }))
    },
    toOptions () {
      if (!this.selectedFrom) {
        return []
      }
      return networks
        .filter(network => this.selectedFrom.accept.includes(network.id))
        .map(network => ({
          ...network,
          text: network.name,
          value: network.id
        }))
    }
  },
  watch: {
    selectedFrom () {
      this.selectedTo = null
    },
    async amount (value) {
      if (value === 0) {
        this.fees = 0
      } else {
        const res = await this.connextSdk.estimateFees({ transferAmount: this.amount })
        this.fees = res.totalFee
      }
    }
  },
  mounted () {
    this.connextSdk = new ConnextSdk()
    this.webProvider = new providers.Web3Provider(window.ethereum)
  },
  methods: {
    async connect () {
      const res = await window.ethereum.request({ method: 'eth_requestAccounts' })
      this.account = res[0]
    },
    async initConnext () {
      this.initing = true
      try {
        const res = await this.connextSdk.init({
          routerPublicIdentifier: 'vector7tbbTxQp8ppEQUgPsbGiTrVdapLdU5dH7zTbVuXRf1M4CEBU9Q', // Router Public Identifier
          loginProvider: this.webProvider, // Web3/JsonRPCProvider
          senderChainProvider: this.selectedFrom.chainProvider, // Rpc Provider Link
          senderAssetId: this.selectedFrom.assetId, // Asset/Token Address on Sender Chain
          recipientChainProvider: this.selectedTo.chainProvider, // Rpc Provider Link
          recipientAssetId: this.selectedTo.assetId // Asset/Token Address on Recipient Chain
        })
        console.log(res)
        this.step++
      } catch (error) {
        console.log(error)
      }
      this.initing = false
    },
    async deposit () {
      this.depositing = true
      try {
        const res = await this.connextSdk.deposit({ transferAmount: this.amount, webProvider: this.webProvider })
        console.log(res)
        this.step++
      } catch (error) {
        console.log(error)
      }
      this.depositing = false
    },
    async swap () {
      this.swaping = true
      try {
        const res = await this.connextSdk.crossChainSwap(this.address)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
      this.swaping = false
    },
    reset () {
      this.step = 0
      this.selectedFrom = null
    }
  }
}
</script>
