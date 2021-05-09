<template>
  <v-row justify="center" align="center">
    <div class="box-drift">
      <div class="box-bob">
        <div class="box-pitch">
          <div class="left-sail" />
          <div class="right-sail" />
          <div class="hull" />
        </div>
      </div>
    </div>

    <v-col cols="6" class="my-7">
      <h1 class="text-h4 font-weight-bold my-2">
        Ethereum is scaling
      </h1>
      <h2 class="text-h5 font-weight-light my-2">
        New worlds await and Charon is the ferryman who helps you reach them
      </h2>
      <v-btn class="my-2" rounded outlined nuxt to="/about">
        More info
      </v-btn>
    </v-col>
    <v-col cols="6" class="my-7">
      <SwapBox />
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
          <v-card
            shaped
            light
            :to="'/worlds/' + world.slug"
            nuxt
            hover
          >
            <v-card-title>
              <span>{{ world.name }}, Layer {{ world.layer }}</span>
              <v-spacer />
              <v-chip v-if="world.isActive" outlined color="#ee6c4d">Live</v-chip>
            </v-card-title>
            <v-card-subtitle>
              {{ world.type }}
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer />
              <v-chip v-for="(type, index) in world.types" :key="'tag_type_' + index" color="primary" class="ml-2">
                <v-icon left>share</v-icon>
                {{ type }}
              </v-chip>
              <v-chip v-for="(network, index) in world.networks" :key="'tag_net_' + index" color="primary" class="ml-2">
                <v-icon left>public</v-icon>
                {{ network }}
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

<style lang="scss" scoped>
$white-sail: #a8dadc;

.box-drift {
  position: absolute;
  width: 100px;
  height: 100%;
  left: 0%; //ani inc
  //border: solid 4px red;
  animation: doDrift 16s infinite;
}

.box-bob {
  position: absolute;
  top: 55%; //ani up down
  width: 100px;
  background: none;
  //border: solid 4px black;
  animation: doBob 2s infinite;
}

.box-pitch {
  height: 100px;
  //border: solid 4px blue;
  animation: doPitch 1s infinite;
}

.left-sail {
  background: $white-sail;
  position: absolute;
  top: 20%;
  left: 5%;
  width: 40%;
  height: 40%;
  -webkit-clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}

.right-sail {
  background: $white-sail;
  position: absolute;
  top: 5%;
  left: 50%;
  width: 45%;
  height: 55%;
  -webkit-clip-path: polygon(0 0, 0% 100%, 100% 100%);
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
}

.hull {
  background: $white-sail;
  position: absolute;
  top: 65%;
  left: 10%;
  width: 80%;
  height: 25%;
  -webkit-clip-path: polygon(0 0, 100% 0, 79% 100%, 18% 100%);
  clip-path: polygon(0 0, 100% 0, 79% 100%, 18% 100%);
}

@keyframes doBob {
  0% {
    top: 25%;
  }
  50% {
    top: 17%;
  }
  100% {
    top: 25%;
  }
}

@keyframes doDrift {
  0% {
    left: -10%;
  }
  30% {
    left: 35%;
  }
  70% {
    left: 35%;
  }
  100% {
    left: 110%;
  }
}

@keyframes doPitch {
  0% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}

</style>
