export default {
  documents: {
    'quick-start': require('./quick-start'),
  },
  components: {
    'Basic': {
      'buttons': require('./buttons'),
      'layout': require('./layout'),
    },
    'Form': {
      'checkboxs': require('./checkboxs'),
      'switch': require('./switch'),
    },
    'Data Display': {
      'calendars': require('./calendars'),
      'tables': require('./tables'),
      'tooltips': require('./tooltips'),
    },
    'Navigation': {
      'paging': require('./paging'),
      'tags': require('./tags'),
    },
    'Feedback':{
      'alerts': require('./alerts'),
      'modals': require('./modals'),
      'messages': require('./messages'),
      'loading': require('./loading'),
      'transition': require('./transition'),
    }
  }
}
