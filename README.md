# MONAD UI

A Utility first CSS-in-JS

Inspired by:

- Rebass
- TailwindCSS
- Smooth UI
- Material UI

Implemented in EmotionJS

# Getting Started

Install `emotion.js`

In this tutorial we're going to use emotion's css prop API

```
import * as S from 'monad-ui`
```

In component

```
<div css={S.bg('blue)}>
    Monad UI
</div>
```

With more styles

```
<div css={[
    S.bg('blue'),
    S.color('red),
]}>
Monad UI
</div>
```

It will styles the `div`'s `background` to `blue` and `color` to `red`

# 3 Ways to make the style Responsive

Currenlty, We have 4 breakpoints:

```
  sm: '576px'
  md: '768px'
  lg: '992px'
  xl: '1200px'
```

## 1. Array Responsive API

```
  <div css={
    S.bg(['red', 'green', 'blue'])}
  >Monad UI</div>
```

It will make the `div`'s `background` to `red`.

When the screen size is above `576px`. It will be `green`

When the screen size is above `768px`. It will be `blue`

And so on.

## 2.Object Responsive API

```
<div css={
    S.bg({
        sm: 'red',
        lg: 'blue',
    })}
>
    Monad UI
</div>

```

This is just another form of responsive API.

On screen size `sm` it will be `red`.

On screen size `lg` it will be `blue`.

Notice that I didn't specify `md`. When it's not specified. It will take the previous value. Which is `red` in this case

## 3. High Order Responsive API

```
<div css={
    S.up('sm')(hidden)
}>
    Monad UI
</div>
```

This will hide the `div` when screen size is below `576px`

```
<div css={
    S.up('sm')(hidden)
}>
    Monad UI
</div>
```

This will hide the `div` when screen size is above `576px`

```
<div css={
    S.up('sm')(S.bg('blue'))
}>
    Monad UI
</div>
```

This will turn `div`'s `background` into `blue` when screen size is above `576px`

# Available API

| Type    | Array Responsive API | Object Responsive API | High Order Responsive API |
| ------- | -------------------- | --------------------- | ------------------------- |
| Dynamic | ✅                   | ✅                    | ✅                        |
| Static  | ❌                   | ❌                    | ✅                        |

## Dynamic => It accept `arg`

For example, `bg('blue')

That means this can be used with

`Array Responsive API`:

```javascript
bg(['red', 'green', 'blue']);
```

`Object Responsive API`:

```javascript
bg({
  sm: 'red',
  lg: 'blue'
});
```

and `High Order Responsive API`

```javascript
up('md')(bg('blue'));
```

## Static => It doesn't accept `arg`

So it can only be used with `High Order Responsive API`

```javascript
down('md')(hidden);
```

## Media Queries

| Prop |
| ---- |
| up   |
| down |

## Display

| Prop       | type   |
| ---------- | ------ |
| hidden     | static |
| block      | static |
| inline     | static |
| flex       | static |
| inlineFlex | static |

## Flex

| Prop           | type    |
| -------------- | ------- |
| flexWrap       | dynamic |
| flexDirection  | dynamic |
| alignItems     | dynamic |
| justifyContent | dynamic |
| justifyBetween | static  |
| flexCol        | static  |

## Flex Utility

| Prop    | Type   |
| ------- | ------ |
| centerX | static |
| centerY | static |
| center  | static |

- CenterX => Center Horizontally, it's just an alias for `[S.flex, S.justifyContent('center')]`
- CenterY => Center Veritcally, it's just an alias for `[S.flex, S.alignItems('center')]`
- Center => An alias for `CenterX + CenterY`

## Margin

| Prop | Type    |
| ---- | ------- |
| ml   | dynamic |
| mr   | dynamic |
| mt   | dynamic |
| mb   | dynamic |
| mx   | dynamic |
| my   | dynamic |
| m    | dynamic |

## Padding

| Prop | Type    |
| ---- | ------- |
| pl   | dynamic |
| pr   | dynamic |
| pt   | dynamic |
| pb   | dynamic |
| px   | dynamic |
| py   | dynamic |
| p    | dynamic |

## Color

| Prop  | Type    |
| ----- | ------- |
| bg    | dynamic |
| color | dynamic |

## Size

| Prop | Type    |
| ---- | ------- |
| w    | dynamic |
| maxW | dynamic |

- w is an alias for `width`
- maxW is an alias for`maxWidth`

## Typography

| Prop | Type    |
| ---- | ------- |
| lh   | dynamic |
| fs   | dynamic |
| fw   | dynamic |

## Border

| Prop    | Type    |
| ------- | ------- |
| round   | dynamic |
| rounded | static  |
| border  | dynamic |

## Helper

| Prop | Type   |
| ---- | ------ |
| link | static |

- link is an alias for

```
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer'
```

# Misc

## Do I always have to `import * as S from 'monad-ui'`

If you only use a few style

You can also import it this way

```
import {bg, hidden} from 'monad-ui'
```

And use it like this

```
<div css={bg('blue')}></div>
```

## Too many styles ?

Consider extracting your style outside

```
import {css} from `@emotion/core`
import {bg, color} from 'monad-ui'

const style = css([
    bg('blue'),
    color('red')
])

// ... in component

<div class={style}></div>
```
