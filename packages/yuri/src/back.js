import { sharedDimensions } from './shared'

export default function (part) {
  const {
    store,
    macro,
    Path,
    Point,
    points,
    paths,
    complete,
    paperless,
    sa,
    options,
    measurements,
  } = part.shorthand()

  // Clear paths from Brian
  for (const i in paths) {
    if (['backArmhole', 'backCollar'].indexOf(i) === -1) delete paths[i]
  }

  // Shape side seam
  points.hips.x = (measurements.hips * (1 + options.hipsEase)) / 4
  points.hem.x = points.hips.x
  points.hemCp2 = new Point(points.hips.x, points.cbWaist.y)

  // add some points for Yuri
  points.cbBottom = new Point(0, points.cbHem.y * 1.27)
  points.bottom = new Point(points.hem.x * 1.23, points.cbBottom.y * 0.97)
  points.bottomCp2 = new Point(points.bottom.x, points.cbWaist.y)
  // end Yuri points

  // Store length of the neck seam
  store.set(
    'backNeckSeamLength',
    new Path().move(points.neck).curve_(points.neckCp2, points.cbNeck).length()
  )
  store.set('neckCutoutBack', points.cbNeck.y)

  // Paths
  paths.gussetBase = new Path()
    .move(points.bottom)
    .line(points.armhole)
    .attr('class', 'note stroke-xxl')
  store.set('gussetLength', paths.gussetBase.length())
  paths.saBase = new Path()
    .move(points.armhole)
    .curve(points.armholeCp2, points.armholeHollowCp1, points.armholeHollow)
    .curve(points.armholeHollowCp2, points.armholePitchCp1, points.armholePitch)
    .join(paths.backArmhole)
    .line(points.s3CollarSplit)
    .join(paths.backCollar)
    .attr('class', 'note stroke-xxl')
  paths.hemBase = new Path()
    .move(points.cbBottom)
    .line(points.bottom)
    .attr('class', 'note stroke-xxl')
  paths.gussetBase.render = false
  paths.saBase.render = false
  paths.hemBase.render = false

  paths.seam = paths.gussetBase
    .join(paths.saBase)
    .clone()
    .line(points.cbBottom)
    .join(paths.hemBase)
    .close()
    .attr('class', 'fabric')

  // Complete?
  if (complete) {
    macro('cutonfold', {
      from: points.cbNeck,
      to: points.cbBottom,
      grainline: true,
    })
    macro('scalebox', { at: new Point(points.armholePitch.x / 2, points.cbWaist.y) })
    if (sa) {
      paths.sa = paths.hemBase.offset(3 * sa).join(paths.saBase.offset(sa))
      paths.sa
        .move(paths.sa.end())
        .line(points.cbNeck)
        .move(paths.sa.start())
        .line(points.cbBottom)
        .attr('class', 'fabric sa')
    }
  }

  // Paperless?
  if (paperless) sharedDimensions(part, 'back')

  return part
}
