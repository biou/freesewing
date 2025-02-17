import { version } from '../package.json'

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: 'holmes',
  version,
  design: 'Erica Alcusa Sáez',
  code: 'Erica Alcusa Sáez',
  department: 'accessories',
  type: 'pattern',
  difficulty: 3,
  tags: [
    'freesewing',
    'design',
    'diy',
    'fashion',
    'made to measure',
    'parametric design',
    'pattern',
    'sewing',
    'sewing pattern',
  ],
  optionGroups: {
    style: ['lengthRatio', 'goreNumber', 'brimAngle', 'brimWidth'],
  },
  measurements: ['head'],
  dependencies: {},
  inject: {},
  hide: [],
  parts: ['gore', 'brim', 'ear'],
  options: {
    lengthRatio: { pct: 55, min: 40, max: 60 },
    goreNumber: { count: 6, min: 4, max: 20 },
    brimAngle: { deg: 45, min: 10, max: 90 },
    brimWidth: { pct: 5, min: 5, max: 9 },
  },
}
