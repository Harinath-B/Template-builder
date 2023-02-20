const block_list = [{
    id: 'title',
    label: '<div class="panel__body sidebar__module  SidebarModule_sidebarModule__2aVdj " data-qa="sidebar-module"><div class="image-drag SidebarModule_imageDrag__z7ned"><svg width="36" height="36" viewBox="0 0 30 26" class="SidebarModule_icon__1QNtt"><path d="M10.8485 4.21742L10.7979 3.9936C10.7533 3.79644 10.6608 3.55553 10.51 3.24764C10.3598 2.94099 10.2099 2.66895 10.0436 2.39698C9.86309 2.12947 9.66979 1.88376 9.48088 1.69025C9.28372 1.50537 9.13038 1.42404 9.0043 1.39997C8.82067 1.38313 8.58666 1.36612 8.30146 1.34899C8.01804 1.33198 7.76746 1.33191 7.50829 1.33191H7.25964V11.7769C7.25964 11.9609 7.29049 12.0899 7.35055 12.1819L7.36026 12.1968L7.36807 12.2127C7.41504 12.3086 7.5074 12.3953 7.68918 12.488C7.70767 12.4975 7.76391 12.5175 7.883 12.5463C7.99479 12.5732 8.14017 12.603 8.32092 12.6381C8.69572 12.711 8.93871 12.7561 9.09416 12.7561H9.37988V14H2.60289V12.7838L2.85978 12.7575C2.93074 12.7503 3.02934 12.742 3.14668 12.7321L3.14675 12.7321L3.14699 12.7321C3.29281 12.7198 3.46753 12.7052 3.65408 12.687C4.00139 12.6533 4.21218 12.6045 4.31659 12.5655C4.48162 12.4945 4.5677 12.4214 4.63221 12.3226C4.68992 12.2343 4.72312 12.1087 4.72312 11.8649V1.31431H4.47447C4.28479 1.31431 4.0516 1.31438 3.78579 1.33133C3.51087 1.34887 3.2367 1.36636 2.97966 1.38384C2.87789 1.39331 2.73484 1.47015 2.51914 1.67264C2.31267 1.88401 2.13503 2.11414 1.95291 2.38454C1.77547 2.64798 1.62832 2.93077 1.49546 3.2359C1.35786 3.55192 1.26345 3.79606 1.21815 3.98103L1.16456 4.19982H0V0H12V4.21742H10.8485Z"></path><rect x="16" width="14" height="2"></rect><rect x="16" y="6" width="14" height="2"></rect><rect x="16" y="12" width="14" height="2"></rect><rect y="18" width="30" height="2"></rect><rect y="24" width="30" height="2"></rect></svg></div><div class="body__title body__title--cs SidebarModule_sidebarModuleTitle__TnK1l"><span>Title</span></div></div>',
    content: `<h1 contentEditable>This is a simple title</h1>`,
  }, {
    id: 'text',
    label: '<div class="panel__body sidebar__module  SidebarModule_sidebarModule__2aVdj " data-qa="sidebar-module"><div class="image-drag SidebarModule_imageDrag__z7ned"><svg width="36" height="36" viewBox="0 0 35 31" fill="none" class="SidebarModule_icon__1QNtt"><path d="M34.4 21.3333H0.6C0.268629 21.3333 0 21.602 0 21.9333V23.0667C0 23.398 0.268628 23.6667 0.599999 23.6667H34.4C34.7314 23.6667 35 23.398 35 23.0667V21.9333C35 21.602 34.7314 21.3333 34.4 21.3333Z" fill="black"></path><path d="M34.4 28.3333H0.6C0.268629 28.3333 0 28.602 0 28.9333V30.0667C0 30.398 0.268628 30.6667 0.599999 30.6667H34.4C34.7314 30.6667 35 30.398 35 30.0667V28.9333C35 28.602 34.7314 28.3333 34.4 28.3333Z" fill="black"></path><path d="M15.7333 0.333333H0.6C0.268629 0.333333 0 0.601962 0 0.933333V2.06667C0 2.39804 0.26863 2.66667 0.600001 2.66667H15.7333C16.0647 2.66667 16.3333 2.39804 16.3333 2.06667V0.933333C16.3333 0.601962 16.0647 0.333333 15.7333 0.333333Z" fill="black"></path><path d="M15.7333 7.33333H0.6C0.268629 7.33333 0 7.60196 0 7.93333V9.06667C0 9.39804 0.26863 9.66667 0.600001 9.66667H15.7333C16.0647 9.66667 16.3333 9.39804 16.3333 9.06667V7.93333C16.3333 7.60196 16.0647 7.33333 15.7333 7.33333Z" fill="black"></path><path d="M19.7333 14.3333H0.6C0.268629 14.3333 0 14.602 0 14.9333V16.0667C0 16.398 0.26863 16.6667 0.600001 16.6667H19.7333C20.0647 16.6667 20.3333 16.398 20.3333 16.0667V14.9333C20.3333 14.602 20.0647 14.3333 19.7333 14.3333Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.5593 2.85759V16.1306C33.5593 16.4045 33.3464 16.6286 33.0843 16.6286H31.6604C31.3996 16.6286 31.1854 16.4045 31.1854 16.1306V2.85759H28.5591V16.1292C28.5591 16.4031 28.3462 16.6272 28.0841 16.6272H26.6615C26.4007 16.6272 26.1865 16.4031 26.1865 16.1292V11.258L26.1359 10.258C23.2999 10.258 21 8.3101 21 5.28862C21 1.78569 23.6543 0.328617 26.6784 0.328617H34.525C34.7858 0.328617 35 0.555505 35 0.834965V2.35262C35 2.6307 34.7858 2.85897 34.525 2.85897H33.5593V2.85759Z" fill="black"></path></svg></div><div class="body__title body__title--cs SidebarModule_sidebarModuleTitle__TnK1l"><span>Paragraph</span></div></div>',
    content: `<div class="text-content" data-gjs-type="text">Insert your text here</div>`
  }, {
    id: 'list',
    label: '<div class="panel__body sidebar__module  SidebarModule_sidebarModule__2aVdj " data-qa="sidebar-module"><div class="image-drag SidebarModule_imageDrag__z7ned"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="list" role="img" viewBox="0 0 512 512" width="36" height="36" class="SidebarModule_icon__1QNtt"><path d="M80 48H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416-136H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16z"></path></svg></div><div class="body__title body__title--cs SidebarModule_sidebarModuleTitle__TnK1l"><span>List</span></div></div>',
    content: '<li> </li><li> </li><li> </li>',
  }, {
    id: 'image',
    label: '<div class="panel__body sidebar__module  SidebarModule_sidebarModule__2aVdj " data-qa="sidebar-module"><div class="image-drag SidebarModule_imageDrag__z7ned"><svg id="Layer_1" data-name="Layer 1" viewBox="0 0 28 28" class="SidebarModule_icon__1QNtt" width="36" height="36"><path d="M0,0V28H28V0ZM26,2V9.24L15.14,17.91l-5.79-3L2,20.34V2ZM2,26V21.58l7.45-5.5,5.81,3L26,10.52V26ZM9.8,12.1A3.8,3.8,0,1,0,6,8.3,3.8,3.8,0,0,0,9.8,12.1Zm0-6.6a2.8,2.8,0,1,1,0,5.6A2.73,2.73,0,0,1,7,8.3,2.93,2.93,0,0,1,9.8,5.5Z"></path></svg></div><div class="body__title body__title--cs SidebarModule_sidebarModuleTitle__TnK1l"><span>Image</span></div></div>',
    select: true,
    content: {
      type: 'image'
    },

    activate: true,
  },
  {
    id: 'btn',
    label: '<div class="panel__body sidebar__module  SidebarModule_sidebarModule__2aVdj " data-qa="sidebar-module"><div class="image-drag SidebarModule_imageDrag__z7ned"><svg id="Layer_1" data-name="Layer 1" viewBox="0 0 51 30" class="SidebarModule_icon__1QNtt" width="36" height="36"><path d="M46.6,29.2l1.3-.7-2.1-4h3.6L40,15.1V28.4l2.7-2.7L45,30.1l1.6-.9ZM39,12.69l1.71,1.71,6.51,6.51h1A2.83,2.83,0,0,0,51,18.07V2.83A2.83,2.83,0,0,0,48.17,0H2.83A2.83,2.83,0,0,0,0,2.83V18.07A2.83,2.83,0,0,0,2.83,20.9H39V12.69ZM8.33,9.22H42.67v2.45H8.33Z"></path></svg></div><div class="body__title body__title--cs SidebarModule_sidebarModuleTitle__TnK1l"><span>Button</span></div></div>',
    content: `<a href="#" class="button">Click me</a>
      <style>
        a.button {
          display: inline-block;
          background-color: #4CAF50;
          border: none;
          color: white;
          padding: 12px 24px;
          text-align: center;
          text-decoration: none;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 4px;
        }
      </style>`,
  },
  {
    id: 'divider',
    label: '<div class="panel__body sidebar__module  SidebarModule_sidebarModule__2aVdj " data-qa="sidebar-module"><div class="image-drag SidebarModule_imageDrag__z7ned"><svg id="Layer_1" data-name="Layer 1" viewBox="0 0 36 28" class="SidebarModule_icon__1QNtt" width="36" height="36"><path d="M36,13v2H0V13Zm-4-3H4V0H32ZM31,1H5V9H31ZM4,18H32V28H4Zm1,9H31V19H5Z"></path></svg></div><div class="body__title body__title--cs SidebarModule_sidebarModuleTitle__TnK1l"><span>Divider</span></div></div>',
    content: `
      <table style="width: 100%; margin-top: 10px; margin-bottom: 10px;">
      <tr>
      <td class="divider"></td>
      </tr>
      </table>
      <style>
        .divider {
          background-color: rgba(0, 0, 0, 0.1);
          height: 1px;
        }
      </style>
    `,
  }, {
    id: 'spacer',
    label: '<div class="panel__body sidebar__module  SidebarModule_sidebarModule__2aVdj " data-qa="sidebar-module"><div class="image-drag SidebarModule_imageDrag__z7ned"><svg width="36" height="36" viewBox="0 0 36 30" fill="none" class="SidebarModule_icon__1QNtt"><path fill-rule="evenodd" clip-rule="evenodd" d="M32 8H3L3 28H32V8ZM3 7C2.44772 7 2 7.44772 2 8V28C2 28.5523 2.44772 29 3 29H32C32.5523 29 33 28.5523 33 28V8C33 7.44772 32.5523 7 32 7H3Z" fill="black"></path><path d="M16.68 10.4267C16.84 10.2133 17.16 10.2133 17.32 10.4267L19.52 13.36C19.7178 13.6237 19.5296 14 19.2 14H18V22H19.2C19.5296 22 19.7178 22.3763 19.52 22.64L17.32 25.5733C17.16 25.7867 16.84 25.7867 16.68 25.5733L14.48 22.64C14.2822 22.3763 14.4704 22 14.8 22H16V14H14.8C14.4704 14 14.2822 13.6237 14.48 13.36L16.68 10.4267Z" fill="black"></path></svg></div><div class="body__title body__title--cs SidebarModule_sidebarModuleTitle__TnK1l"><span>Spacer</span></div></div>',
    content: `<div style="height:20px;outline:none;"></div>`,
  }, {
    id: 'menu',
    label: '<div class="panel__body sidebar__module  SidebarModule_sidebarModule__2aVdj " data-qa="sidebar-module"><div class="image-drag SidebarModule_imageDrag__z7ned"><svg x="0px" y="0px" viewBox="0 0 448 512" xml:space="preserve" class="SidebarModule_icon__1QNtt" width="36" height="36"><path d="M16,150h416c8.8,0,16-7.2,16-16v-20c0-8.8-7.2-15-16-15H16c-8.8,0-16,6.2-16,15v20C0,142.8,7.2,150,16,150z M16,282h416 c8.8,0,16-7.2,16-16v-20c0-8.8-7.2-16-16-16H16c-8.8,0-16,7.2-16,16v20C0,274.8,7.2,282,16,282z M16,414h416c8.8,0,16-7.2,16-16v-20 c0-8.8-7.2-16-16-16H16c-8.8,0-16,7.2-16,16v20C0,406.8,7.2,414,16,414z"></path></svg></div><div class="body__title body__title--cs SidebarModule_sidebarModuleTitle__TnK1l"><span>Menu</span></div></div>',
    content: `
      <ul class="menu">
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
      </style>
    `,
    droppable: true,
  }, {
    id: 'item',
    label: '<div class="panel__body sidebar__module  SidebarModule_sidebarModule__2aVdj " data-qa="sidebar-module"><div class="image-drag SidebarModule_imageDrag__z7ned"><svg x="0px" y="0px" viewBox="0 0 448 512" xml:space="preserve" class="SidebarModule_icon__1QNtt" width="36" height="36"><path d="M16,150h416c8.8,0,16-7.2,16-16v-20c0-8.8-7.2-15-16-15H16c-8.8,0-16,6.2-16,15v20C0,142.8,7.2,150,16,150z M16,282h416 c8.8,0,16-7.2,16-16v-20c0-8.8-7.2-16-16-16H16c-8.8,0-16,7.2-16,16v20C0,274.8,7.2,282,16,282z M16,414h416c8.8,0,16-7.2,16-16v-20 c0-8.8-7.2-16-16-16H16c-8.8,0-16,7.2-16,16v20C0,406.8,7.2,414,16,414z"></path></svg></div><div class="body__title body__title--cs SidebarModule_sidebarModuleTitle__TnK1l"><span>Menu Item</span></div></div>',
    content: '<a name="menu-item" style="margin: 5px;">Link</a>',
  }, {
    id: 'social',
    label: '<div class="panel__body sidebar__module  SidebarModule_sidebarModule__2aVdj " data-qa="sidebar-module"><div class="image-drag SidebarModule_imageDrag__z7ned"><svg id="Layer_1" data-name="Layer 1" viewBox="0 0 35 35" class="SidebarModule_icon__1QNtt" width="36" height="36"><path d="M17.5,0A17.5,17.5,0,1,0,35,17.5,17.46,17.46,0,0,0,17.5,0Zm0,33A15.5,15.5,0,1,1,33,17.5,15.58,15.58,0,0,1,17.5,33ZM18,17h9v1H18v9H17V18H8V17h9V8h1Z"></path></svg></div><div class="body__title body__title--cs SidebarModule_sidebarModuleTitle__TnK1l"><span>Social</span></div></div>',
    content: `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
      <a href="#" name="social" class="social-icon"></a>
      <style>
        .social-cont {
          display: flex;
          justify-content: center;
        }
        .social-icon {
          display: block;
          padding: 3px;
          font-size: 20px;
          width: 30px;
          height: 30px;
          text-align: center;
          text-decoration: none;
          background-color: #f09433;
        }
        .facebook-icon {
          content: url('face.png');
          display: inline-block;
        }
        .instagram-icon {
          background-color: #FF0047;
        }
        .twitter-icon {
          background-color: #0090FF;
        }
        .linkedin-icon {
          background-color: #005FFF;
        }
        .youtube-icon {
          background-color: #050505;
        }
      </style>
    `,
  }, {
    id: 'html-block',
    label: `<div class="image-drag SidebarModule_imageDrag__z7ned"><svg id="Layer_1" data-name="Layer 1" viewBox="0 0 31 38" class="SidebarModule_icon__1QNtt" width="36" height="36"><path d="M30,0H9.4a.91.91,0,0,0-.7.3L.3,7.9a.91.91,0,0,0-.3.7V37a.94.94,0,0,0,1,1H30a1,1,0,0,0,1-1V1A.94.94,0,0,0,30,0ZM7.7,3.91l.5-.46V8H3.7ZM29,36H2V10H9.2a.94.94,0,0,0,1-1V2H29ZM13.8,30l-1-.2L17,13.5l1,.2ZM11.4,17.6,7.7,21.3,11.4,25l-.7.9L6.6,21.8c-.1-.1-.1-.2-.1-.4s.1-.3.1-.4l4.1-4.1Zm8,7.6,3.7-3.7-3.7-3.7.7-.7,4.1,4.1c.1.1.1.2.1.4s-.1.3-.1.4l-4.1,3.9Z"></path></svg><div class="body__title body__title--cs SidebarModule_sidebarModuleTitle__TnK1l"><span>HTML code</span></div></div>`,
    content: '<div name="html-code" data-html-code>Edit my HTML content</div>'
  }
];

