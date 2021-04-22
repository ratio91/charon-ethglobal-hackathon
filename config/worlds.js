export const worlds = [
  // {
  //   id: 111,
  //   name: 'Ethereum',
  //   slug: 'ethereum',
  //   layer: 1,
  //   tags: [],
  //   isActive: true,
  //   color: '#'
  // },
  {
    id: 1,
    name: 'Optimism',
    slug: 'optimism',
    layer: 2,
    tags: ['Optimistic Rollup', 'Kovan'],
    isActive: true,
    color: '#'
  },
  {
    id: 2,
    name: 'Arbitrum',
    slug: 'arbitrum',
    layer: 2,
    tags: ['Kovan'],
    isActive: true,
    color: '#'
  },
  {
    id: 3,
    name: 'Skale',
    slug: 'skale',
    layer: 2,
    tags: ['Kovan'],
    isActive: true,
    color: '#'
  },
  {
    id: 4,
    name: 'Matic',
    slug: 'matic',
    layer: 2,
    tags: ['Sidechain', 'Kovan'],
    isActive: true,
    color: '#'
  },
  {
    id: 5,
    name: 'zkSync',
    slug: 'zksync',
    layer: 2,
    tags: ['ZK Rollup', 'Kovan'],
    isActive: false,
    color: '#'
  },
  {
    id: 6,
    name: 'Loopring',
    slug: 'loopring',
    layer: 2,
    tags: ['ZK Rollup', 'Kovan'],
    isActive: false,
    color: '#'
  }
]

export const activeWorlds = worlds.filter(world => world.isActive)
