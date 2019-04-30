import 'typeface-roboto'

import blueGrey from '@material-ui/core/colors/blueGrey'
import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red'
import orange from '@material-ui/core/colors/orange'

const pantoneCoolGray7 = '#98989A'
const pantoneME = '#F4B333'
const pantoneLightGreen = '#B9F6CA'
const pantone1805 = '#AF272F' //main maroon

const light = {
  type: 'light',
  typography: {
    useNextVariants: true,
    // fontFamily: 'Century Gothic',
    fontFamily: 'Helvetica Neue, Roboto, Helvetica, Arial, Sans',
    fontWeight: 400,
    h3: {
      fontFamily: 'Century Gothic, Roboto, Helvetica Neue, Arial',
      fontWeight: 600,
      color: 'rgba(0,0,0,0.58)',
      fontSize: '1.7rem',
    },
    h4: {
      fontFamily: 'Century Gothic, Roboto, Helvetica Neue, Arial',
      fontWeight: 600,
      color: 'rgba(0,0,0,0.58)',
      fontSize: '1.3rem',
    },
    headline: {
      fontFamily: 'Century Gothic, Roboto, Helvetica Neue, Arial',
    },
    subtitle2: {
      fontFamily: 'Helvetica Neue, Roboto, Helvetica, Arial, Sans',
      fontWeight: 600,
      fontSize: '1.2rem',
    },
  },
  palette: {
    body: {
      background: grey[50],
    },
    primary: {
      main: grey[100],
    },
    secondary: {
      main: red[800],
    },
    error: {
      main: red[300],
    },
    // You can add variables for use in the application.
    tones: {
      cool: pantoneCoolGray7,
      light: blueGrey[200],
      main: blueGrey[400],
      dark: blueGrey[600],
      lightGrey: grey[50],
      amber: pantoneME, // based on Bio Fire brand guide
      low: pantoneLightGreen,
      maroon: pantone1805,
    },
    text: {
      dark: grey[800],
    },
    status: {
      danger: orange[500],
    },
  },
}

export default light