const rows_list = [{
  id: 'col1-1',
  label: '<svg id="Layer_1" data-name="Layer 1" viewBox="0 0 320 55" width="250px" height="55px"><g id="one-column-text"><g id="Page-1"><g id="one-column-text-2" data-name="one-column-text"><g id="Rows"><g id="Group"><g id="Rectangle-61"><rect width="320" height="55" class="icon--color-light" style="fill: rgb(224, 224, 224);"></rect></g></g></g></g></g></g><rect id="Rectangle-79" x="18" y="13" width="284" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><path d="M302,42.5h-1v-1h.5V41h1v1A.5.5,0,0,1,302,42.5Zm-3,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0H97v-1h2Zm-4,0H93v-1h2Zm-4,0H89v-1h2Zm-4,0H85v-1h2Zm-4,0H81v-1h2Zm-4,0H77v-1h2Zm-4,0H73v-1h2Zm-4,0H69v-1h2Zm-4,0H65v-1h2Zm-4,0H61v-1h2Zm-4,0H57v-1h2Zm-4,0H53v-1h2Zm-4,0H49v-1h2Zm-4,0H45v-1h2Zm-4,0H41v-1h2Zm-4,0H37v-1h2Zm-4,0H33v-1h2Zm-4,0H29v-1h2Zm-4,0H25v-1h2Zm-4,0H21v-1h2Zm-4,0H18a.5.5,0,0,1-.5-.5V41h1v.5H19ZM302.5,39h-1V37h1Zm-284,0h-1V37h1Zm284-4h-1V33h1Zm-284,0h-1V33h1Zm284-4h-1V29h1Zm-284,0h-1V29h1Zm0-4h-1V25h1Zm284,0h-1V25h1Zm-284-4h-1V21h1Zm284,0h-1V21h1Zm-284-4h-1V17h1Zm284,0h-1V17h1Zm-284-4h-1V13a.5.5,0,0,1,.5-.5h2v1H18.5Zm284,0h-1V13h1ZM300,13.5h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0H98v-1h2Zm-4,0H94v-1h2Zm-4,0H90v-1h2Zm-4,0H86v-1h2Zm-4,0H82v-1h2Zm-4,0H78v-1h2Zm-4,0H74v-1h2Zm-4,0H70v-1h2Zm-4,0H66v-1h2Zm-4,0H62v-1h2Zm-4,0H58v-1h2Zm-4,0H54v-1h2Zm-4,0H50v-1h2Zm-4,0H46v-1h2Zm-4,0H42v-1h2Zm-4,0H38v-1h2Zm-4,0H34v-1h2Zm-4,0H30v-1h2Zm-4,0H26v-1h2Zm-4,0H22v-1h2Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path></svg>',
  content: `<table style="height:150px; width:100%">
  <tr>
    <td style="width:100%"></td>

  </tr>
  </table>`,

  }, {
  id: 'col2-1',
  label: '<svg id="Layer_1" data-name="Layer 1" viewBox="0 0 320 55" width="250px" height="55px"><rect x="164" width="156" height="55" class="icon--color-light" style="fill: rgb(224, 224, 224);"></rect><rect width="156" height="55" class="icon--color-light" style="fill: rgb(224, 224, 224);"></rect><rect x="18" y="13" width="120" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><rect x="182" y="13" width="120" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><rect x="97" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="94" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="109" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="93" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="105" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="106" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="101" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="102" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="98" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="78" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="81" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="82" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="77" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="86" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="89" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="85" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="90" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="110" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="133" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="134" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="130" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><path d="M137.5,41.5H137v1h1a.5.5,0,0,0,.5-.5V41h-1Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path><rect x="129" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="137.5" y="37" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="137.5" y="29" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="137.5" y="33" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="125" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="126" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="117" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="113" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="114" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="74" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="121" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="118" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="22" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="37" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="25" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="137.5" y="25" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="29" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="33" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="30" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="34" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="21" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="26" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="17.5" y="29" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="17.5" y="21" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="17.5" y="25" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="17.5" y="17" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="17.5" y="33" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><path d="M17.5,13v2h1V13.5H20v-1H18A.5.5,0,0,0,17.5,13Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path><rect x="73" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="17.5" y="37" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><path d="M18.5,41h-1v1a.5.5,0,0,0,.5.5h1v-1h-.5Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path><rect x="65" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="62" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="57" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="58" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="61" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="70" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="66" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="38" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="69" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="42" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="54" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="45" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="41" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="46" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="53" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="49" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="50" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="122" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="137.5" y="21" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="137.5" y="13" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="137.5" y="17" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="277" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="281" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="278" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="282" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="289" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="286" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="290" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="274" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="285" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="262" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="258" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="273" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="257" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="261" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="270" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="269" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="265" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="301.5" y="37" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="301.5" y="21" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="181.5" y="33" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="301.5" y="13" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="301.5" y="17" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="181.5" y="37" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="181.5" y="21" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="181.5" y="17" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="181.5" y="29" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="293" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="181.5" y="25" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="298" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="297" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="294" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><path d="M301.5,41.5H301v1h1a.5.5,0,0,0,.5-.5V41h-1Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path><rect x="301.5" y="25" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="301.5" y="29" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="254" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="301.5" y="33" width="1" height="2" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="266" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="201" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="202" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="198" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="205" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="197" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="213" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="206" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="210" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="214" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="209" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><path d="M181.5,13v2h1V13.5H184v-1h-2A.5.5,0,0,0,181.5,13Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path><rect x="185" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><path d="M182.5,41h-1v1a.5.5,0,0,0,.5.5h1v-1h-.5Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path><rect x="186" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="189" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="193" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="194" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="190" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="238" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="253" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="241" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="237" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="217" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="234" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="250" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="245" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="249" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="246" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="242" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="221" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="233" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="218" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="225" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="222" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="226" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="230" y="12.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect><rect x="229" y="41.5" width="2" height="1" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></rect></svg>',
  content: `<table style="height:150px; width:100%">
  <tr>
    <td style="width:50%"></td>
    <td style="width:50%"></td>
  </tr>
  </table>`,

  }, {
  id: 'col2-2',
  label: '<svg width="250px" height="55px" viewBox="0 0 321 55" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M82.5 0H207.5H214.5H320.5V55H214.5H207.5H82.5V0Z" fill="#E0E0E0" class="icon--color-light"></path><path d="M74.3602 0H0V55H74.3602V0Z" fill="#E0E0E0" class="icon--color-light"></path><rect x="18" y="13" width="39" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><rect x="100.5" y="13" width="203" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><path class="icon--color-dark" fill-rule="evenodd" clip-rule="evenodd" d="M100 13C100 12.7239 100.224 12.5 100.5 12.5H101.495V13.5H101V14.0357H100V13ZM103.486 12.5H105.476V13.5H103.486V12.5ZM107.466 12.5H109.456V13.5H107.466V12.5ZM111.446 12.5H113.437V13.5H111.446V12.5ZM115.427 12.5H117.417V13.5H115.427V12.5ZM119.407 12.5H121.397V13.5H119.407V12.5ZM123.387 12.5H125.378V13.5H123.387V12.5ZM127.368 12.5H129.358V13.5H127.368V12.5ZM131.348 12.5H133.338V13.5H131.348V12.5ZM135.329 12.5H137.319V13.5H135.329V12.5ZM139.309 12.5H141.299V13.5H139.309V12.5ZM143.289 12.5H145.28V13.5H143.289V12.5ZM147.27 12.5H149.26V13.5H147.27V12.5ZM151.25 12.5H153.24V13.5H151.25V12.5ZM155.23 12.5H157.221V13.5H155.23V12.5ZM159.211 12.5H161.201V13.5H159.211V12.5ZM163.191 12.5H165.181V13.5H163.191V12.5ZM167.172 12.5H169.162V13.5H167.172V12.5ZM171.152 12.5H173.142V13.5H171.152V12.5ZM175.132 12.5H177.123V13.5H175.132V12.5ZM179.113 12.5H181.103V13.5H179.113V12.5ZM183.093 12.5H185.083V13.5H183.093V12.5ZM187.074 12.5H189.064V13.5H187.074V12.5ZM191.054 12.5H193.044V13.5H191.054V12.5ZM195.034 12.5H197.024V13.5H195.034V12.5ZM199.015 12.5H201.005V13.5H199.015V12.5ZM202.995 12.5H204.985V13.5H202.995V12.5ZM206.975 12.5H208.966V13.5H206.975V12.5ZM210.956 12.5H212.946V13.5H210.956V12.5ZM214.936 12.5H216.926V13.5H214.936V12.5ZM218.917 12.5H220.907V13.5H218.917V12.5ZM222.897 12.5H224.887V13.5H222.897V12.5ZM226.877 12.5H228.868V13.5H226.877V12.5ZM230.858 12.5H232.848V13.5H230.858V12.5ZM234.838 12.5H236.828V13.5H234.838V12.5ZM238.819 12.5H240.809V13.5H238.819V12.5ZM242.799 12.5H244.789V13.5H242.799V12.5ZM246.779 12.5H248.77V13.5H246.779V12.5ZM250.76 12.5H252.75V13.5H250.76V12.5ZM254.74 12.5H256.73V13.5H254.74V12.5ZM258.721 12.5H260.711V13.5H258.721V12.5ZM262.701 12.5H264.691V13.5H262.701V12.5ZM266.681 12.5H268.672V13.5H266.681V12.5ZM270.662 12.5H272.652V13.5H270.662V12.5ZM274.642 12.5H276.632V13.5H274.642V12.5ZM278.623 12.5H280.613V13.5H278.623V12.5ZM282.603 12.5H284.593V13.5H282.603V12.5ZM286.583 12.5H288.574V13.5H286.583V12.5ZM290.564 12.5H292.554V13.5H290.564V12.5ZM294.544 12.5H296.534V13.5H294.544V12.5ZM298.525 12.5H300.515V13.5H298.525V12.5ZM302.505 12.5H303.5C303.776 12.5 304 12.7239 304 13V14.0357H303V13.5H302.505V12.5ZM100 18.1786V16.1071H101V18.1786H100ZM304 16.1071V18.1786H303V16.1071H304ZM100 22.3214V20.25H101V22.3214H100ZM304 20.25V22.3214H303V20.25H304ZM100 26.4643V24.3929H101V26.4643H100ZM304 24.3929V26.4643H303V24.3929H304ZM100 30.6071V28.5357H101V30.6071H100ZM304 28.5357V30.6071H303V28.5357H304ZM100 34.75V32.6786H101V34.75H100ZM304 32.6786V34.75H303V32.6786H304ZM100 38.8929V36.8214H101V38.8929H100ZM304 36.8214V38.8929H303V36.8214H304ZM100 42V40.9643H101V41.5H101.495V42.5H100.5C100.224 42.5 100 42.2761 100 42ZM304 40.9643V42C304 42.2761 303.776 42.5 303.5 42.5H302.505V41.5H303V40.9643H304ZM105.475 42.5H103.485V41.5H105.475V42.5ZM109.456 42.5H107.466V41.5H109.456V42.5ZM113.436 42.5H111.446V41.5H113.436V42.5ZM117.417 42.5H115.426V41.5H117.417V42.5ZM121.397 42.5H119.407V41.5H121.397V42.5ZM125.377 42.5H123.387V41.5H125.377V42.5ZM129.358 42.5H127.368V41.5H129.358V42.5ZM133.338 42.5H131.348V41.5H133.338V42.5ZM137.319 42.5H135.328V41.5H137.319V42.5ZM141.299 42.5H139.309V41.5H141.299V42.5ZM145.279 42.5H143.289V41.5H145.279V42.5ZM149.26 42.5H147.27V41.5H149.26V42.5ZM153.24 42.5H151.25V41.5H153.24V42.5ZM157.221 42.5H155.23V41.5H157.221V42.5ZM161.201 42.5H159.211V41.5H161.201V42.5ZM165.181 42.5H163.191V41.5H165.181V42.5ZM169.162 42.5H167.172V41.5H169.162V42.5ZM173.142 42.5H171.152V41.5H173.142V42.5ZM177.123 42.5H175.132V41.5H177.123V42.5ZM181.103 42.5H179.113V41.5H181.103V42.5ZM185.083 42.5H183.093V41.5H185.083V42.5ZM189.064 42.5H187.074V41.5H189.064V42.5ZM193.044 42.5H191.054V41.5H193.044V42.5ZM197.025 42.5H195.034V41.5H197.025V42.5ZM201.005 42.5H199.015V41.5H201.005V42.5ZM204.985 42.5H202.995V41.5H204.985V42.5ZM208.966 42.5H206.976V41.5H208.966V42.5ZM212.946 42.5H210.956V41.5H212.946V42.5ZM216.926 42.5H214.936V41.5H216.926V42.5ZM220.907 42.5H218.917V41.5H220.907V42.5ZM224.887 42.5H222.897V41.5H224.887V42.5ZM228.868 42.5H226.877V41.5H228.868V42.5ZM232.848 42.5H230.858V41.5H232.848V42.5ZM236.828 42.5H234.838V41.5H236.828V42.5ZM240.809 42.5H238.819V41.5H240.809V42.5ZM244.789 42.5H242.799V41.5H244.789V42.5ZM248.77 42.5H246.779V41.5H248.77V42.5ZM252.75 42.5H250.76V41.5H252.75V42.5ZM256.73 42.5H254.74V41.5H256.73V42.5ZM260.711 42.5H258.72V41.5H260.711V42.5ZM264.691 42.5H262.701V41.5H264.691V42.5ZM268.671 42.5H266.681V41.5H268.671V42.5ZM272.652 42.5H270.662V41.5H272.652V42.5ZM276.632 42.5H274.642V41.5H276.632V42.5ZM280.613 42.5H278.622V41.5H280.613V42.5ZM284.593 42.5H282.603V41.5H284.593V42.5ZM288.573 42.5H286.583V41.5H288.573V42.5ZM292.554 42.5H290.563V41.5H292.554V42.5ZM296.534 42.5H294.544V41.5H296.534V42.5ZM300.514 42.5H298.524V41.5H300.514V42.5Z" fill="#BDBDBD"></path><path class="icon--color-dark" fill-rule="evenodd" clip-rule="evenodd" d="M17.5 13C17.5 12.7239 17.7239 12.5 18 12.5H18.975V13.5H18.5V14.0357H17.5V13ZM20.925 12.5H22.875V13.5H20.925V12.5ZM24.825 12.5H26.775V13.5H24.825V12.5ZM28.725 12.5H30.675V13.5H28.725V12.5ZM32.625 12.5H34.575V13.5H32.625V12.5ZM36.525 12.5H38.475V13.5H36.525V12.5ZM40.425 12.5H42.375V13.5H40.425V12.5ZM44.325 12.5H46.275V13.5H44.325V12.5ZM48.225 12.5H50.175V13.5H48.225V12.5ZM52.125 12.5H54.075V13.5H52.125V12.5ZM56.025 12.5H57C57.2761 12.5 57.5 12.7239 57.5 13V14.0357H56.5V13.5H56.025V12.5ZM17.5 18.1786V16.1071H18.5V18.1786H17.5ZM57.5 16.1071V18.1786H56.5V16.1071H57.5ZM17.5 22.3214V20.25H18.5V22.3214H17.5ZM57.5 20.25V22.3214H56.5V20.25H57.5ZM17.5 26.4643V24.3929H18.5V26.4643H17.5ZM57.5 24.3929V26.4643H56.5V24.3929H57.5ZM17.5 30.6071V28.5357H18.5V30.6071H17.5ZM57.5 28.5357V30.6071H56.5V28.5357H57.5ZM17.5 34.75V32.6786H18.5V34.75H17.5ZM57.5 32.6786V34.75H56.5V32.6786H57.5ZM17.5 38.8929V36.8214H18.5V38.8929H17.5ZM57.5 36.8214V38.8929H56.5V36.8214H57.5ZM17.5 42V40.9643H18.5V41.5H18.975V42.5H18C17.7239 42.5 17.5 42.2761 17.5 42ZM57.5 40.9643V42C57.5 42.2761 57.2761 42.5 57 42.5H56.025V41.5H56.5V40.9643H57.5ZM22.875 42.5H20.925V41.5H22.875V42.5ZM26.775 42.5H24.825V41.5H26.775V42.5ZM30.675 42.5H28.725V41.5H30.675V42.5ZM34.575 42.5H32.625V41.5H34.575V42.5ZM38.475 42.5H36.525V41.5H38.475V42.5ZM42.375 42.5H40.425V41.5H42.375V42.5ZM46.275 42.5H44.325V41.5H46.275V42.5ZM50.175 42.5H48.225V41.5H50.175V42.5ZM54.075 42.5H52.125V41.5H54.075V42.5Z" fill="#BDBDBD"></path></svg>',
  content: `<table style="height:150px; width:100%">
  <tr>
    <td style="width:25%"></td>
    <td style="width:75%"></td>
  </tr>
  </table>`,

  }, {
  id: 'col2-3',
  label: '<svg id="Layer_1" data-name="Layer 1" viewBox="0 0 320 55" width="250px" height="55px"><rect id="Rectangle-61" width="108" height="55" class="icon--color-light" style="fill: rgb(224, 224, 224);"></rect><rect id="Rectangle-61-2" data-name="Rectangle-61" x="116" width="204" height="55" class="icon--color-light" style="fill: rgb(224, 224, 224);"></rect><rect id="Rectangle-79" x="134" y="13" width="168" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><rect id="Rectangle-79-2" data-name="Rectangle-79" x="18" y="13" width="74" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><path d="M302,42.5h-1v-1h.5V41h1v1A.5.5,0,0,1,302,42.5Zm-3,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-1a.5.5,0,0,1-.5-.5V41h1v.5h.5Zm-.5-3.5h-1V37h1Zm168,0h-1V37h1Zm-168-4h-1V33h1Zm168,0h-1V33h1Zm-168-4h-1V29h1Zm168,0h-1V29h1Zm-168-4h-1V25h1Zm168,0h-1V25h1Zm-168-4h-1V21h1Zm168,0h-1V21h1Zm-168-4h-1V17h1Zm168,0h-1V17h1Zm-168-4h-1V13h1Zm168,0h-1V13.5H300v-1h2a.5.5,0,0,1,.5.5ZM298,13.5h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path><path d="M92,42.5H91v-1h.5V41h1v1A.5.5,0,0,1,92,42.5Zm-3,0H87v-1h2Zm-4,0H83v-1h2Zm-4,0H79v-1h2Zm-4,0H75v-1h2Zm-4,0H71v-1h2Zm-4,0H67v-1h2Zm-4,0H63v-1h2Zm-4,0H59v-1h2Zm-4,0H55v-1h2Zm-4,0H51v-1h2Zm-4,0H47v-1h2Zm-4,0H43v-1h2Zm-4,0H39v-1h2Zm-4,0H35v-1h2Zm-4,0H31v-1h2Zm-4,0H27v-1h2Zm-4,0H23v-1h2Zm-4,0H19v-1h2ZM18.5,41h-1V39h1Zm74-2h-1V37h1Zm-74-2h-1V35h1Zm74-2h-1V33h1Zm-74-2h-1V31h1Zm74-2h-1V29h1Zm-74-2h-1V27h1Zm74-2h-1V25h1Zm-74-2h-1V23h1Zm74-2h-1V21h1Zm-74-2h-1V19h1Zm74-2h-1V17h1Zm-74-2h-1V15h1Zm74-2h-1V13.5H90v-1h2a.5.5,0,0,1,.5.5ZM88,13.5H86v-1h2Zm-4,0H82v-1h2Zm-4,0H78v-1h2Zm-4,0H74v-1h2Zm-4,0H70v-1h2Zm-4,0H66v-1h2Zm-4,0H62v-1h2Zm-4,0H58v-1h2Zm-4,0H54v-1h2Zm-4,0H50v-1h2Zm-4,0H46v-1h2Zm-4,0H42v-1h2Zm-4,0H38v-1h2Zm-4,0H34v-1h2Zm-4,0H30v-1h2Zm-4,0H26v-1h2Zm-4,0H22v-1h2Zm-4,0H18v-1h2Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path></svg>',
  content: `<table style="height:150px; width:100%">
  <tr>
    <td style="width:33.3%"></td>
    <td style="width:66.7%"></td>
  </tr>
  </table>`,

  }, {
  id: 'col2-4',
  label: '<svg id="Layer_1" data-name="Layer 1" viewBox="0 0 320 55" width="250px" height="55px"><g id="Group"><rect id="Rectangle-61" x="212" width="108" height="55" class="icon--color-light" style="fill: rgb(224, 224, 224);"></rect><rect id="Rectangle-61-2" data-name="Rectangle-61" width="204" height="55" class="icon--color-light" style="fill: rgb(224, 224, 224);"></rect></g><rect id="Rectangle-79" x="18" y="13" width="168" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><rect id="Rectangle-79-2" data-name="Rectangle-79" x="228" y="13" width="74" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><path d="M186,42.5h-1v-1h.5V41h1v1A.5.5,0,0,1,186,42.5Zm-3,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0H97v-1h2Zm-4,0H93v-1h2Zm-4,0H89v-1h2Zm-4,0H85v-1h2Zm-4,0H81v-1h2Zm-4,0H77v-1h2Zm-4,0H73v-1h2Zm-4,0H69v-1h2Zm-4,0H65v-1h2Zm-4,0H61v-1h2Zm-4,0H57v-1h2Zm-4,0H53v-1h2Zm-4,0H49v-1h2Zm-4,0H45v-1h2Zm-4,0H41v-1h2Zm-4,0H37v-1h2Zm-4,0H33v-1h2Zm-4,0H29v-1h2Zm-4,0H25v-1h2Zm-4,0H21v-1h2Zm-4,0H18a.5.5,0,0,1-.5-.5V41h1v.5H19ZM186.5,39h-1V37h1Zm-168,0h-1V37h1Zm168-4h-1V33h1Zm-168,0h-1V33h1Zm168-4h-1V29h1Zm-168,0h-1V29h1Zm168-4h-1V25h1Zm-168,0h-1V25h1Zm168-4h-1V21h1Zm-168,0h-1V21h1Zm168-4h-1V17h1Zm-168,0h-1V17h1Zm168-4h-1V13h1Zm-168,0h-1V13a.5.5,0,0,1,.5-.5h2v1H18.5ZM184,13.5h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0H98v-1h2Zm-4,0H94v-1h2Zm-4,0H90v-1h2Zm-4,0H86v-1h2Zm-4,0H82v-1h2Zm-4,0H78v-1h2Zm-4,0H74v-1h2Zm-4,0H70v-1h2Zm-4,0H66v-1h2Zm-4,0H62v-1h2Zm-4,0H58v-1h2Zm-4,0H54v-1h2Zm-4,0H50v-1h2Zm-4,0H46v-1h2Zm-4,0H42v-1h2Zm-4,0H38v-1h2Zm-4,0H34v-1h2Zm-4,0H30v-1h2Zm-4,0H26v-1h2Zm-4,0H22v-1h2Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path><path d="M301,42.5h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-1a.5.5,0,0,1-.5-.5V41h1v.5h.5ZM302.5,41h-1V39h1Zm-74-2h-1V37h1Zm74-2h-1V35h1Zm-74-2h-1V33h1Zm74-2h-1V31h1Zm-74-2h-1V29h1Zm74-2h-1V27h1Zm-74-2h-1V25h1Zm74-2h-1V23h1Zm-74-2h-1V21h1Zm74-2h-1V19h1Zm-74-2h-1V17h1Zm74-2h-1V15h1Zm-74-2h-1V13a.5.5,0,0,1,.5-.5h2v1h-1.5ZM302,13.5h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path></svg>',
  content: `<table style="height:150px; width:100%">
  <tr>
    <td style="width:66.7%"></td>
    <td style="width:33.3%"></td>
  </tr>
  </table>`,

  }, {
  id: 'col2-5',
  label: '<svg width="250px" height="55px" viewBox="0 0 321 55" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H125H132H238V55H132H125H0V0Z" fill="#E0E0E0" class="icon--color-light"></path><path d="M320.36 0H246V55H320.36V0Z" fill="#E0E0E0" class="icon--color-light"></path><rect x="18" y="13" width="203" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><rect x="264" y="13" width="39" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><path class="icon--color-dark" fill-rule="evenodd" clip-rule="evenodd" d="M17.5 13C17.5 12.7239 17.7239 12.5 18 12.5H18.9954V13.5H18.5V14.0357H17.5V13ZM20.9856 12.5H22.9758V13.5H20.9856V12.5ZM24.9659 12.5H26.9561V13.5H24.9659V12.5ZM28.9463 12.5H30.9365V13.5H28.9463V12.5ZM32.9267 12.5H34.9169V13.5H32.9267V12.5ZM36.9071 12.5H38.8973V13.5H36.9071V12.5ZM40.8874 12.5H42.8776V13.5H40.8874V12.5ZM44.8678 12.5H46.858V13.5H44.8678V12.5ZM48.8482 12.5H50.8384V13.5H48.8482V12.5ZM52.8286 12.5H54.8188V13.5H52.8286V12.5ZM56.809 12.5H58.7991V13.5H56.809V12.5ZM60.7893 12.5H62.7795V13.5H60.7893V12.5ZM64.7697 12.5H66.7599V13.5H64.7697V12.5ZM68.7501 12.5H70.7403V13.5H68.7501V12.5ZM72.7305 12.5H74.7207V13.5H72.7305V12.5ZM76.7108 12.5H78.701V13.5H76.7108V12.5ZM80.6912 12.5H82.6814V13.5H80.6912V12.5ZM84.6716 12.5H86.6618V13.5H84.6716V12.5ZM88.652 12.5H90.6422V13.5H88.652V12.5ZM92.6324 12.5H94.6225V13.5H92.6324V12.5ZM96.6127 12.5H98.6029V13.5H96.6127V12.5ZM100.593 12.5H102.583V13.5H100.593V12.5ZM104.574 12.5H106.564V13.5H104.574V12.5ZM108.554 12.5H110.544V13.5H108.554V12.5ZM112.534 12.5H114.524V13.5H112.534V12.5ZM116.515 12.5H118.505V13.5H116.515V12.5ZM120.495 12.5H122.485V13.5H120.495V12.5ZM124.475 12.5H126.466V13.5H124.475V12.5ZM128.456 12.5H130.446V13.5H128.456V12.5ZM132.436 12.5H134.426V13.5H132.436V12.5ZM136.417 12.5H138.407V13.5H136.417V12.5ZM140.397 12.5H142.387V13.5H140.397V12.5ZM144.377 12.5H146.368V13.5H144.377V12.5ZM148.358 12.5H150.348V13.5H148.358V12.5ZM152.338 12.5H154.328V13.5H152.338V12.5ZM156.319 12.5H158.309V13.5H156.319V12.5ZM160.299 12.5H162.289V13.5H160.299V12.5ZM164.279 12.5H166.27V13.5H164.279V12.5ZM168.26 12.5H170.25V13.5H168.26V12.5ZM172.24 12.5H174.23V13.5H172.24V12.5ZM176.221 12.5H178.211V13.5H176.221V12.5ZM180.201 12.5H182.191V13.5H180.201V12.5ZM184.181 12.5H186.172V13.5H184.181V12.5ZM188.162 12.5H190.152V13.5H188.162V12.5ZM192.142 12.5H194.132V13.5H192.142V12.5ZM196.123 12.5H198.113V13.5H196.123V12.5ZM200.103 12.5H202.093V13.5H200.103V12.5ZM204.083 12.5H206.074V13.5H204.083V12.5ZM208.064 12.5H210.054V13.5H208.064V12.5ZM212.044 12.5H214.034V13.5H212.044V12.5ZM216.025 12.5H218.015V13.5H216.025V12.5ZM220.005 12.5H221C221.276 12.5 221.5 12.7239 221.5 13V14.0357H220.5V13.5H220.005V12.5ZM17.5 18.1786V16.1071H18.5V18.1786H17.5ZM221.5 16.1071V18.1786H220.5V16.1071H221.5ZM17.5 22.3214V20.25H18.5V22.3214H17.5ZM221.5 20.25V22.3214H220.5V20.25H221.5ZM17.5 26.4643V24.3929H18.5V26.4643H17.5ZM221.5 24.3929V26.4643H220.5V24.3929H221.5ZM17.5 30.6071V28.5357H18.5V30.6071H17.5ZM221.5 28.5357V30.6071H220.5V28.5357H221.5ZM17.5 34.75V32.6786H18.5V34.75H17.5ZM221.5 32.6786V34.75H220.5V32.6786H221.5ZM17.5 38.8929V36.8214H18.5V38.8929H17.5ZM221.5 36.8214V38.8929H220.5V36.8214H221.5ZM17.5 42V40.9643H18.5V41.5H18.9951V42.5H18C17.7239 42.5 17.5 42.2761 17.5 42ZM221.5 40.9643V42C221.5 42.2761 221.276 42.5 221 42.5H220.005V41.5H220.5V40.9643H221.5ZM22.9755 42.5H20.9853V41.5H22.9755V42.5ZM26.9559 42.5H24.9657V41.5H26.9559V42.5ZM30.9363 42.5H28.9461V41.5H30.9363V42.5ZM34.9167 42.5H32.9265V41.5H34.9167V42.5ZM38.8971 42.5H36.9069V41.5H38.8971V42.5ZM42.8775 42.5H40.8873V41.5H42.8775V42.5ZM46.8578 42.5H44.8676V41.5H46.8578V42.5ZM50.8382 42.5H48.848V41.5H50.8382V42.5ZM54.8186 42.5H52.8284V41.5H54.8186V42.5ZM58.799 42.5H56.8088V41.5H58.799V42.5ZM62.7794 42.5H60.7892V41.5H62.7794V42.5ZM66.7598 42.5H64.7696V41.5H66.7598V42.5ZM70.7402 42.5H68.75V41.5H70.7402V42.5ZM74.7206 42.5H72.7304V41.5H74.7206V42.5ZM78.701 42.5H76.7108V41.5H78.701V42.5ZM82.6814 42.5H80.6912V41.5H82.6814V42.5ZM86.6618 42.5H84.6716V41.5H86.6618V42.5ZM90.6422 42.5H88.652V41.5H90.6422V42.5ZM94.6226 42.5H92.6324V41.5H94.6226V42.5ZM98.6029 42.5H96.6127V41.5H98.6029V42.5ZM102.583 42.5H100.593V41.5H102.583V42.5ZM106.564 42.5H104.574V41.5H106.564V42.5ZM110.544 42.5H108.554V41.5H110.544V42.5ZM114.525 42.5H112.534V41.5H114.525V42.5ZM118.505 42.5H116.515V41.5H118.505V42.5ZM122.485 42.5H120.495V41.5H122.485V42.5ZM126.466 42.5H124.476V41.5H126.466V42.5ZM130.446 42.5H128.456V41.5H130.446V42.5ZM134.426 42.5H132.436V41.5H134.426V42.5ZM138.407 42.5H136.417V41.5H138.407V42.5ZM142.387 42.5H140.397V41.5H142.387V42.5ZM146.368 42.5H144.377V41.5H146.368V42.5ZM150.348 42.5H148.358V41.5H150.348V42.5ZM154.328 42.5H152.338V41.5H154.328V42.5ZM158.309 42.5H156.319V41.5H158.309V42.5ZM162.289 42.5H160.299V41.5H162.289V42.5ZM166.27 42.5H164.279V41.5H166.27V42.5ZM170.25 42.5H168.26V41.5H170.25V42.5ZM174.23 42.5H172.24V41.5H174.23V42.5ZM178.211 42.5H176.22V41.5H178.211V42.5ZM182.191 42.5H180.201V41.5H182.191V42.5ZM186.171 42.5H184.181V41.5H186.171V42.5ZM190.152 42.5H188.162V41.5H190.152V42.5ZM194.132 42.5H192.142V41.5H194.132V42.5ZM198.113 42.5H196.122V41.5H198.113V42.5ZM202.093 42.5H200.103V41.5H202.093V42.5ZM206.073 42.5H204.083V41.5H206.073V42.5ZM210.054 42.5H208.063V41.5H210.054V42.5ZM214.034 42.5H212.044V41.5H214.034V42.5ZM218.014 42.5H216.024V41.5H218.014V42.5Z" fill="#BDBDBD"></path><path class="icon--color-dark" fill-rule="evenodd" clip-rule="evenodd" d="M263.5 13C263.5 12.7239 263.724 12.5 264 12.5H264.975V13.5H264.5V14.0357H263.5V13ZM266.925 12.5H268.875V13.5H266.925V12.5ZM270.825 12.5H272.775V13.5H270.825V12.5ZM274.725 12.5H276.675V13.5H274.725V12.5ZM278.625 12.5H280.575V13.5H278.625V12.5ZM282.525 12.5H284.475V13.5H282.525V12.5ZM286.425 12.5H288.375V13.5H286.425V12.5ZM290.325 12.5H292.275V13.5H290.325V12.5ZM294.225 12.5H296.175V13.5H294.225V12.5ZM298.125 12.5H300.075V13.5H298.125V12.5ZM302.025 12.5H303C303.276 12.5 303.5 12.7239 303.5 13V14.0357H302.5V13.5H302.025V12.5ZM263.5 18.1786V16.1071H264.5V18.1786H263.5ZM303.5 16.1071V18.1786H302.5V16.1071H303.5ZM263.5 22.3214V20.25H264.5V22.3214H263.5ZM303.5 20.25V22.3214H302.5V20.25H303.5ZM263.5 26.4643V24.3929H264.5V26.4643H263.5ZM303.5 24.3929V26.4643H302.5V24.3929H303.5ZM263.5 30.6071V28.5357H264.5V30.6071H263.5ZM303.5 28.5357V30.6071H302.5V28.5357H303.5ZM263.5 34.75V32.6786H264.5V34.75H263.5ZM303.5 32.6786V34.75H302.5V32.6786H303.5ZM263.5 38.8929V36.8214H264.5V38.8929H263.5ZM303.5 36.8214V38.8929H302.5V36.8214H303.5ZM263.5 42V40.9643H264.5V41.5H264.975V42.5H264C263.724 42.5 263.5 42.2761 263.5 42ZM303.5 40.9643V42C303.5 42.2761 303.276 42.5 303 42.5H302.025V41.5H302.5V40.9643H303.5ZM268.875 42.5H266.925V41.5H268.875V42.5ZM272.775 42.5H270.825V41.5H272.775V42.5ZM276.675 42.5H274.725V41.5H276.675V42.5ZM280.575 42.5H278.625V41.5H280.575V42.5ZM284.475 42.5H282.525V41.5H284.475V42.5ZM288.375 42.5H286.425V41.5H288.375V42.5ZM292.275 42.5H290.325V41.5H292.275V42.5ZM296.175 42.5H294.225V41.5H296.175V42.5ZM300.075 42.5H298.125V41.5H300.075V42.5Z" fill="#BDBDBD"></path></svg>',
  content: `<table style="height:150px; width:100%">
  <tr>
    <td style="width:75%"></td>
    <td style="width:25%"></td>
  </tr>
  </table>`,

  }, {
  id: 'col3-1',
  label: '<svg id="Layer_1" data-name="Layer 1" viewBox="0 0 319 55" width="250px" height="55px"><rect id="Rectangle-61" width="101.1" height="54.6" class="icon--color-light" style="fill: rgb(224, 224, 224);"></rect><rect id="Rectangle-61-2" data-name="Rectangle-61" x="109" width="101" height="54.6" class="icon--color-light" style="fill: rgb(224, 224, 224);"></rect><rect id="Rectangle-61-3" data-name="Rectangle-61" x="217" width="101.2" height="54.6" class="icon--color-light" style="fill: rgb(224, 224, 224);"></rect><rect id="Rectangle-79" x="19" y="13" width="64" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><rect id="Rectangle-79-2" data-name="Rectangle-79" x="127" y="13" width="64" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><rect id="Rectangle-79-3" data-name="Rectangle-79" x="236" y="13" width="64" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><path d="M83,42.5H82v-1h.5V41h1v1A.47.47,0,0,1,83,42.5Zm-3,0H78v-1h2Zm-4,0H74v-1h2Zm-4,0H70v-1h2Zm-4,0H66v-1h2Zm-4,0H62v-1h2Zm-4,0H58v-1h2Zm-4,0H54v-1h2Zm-4,0H50v-1h2Zm-4,0H46v-1h2Zm-4,0H42v-1h2Zm-4,0H38v-1h2Zm-4,0H34v-1h2Zm-4,0H30v-1h2Zm-4,0H26v-1h2Zm-4,0H22v-1h2Zm-4,0H19a.47.47,0,0,1-.5-.5V41h1v.5H20ZM83.5,39h-1V37h1Zm-64,0h-1V37h1Zm64-4h-1V33h1Zm-64,0h-1V33h1Zm64-4h-1V29h1Zm-64,0h-1V29h1Zm64-4h-1V25h1Zm-64,0h-1V25h1Zm64-4h-1V21h1Zm-64,0h-1V21h1Zm64-4h-1V17h1Zm-64,0h-1V17h1Zm64-4h-1V13h1Zm-64,0h-1V13a.47.47,0,0,1,.5-.5h2v1H19.5ZM81,13.5H79v-1h2Zm-4,0H75v-1h2Zm-4,0H71v-1h2Zm-4,0H67v-1h2Zm-4,0H63v-1h2Zm-4,0H59v-1h2Zm-4,0H55v-1h2Zm-4,0H51v-1h2Zm-4,0H47v-1h2Zm-4,0H43v-1h2Zm-4,0H39v-1h2Zm-4,0H35v-1h2Zm-4,0H31v-1h2Zm-4,0H27v-1h2Zm-4,0H23v-1h2Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path><path d="M191,42.5h-1v-1h.5V41h1v1A.47.47,0,0,1,191,42.5Zm-3,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-1a.47.47,0,0,1-.5-.5V41h1v.5h.5ZM191.5,39h-1V37h1Zm-64,0h-1V37h1Zm64-4h-1V33h1Zm-64,0h-1V33h1Zm64-4h-1V29h1Zm-64,0h-1V29h1Zm64-4h-1V25h1Zm-64,0h-1V25h1Zm64-4h-1V21h1Zm-64,0h-1V21h1Zm64-4h-1V17h1Zm-64,0h-1V17h1Zm64-4h-1V13h1Zm-64,0h-1V13a.47.47,0,0,1,.5-.5h2v1h-1.5ZM189,13.5h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path><path d="M300,42.5h-1v-1h.5V41h1v1A.47.47,0,0,1,300,42.5Zm-3,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-1a.47.47,0,0,1-.5-.5V41h1v.5h.5ZM300.5,39h-1V37h1Zm-64,0h-1V37h1Zm64-4h-1V33h1Zm-64,0h-1V33h1Zm64-4h-1V29h1Zm-64,0h-1V29h1Zm64-4h-1V25h1Zm-64,0h-1V25h1Zm64-4h-1V21h1Zm-64,0h-1V21h1Zm64-4h-1V17h1Zm-64,0h-1V17h1Zm64-4h-1V13h1Zm-64,0h-1V13a.47.47,0,0,1,.5-.5h2v1h-1.5ZM298,13.5h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path></svg>',
  content: `<table style="height:150px; width:100%">
  <tr>
    <td style="width:33.3%"></td>
    <td style="width:33.3%"></td>
    <td style="width:33.3%"></td>
  </tr>
  </table>`,
  }, {
  id: 'col3-2',
  label: '<svg width="250px" height="55px" viewBox="0 0 321 55" fill="none"><path d="M156.36 0H82V55H156.36V0Z" fill="#E0E0E0" class="icon--color-light"></path><path d="M251 0H164V55H251V0Z" fill="#E0E0E0" class="icon--color-light"></path><path d="M320.36 0H246V55H320.36V0Z" fill="#E0E0E0" class="icon--color-light"></path><path d="M74.3602 0H0V55H74.3602V0Z" fill="#E0E0E0" class="icon--color-light"></path><rect x="18" y="13" width="39" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><rect x="100" y="13" width="39" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><rect x="182" y="13" width="121" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><path class="icon--color-dark" fill-rule="evenodd" clip-rule="evenodd" d="M99.5 13C99.5 12.7239 99.7239 12.5 100 12.5H100.975V13.5H100.5V14.0357H99.5V13ZM102.925 12.5H104.875V13.5H102.925V12.5ZM106.825 12.5H108.775V13.5H106.825V12.5ZM110.725 12.5H112.675V13.5H110.725V12.5ZM114.625 12.5H116.575V13.5H114.625V12.5ZM118.525 12.5H120.475V13.5H118.525V12.5ZM122.425 12.5H124.375V13.5H122.425V12.5ZM126.325 12.5H128.275V13.5H126.325V12.5ZM130.225 12.5H132.175V13.5H130.225V12.5ZM134.125 12.5H136.075V13.5H134.125V12.5ZM138.025 12.5H139C139.276 12.5 139.5 12.7239 139.5 13V14.0357H138.5V13.5H138.025V12.5ZM99.5 18.1786V16.1071H100.5V18.1786H99.5ZM139.5 16.1071V18.1786H138.5V16.1071H139.5ZM99.5 22.3214V20.25H100.5V22.3214H99.5ZM139.5 20.25V22.3214H138.5V20.25H139.5ZM99.5 26.4643V24.3929H100.5V26.4643H99.5ZM139.5 24.3929V26.4643H138.5V24.3929H139.5ZM99.5 30.6071V28.5357H100.5V30.6071H99.5ZM139.5 28.5357V30.6071H138.5V28.5357H139.5ZM99.5 34.75V32.6786H100.5V34.75H99.5ZM139.5 32.6786V34.75H138.5V32.6786H139.5ZM99.5 38.8929V36.8214H100.5V38.8929H99.5ZM139.5 36.8214V38.8929H138.5V36.8214H139.5ZM99.5 42V40.9643H100.5V41.5H100.975V42.5H100C99.7239 42.5 99.5 42.2761 99.5 42ZM139.5 40.9643V42C139.5 42.2761 139.276 42.5 139 42.5H138.025V41.5H138.5V40.9643H139.5ZM104.875 42.5H102.925V41.5H104.875V42.5ZM108.775 42.5H106.825V41.5H108.775V42.5ZM112.675 42.5H110.725V41.5H112.675V42.5ZM116.575 42.5H114.625V41.5H116.575V42.5ZM120.475 42.5H118.525V41.5H120.475V42.5ZM124.375 42.5H122.425V41.5H124.375V42.5ZM128.275 42.5H126.325V41.5H128.275V42.5ZM132.175 42.5H130.225V41.5H132.175V42.5ZM136.075 42.5H134.125V41.5H136.075V42.5Z" fill="#BDBDBD"></path><path class="icon--color-dark" fill-rule="evenodd" clip-rule="evenodd" d="M181.5 13C181.5 12.7239 181.724 12.5 182 12.5H183.008V13.5H182.5V14.0357H181.5V13ZM185.025 12.5H187.042V13.5H185.025V12.5ZM189.058 12.5H191.075V13.5H189.058V12.5ZM193.092 12.5H195.108V13.5H193.092V12.5ZM197.125 12.5H199.142V13.5H197.125V12.5ZM201.158 12.5H203.175V13.5H201.158V12.5ZM205.192 12.5H207.208V13.5H205.192V12.5ZM209.225 12.5H211.242V13.5H209.225V12.5ZM213.258 12.5H215.275V13.5H213.258V12.5ZM217.292 12.5H219.308V13.5H217.292V12.5ZM221.325 12.5H223.342V13.5H221.325V12.5ZM225.358 12.5H227.375V13.5H225.358V12.5ZM229.392 12.5H231.408V13.5H229.392V12.5ZM233.425 12.5H235.442V13.5H233.425V12.5ZM237.458 12.5H239.475V13.5H237.458V12.5ZM241.492 12.5H243.508V13.5H241.492V12.5ZM245.525 12.5H247.542V13.5H245.525V12.5ZM249.558 12.5H251.575V13.5H249.558V12.5ZM253.592 12.5H255.608V13.5H253.592V12.5ZM257.625 12.5H259.642V13.5H257.625V12.5ZM261.658 12.5H263.675V13.5H261.658V12.5ZM265.692 12.5H267.708V13.5H265.692V12.5ZM269.725 12.5H271.742V13.5H269.725V12.5ZM273.758 12.5H275.775V13.5H273.758V12.5ZM277.792 12.5H279.808V13.5H277.792V12.5ZM281.825 12.5H283.842V13.5H281.825V12.5ZM285.858 12.5H287.875V13.5H285.858V12.5ZM289.892 12.5H291.908V13.5H289.892V12.5ZM293.925 12.5H295.942V13.5H293.925V12.5ZM297.958 12.5H299.975V13.5H297.958V12.5ZM301.992 12.5H303C303.276 12.5 303.5 12.7239 303.5 13V14.0357H302.5V13.5H301.992V12.5ZM181.5 18.1786V16.1071H182.5V18.1786H181.5ZM303.5 16.1071V18.1786H302.5V16.1071H303.5ZM181.5 22.3214V20.25H182.5V22.3214H181.5ZM303.5 20.25V22.3214H302.5V20.25H303.5ZM181.5 26.4643V24.3929H182.5V26.4643H181.5ZM303.5 24.3929V26.4643H302.5V24.3929H303.5ZM181.5 30.6071V28.5357H182.5V30.6071H181.5ZM303.5 28.5357V30.6071H302.5V28.5357H303.5ZM181.5 34.75V32.6786H182.5V34.75H181.5ZM303.5 32.6786V34.75H302.5V32.6786H303.5ZM181.5 38.8929V36.8214H182.5V38.8929H181.5ZM303.5 36.8214V38.8929H302.5V36.8214H303.5ZM181.5 42V40.9643H182.5V41.5H183.008V42.5H182C181.724 42.5 181.5 42.2761 181.5 42ZM303.5 40.9643V42C303.5 42.2761 303.276 42.5 303 42.5H301.992V41.5H302.5V40.9643H303.5ZM187.042 42.5H185.025V41.5H187.042V42.5ZM191.075 42.5H189.058V41.5H191.075V42.5ZM195.108 42.5H193.092V41.5H195.108V42.5ZM199.142 42.5H197.125V41.5H199.142V42.5ZM203.175 42.5H201.158V41.5H203.175V42.5ZM207.208 42.5H205.192V41.5H207.208V42.5ZM211.242 42.5H209.225V41.5H211.242V42.5ZM215.275 42.5H213.258V41.5H215.275V42.5ZM219.308 42.5H217.292V41.5H219.308V42.5ZM223.342 42.5H221.325V41.5H223.342V42.5ZM227.375 42.5H225.358V41.5H227.375V42.5ZM231.408 42.5H229.392V41.5H231.408V42.5ZM235.442 42.5H233.425V41.5H235.442V42.5ZM239.475 42.5H237.458V41.5H239.475V42.5ZM243.508 42.5H241.492V41.5H243.508V42.5ZM247.542 42.5H245.525V41.5H247.542V42.5ZM251.575 42.5H249.558V41.5H251.575V42.5ZM255.608 42.5H253.592V41.5H255.608V42.5ZM259.642 42.5H257.625V41.5H259.642V42.5ZM263.675 42.5H261.658V41.5H263.675V42.5ZM267.708 42.5H265.692V41.5H267.708V42.5ZM271.742 42.5H269.725V41.5H271.742V42.5ZM275.775 42.5H273.758V41.5H275.775V42.5ZM279.808 42.5H277.792V41.5H279.808V42.5ZM283.842 42.5H281.825V41.5H283.842V42.5ZM287.875 42.5H285.858V41.5H287.875V42.5ZM291.908 42.5H289.892V41.5H291.908V42.5ZM295.942 42.5H293.925V41.5H295.942V42.5ZM299.975 42.5H297.958V41.5H299.975V42.5Z" fill="#BDBDBD"></path><path class="icon--color-dark" fill-rule="evenodd" clip-rule="evenodd" d="M17.5 13C17.5 12.7239 17.7239 12.5 18 12.5H18.975V13.5H18.5V14.0357H17.5V13ZM20.925 12.5H22.875V13.5H20.925V12.5ZM24.825 12.5H26.775V13.5H24.825V12.5ZM28.725 12.5H30.675V13.5H28.725V12.5ZM32.625 12.5H34.575V13.5H32.625V12.5ZM36.525 12.5H38.475V13.5H36.525V12.5ZM40.425 12.5H42.375V13.5H40.425V12.5ZM44.325 12.5H46.275V13.5H44.325V12.5ZM48.225 12.5H50.175V13.5H48.225V12.5ZM52.125 12.5H54.075V13.5H52.125V12.5ZM56.025 12.5H57C57.2761 12.5 57.5 12.7239 57.5 13V14.0357H56.5V13.5H56.025V12.5ZM17.5 18.1786V16.1071H18.5V18.1786H17.5ZM57.5 16.1071V18.1786H56.5V16.1071H57.5ZM17.5 22.3214V20.25H18.5V22.3214H17.5ZM57.5 20.25V22.3214H56.5V20.25H57.5ZM17.5 26.4643V24.3929H18.5V26.4643H17.5ZM57.5 24.3929V26.4643H56.5V24.3929H57.5ZM17.5 30.6071V28.5357H18.5V30.6071H17.5ZM57.5 28.5357V30.6071H56.5V28.5357H57.5ZM17.5 34.75V32.6786H18.5V34.75H17.5ZM57.5 32.6786V34.75H56.5V32.6786H57.5ZM17.5 38.8929V36.8214H18.5V38.8929H17.5ZM57.5 36.8214V38.8929H56.5V36.8214H57.5ZM17.5 42V40.9643H18.5V41.5H18.975V42.5H18C17.7239 42.5 17.5 42.2761 17.5 42ZM57.5 40.9643V42C57.5 42.2761 57.2761 42.5 57 42.5H56.025V41.5H56.5V40.9643H57.5ZM22.875 42.5H20.925V41.5H22.875V42.5ZM26.775 42.5H24.825V41.5H26.775V42.5ZM30.675 42.5H28.725V41.5H30.675V42.5ZM34.575 42.5H32.625V41.5H34.575V42.5ZM38.475 42.5H36.525V41.5H38.475V42.5ZM42.375 42.5H40.425V41.5H42.375V42.5ZM46.275 42.5H44.325V41.5H46.275V42.5ZM50.175 42.5H48.225V41.5H50.175V42.5ZM54.075 42.5H52.125V41.5H54.075V42.5Z" fill="#BDBDBD"></path></svg>',
  content: `<table style="height:150px; width:100%">
  <tr>
    <td style="width:25%"></td>
    <td style="width:25%"></td>
    <td style="width:50%"></td>
  </tr>
  </table>`,
  }, {
  id: 'col3-3',
  label: '<svg width="250px" height="55px" viewBox="0 0 321 55" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M82 0H164H169H238.36V55H169H164H82V0Z" fill="#E0E0E0" class="icon--color-light"></path><path d="M221 13H100V42H221V13Z" fill="#D3D3D3" stroke="#BDBDBD" stroke-linejoin="round" stroke-dasharray="2 2" class="icon--color-base"></path><path d="M320.36 0H246V55H320.36V0Z" fill="#E0E0E0" class="icon--color-light"></path><path d="M303 13H264V42H303V13Z" fill="#D3D3D3" stroke="#BDBDBD" stroke-linejoin="round" stroke-dasharray="2 2" class="icon--color-base"></path><path d="M74.3602 0H0V55H74.3602V0Z" fill="#E0E0E0" class="icon--color-light"></path><path d="M57 13H18V42H57V13Z" fill="#D3D3D3" stroke="#BDBDBD" stroke-linejoin="round" stroke-dasharray="2 2" class="icon--color-base"></path></svg>',
  content: `<table style="height:150px; width:100%">
  <tr>
    <td style="width:25%"></td>
    <td style="width:50%"></td>
    <td style="width:25%"></td>
  </tr>
  </table>`,
  }, {
  id: 'col3-4',
  label: '<svg width="250px" height="55px" viewBox="0 0 320 55" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H82H87H156.36V55H87H82H0V0Z" fill="#E0E0E0" class="icon--color-light"></path><path d="M320.36 0H246V55H320.36V0Z" fill="#E0E0E0" class="icon--color-light"></path><path d="M238.36 0H164V55H238.36V0Z" fill="#E0E0E0" class="icon--color-light"></path><rect x="18" y="13" width="121" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><rect x="182" y="13" width="39" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><rect x="264" y="13" width="39" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><path class="icon--color-dark" fill-rule="evenodd" clip-rule="evenodd" d="M17.5 13C17.5 12.7239 17.7239 12.5 18 12.5H19.0082V13.5H18.5V14.0357H17.5V13ZM21.0249 12.5H23.0416V13.5H21.0249V12.5ZM25.0582 12.5H27.0749V13.5H25.0582V12.5ZM29.0916 12.5H31.1083V13.5H29.0916V12.5ZM33.1249 12.5H35.1416V13.5H33.1249V12.5ZM37.1583 12.5H39.1749V13.5H37.1583V12.5ZM41.1916 12.5H43.2083V13.5H41.1916V12.5ZM45.225 12.5H47.2416V13.5H45.225V12.5ZM49.2583 12.5H51.275V13.5H49.2583V12.5ZM53.2916 12.5H55.3083V13.5H53.2916V12.5ZM57.325 12.5H59.3416V13.5H57.325V12.5ZM61.3583 12.5H63.375V13.5H61.3583V12.5ZM65.3917 12.5H67.4083V13.5H65.3917V12.5ZM69.425 12.5H71.4417V13.5H69.425V12.5ZM73.4583 12.5H75.475V13.5H73.4583V12.5ZM77.4917 12.5H79.5083V13.5H77.4917V12.5ZM81.525 12.5H83.5417V13.5H81.525V12.5ZM85.5583 12.5H87.575V13.5H85.5583V12.5ZM89.5917 12.5H91.6083V13.5H89.5917V12.5ZM93.625 12.5H95.6417V13.5H93.625V12.5ZM97.6583 12.5H99.675V13.5H97.6583V12.5ZM101.692 12.5H103.708V13.5H101.692V12.5ZM105.725 12.5H107.742V13.5H105.725V12.5ZM109.758 12.5H111.775V13.5H109.758V12.5ZM113.792 12.5H115.808V13.5H113.792V12.5ZM117.825 12.5H119.842V13.5H117.825V12.5ZM121.858 12.5H123.875V13.5H121.858V12.5ZM125.892 12.5H127.908V13.5H125.892V12.5ZM129.925 12.5H131.942V13.5H129.925V12.5ZM133.958 12.5H135.975V13.5H133.958V12.5ZM137.992 12.5H139C139.276 12.5 139.5 12.7239 139.5 13V14.0357H138.5V13.5H137.992V12.5ZM17.5 18.1786V16.1071H18.5V18.1786H17.5ZM139.5 16.1071V18.1786H138.5V16.1071H139.5ZM17.5 22.3214V20.25H18.5V22.3214H17.5ZM139.5 20.25V22.3214H138.5V20.25H139.5ZM17.5 26.4643V24.3929H18.5V26.4643H17.5ZM139.5 24.3929V26.4643H138.5V24.3929H139.5ZM17.5 30.6071V28.5357H18.5V30.6071H17.5ZM139.5 28.5357V30.6071H138.5V28.5357H139.5ZM17.5 34.75V32.6786H18.5V34.75H17.5ZM139.5 32.6786V34.75H138.5V32.6786H139.5ZM17.5 38.8929V36.8214H18.5V38.8929H17.5ZM139.5 36.8214V38.8929H138.5V36.8214H139.5ZM17.5 42V40.9643H18.5V41.5H19.0083V42.5H18C17.7239 42.5 17.5 42.2761 17.5 42ZM139.5 40.9643V42C139.5 42.2761 139.276 42.5 139 42.5H137.992V41.5H138.5V40.9643H139.5ZM23.0417 42.5H21.025V41.5H23.0417V42.5ZM27.075 42.5H25.0583V41.5H27.075V42.5ZM31.1083 42.5H29.0917V41.5H31.1083V42.5ZM35.1417 42.5H33.125V41.5H35.1417V42.5ZM39.175 42.5H37.1583V41.5H39.175V42.5ZM43.2083 42.5H41.1917V41.5H43.2083V42.5ZM47.2417 42.5H45.225V41.5H47.2417V42.5ZM51.275 42.5H49.2583V41.5H51.275V42.5ZM55.3083 42.5H53.2917V41.5H55.3083V42.5ZM59.3417 42.5H57.325V41.5H59.3417V42.5ZM63.375 42.5H61.3583V41.5H63.375V42.5ZM67.4083 42.5H65.3917V41.5H67.4083V42.5ZM71.4417 42.5H69.425V41.5H71.4417V42.5ZM75.475 42.5H73.4583V41.5H75.475V42.5ZM79.5083 42.5H77.4917V41.5H79.5083V42.5ZM83.5417 42.5H81.525V41.5H83.5417V42.5ZM87.575 42.5H85.5583V41.5H87.575V42.5ZM91.6083 42.5H89.5917V41.5H91.6083V42.5ZM95.6417 42.5H93.625V41.5H95.6417V42.5ZM99.675 42.5H97.6584V41.5H99.675V42.5ZM103.708 42.5H101.692V41.5H103.708V42.5ZM107.742 42.5H105.725V41.5H107.742V42.5ZM111.775 42.5H109.758V41.5H111.775V42.5ZM115.808 42.5H113.792V41.5H115.808V42.5ZM119.842 42.5H117.825V41.5H119.842V42.5ZM123.875 42.5H121.858V41.5H123.875V42.5ZM127.908 42.5H125.892V41.5H127.908V42.5ZM131.942 42.5H129.925V41.5H131.942V42.5ZM135.975 42.5H133.958V41.5H135.975V42.5Z" fill="#BDBDBD"></path><path class="icon--color-dark" fill-rule="evenodd" clip-rule="evenodd" d="M263.5 13C263.5 12.7239 263.724 12.5 264 12.5H264.975V13.5H264.5V14.0357H263.5V13ZM266.925 12.5H268.875V13.5H266.925V12.5ZM270.825 12.5H272.775V13.5H270.825V12.5ZM274.725 12.5H276.675V13.5H274.725V12.5ZM278.625 12.5H280.575V13.5H278.625V12.5ZM282.525 12.5H284.475V13.5H282.525V12.5ZM286.425 12.5H288.375V13.5H286.425V12.5ZM290.325 12.5H292.275V13.5H290.325V12.5ZM294.225 12.5H296.175V13.5H294.225V12.5ZM298.125 12.5H300.075V13.5H298.125V12.5ZM302.025 12.5H303C303.276 12.5 303.5 12.7239 303.5 13V14.0357H302.5V13.5H302.025V12.5ZM263.5 18.1786V16.1071H264.5V18.1786H263.5ZM303.5 16.1071V18.1786H302.5V16.1071H303.5ZM263.5 22.3214V20.25H264.5V22.3214H263.5ZM303.5 20.25V22.3214H302.5V20.25H303.5ZM263.5 26.4643V24.3929H264.5V26.4643H263.5ZM303.5 24.3929V26.4643H302.5V24.3929H303.5ZM263.5 30.6071V28.5357H264.5V30.6071H263.5ZM303.5 28.5357V30.6071H302.5V28.5357H303.5ZM263.5 34.75V32.6786H264.5V34.75H263.5ZM303.5 32.6786V34.75H302.5V32.6786H303.5ZM263.5 38.8929V36.8214H264.5V38.8929H263.5ZM303.5 36.8214V38.8929H302.5V36.8214H303.5ZM263.5 42V40.9643H264.5V41.5H264.975V42.5H264C263.724 42.5 263.5 42.2761 263.5 42ZM303.5 40.9643V42C303.5 42.2761 303.276 42.5 303 42.5H302.025V41.5H302.5V40.9643H303.5ZM268.875 42.5H266.925V41.5H268.875V42.5ZM272.775 42.5H270.825V41.5H272.775V42.5ZM276.675 42.5H274.725V41.5H276.675V42.5ZM280.575 42.5H278.625V41.5H280.575V42.5ZM284.475 42.5H282.525V41.5H284.475V42.5ZM288.375 42.5H286.425V41.5H288.375V42.5ZM292.275 42.5H290.325V41.5H292.275V42.5ZM296.175 42.5H294.225V41.5H296.175V42.5ZM300.075 42.5H298.125V41.5H300.075V42.5Z" fill="#BDBDBD"></path><path class="icon--color-dark" fill-rule="evenodd" clip-rule="evenodd" d="M181.5 13C181.5 12.7239 181.724 12.5 182 12.5H182.975V13.5H182.5V14.0357H181.5V13ZM184.925 12.5H186.875V13.5H184.925V12.5ZM188.825 12.5H190.775V13.5H188.825V12.5ZM192.725 12.5H194.675V13.5H192.725V12.5ZM196.625 12.5H198.575V13.5H196.625V12.5ZM200.525 12.5H202.475V13.5H200.525V12.5ZM204.425 12.5H206.375V13.5H204.425V12.5ZM208.325 12.5H210.275V13.5H208.325V12.5ZM212.225 12.5H214.175V13.5H212.225V12.5ZM216.125 12.5H218.075V13.5H216.125V12.5ZM220.025 12.5H221C221.276 12.5 221.5 12.7239 221.5 13V14.0357H220.5V13.5H220.025V12.5ZM181.5 18.1786V16.1071H182.5V18.1786H181.5ZM221.5 16.1071V18.1786H220.5V16.1071H221.5ZM181.5 22.3214V20.25H182.5V22.3214H181.5ZM221.5 20.25V22.3214H220.5V20.25H221.5ZM181.5 26.4643V24.3929H182.5V26.4643H181.5ZM221.5 24.3929V26.4643H220.5V24.3929H221.5ZM181.5 30.6071V28.5357H182.5V30.6071H181.5ZM221.5 28.5357V30.6071H220.5V28.5357H221.5ZM181.5 34.75V32.6786H182.5V34.75H181.5ZM221.5 32.6786V34.75H220.5V32.6786H221.5ZM181.5 38.8929V36.8214H182.5V38.8929H181.5ZM221.5 36.8214V38.8929H220.5V36.8214H221.5ZM181.5 42V40.9643H182.5V41.5H182.975V42.5H182C181.724 42.5 181.5 42.2761 181.5 42ZM221.5 40.9643V42C221.5 42.2761 221.276 42.5 221 42.5H220.025V41.5H220.5V40.9643H221.5ZM186.875 42.5H184.925V41.5H186.875V42.5ZM190.775 42.5H188.825V41.5H190.775V42.5ZM194.675 42.5H192.725V41.5H194.675V42.5ZM198.575 42.5H196.625V41.5H198.575V42.5ZM202.475 42.5H200.525V41.5H202.475V42.5ZM206.375 42.5H204.425V41.5H206.375V42.5ZM210.275 42.5H208.325V41.5H210.275V42.5ZM214.175 42.5H212.225V41.5H214.175V42.5ZM218.075 42.5H216.125V41.5H218.075V42.5Z" fill="#BDBDBD"></path></svg>',
  content: `<table style="height:150px; width:100%">
  <tr>
    <td style="width:50%"></td>
    <td style="width:25%"></td>
    <td style="width:25%"></td>
  </tr>
  </table>`,
  }, {
  id: 'col4',
  label: '<svg id="Layer_1" data-name="Layer 1" viewBox="0 0 321 55" width="250px" height="55px"><g id="Rectangle-61"><g id="Rectangle-path-_-Rectangle-69-_-Path-91-_-Oval-1" data-name="Rectangle-path-+-Rectangle-69-+-Path-91-+-Oval-1"><rect id="Rectangle-path" width="74.36" height="55" class="icon--color-light" style="fill: rgb(224, 224, 224);"></rect></g></g><g id="Rectangle-61-_-Rectangle-69-_-Path-91-_-Oval-1" data-name="Rectangle-61-+-Rectangle-69-+-Path-91-+-Oval-1"><g id="Rectangle-61-2" data-name="Rectangle-61"><rect id="Rectangle-path-2" data-name="Rectangle-path" x="82" width="74.36" height="55" class="icon--color-light" style="fill: rgb(224, 224, 224);"></rect></g></g><g id="Rectangle-61-_-Rectangle-69-_-Path-91-_-Oval-1-2" data-name="Rectangle-61-+-Rectangle-69-+-Path-91-+-Oval-1"><g id="Rectangle-61-_-Rectangle-78" data-name="Rectangle-61-+-Rectangle-78"><g id="Rectangle-61-3" data-name="Rectangle-61"><rect id="Rectangle-path-3" data-name="Rectangle-path" x="246" width="74.36" height="55" class="icon--color-light" style="fill: rgb(224, 224, 224);"></rect></g></g><g id="Rectangle-61-_-Rectangle-78-2" data-name="Rectangle-61-+-Rectangle-78"><g id="Rectangle-61-4" data-name="Rectangle-61"><rect id="Rectangle-path-4" data-name="Rectangle-path" x="164" width="74.36" height="55" class="icon--color-light" style="fill: rgb(224, 224, 224);"></rect></g></g></g><rect id="Rectangle-79" x="100" y="13" width="39" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><path d="M139,42.5h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2ZM100.5,41h-1V39h1Zm39-1h-1V38h1Zm-39-3h-1V35h1Zm39-1h-1V34h1Zm-39-3h-1V31h1Zm39-1h-1V30h1Zm-39-3h-1V27h1Zm39-1h-1V26h1Zm-39-3h-1V23h1Zm39-1h-1V22h1Zm-39-3h-1V19h1Zm39-1h-1V18h1Zm-39-3h-1V15h1Zm39-1h-1V14h1ZM138,13.5h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path><rect id="Rectangle-79-2" data-name="Rectangle-79" x="182" y="13" width="39" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><path d="M221,42.5h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2ZM182.5,41h-1V39h1Zm39-1h-1V38h1Zm-39-3h-1V35h1Zm39-1h-1V34h1Zm-39-3h-1V31h1Zm39-1h-1V30h1Zm-39-3h-1V27h1Zm39-1h-1V26h1Zm-39-3h-1V23h1Zm39-1h-1V22h1Zm-39-3h-1V19h1Zm39-1h-1V18h1Zm-39-3h-1V15h1Zm39-1h-1V14h1ZM220,13.5h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path><rect id="Rectangle-79-3" data-name="Rectangle-79" x="264" y="13" width="39" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211); stroke: rgb(189, 189, 189); stroke-linejoin: round; stroke-dasharray: 2;"></rect><rect id="Rectangle-79-4" data-name="Rectangle-79" x="264" y="13" width="39" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><path d="M303,42.5h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2ZM264.5,41h-1V39h1Zm39-1h-1V38h1Zm-39-3h-1V35h1Zm39-1h-1V34h1Zm-39-3h-1V31h1Zm39-1h-1V30h1Zm-39-3h-1V27h1Zm39-1h-1V26h1Zm-39-3h-1V23h1Zm39-1h-1V22h1Zm-39-3h-1V19h1Zm39-1h-1V18h1Zm-39-3h-1V15h1Zm39-1h-1V14h1ZM302,13.5h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path><rect id="Rectangle-79-5" data-name="Rectangle-79" x="18" y="13" width="39" height="29" class="icon--color-base" style="fill: rgb(211, 211, 211);"></rect><path d="M57,42.5H55v-1h2Zm-4,0H51v-1h2Zm-4,0H47v-1h2Zm-4,0H43v-1h2Zm-4,0H39v-1h2Zm-4,0H35v-1h2Zm-4,0H31v-1h2Zm-4,0H27v-1h2Zm-4,0H23v-1h2Zm-4,0H19v-1h2ZM18.5,41h-1V39h1Zm39-1h-1V38h1Zm-39-3h-1V35h1Zm39-1h-1V34h1Zm-39-3h-1V31h1Zm39-1h-1V30h1Zm-39-3h-1V27h1Zm39-1h-1V26h1Zm-39-3h-1V23h1Zm39-1h-1V22h1Zm-39-3h-1V19h1Zm39-1h-1V18h1Zm-39-3h-1V15h1Zm39-1h-1V14h1ZM56,13.5H54v-1h2Zm-4,0H50v-1h2Zm-4,0H46v-1h2Zm-4,0H42v-1h2Zm-4,0H38v-1h2Zm-4,0H34v-1h2Zm-4,0H30v-1h2Zm-4,0H26v-1h2Zm-4,0H22v-1h2Zm-4,0H18v-1h2Z" class="icon--color-dark" style="fill: rgb(189, 189, 189);"></path></svg>',
  content: `<table style="height:150px; width:100%">
  <tr>
    <td style="width:25%"></td>
    <td style="width:25%"></td>
    <td style="width:25%"></td>
    <td style="width:25%"></td>
  </tr>
  </table>`,
  }
];

