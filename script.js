const block_list = [
  {
    id: 'title', // id is mandatory
    label: '<b>Title</b>', // You can use HTML/SVG inside labels,
    content: `<h1 contentEditable>This is a simple title</h1>`,
  }, {
    id: 'text',
    label: 'Text',
    content: '<div data-gjs-type="text">Insert your text here</div>',
  }, {
    id: 'image',
    label: 'Image',
    // Select the component once it's dropped
    select: true,
    // You can pass components as a JSON instead of a simple HTML string,
    // in this case we also use a defined component type `image`
    content: { type: 'image' },
    // This triggers `active` event on dropped components and the `image`
    // reacts by opening the AssetManager
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
    label: 'Columns -3',
    content: `<table style="height:150px; width:100%">
                  <tr>
                    <td style="width:33.3%"></td>
                    <td style="width:33.3%"></td>
                    <td style="width:33.3%"></td>
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
    label: 'input',
    content: '<input name="my-test" title="hello"/>',
  }, {
    id: 'menu',
    label: 'Menu',
    content: '<ul style="min-height:30px;"></ul>',
    droppable: true,
  }, {
    id: 'item',
    label: 'Menu Item',
    content: '<a style="margin: 5px;">Link</a>',
  }

];

const myNewComponentTypes = editor => {
  editor.DomComponents.addType('menu-item', {
    // Make the editor understand when to bind `my-input-type`
    isComponent: el => el.tagName === 'A',
    
    // Model definition
    model: {
      // Default properties
      defaults: {
        //draggable: "ul",
        droppable: false,
        traits: [
          'name',
          'href',
          'content'
        ],
      }
    }
  });
  
};

const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#gjs',
    // Size of the editor
    height: '600px',
    width: 'auto',
    // Disable the storage manager for the moment
    storageManager: false,
    plugins: [ myNewComponentTypes ],
    blockManager: {
      appendTo: '.blocks-container',
      blocks: block_list,
    },
    layerManager: {
        appendTo: '.layers-container'
    },
      // We define a default panel as a sidebar to contain layers
    panels: {
      defaults: [{
        id: 'layers',
        el: '.panel__right',
        // Make the panel resizable
        resizable: {
          maxDim: 350,
          minDim: 200,
          tc: 0, // Top handler
          cl: 1, // Left handler
          cr: 0, // Right handler
          bc: 0, // Bottom handler
          // Being a flex child we need to change `flex-basis` property
          // instead of the `width` (default)
          keyWidth: 'flex-basis',
        }
      },
      {
        id: 'panel-switcher',
        el: '.panel__switcher',
        buttons: [{
            id: 'show-layers',
            active: true,
            label: 'Layers',
            command: 'show-layers',
            // Once activated disable the possibility to turn it off
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
      sectors: [{
          name: 'Dimension',
          open: false,
          // Use built-in properties
          buildProps: ['width', 'min-height', 'padding'],
          // Use `properties` to define/override single property
          // properties: [
          //   {
          //     // Type of the input,
          //     // options: integer | radio | select | color | slider | file | composite | stack
          //     type: 'integer',
          //     name: 'The width', // Label for the property
          //     property: 'width', // CSS property (if buildProps contains it will be extended)
          //     units: ['px', '%'], // Units, available only for 'integer' types
          //     defaults: 'auto', // Default value
          //     min: 0, // Min value, available only for 'integer' types
          //   }
          // ]
        },{
          name: 'Extra',
          open: false,
          buildProps: ['background-color', 'box-shadow', 'custom-prop'],
          properties: [
            {
              id: 'custom-prop',
              name: 'Font Size',
              property: 'font-size',
              type: 'select',
              defaults: '32px',
              // List of options, available only for 'select' and 'radio'  types
              options: [
                { value: '12px', name: 'Tiny' },
                { value: '18px', name: 'Medium' },
                { value: '32px', name: 'Big' },
              ],
           }, 
          ]
        }]
    },
    // storageManager: {
    //   type: 'local', // Type of the storage, available: 'local' | 'remote'
    //   autosave: true, // Store data automatically
    //   autoload: true, // Autoload stored data on init
    //   stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
    //   options: {
    //     local: { // Options for the `local` type
    //       key: 'gjsProject', // The key for the local storage
    //     },
    //   }
    // },
    
      
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
      active: true, // active by default
      className: 'btn-toggle-borders',
      label: '<u>Borders</u>',
      command: 'sw-visibility', // Built-in command
    }, {
      id: 'export',
      className: 'btn-open-export',
      label: 'Exp',
      command: 'export-template',
      context: 'export-template', // For grouping context of buttons from the same panel
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
