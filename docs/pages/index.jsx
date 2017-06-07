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
      'table':     require('./table'),
      'tooltips':   require('./tooltips'),
      'tag':        require('./tag'),
    },
    'Navigation': {
      'paging':     require('./paging')
    },
    'Feedback':{
      'alerts':     require('./alerts'),
      'modals':     require('./modals'),
      'message':   require('./message'),
      'loading':    require('./loading'),
      'transition': require('./transition'),
    }
  }
}