const myNewComponentTypes = editor => {
  editor.DomComponents.addType('menu-item', {
    isComponent: el => el.name === 'menu-item',

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
            options: [{
                id: 'facebook-icon',
                name: 'Facebook'
              },
              {
                id: 'instagram-icon',
                name: 'Instagram'
              },
              {
                id: 'twitter-icon',
                name: 'twitter'
              },
              {
                id: 'linkedin-icon',
                name: 'LinkedIn'
              },
              {
                id: 'youtube-icon',
                name: 'Youtube'
              },
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

  var defaultType = editor.DomComponents.getType('default');
  var _initToolbar = defaultType.model.prototype.initToolbar;
  editor.DomComponents.addType('html-code', {
    model: defaultType.model.extend({
      initToolbar(args) {
        _initToolbar.apply(this, args);

        var toolbar = this.get("toolbar");
        toolbar.push({
          attributes: {
            "class": "fa fa-code"
          },
          command: "open-html-code-editor"
        });
        this.set("toolbar", toolbar);
      }
    }, {
      isComponent: el => {
        if (typeof el.hasAttribute == "function" && el.hasAttribute("data-html-code")) {
          return {
            type: "html-code"
          };
        }
      }
    }),
    view: defaultType.view
  });
};


const editor = grapesjs.init({
  container: '#gjs',
  height: '680px',
  width: 'auto',
  storageManager: false,
  plugins: [myNewComponentTypes],
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
          label: '<svg width="20" height="20" viewBox="0 0 18 16" fill="none"><path d="M16.4638 0.5H2.17808C1.38939 0.5 0.749512 1.12988 0.749512 1.90625V11.2812C0.749512 12.0576 1.38939 12.6875 2.17808 12.6875H7.89237L7.41618 14.0938H5.27332C4.87749 14.0938 4.55904 14.4072 4.55904 14.7969C4.55904 15.1865 4.87749 15.5 5.27332 15.5H13.3686C13.7644 15.5 14.0828 15.1865 14.0828 14.7969C14.0828 14.4072 13.7644 14.0938 13.3686 14.0938H11.2257L10.7495 12.6875H16.4638C17.2525 12.6875 17.8924 12.0576 17.8924 11.2812V1.90625C17.8924 1.12988 17.2525 0.5 16.4638 0.5ZM15.9876 10.8125H2.65427V2.375H15.9876V10.8125Z" fill="#000"></path></svg>',
          command: 'set-device-desktop',
          active: true,
          togglable: false,
        }, {
          id: 'custom-frame',
          className: 'fa fa-arrows-alt',
          command: 'customize-width',
          attributes: {
            title: 'Customize Frame',
            style: 'margin:0 auto;',
          },
      }, {
          id: 'device-mobile',
          label: '<svg width="20" height="20" viewBox="0 0 10 16" fill="none"><path d="M8.42338 0.5H1.75992C0.971605 0.5 0.332031 1.12988 0.332031 1.90625V14.0938C0.332031 14.8701 0.971605 15.5 1.75992 15.5H8.42338C9.21169 15.5 9.85126 14.8701 9.85126 14.0938V1.90625C9.85126 1.12988 9.21169 0.5 8.42338 0.5ZM5.09165 14.5625C4.56511 14.5625 4.13972 14.1436 4.13972 13.625C4.13972 13.1064 4.56511 12.6875 5.09165 12.6875C5.61818 12.6875 6.04357 13.1064 6.04357 13.625C6.04357 14.1436 5.61818 14.5625 5.09165 14.5625ZM8.42338 11.3984C8.42338 11.5918 8.26274 11.75 8.06641 11.75H2.11689C1.92055 11.75 1.75992 11.5918 1.75992 11.3984V2.25781C1.75992 2.06445 1.92055 1.90625 2.11689 1.90625H8.06641C8.26274 1.90625 8.42338 2.06445 8.42338 2.25781V11.3984Z" fill="#000"></path></svg>',
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
        }, {
          id: 'show-rows',
          active: true,
          label: 'Rows',
          command: 'show-rows',
          togglable: false,
        }],
      }
    ]
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
      open: true,
      buildProps: ['width', 'min-height', 'padding', 'margin', 'background-color', 'color', 'font-size', 'font', 'text-align', 'font-weight', 'border', 'border-radius', 'border-color'],
      properties: [{

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

        options: [{
            value: 'Cambria'
          },
          {
            value: 'Arial'
          },
          {
            value: 'serif'
          },
          {
            value: 'Georgia'
          },
          {
            value: 'Helvetica'
          }
        ]
      }, {
        id: 'text-align',
        name: 'Text align',
        property: 'text-align',
        defaults: 'left',

        options: [{
            value: 'left',
            name: 'Left',
            className: 'fa fa-align-left'
          },
          {
            value: 'center',
            name: 'Center',
            className: 'fa fa-align-center'
          },
          {
            value: 'right',
            name: 'Right',
            className: 'fa fa-align-right'
          },
          {
            value: 'justify',
            name: 'Justify',
            className: 'fa fa-align-justify'
          }
        ],

      }, ],
    }, ]
  },

  // storageManager: {
  //     type: 'local',
  //     options: {
  //         local: { key: `gjsProject` }
  //     }
  // },
  });

