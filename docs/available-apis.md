# Available APIs

## Media queries

| Prop   |
| ------ |
| `down` |
| `up`   |

## Display

| Prop         | type   |
| ------------ | ------ |
| `block`      | static |
| `flex`       | static |
| `hidden`     | static |
| `inline`     | static |
| `inlineFlex` | static |

## Flex

| Prop             | type    |
| ---------------- | ------- |
| `alignItems`     | dynamic |
| `flexCol`        | static  |
| `flexDirection`  | dynamic |
| `flexWrap`       | dynamic |
| `justifyBetween` | static  |
| `justifyContent` | dynamic |

## Flex Utility

| Prop      | Type   | Alias                                  |
| --------- | ------ | -------------------------------------- |
| `center`  | static | `[S.flex, S.justifyContent('center')]` |
| `centerX` | static | `[S.flex, S.alignItems('center')]`     |
| `centerY` | static | `CenterX + CenterY`                    |

## Margin

| Prop | Type    |
| ---- | ------- |
| `m`  | dynamic |
| `mb` | dynamic |
| `ml` | dynamic |
| `mr` | dynamic |
| `mt` | dynamic |
| `mx` | dynamic |
| `my` | dynamic |

## Padding

| Prop | Type    |
| ---- | ------- |
| `p`  | dynamic |
| `pb` | dynamic |
| `pl` | dynamic |
| `pr` | dynamic |
| `pt` | dynamic |
| `px` | dynamic |
| `py` | dynamic |

## Color

| Prop    | Type    |
| ------- | ------- |
| `bg`    | dynamic |
| `color` | dynamic |

## Size

| Prop   | Type    | Alias      |
| ------ | ------- | ---------- |
| `maxW` | dynamic | `width`    |
| `w`    | dynamic | `maxWidth` |

## Typography

| Prop | Type    |
| ---- | ------- |
| `fs` | dynamic |
| `fw` | dynamic |
| `lh` | dynamic |

## Border

| Prop      | Type    |
| --------- | ------- |
| `border`  | dynamic |
| `round`   | dynamic |
| `rounded` | static  |

## Helpers

| Prop   | Type   | Alias                                                             |
| ------ | ------ | ----------------------------------------------------------------- |
| `link` | static | `{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }` |
