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

  // If style is composed
  if (Array.isArray(prop)) {
    return css(prop.map(fn => fn(val)))
  }

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
export const flexWrap = (arg = 'wrap') => responsiveStyle('flexWrap', arg)
export const flexDirection = arg => responsiveStyle('flexDirection', arg)
export const alignItems = arg => responsiveStyle('alignItems', arg)
export const justifyContent = arg => responsiveStyle('justifyContent', arg)

export const justifyBetween = css(justifyContent('space-between'))
export const flexCol = flexDirection('column')

/* Flex Utility */
export const centerX = css(flex, { justifyContent: 'center' })
export const centerY = css(flex, alignItems('center'))

/* MARGIN */
export const ml = arg => responsiveStyle('marginLeft', arg)
export const mr = arg => responsiveStyle('marginRight', arg )
export const mt = arg => responsiveStyle('marginTop', arg)
export const mb = arg => responsiveStyle('marginBottom', arg)
export const mx = arg => responsiveStyle([ml, mr], arg)
export const my = arg => responsiveStyle([mb, mt], arg)
export const m = arg => responsiveStyle([my,mx], arg)

/* PADDING */
export const pl = arg => responsiveStyle('paddingLeft', arg)
export const pr = arg => responsiveStyle('paddingRight', arg)
export const pt = arg => responsiveStyle('paddingTop', arg)
export const pb = arg => responsiveStyle('paddingBottom', arg)
export const px = arg => responsiveStyle([pl, pr], arg)
export const py = arg => responsiveStyle([pt, pb], arg)
export const p = arg => responsiveStyle([px, py], arg)

/* COLOR */
export const bg = arg => responsiveStyle('background', arg )
export const color = arg => responsiveStyle('color', arg )

/* Size */
export const width = arg => responsiveStyle('width', arg)
export const maxWidth = arg => responsiveStyle('maxWidth', arg)
export const w = width
export const maxW = maxWidth

/* Typography */
export const lh = arg => responsiveStyle('lineHeight', arg)
export const fs = arg => responsiveStyle('fontSize', arg)
export const fw = arg => responsiveStyle('fontWeight', arg)

/* Border */
export const round = arg => responsiveStyle('borderRadius', arg)
export const rounded = round('.25rem')
export const border = arg => responsiveStyle('border', arg)


/* LINK HELPER */
export const link = css({
  textDecoration: 'none',
  color: 'inherit',
})
