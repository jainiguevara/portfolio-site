import 'typeface-roboto'

import grey from '@material-ui/core/colors/grey'
import green from '@material-ui/core/colors/green'

// const pantoneCoolGray7 = '#98989A'
// const pantoneME = '#F4B333'
// const pantoneLightGreen = '#B9F6CA'
// const pantone1805 = '#AF272F' //main maroon

const dark = {
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'dark',
    primary: {
      main: grey[800],
    },
    secondary: {
      main: green[400],
    },
    // inherit: {
    //   main: grey[100],
    // },
    // error: {
    //   main: red[300],
    // },
    // // You can add variables for use in the application.
    // tones: {
    //   cool: pantoneCoolGray7,
    //   light: blueGrey[200],
    //   main: blueGrey[400],
    //   dark: blueGrey[600],
    //   lightGrey: grey[50],
    //   amber: pantoneME, // based on Bio Fire brand guide
    //   low: pantoneLightGreen,
    //   maroon: pantone1805,
    // },
    // text: {
    //   main: grey[100],
    //   dark: grey[800],
    // },
    // status: {
    //   danger: orange[500],
    // },
  },
}

export default dark
