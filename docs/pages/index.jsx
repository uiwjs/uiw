export default {
  documents: {
    'quick-start': require('./quick-start'),
    'theme': require('./theme'),
  },
  components: {
    'Basic': {
      'layout': require('./layout'),
      'icon': require('./icon'),
      'button': require('./button'),
      'hotkeys': require('./hotkeys'),
    },
    'Form': {
      'form': require('./form'),
      'radio': require('./radio'),
      'checkbox': require('./checkbox'),
      'select': require('./select'),
      'switch': require('./switch'),
      'slider': require('./slider'),
      'input': require('./input'),
      'input-number': require('./input-number'),
      'time-picker': require('./time-picker'),
      'date-picker': require('./date-picker'),
    },
    'Data Display': {
      'calendar': require('./calendar'),
      'table': require('./table'),
      'tooltip': require('./tooltip'),
      'tag': require('./tag'),
      'rate': require('./rate'),
      'badge': require('./badge'),
    },
    'Navigation': {
      'menu': require('./menu'),
      'paging': require('./paging'),
      'breadcrumb': require('./breadcrumb')
    },
    'Feedback': {
      'alert': require('./alert'),
      'modal': require('./modal'),
      'message': require('./message'),
      'notification': require('./notification'),
      'loading': require('./loading'),
      'transition': require('./transition'),
    }
  }
}
