import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'

import JSLogo from './../../images/js-logo.svg'
import ReactLogo from './../../images/react-logo.svg'
import ReduxLogo from './../../images/redux-logo.svg'
import MaterialUILogo from './../../images/material-ui-logo-white.svg'
import ChartJSLogo from './../../images/chartjs-logo.svg'

export const frontEndObjects = () => {
  const datasets = [
    {
      label: 'Javascript (ES6+)',
      backgroundColor: '#F7DF1E',
      hoverBackgroundColor: '#F3E272',
      logo: JSLogo,
      data: [9.5, undefined, undefined, undefined, undefined]
    },
    {
      label: 'React.js',
      backgroundColor: '#61DAFB',
      hoverBackgroundColor: '#80E2FB',
      logo: ReactLogo,
      data: [undefined, 9, undefined, undefined, undefined,]
    },
    {
      label: 'Redux.js',
      backgroundColor: '#764ABC',
      hoverBackgroundColor: '#916EC9',
      logo: ReduxLogo,
      data: [undefined, undefined, 8, undefined, undefined, ]
    },
    {
      label: 'Material-UI',
      backgroundColor: blue[600],
      hoverBackgroundColor: blue[500],
      logo: MaterialUILogo,
      data: [undefined, undefined, undefined, 8, undefined]
    },
    {
      label: 'Chart.js',
      backgroundColor: red[400],
      hoverBackgroundColor: red[300],
      logo: ChartJSLogo,
      data: [undefined, undefined, undefined, undefined, 7]
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
      label: 'Javascript (ES6+)',
      backgroundColor: '#F7DF1E',
      hoverBackgroundColor: '#F3E272',
      logo: JSLogo,
      data: [9.5, undefined, undefined, undefined, undefined]
    },
    {
      label: 'React.js',
      backgroundColor: '#61DAFB',
      hoverBackgroundColor: '#80E2FB',
      logo: ReactLogo,
      data: [undefined, 9, undefined, undefined, undefined,]
    },
    {
      label: 'Redux.js',
      backgroundColor: '#764ABC',
      hoverBackgroundColor: '#916EC9',
      logo: ReduxLogo,
      data: [undefined, undefined, 8, undefined, undefined, ]
    },
    {
      label: 'Material-UI',
      backgroundColor: blue[600],
      hoverBackgroundColor: blue[500],
      logo: MaterialUILogo,
      data: [undefined, undefined, undefined, 8, undefined]
    },
    {
      label: 'Chart.js',
      backgroundColor: red[400],
      hoverBackgroundColor: red[300],
      logo: ChartJSLogo,
      data: [undefined, undefined, undefined, undefined, 7]
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