editor.RichTextEditor.add('unorderedList', {
  icon: '<i class="fa fa-list-ul" aria-hidden="true"></i>',
  attributes: {
    title: 'Unordered List'
  },
  result: rte => rte.exec('insertUnorderedList')
});

editor.Commands.add("open-html-code-editor", {
  run: (editor, sender, data) => {
    var component = editor.getSelected();
  
    var codeViewer = editor.CodeManager.getViewer("CodeMirror").clone();
    codeViewer.set({
      codeName: "htmlmixed",
      theme: "hopscotch",
      readOnly: false
    });
  
    var modalContent = document.createElement("div");
  
    var editorTextArea = document.createElement("textarea");
  
    var saveButton = document.createElement("button");
    saveButton.innerHTML = "Save";
    saveButton.className = "gjs-btn-prim";
    saveButton.style = "margin-top: 8px;";
    saveButton.onclick = () => {
      component.set("content", "");
      component.components(codeViewer.editor.getValue());
      editor.Modal.close();
    };
  
    modalContent.appendChild(editorTextArea);
    modalContent.appendChild(saveButton);
  
    codeViewer.init(editorTextArea);
  
    var htmlContent = document.createElement("div");
    htmlContent.innerHTML = component.toHTML();
    htmlContent = htmlContent.firstChild.innerHTML;
    codeViewer.setContent(htmlContent);
  
    editor.Modal
      .setTitle("Edit HTML")
      .setContent(modalContent)
      .open();
  
    codeViewer.editor.refresh();
  }
});

