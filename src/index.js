import { css } from '@emotion/core'
import { prop, compose } from 'ramda'
import facepaint from 'facepaint'

export const name = 'monad-ui'

/* MEDIA QUERIES */
const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}
export const selectMqUp = size =>
  compose(
    bp => `@media (min-width: ${bp})`,
    prop(size)
  )(breakpoints)

export const selectMqDown = size =>
  compose(
    bp => `@media (max-width: ${bp})`,
    prop(size)
  )(breakpoints)

export const up = size => style => ({ [selectMqUp(size)]: style })
export const down = size => style => ({ [selectMqDown(size)]: style })

// Use up by default for media queries
export const mq = up

const facepaintMq = facepaint(
  Object.keys(breakpoints).map(selectMqUp)
) 

const responsiveStyle = (prop, val) => {
  if (Array.isArray(val)) {
    return css(facepaintMq({
      [prop]: val
    }))
  }
  
  if (typeof val === "object") {
    return css(facepaintMq({
      [prop]: Object.keys(breakpoints).map(size => {
        const valueForThisQuery = val[size]
        if (!valueForThisQuery) {
          return undefined
        }
        return val[size]
      })
    }))
  }

  // If It's a not Array and not Object
  return css({
    [prop]: val
  })
}


/* DISPLAY */
export const hidden = css({ display: 'none' })
export const block = css({ display: 'block' })
export const inline = css({ display: 'inline' })
export const flex = css({ display: 'flex' })
export const inlineFlex = css({ display: 'inline-flex' })

/* FLEX */
export const flexWrap = (arg = 'wrap') => css({ flexWrap: arg })
export const flexDirection = arg => css({ flexDirection: arg })
export const alignItems = arg => css({ alignItems: arg })
export const justifyContent = arg => css({ justifyContent: arg })

export const justifyBetween = css(justifyContent('space-between'))
export const flexCol = flexDirection('column')

/* Flex Utility */
export const centerX = css(flex, { justifyContent: 'center' })
export const centerY = css(flex, alignItems('center'))

/* MARGIN */
export const ml = arg => css({ marginLeft: arg })
export const mr = arg => css({ marginRight: arg })
export const mt = arg => css({ marginTop: arg })
export const mb = arg => css({ marginBottom: arg })
export const mx = arg => css(ml(arg), mr(arg))
export const my = arg => css(mt(arg), mb(arg))
export const m = arg => css(my(arg), mx(arg))

/* PADDING */
export const pl = arg => css({ paddingLeft: arg })
export const pr = arg => css({ paddingRight: arg })
export const pt = arg => css({ paddingTop: arg })
export const pb = arg => css({ paddingBottom: arg })
export const px = arg => css(pl(arg), pr(arg))
export const py = arg => css(pt(arg), pb(arg))
export const p = arg => css(py(arg), px(arg))

/* COLOR */
export const bg = arg => responsiveStyle('background', arg )
export const color = arg => css({ color: arg })

/* LENGTH */
export const width = arg => responsiveStyle('width', arg)
export const maxWidth = arg => css({ maxWidth: arg })
export const w = width
export const maxW = maxWidth

/* Typography */
export const lh = arg => css({ lineHeight: arg })
export const fs = arg => css({ fontSize: arg })
export const fw = arg => css({ fontWeight: arg })

/* Border */
export const round = arg => css({ borderRadius: arg })
export const rounded = round('.25rem')
export const border = arg => css({ border: arg })


/* LINK HELPER */
export const link = css({
  textDecoration: 'none',
  color: 'inherit',
})
