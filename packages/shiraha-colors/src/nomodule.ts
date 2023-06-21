import { scGetImageElement } from './lib/image'
import './lib/observer'
import { applyShirahaColors } from './lib/theme'

// eslint-disable-next-line unicorn/prefer-top-level-await
(async () =>
  await applyShirahaColors(
    scGetImageElement(),
    window.shiraha?.colors,
  ))()
