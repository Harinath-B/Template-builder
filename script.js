const block_list = [
  {
    id: 'title', 
    label: '<b>Title</b>', 
    content: `<h1 contentEditable>This is a simple title</h1>`,
  }, {
    id: 'text',
    label: 'Text',
    content: '<div data-gjs-type="text">Insert your text here</div>',
  }, {
    id: 'image',
    label: 'Image',
    select: true,
    content: { type: 'image' },
    
    activate: true,
  }, {
    id: 'col2',
    label: 'Columns - 2',
    content: `<table style="height:150px; width:100%">
                  <tr>
                    <td style="width:50%"></td>
                    <td style="width:50%"></td>
                  </tr>
                  </table>`,
    
  }, {
    id: 'col3',
    label: 'Columns - 3',
    content: `<table style="height:150px; width:100%">
                  <tr>
                    <td style="width:33.3%"></td>
                    <td style="width:33.3%"></td>
                    <td style="width:33.3%"></td>
                  </tr>
                  </table>`,
  }, {
    id: 'col4',
    label: 'Columns - 4',
    content: `<table style="height:150px; width:100%">
                  <tr>
                    <td style="width:25%"></td>
                    <td style="width:25%"></td>
                    <td style="width:25%"></td>
                    <td style="width:25%"></td>
                  </tr>
                  </table>`,
  }, {
    id: 'btn',
    label: 'Button',
    content: `<button contentEditable>Button</button>`,
  }, {
    id: 'divider', 
    label: 'Divider', 
    content: `<table style="width: 100%; margin-top: 10px; margin-bottom: 10px;">
      <tr>
        <td class="divider"></td>
      </tr>
    </table>
    <style>
    .divider {
      background-color: rgba(0, 0, 0, 0.1);
      height: 1px;
    }
    </style>`,
  }, {
    id: 'spacer', 
    label: 'Spacer',
    content: `<div style="height:20px;outline:none;"></div>`,
  }, {
    id: 'input',
    label: 'Input',
    content: '<input name="my-test" title="hello"/>',
  }, {
    id: 'menu',
    label: 'Menu',
    content: `<ul class="menu">
        <a style="margin: 5px;">Link</a>
        <a style="margin: 5px;">Link</a>
        <a style="margin: 5px;">Link</a>
        <a style="margin: 5px;">Link</a>
      </ul>
      <style>
        .menu {
          min-height:30px;
          display: flex;
          justify-content:center;
        }  
      </style>`,
    droppable: true,
  }, {
    id: 'item',
    label: 'Menu Item',
    content: '<a style="margin: 5px;">Link</a>',
  }, {
    id: 'social',
    label: 'Socials',
    content: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
      <a href="#" name="social" class="fab"></a>
      <style>
        .social-cont {
          display: flex;
          justify-content: center;
        }
        .fab {
          padding: 3px;
          font-size: 20px;
          width: 30px;
          height: 30px;
          text-align: center;
          text-decoration: none;
          background-color: #f09433;
        }
      </style>`,
  }

];

const myNewComponentTypes = editor => {
  editor.DomComponents.addType('menu-item', {
    isComponent: el => el.tagName === 'A',
    
    model: {
      defaults: {
        draggable: "ul",
        droppable: false,
        traits: [
          'name',
          'href',
          'content'
        ],
      }
    }
  });
  editor.DomComponents.addType('social-item', {
    isComponent: el => el.name === 'social',

    model: {
      defaults: {
        droppable: false,
        traits: [
          'name',
          'href',
          {
            type: 'select',
            name: 'type',
            options: [
              {id: 'fa-facebook', name: 'Facebook'},
              {id: 'fa-instagram', name: 'Instagram'},
              {id: 'fa-twitter', name: 'twitter'},
              {id: 'fa-linkedin', name: 'LinkedIn'},
              {id: 'fa-youtube', name: 'Youtube'},
            ]
          },
        ],
      },

      init() {
        this.on('change:attributes:type', this.handleTypeChange);
      },

      handleTypeChange() {
        if (this.getClasses()[1])
          this.removeClass(this.getClasses()[1]);
          this.addClass(`${this.getAttributes().type}`);
      },
    }
  });
};

//const projectId = getProjectId();

const editor = grapesjs.init({
    container: '#gjs',
    height: '680px',
    width: 'auto',
    storageManager: false,
    plugins: [ myNewComponentTypes ],
    blockManager: {
      appendTo: '.blocks-container',
      blocks: block_list,
    },
    layerManager: {
        appendTo: '.layers-container'
    },
    deviceManager: {
      devices: [{
          name: 'Desktop',
          width: '', 
        }, {
          name: 'Mobile',
          width: '320px', 
          widthMedia: '480px',
      }]
    },
      
    panels: {
      defaults: [{
        id: 'layers',
        el: '.panel__right',
        
        resizable: {
          maxDim: 350,
          minDim: 200,
          tc: 0, 
          cl: 1, 
          cr: 0, 
          bc: 0, 
          keyWidth: 'flex-basis',
        }
      },
      {
        id: 'panel-devices',
        el: '.panel__devices',
        buttons: [{
            id: 'device-desktop',
            label: 'D',
            command: 'set-device-desktop',
            active: true,
            togglable: false,
          }, {
            id: 'device-mobile',
            label: 'M',
            command: 'set-device-mobile',
            togglable: false,
        }],
      },
      {
        id: 'panel-switcher',
        el: '.panel__switcher',
        buttons: [{
            id: 'show-layers',
            active: true,
            label: 'Layers',
            command: 'show-layers',
            
            togglable: false,
        }, {
          id: 'component-mgmt',
          active: true,
          label: 'Traits',
          command: 'show-traits',
          togglable: false,
        }, {
            id: 'show-style',
            active: true,
            label: 'Styles',
            command: 'show-styles',
            togglable: false,
        }, {
          id: 'show-block',
          active: true,
          label: 'Blocks',
          command: 'show-blocks',
          togglable: false,
        }],
      }]
    },

    traitManager: {
      appendTo: '.traits-container',
    },

    selectorManager: {
      appendTo: '.styles-container'
    },

    styleManager: {
      appendTo: '.styles-container',
      sectors: [
        {
          open: true,
          buildProps: ['width', 'min-height', 'padding', 'margin', 'background-color', 'color', 'font-size', 'font', 'font-weight', 'border', 'border-radius', 'border-color'],
          properties: [
                {
                  
                  id: 'font-size',
                  name: 'Font Size',
                  property: 'font-size',
                  type: 'slider',
                  default: 20,
                  min: 1,
                  max: 50,
               }, {
                id: 'font',
                name: 'Font',
                property: 'font-family',
                type: 'select',
                defaults: 'Arial',
    
                options : [
                  {value: 'Cambria'},
                  {value: 'Arial'},
                  {value: 'serif'},
                  {value: 'Georgia'},
                  {value: 'Helvetica'}
                ]
               },
            ],
        }, 
      ]
    }, 

    storageManager: {
      type: 'local',
      options: {
        local: { key: `gjsProject` }
      }
    },
  }
);

editor.RichTextEditor.add('unorderedList',
{
  icon: '<i class="fa fa-list-ul" aria-hidden="true"></i>',
  attributes: {title: 'Unordered List'},
  result: rte => rte.exec('insertUnorderedList')
});  

editor.Commands.add('set-device-desktop', {
  run: editor => editor.setDevice('Desktop')
});

editor.Commands.add('set-device-mobile', {
  run: editor => editor.setDevice('Mobile')
});

editor.Commands.add('show-layers', {
  getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
  getLayersEl(row) { return row.querySelector('.layers-container') },

  run(editor, sender) {
    const lmEl = this.getLayersEl(this.getRowEl(editor));
    lmEl.style.display = '';
  },
  stop(editor, sender) {
    const lmEl = this.getLayersEl(this.getRowEl(editor));
    lmEl.style.display = 'none';
  },
});

editor.Commands.add('show-traits', {
  getTraitsEl(editor) {
    const row = editor.getContainer().closest('.editor-row');
    return row.querySelector('.traits-container');
  },
  run(editor, sender) {
    this.getTraitsEl(editor).style.display = '';
  },
  stop(editor, sender) {
    this.getTraitsEl(editor).style.display = 'none';
  },
});

editor.Commands.add('show-styles', {
  getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
  getStyleEl(row) { return row.querySelector('.styles-container') },

  run(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = '';
  },
  stop(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = 'none';
  },
});

editor.Commands.add('show-blocks', {
  getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
  getStyleEl(row) { return row.querySelector('.blocks-container') },

  run(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = '';
  },
  stop(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = 'none';
  },
});

editor.Panels.addPanel({
  id: 'panel-top',
  el: '.panel__top',
});

editor.Panels.addPanel({
  id: 'basic-actions',
  el: '.panel__basic-actions',
  buttons: [
    {
      id: 'visibility',
      active: true, 
      className: 'btn-toggle-borders',
      label: '<u>Borders</u>',
      command: 'sw-visibility', 
    }, {
      id: 'export',
      className: 'btn-open-export',
      label: 'Exp',
      command: 'export-template',
      context: 'export-template', 
    }, {
      id: 'show-json',
      className: 'btn-show-json',
      label: 'JSON',
      context: 'show-json',
      command(editor) {
        editor.Modal.setTitle('Components JSON')
          .setContent(`<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`)
          .open();
      },
    }
  ],
  
});

document.getElementsByClassName('gjs-sm-sector-title')[0].remove();