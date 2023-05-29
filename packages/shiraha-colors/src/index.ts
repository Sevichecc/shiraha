import { applyShirahaColors } from './utils'

let mutationObserverTitle: string

const mutationObserver = new MutationObserver(async ([{ target }]) => {
  if (
    !(target.nodeName.toLowerCase() === 'title'
      && mutationObserverTitle !== target.textContent)
  ) return
  mutationObserverTitle = target.textContent as string
  await applyShirahaColors(
    document.querySelector('img.u-featured, img.u-photo')
    ?? document.querySelector('img[itemprop="image"]')
    ?? document.querySelector('img'),
    window.shiraha?.colors,
  )
})

mutationObserver.observe(document.querySelector('title') as Node, {
  attributes: true,
  childList: true,
  subtree: true,
});

// eslint-disable-next-line unicorn/prefer-top-level-await
(async () =>
  await applyShirahaColors(
    document.querySelector(':not(.h-card) img:is(.u-featured, .u-photo)')
    ?? document.querySelector(':not(.h-card) img[itemprop="image"]')
    ?? document.querySelector(':not(.h-card) img'),
    window.shiraha?.colors,
  ))()
