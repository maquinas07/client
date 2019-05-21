export type Color = null | string
type Dimension = string | number

export type _StylesCrossPlatform = {
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  backfaceVisibility?: 'visible' | 'hidden'
  backgroundColor?: Color
  borderBottomColor?: Color
  borderBottomLeftRadius?: number
  borderBottomRightRadius?: number
  borderBottomWidth?: number
  borderColor?: Color
  borderLeftColor?: Color
  borderLeftWidth?: number
  borderRadius?: number
  borderRightColor?: Color
  borderRightWidth?: number
  borderStyle?: 'solid' | 'dotted' | 'dashed'
  borderTopColor?: string
  borderTopLeftRadius?: number
  borderTopRightRadius?: number
  borderTopWidth?: number
  borderWidth?: number
  bottom?: Dimension
  color?: Color
  direction?: 'inherit' | 'ltr' | 'rtl'
  display?: 'none' | 'flex'
  flex?: number
  flexBasis?: number | string
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  flexGrow?: number
  flexShrink?: number
  flexWrap?: 'wrap' | 'nowrap'
  fontFamily?: string
  fontSize?: number
  fontStyle?: 'normal' | 'italic'
  fontVariant?: ReadonlyArray<
    'small-caps' | 'oldstyle-nums' | 'lining-nums' | 'tabular-nums' | 'proportional-nums'
  >
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  height?: Dimension
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  left?: Dimension
  letterSpacing?: number
  lineHeight?: number
  margin?: Dimension
  marginBottom?: Dimension
  marginLeft?: Dimension
  marginRight?: Dimension
  marginTop?: Dimension
  maxHeight?: Dimension
  maxWidth?: Dimension
  minHeight?: Dimension
  minWidth?: Dimension
  opacity?: number
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto'
  overflowX?: string
  overflowY?: string
  padding?: Dimension
  paddingBottom?: Dimension
  paddingLeft?: Dimension
  paddingRight?: Dimension
  paddingTop?: Dimension
  position?: 'absolute' | 'relative'
  right?: Dimension
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify'
  textDecorationColor?: Color
  textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through'
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed'
  top?: Dimension
  transform?: ReadonlyArray<
    | {perspective: number}
    | {rotate: string}
    | {rotateX: string}
    | {rotateY: string}
    | {rotateZ: string}
    | {scale: number}
    | {scaleX: number}
    | {scaleY: number}
    | {translateX: number}
    | {translateY: number}
    | {translate: [number, number]}
    | {skewX: string}
    | {skewY: string}
    | {matrix: ReadonlyArray<number>}
  >
  width?: Dimension
  zIndex?: number
}

export type StylesCrossPlatform =
  | null
  | _StylesCrossPlatform
  | ReadonlyArray<_StylesCrossPlatform | null | false | void>

export type StylesCrossPlatformWithSomeDisallowed<D> =
  | null
  | _StylesCrossPlatform & D
  | ReadonlyArray<_StylesCrossPlatform & D | null | false | void>

