/*
 * This will create (SVG) images for all options of all patterns
 * To do that, it will load the configuration from:
 *
 * config/pattern-options.js
 *
 * Based on that, it will generate SVG images for each option and store them
 * in the relevant folder:
 *
 * markdown/org/docs/patterns/[pattern]/[option]/[pattern]_[option]_sample.svg
 *
 */
const fs = require('fs')
const path = require('path')
const core = require('../packages/core/dist')
const theme = require('../packages/plugin-theme/dist')
const pi = require('../packages/pattern-info/dist')
const models = require('../packages/models/dist')
const wb32 = models.withBreasts.size32

const image = (pattern, option) => `

## Effect of this option on the pattern
![This image shows the effect of this option by superimposing several variants that have a different value for this option](${pattern}_${option.toLowerCase()}_sample.svg "Effect of this option on the pattern")`


const insertImage = (file, pattern, option) => {
  const md = fs.readFileSync(file, 'utf-8')
  if (md.indexOf('image shows the effect of this option') === -1) fs.writeFileSync(file, md+image(pattern, option))
}


const createImages = () => {
  for (const pattern of pi.list) {
    const Pattern = require(`../packages/${pattern}/dist`)
    for (const option of pi.options[pattern]) {
      const p = new Pattern({
        measurements: wb32,
        settings: {
          idPrefix: `${pattern}_${option}`,
          embed: true,
        }
      }).use(theme)
      const file = path.join('markdown', 'org', 'docs', 'patterns', pattern, 'options', option.toLowerCase(), `${pattern}_${option.toLowerCase()}_sample.svg`)
      console.log(file)
      const svg = p.sampleOption(option).render()
      fs.writeFileSync(path.join(__dirname, '..', file), svg)
      insertImage(
        path.join('markdown', 'org', 'docs', 'patterns', pattern, 'options', option.toLowerCase(), 'en.md'),
        pattern,
        option
      )
    }
  }
}

createImages()