editor.Commands.add('set-device-desktop', {
  run: editor => editor.setDevice('Desktop')
});

editor.Commands.add('customize-width', {
  run: (editor, sender) => {
    var width = prompt('Enter the new width (in pixels):');
    var frame = editor.getWrapper();
    frame.setStyle({
      width: width + 'px',
      margin: '0 auto',
    });
  },
});

editor.Commands.add('set-device-mobile', {
  run: editor => editor.setDevice('Mobile')
});

editor.Commands.add('show-layers', {
  getRowEl(editor) {
    return editor.getContainer().closest('.editor-row');
  },
  getLayersEl(row) {
    return row.querySelector('.layers-container')
  },

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
  getRowEl(editor) {
    return editor.getContainer().closest('.editor-row');
  },
  getStyleEl(row) {
    return row.querySelector('.styles-container')
  },

  run(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = '';
  },
  stop(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = 'none';
  },
});

editor.Commands.add('show-rows', {
  getRowEl(editor) {
    return editor.getContainer().closest('.editor-row');
  },
  getStyleEl(row) {
    return row.querySelector('.rows-container')
  },

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
  getRowEl(editor) {
    return editor.getContainer().closest('.editor-row');
  },
  getStyleEl(row) {
    return row.querySelector('.blocks-container')
  },

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
  buttons: [{
    id: 'visibility',
    active: true,
    className: 'btn-toggle-borders',
    label: '<u>Borders</u>',
    command: 'sw-visibility',
  }, {
    id: 'chat-gpt',
    className: 'chatgpt',
    label: 'ChatGPT',
    context: 'Open Chatgpt',
    command(editor) {
      editor.Modal.setTitle('ChatGPT')
        .setContent(`<iframe src="chatgpt.html"style="width: 550px;height: 600px;"></iframe>`)
        .open();
    }
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
        .setContent(` 
          < textarea style = "width:100%; height: 250px;" >
          $ { JSON.stringify(editor.getComponents()) }
          </textarea>
        `)
        .open();
    },
  }],

});

document.getElementsByClassName('gjs-sm-sector-title')[0].remove();

const rowsEl = editor.BlockManager.render(rows_list, {
external: true
});
document.getElementsByClassName('rows-container')[0].appendChild(rowsEl);