export default {
  documents: {
    'quick-start':  require('./quick-start'),
    'theme':  require('./theme'),
  },
  components: {
    'Basic': {
      'layout':     require('./layout'),
      'icon':       require('./icon'),
      'buttons':    require('./buttons'),
    },
    'Form': {
      'form':        require('./form'),
      'checkbox':    require('./checkbox'),
      'switch':      require('./switch'),
      'input':       require('./input'),
      'input-number':require('./input-number'),
      'radio':       require('./radio'),
    },
    'Data Display': {
      'calendar':   require('./calendar'),
      'table':      require('./table'),
      'tooltip':    require('./tooltip'),
      'tag':        require('./tag'),
    },
    'Navigation': {
      'menu':     require('./menu'),
      'paging':     require('./paging'),
      'breadcrumb':     require('./breadcrumb')
    },
    'Feedback':{
      'alert':      require('./alert'),
      'modals':     require('./modals'),
      'message':    require('./message'),
      'loading':    require('./loading'),
      'transition': require('./transition'),
    }
  }
}
