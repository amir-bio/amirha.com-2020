import styled from 'styled-components'

// theme taken from rebase preset as starting point
export const theme = {
  breakpoints: ['40em', '52em', '64em'],

  colors: {
    text: '#fff',
    background: '#fff',
    primary: '#293D5A',
    secondary: '#3FDFE9',
    orange: '#F39C12',
    purple: '#9251AC',
    muted: '#f6f6f9',
    gray: '#dddddf',
    highlight: 'hsla(205, 100%, 40%, 0.125)'
  },
  fonts: {
    body: 'Roboto',
    heading: 'Roboto mono, Courier',
    monospace: 'Roboto mono, Courier'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 600
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48
  },
  radii: {
    "default": 4,
    circle: 99999
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)'
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [5, 6, 7]
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle'
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card'
    },
    link: {
      color: 'primary'
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary'
      }
    }
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default'
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px'
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }
  }
};


export const Ul = styled.ul`
  color: ${props => props.theme.colors.text};
  list-style: none;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  margin-left:30px;
  margin-top:20px;
  margin-bottom:70px;
  &:hover {
    color: #3FDFE9;
  }
  `;
// stroke: ${props => props.theme.colors.secondary};
// When the issue with having to pass in the theme manually one by one is fixed, above should be replaced with this

export const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.heading};
`;

export const H2 = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.heading};
`;

export const H3 = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.heading};

  &.project-card-heading {
    text-align: center;
    color: "red";
    font-weight: ${props => props.theme.fontWeights.bold};
    padding-top: 10px;
  }
`;

export const SecondaryLink = styled.a`
  color: ${props => props.theme.colors.secondary};
`;

export const PurpleLink = styled.a`
  color: ${props => props.theme.colors.purple};
  text-decoration: none;
  &:hover {
    font-weight: bold
  }
`;

export const HeroIcons = styled.div`
  svg {
    margin-right: 20px;
  }
  svg:hover {
    stroke: ${props => props.theme.colors.secondary};
  }
`;