export type _StylesDesktop = {
  alignContent?: string
  alignItems?: string
  alignSelf?: string
  all?: string
  animation?: string
  animationDelay?: string
  animationDirection?: string
  animationDuration?: string
  animationFillMode?: string
  animationIterationCount?: string
  animationName?: string
  animationPlayState?: string
  animationTimingFunction?: string
  backdropFilter?: string
  backfaceVisibility?: string
  background?: string
  backgroundAttachment?: string
  backgroundBlendMode?: string
  backgroundClip?: string
  backgroundColor?: string
  backgroundImage?: string
  backgroundOrigin?: string
  backgroundPosition?: string
  backgroundRepeat?: string
  backgroundSize?: string
  blockSize?: string
  border?: string
  borderBlockEnd?: string
  borderBlockEndColor?: string
  borderBlockEndStyle?: string
  borderBlockEndWidth?: string
  borderBlockStart?: string
  borderBlockStartColor?: string
  borderBlockStartStyle?: string
  borderBlockStartWidth?: string
  borderBottom?: string
  borderBottomColor?: string
  borderBottomLeftRadius?: number
  borderBottomRightRadius?: number
  borderBottomStyle?: string
  borderBottomWidth?: string
  borderCollapse?: string
  borderColor?: string
  borderImage?: string
  borderImageOutset?: string
  borderImageRepeat?: string
  borderImageSlice?: string
  borderImageSource?: string
  borderImageWidth?: string
  borderInlineEnd?: string
  borderInlineEndColor?: string
  borderInlineEndStyle?: string
  borderInlineEndWidth?: string
  borderInlineStart?: string
  borderInlineStartColor?: string
  borderInlineStartStyle?: string
  borderInlineStartWidth?: string
  borderLeft?: string
  borderLeftColor?: string
  borderLeftStyle?: string
  borderLeftWidth?: string
  borderRadius?: Dimension
  borderRight?: string
  borderRightColor?: string
  borderRightStyle?: string
  borderRightWidth?: string
  borderSpacing?: string
  borderStyle?: string
  borderTop?: string
  borderTopColor?: string
  borderTopLeftRadius?: number
  borderTopRightRadius?: number
  borderTopStyle?: string
  borderTopWidth?: Dimension
  borderWidth?: Dimension
  bottom?: Dimension
  boxDecorationBreak?: string
  boxShadow?: string
  boxSizing?: string
  breakAfter?: string
  breakBefore?: string
  breakInside?: string
  captionSide?: string
  clear?: string
  clip?: string
  clipPath?: string
  color?: string
  columnCount?: string
  columnFill?: string
  columnGap?: string
  columnRule?: string
  columnRuleColor?: string
  columnRuleStyle?: string
  columnRuleWidth?: string
  columnSpan?: string
  columnWidth?: string
  columns?: string
  contain?: string
  content?: string
  counterIncrement?: string
  counterReset?: string
  cursor?: string
  direction?: string
  display?: string
  emptyCells?: string
  filter?: string
  flex?: Dimension
  flexBasis?: string
  flexDirection?: string
  flexFlow?: string
  flexGrow?: string | number
  flexShrink?: string | number
  flexWrap?: string
  float?: string
  font?: string
  fontFamily?: string
  fontFeatureSettings?: string
  fontKerning?: string
  fontLanguageOverride?: string
  fontSize?: number
  fontSizeAdjust?: string
  fontStretch?: string
  fontStyle?: string
  fontSynthesis?: string
  fontVariant?: string
  fontVariantAlternates?: string
  fontVariantCaps?: string
  fontVariantEastAsian?: string
  fontVariantLigatures?: string
  fontVariantNumeric?: string
  fontVariantPosition?: string
  fontWeight?: string
  grad?: string
  grid?: string
  gridArea?: string
  gridAutoColumns?: string
  gridAutoFlow?: string
  gridAutoPosition?: string
  gridAutoRows?: string
  gridColumn?: string
  gridColumnEnd?: string
  gridColumnStart?: string
  gridRow?: string
  gridRowEnd?: string
  gridRowStart?: string
  gridTemplate?: string
  gridTemplateAreas?: string
  gridTemplateColumns?: string
  gridTemplateRows?: string
  height?: Dimension
  hyphens?: string
  imageOrientation?: string
  imageRendering?: string
  imageResolution?: string
  imeMode?: string
  inherit?: string
  initial?: string
  inlineSize?: string
  isolation?: string
  justifyContent?: string
  left?: Dimension
  letterSpacing?: string
  lineBreak?: string
  lineHeight?: Dimension
  listStyle?: string
  listStyleImage?: string
  listStylePosition?: string
  listStyleType?: string
  margin?: Dimension
  marginBlockEnd?: string
  marginBlockStart?: string
  marginBottom?: Dimension
  marginInlineEnd?: string
  marginInlineStart?: string
  marginLeft?: Dimension
  marginRight?: Dimension
  marginTop?: Dimension
  marks?: string
  mask?: string
  maskType?: string
  maxBlockSize?: string
  maxHeight?: Dimension
  maxInlineSize?: string
  maxWidth?: Dimension
  minBlockSize?: string
  minHeight?: Dimension
  minInlineSize?: string
  minWidth?: Dimension
  mixBlendMode?: string
  mozTransform?: string
  mozTransformOrigin?: string
  mozTransitionDelay?: string
  mozTransitionDuration?: string
  mozTransitionProperty?: string
  mozTransitionTimingFunction?: string
  objectFit?: string
  objectPosition?: string
  offsetBlockEnd?: string
  offsetBlockStart?: string
  offsetInlineEnd?: string
  offsetInlineStart?: string
  opacity?: string
  order?: string
  orphans?: string
  outline?: string
  outlineColor?: string
  outlineOffset?: string
  outlineStyle?: string
  outlineWidth?: string
  overflow?: string
  overflowWrap?: string
  overflowX?: string
  overflowY?: string
  padding?: Dimension
  paddingBlockEnd?: string
  paddingBlockStart?: string
  paddingBottom?: Dimension
  paddingInlineEnd?: string
  paddingInlineStart?: string
  paddingLeft?: Dimension
  paddingRight?: Dimension
  paddingTop?: Dimension
  pageBreakAfter?: string
  pageBreakBefore?: string
  pageBreakInside?: string
  perspective?: string
  perspectiveOrigin?: string
  pointerEvents?: string
  position?: string
  quotes?: string
  rad?: string
  resize?: string
  right?: Dimension
  rubyAlign?: string
  rubyMerge?: string
  rubyPosition?: string
  scrollBehavior?: string
  scrollSnapCoordinate?: string
  scrollSnapDestination?: string
  scrollSnapPointsX?: string
  scrollSnapPointsY?: string
  scrollSnapType?: string
  shapeImageThreshold?: string
  shapeMargin?: string
  shapeOutside?: string
  speak?: 'none'
  tabSize?: string
  tableLayout?: string
  textAlign?: string
  textAlignLast?: string
  textCombineUpright?: string
  textDecoration?: string
  textDecorationColor?: string
  textDecorationLine?: string
  textDecorationStyle?: string
  textIndent?: string
  textOrientation?: string
  textOverflow?: string
  textRendering?: string
  textShadow?: string
  textTransform?: string
  textUnderlinePosition?: string
  top?: Dimension
  touchAction?: string
  transform?: string
  transformOrigin?: string
  transformStyle?: string
  transition?: string
  transitionDelay?: string
  transitionDuration?: string
  transitionProperty?: string
  transitionTimingFunction?: string
  turn?: string
  unicodeBidi?: string
  unicodeRange?: string
  userSelect?: string
  verticalAlign?: string
  visibility?: string
  WebkitBackdropFilter?: string
  WebkitFontSmoothing?: string
  WebkitOverflowScrolling?: string
  WebkitTransform?: string
  WebkitTransformOrigin?: string
  WebkitTransitionDelay?: string
  WebkitTransitionDuration?: string
  WebkitTransitionProperty?: string
  WebkitTransitionTimingFunction?: string
  whiteSpace?: string
  widows?: string
  width?: Dimension
  willChange?: string
  wordBreak?: string
  wordSpacing?: string
  wordWrap?: string
  writingMode?: string
  zIndex?: number
}

