import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'

import JSLogo from './../../images/js-logo.svg'
import ReactLogo from './../../images/react-logo.svg'
import ReactNativeLogo from './../../images/react-native-logo.svg'
import ReduxLogo from './../../images/redux-logo.svg'
import MaterialUILogo from './../../images/material-ui-logo-white.svg'
import ChartJSLogo from './../../images/chartjs-logo.svg'
import NodeJSLogo from './../../images/nodejs-logo-white.svg'
import MongoDBLogo from './../../images/mongodb-icon-white.svg'
import MSSQLLogo from './../../images/ms-sql-logo-white.svg'

export const frontEndObjects = () => {
  const datasets = [
    {
      label: 'Javascript (ES6+)',
      backgroundColor: '#F7DF1E',
      hoverBackgroundColor: '#F3E272',
      logo: JSLogo,
      data: [9, undefined, undefined, undefined, undefined, undefined]
    },
    {
      label: 'React.js',
      backgroundColor: '#61DAFB',
      hoverBackgroundColor: '#80E2FB',
      logo: ReactLogo,
      data: [undefined, 9, undefined, undefined, undefined, undefined]
    },
    {
      label: 'React Native',
      backgroundColor: '#FFFF',
      hoverBackgroundColor: '#EEE',
      logo: ReactNativeLogo,
      data: [undefined, undefined, 6, undefined, undefined, undefined]
    },
    {
      label: 'Redux.js',
      backgroundColor: '#764ABC',
      hoverBackgroundColor: '#916EC9',
      logo: ReduxLogo,
      data: [undefined, undefined, undefined, 8, undefined, undefined]
    },
    {
      label: 'Material-UI',
      backgroundColor: blue[600],
      hoverBackgroundColor: blue[500],
      logo: MaterialUILogo,
      data: [undefined, undefined, undefined, undefined, 8, undefined]
    },
    {
      label: 'Chart.js',
      backgroundColor: red[400],
      hoverBackgroundColor: red[300],
      logo: ChartJSLogo,
      data: [undefined, undefined, undefined, undefined, undefined, 7]
    },
  ]
  return {
    type: 'frontend',
    flexDirection: 'row',
    data: {
      labels: datasets.map(t => t.label),
      datasets
    }
  }
}

export const backEndObjects = () => {
  const datasets = [
    {
      label: 'Node.js',
      backgroundColor: '#3E863D',
      hoverBackgroundColor: '#649e63',
      logo: NodeJSLogo,
      data: [9, undefined, undefined, undefined, undefined]
    },
    {
      label: 'MongoDB',
      backgroundColor: '#6cac48',
      hoverBackgroundColor: '#89bc6c',
      logo: MongoDBLogo,
      data: [undefined, 8, undefined, undefined, undefined,]
    },
    {
      label: 'MS SQL',
      backgroundColor: red[800],
      hoverBackgroundColor: '#d15353',
      logo: MSSQLLogo,
      data: [undefined, undefined, 9, undefined, undefined, ]
    },
  ]
  return {
    type: 'backend',
    flexDirection: 'row-reverse',
    data: {
      labels: datasets.map(t => t.label),
      datasets
    }
  }
}