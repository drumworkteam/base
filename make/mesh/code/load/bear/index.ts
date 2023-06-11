import { Link, LinkHint, code } from '~'
import type { MeshLoad } from '~'

export function load_codeCard_load_bear(load: MeshLoad): void {
  code.assumeLink(load, Link.Tree).nest.forEach((nest, index) => {
    load_codeCard_load_bear_nestedChildren(
      code.withLink(load, nest, index),
    )
  })
}

export function load_codeCard_load_bear_nestedChildren(
  load: MeshLoad,
): void {
  const type = code.getLinkHint(load)
  switch (type) {
    case LinkHint.StaticText:
      break
    default:
      code.throwError(code.generateUnhandledTermCaseError(load))
  }
}
