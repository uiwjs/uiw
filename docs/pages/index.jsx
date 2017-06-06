export default {
  documents: {
    'quick-start':  require('./quick-start'),
  },
  components: {
    'Basic': {
      'buttons':    require('./buttons'),
      'layout':     require('./layout'),
      'icon':       require('./icon'),
    },
    'Form': {
      'checkboxs':  require('./checkboxs'),
      'switch':     require('./switch'),
      'form':       require('./form'),
      'input':       require('./input'),
    },
    'Data Display': {
      'calendar':   require('./calendar'),
      'tables':     require('./tables'),
      'tooltips':   require('./tooltips'),
    },
    'Navigation': {
      'paging':     require('./paging'),
      'tags':       require('./tags'),
    },
    'Feedback':{
      'alerts':     require('./alerts'),
      'modals':     require('./modals'),
      'messages':   require('./messages'),
      'loading':    require('./loading'),
      'transition': require('./transition'),
    }
  }
}
