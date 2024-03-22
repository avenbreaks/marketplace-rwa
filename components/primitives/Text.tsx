import { styled } from 'stitches.config'

export default styled('span', {
  color: '$gray12',
  fontFamily: '$body',
  letterSpacing: 0,

  variants: {
    style: {
      h2: {
        fontWeight: 800,
        fontSize: 48,
      },
      h3: {
        fontWeight: 800,
        fontSize: 32,
      },
      h4: {
        fontWeight: 800,
        fontSize: 24,
      },
      h5: {
        fontWeight: 700,
        fontSize: 20,
      },
      h6: {
        fontWeight: 700,
        fontSize: 16,
      },
      h7: {
        fontWeight: 700,
        fontSize: 18,
      },
      subtitle1: {
        fontWeight: 700,
        fontSize: 16,
      },
      subtitle2: {
        fontWeight: 500,
        fontSize: 14,
      },
      subtitle3: {
        fontWeight: 500,
        fontSize: 12,
      },
      body1: {
        fontWeight: 400,
        fontSize: 16,
      },
      body2: {
        fontWeight: 400,
        fontSize: 14,
      },
      body3: {
        fontWeight: 400,
        fontSize: 12,
      },
    },
    color: {
      subtle: {
        color: '$gray11',
      },
      error: {
        color: '$red11',
      },
      light: {
        color: '$gray3'
      },
      lighter: {
        color: '$gray7'
      },
      dark: {
        color: '$gray11'
      },
      darker: {
        color: '$gray9'
      }
    },
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
    ellipsify: {
      true: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
    },
  },

  defaultVariants: {
    style: 'body1',
  },
})