export type StylesDesktop = null | _StylesDesktop | ReadonlyArray<_StylesDesktop | null | false | void>

// Mostly lifted from StyleSheetTypes
export type _StylesMobile = {
  display?: 'none' | 'flex'
  width?: Dimension
  height?: Dimension
  top?: Dimension
  bottom?: Dimension
  left?: Dimension
  right?: Dimension
  minWidth?: Dimension
  maxWidth?: Dimension
  minHeight?: Dimension
  maxHeight?: Dimension
  margin?: Dimension
  marginVertical?: Dimension
  marginHorizontal?: Dimension
  marginTop?: Dimension
  marginBottom?: Dimension
  marginLeft?: Dimension
  marginRight?: Dimension
  padding?: Dimension
  paddingVertical?: Dimension
  paddingHorizontal?: Dimension
  paddingTop?: Dimension
  paddingBottom?: Dimension
  paddingLeft?: Dimension
  paddingRight?: Dimension
  position?: 'absolute' | 'relative'
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  flexWrap?: 'wrap' | 'nowrap'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around'
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto'
  flex?: number
  flexGrow?: number
  flexShrink?: number
  flexBasis?: number | string
  aspectRatio?: number
  zIndex?: number
  direction?: 'inherit' | 'ltr' | 'rtl'
  transform?: ReadonlyArray<
    | {perspective: number}
    | {rotate: string}
    | {rotateX: string}
    | {rotateY: string}
    | {rotateZ: string}
    | {scale: number}
    | {scaleX: number}
    | {scaleY: number}
    | {translateX: number}
    | {translateY: number}
    | {translate: [number, number]}
    | {skewX: string}
    | {skewY: string}
    | {matrix: ReadonlyArray<number>}
  >
  shadowColor?: Color
  shadowOffset?: {
    width?: number
    height?: number
  }
  shadowOpacity?: number
  shadowRadius?: number
  backfaceVisibility?: 'visible' | 'hidden'
  backgroundColor?: Color
  borderColor?: Color
  borderTopColor?: Color
  borderRightColor?: Color
  borderBottomColor?: Color
  borderLeftColor?: Color
  borderRadius?: number
  borderTopLeftRadius?: number
  borderTopRightRadius?: number
  borderBottomLeftRadius?: number
  borderBottomRightRadius?: number
  borderStyle?: 'solid' | 'dotted' | 'dashed'
  borderWidth?: number
  borderTopWidth?: number
  borderRightWidth?: number
  borderBottomWidth?: number
  borderLeftWidth?: number
  opacity?: number
  elevation?: number
  color?: Color
  fontFamily?: string
  fontSize?: number
  fontStyle?: 'normal' | 'italic'
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  fontVariant?: ReadonlyArray<
    'small-caps' | 'oldstyle-nums' | 'lining-nums' | 'tabular-nums' | 'proportional-nums'
  >
  textShadowOffset?: {
    width: number
    height: number
  }
  textShadowRadius?: number
  textShadowColor?: Color
  letterSpacing?: number
  lineHeight?: number
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify'
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center'
  includeFontPadding?: boolean
  textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through'
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed'
  textDecorationColor?: Color
  writingDirection?: 'auto' | 'ltr' | 'rtl'
  tintColor?: Color
  overlayColor?: string
}

export type StylesMobile = null | _StylesMobile | ReadonlyArray<_StylesMobile | null | false | void>