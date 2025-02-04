(()=>{"use strict";var t={365:(t,e,n)=>{n.d(e,{A:()=>s});var o=n(601),r=n.n(o),a=n(314),c=n.n(a)()(r());c.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap);"]),c.push([t.id,"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]),c.push([t.id,"@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);"]),c.push([t.id,':root {\n\t--font-family-base: "Inter", "Helvetica Neue", system-ui, -apple-system, sans-serif;\n\t--font-family-icons: "FontAwesome";\n\t--primary-color: #f2f5f7;\n\t--secondary-color: #f9f9f9;\n\t--simply-white: #ffffff;\n\t--basic-black: #000000;\n\t--accent-color: #4f91fb;\n\t--accent-hover-color: #649fff;\n\t--text-color: #2d2d2d;\n\t--task-color: #ffffff;\n\t--add-task-bg-hover-color: #649fff;\n\t--hover-bg-color: rgba(21, 126, 251, 0.1);\n\t--color-red-dark: #ff3b30;\n\t--color-blue-light: #5ac8fa;\n\t--color-red-light: #ff9500;\n\t--color-gray-medium: #8e8e93;\n\t--color-gray-light: #d1d1d6;\n\t--color-gray-dark: #48484a;\n}\n\n*,\n*::after,\n*::before {\n\tbox-sizing: border-box;\n\tmargin: 0;\n}\n\nbody {\n\tmin-height: 100vh;\n\tline-height: 1.5;\n\tdisplay: flex;\n\toverflow: hidden;\n\tfont-family: var(--font-family-base);\n\tbackground-color: var(--primary-color);\n\tcolor: var(--text-color);\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n::placeholder {\n\tcolor: var(--text-color);\n}\n\nlabel {\n\tfont-weight: 500;\n\tmargin: 0 0 .5rem 0;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n\tfont: inherit;\n\tbackground-color: var(--simply-white);\n\tcolor: var(--text-color);\n\tborder: 1px solid var(--color-gray-light);\n}\n\ninput[type="text"],\ninput[type="date"],\ntextarea {\n\tfont-size: 1rem;\n\tpadding: 8px;\n\tborder-radius: 5px;\n\twidth: 100%;\n}\n\ninput[type="text"]:focus,\ninput[type="date"]:focus,\ntextarea:focus {\n\tborder: 1px solid var(--color-gray-medium);\n}\n\nbutton {\n\tbackground-color: var(--accent-color);\n\tcolor: var(--simply-white);\n\tborder: none;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tcursor: pointer;\n}\n\nbutton:hover {\n\tbackground-color: var(--accent-hover-color);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n\toverflow-wrap: break-word;\n}\n\nul {\n\tlist-style: none;\n\tpadding: 0;\n}\n\n.material-icons {\n    font-size: 24px;\n    vertical-align: middle;\n}\n\n.trash-button .material-icons {\n    font-size: 1.1rem;\n    color: var(--text-color);\n\tvertical-align: middle;\n}\n\n.complete-button .material-icons {\n    font-size: 18px;\n    color: var(--color-blue-light);\n}\n\n.user .material-icons {\n    font-size: inherit;\n    color: var(--text-color);\n}\n\nbutton .material-icons {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.lateral-menu {\n\tfont-size: 1rem;\n\tcolor: var(--text-color);\n\tbackground-color: var(--primary-color);\n\tflex: 0 0 300px;\n\tpadding: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n\ttransition: margin-left 1s;\n}\n\n.user {\n\tfont-size: 1.2rem;\n\tfont-weight: 500;\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n}\n\n.lateral-menu.closed {\n\tmargin-left: -300px;\n}\n\n.arrow-left-button {\n\tcursor: pointer;\n\tposition: absolute;\n\tcolor: var(--secondary-color);\n\tbackground-color: transparent;\n\tborder: none;\n\tpadding: 8px;\n\tright: 0;\n\ttransition: margin-right 1s;\n}\n\n.arrow-left-button:hover {\n\tcolor: var(--accent-hover-color);\n\tbackground-color: transparent;\n}\n\n.arrow-left-button.rotate {\n\ttransform: rotate(180deg);\n\tmargin-right: -70px;\n\tbackground-color: transparent;\n}\n\n.task-dialog-pen:hover,\n.task-dialog-trash:hover,\n.task-dialog-mark:hover,\n.trash-button:hover,\n.calendar-button:hover,\n.today-button:hover,\n.myprojects-element:hover {\n\tcolor: var(--simply-white);\n\tbackground-color: var(--accent-hover-color);\n}\n\n.arrow-left-button.rotate:hover {\n\tbackground-color: rgba(255, 255, 255, 0.1);\n}\n\n.calendar-button img,\n.today-button img,\n.add-task-general svg {\n\tdisplay: inline;\n\tmargin-right: 8px;\n\tvertical-align: text-bottom;\n}\n\n.add-task-general {\n\tborder: none;\n\tbackground-color: var(--accent-color);\n\tcolor: var(--task-color);\n\tfont-weight: 500;\n\tborder-radius: 5px;\n\tpadding: 10px;\n\ttext-align: left;\n\tcursor: pointer;\n\ttransition: all 0.2s;\n}\n\n.add-task-general:hover {\n\tbackground-color: var(--add-task-bg-hover-color);\n\ttransform: scale(1.05);\n}\n\nmain {\n\tcolor: var(--text-color);\n\tbackground-color: var(--simply-white);\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tpadding: 60px 50px;\n}\n\n.task-dialog,\n.project-creation-dialog,\n.name-dialog {\n\tbackground-color: var(--secondary-color);\n\tcolor: var(--text-color);\n\tborder-radius: 5px;\n\ttop: 30%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tborder: 0;\n\tmin-width: 330px;\n}\n\n.task-dialog {\n\twidth: 60%;\n\tmax-width: 380px;\n\tmin-width: 280px;\n}\n\n.general-task::backdrop,\n.task-dialog::backdrop,\n.project-creation-dialog::backdrop,\n.name-dialog::backdrop {\n\tbackground-color: rgb(0 0 0 / 40%);\n}\n\n.general-task {\n\tbackground-color: var(--secondary-color);\n\tcolor: var(--text-color);\n\tborder-radius: 5px;\n\ttop: 30%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\toutline: rgba(255, 255, 255, 0.1);\n\tbox-shadow: 0px 0px 5px grey;\n\tborder: 1px solid #a4a4a4;\n\twidth: 50%;\n\tmax-width: 480px;\n\tmin-width: 330px;\n}\n\n.name-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n}\n\n.name-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n\n.colors-select,\n.project-input,\n.name-input {\n\twidth: 300px;\n\tbackground-color: var(--simply-white);\n\tborder: 1px solid #a4a4a4;\n\tborder-radius: 5px;\n\tpadding: 8px 12px;\n\tcolor: var(--text-color);\n\toutline: none;\n}\n\n.colors-select:focus,\n.project-input:focus,\n.name-input:focus {\n\tborder: 2px solid #8cb4ff;\n}\n\n.save-edit,\n.cancel-edit,\n.add-task-form-general,\n.cancel-general-button,\n.cancel-project-button,\n.done-project-button,\n.name-submit {\n\twidth: fit-content;\n\tborder: none;\n\tpadding: 5px 10px;\n\tborder-radius: 5px;\n\tbackground-color: var(--accent-color);\n\tcolor: var(--simply-white);\n\tcursor: pointer;\n\tfont-size: inherit;\n\tfont-weight: 500;\n}\n\n.cancel-edit,\n.cancel-general-button,\n.main-add-task-button-cross,\n.cancel-project-button {\n\tbackground-color: var(--accent-color);\n\tcolor: var(--simply-white);\n}\n\n.save-edit:hover,\n.add-task-form-general:hover,\n.done-project-button:hover,\n.name-submit:hover {\n\tbackground-color: var(--accent-hover-color);\n\tcolor: var(--simply-white);\n}\n\n.cancel-edit:hover,\n.cancel-general-button:hover,\n.main-add-task-button-cross:hover,\n.cancel-project-button:hover {\n\tbackground-color: var(--accent-hover-color);\n}\n\n.save-edit:disabled,\n.main-add-task-button-send:disabled,\n.done-project-button:disabled,\n.name-submit:disabled {\n\tbackground-color: var(--accent-color);\n\tcolor: var(--simply-white);\n\tcursor: not-allowed;\n}\n\n.main-add-task-button-send:hover {\n\tbackground-color: var(--accent-hover-color);\n}\n\n.myprojects-menu {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: .5rem;\n}\n\n.myprojects-title {\n\tfont-weight: bold;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmargin-bottom: 5px;\n}\n\n.myprojects-icons {\n\tdisplay: flex;\n\tgap: 4px;\n}\n\n.myprojects-element {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: var(--text-color);\n    background-color: var(--primary-color);\n    padding: 8px 10px;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: background-color 0.2s;\n}\n\n.myprojects-element:hover {\n\tcolor: var(--text-color);\n    background-color: var(--secondary-color);\n}\n\n.trash-button {\n    background-color: transparent;\n    border: none;\n    padding: 0;\n    cursor: pointer;\n    display: none; /* Initially hidden */\n}\n\n.myprojects-element:hover .trash-button {\n    display: flex; /* Show on hover */\n    align-items: center;\n    justify-content: center;\n\tbackground-color: transparent;\n}\n\n.myprojects-element:hover .num-tasks-in-button {\n    display: none; /* Hide on hover */\n}\n\n.num-tasks-in-button {\n    font-weight: 300;\n    display: inline-flex; /* Ensure it stays inline */\n    align-items: center;\n    justify-content: center;\n}\n\n.add-project-icon,\n.arrow-down {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.color {\n\theight: 12px;\n\twidth: 12px;\n\tborder-radius: 5px;\n\tmargin-right: 8px;\n\tdisplay: inline-block;\n}\n\n.red {\n\tbackground-color: #fb6b6b;\n}\n\n.blue {\n\tbackground-color: #5858fd;\n}\n\n.orange {\n\tbackground-color: #fdc058;\n}\n\n.purple {\n\tbackground-color: #be58fd;\n}\n\n.yellow {\n\tbackground-color: #f2fd58;\n}\n\n.span-color {\n\twidth: 20px;\n\theight: 20px;\n}\n\n.myprojects-icons button,\n.arrow-down button {\n\tborder: none;\n\tbackground-color: transparent;\n\tcolor: var(--text-color);\n\tcursor: pointer;\n\tpadding: 7px;\n}\n\n.myprojects-icons button:hover,\n.arrow-down button:hover {\n\tcolor: var(--accent-color);\n}\n\n.task-main-info.not-display,\n.task-form-info.not-display,\n.complete-svg.not-display,\n.num-tasks-in-button.not-display,\n.trash-button.not-display,\n.main-tasks-project.not-display,\n.main-tasks-today.not-display,\n.date-main-add-task.not-display,\n.today-date.not-display,\n.breadcrumb.not-display,\n.main-add-task.not-display,\n.main-add-task-form.not-display,\n.myprojects-element.not-display {\n\tdisplay: none;\n}\n\n.arrow-down.not-display {\n\ttransform: rotate(-90deg);\n}\n\n.separator {\n\tborder: 1px solid #cdcdcd30;\n\twidth: 100%;\n}\n\n.project-creation-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 15px;\n}\n\n.project-creation-buttons {\n\tdisplay: flex;\n\tgap: 10px;\n\tjustify-content: end;\n}\n\n.project-creation-form-element {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.project-input-count {\n\talign-self: end;\n}\n\n.project-creation-title {\n\tfont-weight: bold;\n}\n\n.trash-button,\n.myprojects-element,\n.calendar-button,\n.today-button {\n\twidth: 100%;\n\tborder: none;\n\tbackground-color: var(--accent-color);\n\tcolor: var(--simply-white);\n\tborder-radius: 5px;\n\tfont-weight: 400;\n\ttext-align: left;\n\tcursor: pointer;\n}\n\n.myprojects-element,\n.today-button {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tcolor: var(--text-color);\n\tbackground-color: var(--primary-color);\n}\n\n.active {\n\tcolor: var(--text-color);\n\tbackground-color: var(--secondary-color);\n}\n\n.number-task {\n\tfont-size: 0.8rem;\n\tcolor: #cdcdcd;\n}\n\n.main-add-task {\n\tbackground-color: var(--primary-color);\n\tborder: none;\n\tcolor: var(--text-color);\n\tfont-weight: 500;\n\tborder-radius: 5px;\n\tpadding: 5px;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 15px;\n\tcursor: pointer;\n}\n\n.main-add-task:hover {\n\tcolor: var(--text-color);\n\tbackground-color: var(--secondary-color);\n}\n\n.main-add-task-form {\n\tpadding: 15px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-self: center;\n\twidth: 350px;\n\tgap: 10px;\n\tbackground-color: var(--secondary-color);\n\tcolor: var(--text-color);\n\tborder-radius: 5px;\n\t/* box-shadow: 3px 3px 15px black; */\n\tborder: 1px solid var(--color-gray-light);\n}\n\n.title-input,\n.description-input {\n\toutline: none;\n\tresize: none;\n\toverflow: hidden;\n\tmargin: .25rem 0;\n}\n\n.general-task-priority,\n.general-task-date,\n.date-main-add-task,\n.select-main-add-task {\n\tfont-family: "FontAwesome", "Inter";\n\twidth: 50%;\n\theight: 30px;\n\tbackground-color: var(--simply-white);\n\tborder-radius: 5px;\n\tcolor: var(--text-color);\n\toutline: none;\n\tcursor: pointer;\n\tfont-size: 0.8rem;\n}\n\n.general-task-date,\n.date-main-add-task {\n\twidth: 110px;\n}\n\n.task-dialog-pen,\n.task-dialog-trash,\n.task-dialog-mark,\n.main-add-task-button-cross,\n.main-add-task-button-send {\n\tborder: none;\n\tpadding: 5px;\n\tborder-radius: 5px;\n\tcursor: pointer;\n}\n\n.task {\n\toverflow-wrap: anywhere;\n\tpadding: 15px;\n\tdisplay: flex;\n\tgap: 5px;\n\twidth: 230px;\n\tmin-height: 70px;\n\theight: auto;\n\tborder: 1px solid var(--color-gray-light);\n\tcolor: var(--text-color);\n\tborder-radius: 5px;\n\tbackground-color: var(--simply-white);\n\tcursor: pointer;\n\ttransition: all 0.3s;\n\tfont-size: 0.9rem;\n}\n\n.task:hover {\n\tborder: 1px solid var(--accent-color);\n\tbox-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);\n}\n\n.main-tasks-project,\n.main-tasks-today {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n\n.task-form-edit,\n.task-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5px;\n}\n\n.task-header {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n\n.task-parent {\n\tfont-weight: 200;\n\tfont-size: 0.8rem;\n}\n\n.task-title,\ntask-description {\n\tword-break: break-word;\n}\n\n.task-content {\n\tmargin-top: 10px;\n\tmargin-bottom: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n}\n\n.task-priority {\n\tmargin-top: 10px;\n}\n\n.task-subdiv {\n\tdisplay: flex;\n\tgap: 5px;\n\tmargin-top: 5px;\n\topacity: 0.5;\n}\n\n.breadcrumb {\n\tfont-size: 0.8rem;\n\tposition: absolute;\n\tmargin-left: -20px;\n\ttop: 23px;\n\ttransition: all 1s;\n}\n\n.breadcrumb.closed {\n\tmargin-left: 10px;\n}\n\n.task-buttons {\n\tdisplay: flex;\n\tgap: 5px;\n}\n\n.task-dialog-pen,\n.task-dialog-trash,\ntask-dialog-mark {\n\tbackground-color: var(--accent-color);\n\tcolor:var(--simply-white);\n}\n\n.task-dialog-pen,\n.task-dialog-trash {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.complete-button {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 0px;\n\tflex: none;\n\twidth: 16px;\n\theight: 16px;\n\tborder-radius: 999px;\n\tmargin-top: 3px;\n\tbackground-color: #333333;\n\tborder: 1px solid #cdcdcd;\n\tcursor: pointer;\n\ttransition: all 0.3s;\n}\n\n.complete-button:hover {\n\tborder: 1px solid white;\n\tbackground-color: #252525;\n}\n\n.complete-button:hover .complete-svg.not-display {\n\tdisplay: block;\n}\n\n.message-task {\n\tpadding: 15px 50px;\n\tborder-radius: 5px;\n\tcolor: white;\n\tbackground-color: #666666;\n\tposition: absolute;\n\tfont-size: 0.9rem;\n\tbottom: -1000px;\n\tleft: 50px;\n\ttransition: bottom 0.5s ease;\n\tbox-shadow: 2px 2px 5px black;\n\tborder: 1px solid #a4a4a485;\n}\n\n.message-task.active {\n\tbottom: 50px;\n}\n\n.general-task-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n\n.general-down-task {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.general-top-task {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5px;\n}\n\n.general-top-second {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.general-task-project {\n\twidth: 110px;\n\theight: 30px;\n\tfont-weight: 500;\n\tpadding: 5px 10px;\n\tbackground-color: var(--simply-white);\n\tborder-radius: 5px;\n\tcolor: var(--text-color);\n\toutline: none;\n\tcursor: pointer;\n\tfont-size: 0.8rem;\n}\n\n.task-description-edit,\n.general-description {\n\tfont-size: inherit;\n}\n\n.task-title-edit,\n.task-description-edit,\n.general-task-name,\n.general-description {\n\tcolor: var(--text-color);\n\toutline: none;\n\tresize: none;\n\toverflow: hidden;\n\tbackground-color: var(--simply-white);\n}\n\n.task-form-info {\n\tborder: 1px solid #cdcdcd;\n\tpadding: 10px;\n\tborder-radius: 5px;\n}\n\n.edit-buttons {\n\talign-self: end;\n}\n\n@media (max-width: 560px) {\n\t.lateral-menu {\n\t\tflex: 0 0 200px;\n\t\tpadding: 30px 15px;\n\t}\n\n\t.lateral-menu.closed {\n\t\tmargin-left: -200px;\n\t}\n\n\tmain {\n\t\tpadding: 60px 30px;\n\t}\n\n\t.breadcrumb {\n\t\ttop: 33px;\n\t\tmargin-left: -10px;\n\t}\n\n\t.breadcrumb.closed {\n\t\tmargin-left: 30px;\n\t}\n\n\t.description-input {\n\t\twidth: 200px;\n\t}\n\n\t.task-title-edit,\n\t.title-input {\n\t\twidth: 150px;\n\t}\n}\n',""]);const s=c},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(o)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},c=[],s=0;s<t.length;s++){var i=t[s],l=o.base?i[0]+o.base:i[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var y=r(m,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:y,references:1})}c.push(u)}return c}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var c=0;c<a.length;c++){var s=n(a[c]);e[s].references--}for(var i=o(t,r),l=0;l<a.length;l++){var d=n(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=i}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.p="./",n.nc=void 0;var o=n(72),r=n.n(o),a=n(825),c=n.n(a),s=n(659),i=n.n(s),l=n(56),d=n.n(l),u=n(540),p=n.n(u),m=n(113),y=n.n(m),g=n(365),f={};f.styleTagTransform=y(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=c(),f.insertStyleElement=p(),r()(g.A,f),g.A&&g.A.locals&&g.A.locals;class k{constructor(t){this.name=t}}class h{constructor(t,e,n){this.name=t,this.color=e,this.tasks=n}}class v{constructor(t,e){this.projects=t,this.user=e}pushNewDataManager(){const t=new v(this.projects,this.user);localStorage.setItem("DataManagerEasyTasks",JSON.stringify(t))}addProject(t,e){if(!this.projects.find((e=>e.name===t))&&""!==t){const n=new h(t,e,[]);this.projects.push(n),this.pushNewDataManager()}}removeProject(t){this.projects=this.projects.filter((e=>e.name!==t)),this.pushNewDataManager()}addUser(t){this.user=new k(t),this.projects=[new h("My Tasks","red",[])],this.pushNewDataManager()}addTask(t,e){const n=this.projects.find((t=>t.name===e));n.tasks.push(t),this.projects=this.projects.map((t=>t.name===e?n:t)),this.pushNewDataManager()}removeTask(t,e){const n=this.projects.find((t=>t.name===e));n.tasks=n.tasks.filter((e=>e.id!==t)),this.projects.map((t=>t.name===e?n:t)),this.pushNewDataManager()}editTask(t,e){this.projects.map((n=>n.tasks.map((n=>n.id===t?e:n)))),this.pushNewDataManager()}getFormattedDate(t){return new Date(t).toLocaleDateString("en-GB",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}getToday(){return(new Date).toLocaleDateString("en-GB",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}getTodayTask(){let t=0;const e=this.getToday();return this.projects.forEach((n=>{n.tasks.forEach((n=>{n.date===e&&t++}))})),t}getProjectTasks(t){let e=0;return this.projects.find((e=>e.name===t)).tasks.forEach((t=>e++)),e}getTaskById(t){for(const e of this.projects)for(const n of e.tasks)if(n.id===t)return n;return null}}const b=(t,e)=>{const n=document.querySelector(t),o=document.querySelector(e);o.addEventListener("input",(()=>{o.value.length>2?n.disabled=!1:n.disabled=!0}))},x=(t,e)=>{document.querySelector(t).textContent=e},w=t=>{S(),document.querySelector(t).classList.add("active")},S=()=>{document.querySelector(".active")&&document.querySelector(".active").classList.toggle("active")},q=t=>{const e=document.querySelector(t);e.addEventListener("input",(()=>{e.style.height="auto",e.style.height=`${e.scrollHeight}px`}))},j=t=>{const e=document.querySelector(t);e.elements[0].style.height="auto",e.elements[1].style.height="auto",e.reset()},L=t=>{let e="";for(let n=0;n<t;n++)e+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(52*Math.random())];return e};class T{constructor(t,e,n,o,r,a){this.id=t,this.title=e,this.description=n,this.date=o,this.priority=r,this.status=a}}const E=n.p+"2bd722b2050e28d91159.wav";function C(t){const e=e=>{document.querySelector(".number-task").textContent=`${"today"===e?t.getTodayTask():t.getProjectTasks(e)} ${t.getTodayTask().length>1?"tasks":"task"}`},n=t=>{const e=document.querySelector("main"),n=document.querySelector(".main-add-task");document.querySelector(t).remove();const o=document.createElement("div");o.classList=t.replace(".",""),e.insertBefore(o,n)},o=(t,e)=>{const n=document.querySelector(e),o=document.createElement("div");o.classList=`task ${t.id}`,o.textContent=t.title;const a=document.createElement("button");a.classList="complete-button";const c=document.createElement("img");c.classList.add("material-icons"),c.textContent="check_circle",c.classList="complete-svg not-display",a.appendChild(c),o.prepend(a),n.appendChild(o),o.addEventListener("click",i),a.addEventListener("click",r)},r=t=>{t.stopPropagation(),new Audio(E).play();const e=document.querySelector(`.${t.currentTarget.parentNode.classList[1]}`),n=t.currentTarget.parentNode.parentNode.parentNode.querySelector(".page-title").textContent;e.style.textDecoration="line-through",e.style.border="1px solid white",t.currentTarget.style.width="18px",t.currentTarget.style.height="18px",t.currentTarget.firstChild.style.display="block",t.currentTarget.style.backgroundColor="#252525";const o=document.querySelector(".message-task");o.classList.add("active"),setTimeout((()=>{y(e.classList[1],"Today"===n?"My Tasks":n),o.classList.remove("active")}),2e3),e.removeEventListener("click",i),t.currentTarget.removeEventListener("click",r)},a=e=>{"today"===e?(n(".main-tasks-today"),t.projects.forEach((e=>e.tasks.forEach((e=>{e.date===t.getToday()&&o(e,".main-tasks-today")}))))):(n(".main-tasks-project"),t.projects.forEach((t=>{if(t.name===e)return t.tasks.forEach((t=>o(t,".main-tasks-project")))})))},c=t=>{b(".main-add-task-button-send",".title-input"),document.querySelector(".title-input").dispatchEvent(new Event("input")),j(".main-add-task-form"),q(".title-input"),q(".description-input"),document.querySelector(".main-add-task").classList.toggle("not-display"),document.querySelector(".main-add-task-form").classList.toggle("not-display")},s=(n,r,a,c,s)=>{if("Today"===s){const c=new T(L(10),n.value,r.value,t.getToday(),a.value,"");t.addTask(c,"My Tasks"),e("today"),x(".num-tasks-in-button.today",t.getTodayTask()),x(".num-tasks-in-button.MyTasks",t.getProjectTasks("My Tasks")),o(c,".main-tasks-today")}else{const i=new T(L(10),n.value,r.value,t.getFormattedDate(c.value),a.value,"");t.addTask(i,s),e(s),o(i,".main-tasks-project"),x(".num-tasks-in-button.today",t.getTodayTask()),x(`.num-tasks-in-button.${s.replaceAll(" ","")}`,t.getProjectTasks(s))}},i=e=>{const n=e.currentTarget.classList[1],o=t.getTaskById(n);document.querySelector(".task-dialog").showModal(),document.querySelector(".task-div").classList.add(n);const r=document.querySelector(".breadcrumb");let a="";1===r.classList.length&&(a=r.textContent),document.querySelector(".task-parent").textContent=`${a} ${document.querySelector(".page-title").textContent} /`,document.querySelector(".task-title").textContent=o.title,document.querySelector(".task-description").textContent=o.description?o.description:"Description",document.querySelector(".task-priority-value").textContent=o.priority.toUpperCase(),document.querySelector(".task-date").textContent=o.date,document.querySelector(".task-dialog-mark").addEventListener("click",p),document.querySelector(".task-dialog-trash").addEventListener("click",m),document.querySelector(".task-main-info").addEventListener("click",l)},l=()=>{u(),q(".task-title-edit"),q(".task-description-edit");const t=document.querySelector(".task-title"),e=document.querySelector(".task-description");document.querySelector(".task-title-edit").textContent=t.textContent,document.querySelector(".task-description-edit").textContent="Description"===e.textContent?"":e.textContent,document.querySelector(".task-form-edit").addEventListener("submit",d),b(".save-edit",".task-title-edit"),document.querySelector(".cancel-edit").addEventListener("click",u)},d=e=>{e.preventDefault();const n=e.currentTarget.parentNode.parentNode.parentNode.classList[1],o=t.getTaskById(n),r=document.querySelector(".task-title-edit"),a=document.querySelector(".task-description-edit");o.title=r.value,o.description=a.value,t.editTask(n,o);const c=document.querySelector(".task-title"),s=document.querySelector(".task-description");c.textContent=r.value,s.textContent=a.value;const i=document.querySelector(`.task.${n}`),l=document.querySelector(".complete-button");i.textContent=r.value,i.prepend(l),u()},u=()=>{j(".task-form-edit");const t=document.querySelector(".task-form-info");t.classList.toggle("not-display"),document.querySelector(".task-main-info").classList.toggle("not-display"),2===t.classList.length&&(document.querySelector(".cancel-edit").removeEventListener("click",u),document.querySelector(".task-form-edit").removeEventListener("submit",d))},p=()=>{const t=document.querySelector(".task-dialog"),e=document.querySelector(".task-div"),n=document.querySelector(".task-dialog-mark"),o=document.querySelector(".task-dialog-trash"),r=document.querySelector(".task-main-info");n.removeEventListener("click",p),o.removeEventListener("click",m),2===r.classList.length&&u(),r.removeEventListener("click",l),e.classList.remove(e.classList[1]),t.close()},m=t=>{const e=t.currentTarget.parentNode.parentNode.querySelector(".task-parent").textContent;let n="";n=e.includes("Today")?"My Tasks":e.split("/")[1].trim();const o=t.currentTarget.parentNode.parentNode.parentNode.classList[1];y(o,n),p()},y=(n,o)=>{t.removeTask(n,o),document.querySelector(`.task.${n}`).remove(),e("My Tasks"===o?"today":o),x(".num-tasks-in-button.today",t.getTodayTask()),x(`.num-tasks-in-button.${o.replaceAll(" ","")}`,t.getProjectTasks(o))},g=t=>{t.preventDefault();const e=document.querySelector(".general-task");document.querySelector(".cancel-general-button").removeEventListener("click",g),e.close()};return{init:n=>{a(n),e(n),(()=>{const e=document.querySelector(".general-task"),n=document.querySelector(".add-task-general"),o=document.querySelector(".cancel-general-button"),r=document.querySelector(".general-task-form");n.addEventListener("click",(()=>{q(".general-task-name"),q(".general-description"),(()=>{const e=document.querySelector(".general-task-project");e.innerHTML="",t.projects.forEach((t=>{const n=document.createElement("option");n.textContent=t.name,n.value=t.name,e.appendChild(n)}))})(),e.showModal(),r.addEventListener("submit",(t=>{t.preventDefault();const n=document.querySelector(".general-task-name"),o=document.querySelector(".general-description"),r=document.querySelector(".general-task-priority"),a=document.querySelector(".general-task-date"),c=document.querySelector(".general-task-project");s(n,o,r,a,c.value),e.close()})),o.addEventListener("click",g)}))})(),document.querySelector(".main-add-task").addEventListener("click",c),(()=>{const t=document.querySelector(".main-add-task-form"),e=document.querySelector(".title-input"),n=document.querySelector(".description-input"),o=document.querySelector(".select-main-add-task"),r=document.querySelector(".date-main-add-task");t.addEventListener("submit",(t=>{t.preventDefault();const a=document.querySelector(".page-title").textContent;s(e,n,o,r,a),c()}))})(),document.querySelector(".main-add-task-button-cross").addEventListener("click",c)},createTasksElements:a,setNumberOfTasks:e}}function M(t){const e=C(t),n=t=>{t.preventDefault();const e=document.querySelector(".project-creation-dialog"),o=document.querySelector(".project-creation-form"),r=document.querySelector(".cancel-project-button"),a=document.querySelector(".project-input");j(".project-creation-form"),a.dispatchEvent(new Event("input")),e.close(),r.removeEventListener("click",n),o.removeEventListener("submit",c)},o=(e,n)=>{const o=document.querySelector(".myprojects-menu"),c=document.createElement("li");c.classList=`li-element ${e.replaceAll(" ","")}`;const s=document.createElement("div");s.textContent=e,s.classList="project-name";const i=document.createElement("div"),l=document.createElement("span");l.textContent=t.getProjectTasks(e),l.classList=`${e.replaceAll(" ","")} num-tasks-in-button`;const d=document.createElement("button");d.classList=`myprojects-element ${e.replaceAll(" ","")}`;const u=document.createElement("span");u.classList=`color ${n}`;const p=document.createElement("button");p.classList=`${e.replaceAll(" ","")} trash-button not-display`;const m=document.createElement("span");m.classList.add("material-icons"),m.textContent="delete",p.appendChild(m),i.appendChild(l),i.appendChild(p),s.prepend(u),d.appendChild(s),d.appendChild(i),c.appendChild(d),o.appendChild(c),c.addEventListener("click",r),"My Tasks"!==e&&(c.addEventListener("mouseenter",(()=>{p.classList.remove("not-display"),l.classList.add("not-display")})),c.addEventListener("mouseleave",(()=>{p.classList.add("not-display"),l.classList.remove("not-display")})),p.addEventListener("click",a))},r=n=>{const o=n.currentTarget.querySelector(".project-name").textContent;w(`.myprojects-element.${o.replaceAll(" ","")}`),document.querySelector(".breadcrumb").classList.remove("not-display"),document.querySelector(".page-title").textContent=o,document.querySelector(".today-date").classList.add("not-display"),document.querySelector(".date-main-add-task").classList.remove("not-display"),document.querySelector(".number-task").textContent=`${t.getProjectTasks(o)} ${t.getTodayTask().length>1?"tasks":"task"}`,document.querySelector(".main-tasks-project").classList.remove("not-display"),document.querySelector(".main-tasks-today").classList.add("not-display"),e.createTasksElements(o),e.setNumberOfTasks(o)},a=e=>{if(confirm("Remove the project and its tasks!?")){const n=e.currentTarget.parentNode.parentNode.firstChild.textContent,o=document.querySelector(`.li-element.${n.replaceAll(" ","")}`);o.removeEventListener("click",r),document.querySelector(".today-button").click(),t.removeProject(n),o.remove()}},c=e=>{e.preventDefault(),console.log(e.currentTarget);const n=document.querySelector(".project-creation-dialog"),r=document.querySelector(".project-input"),a=document.querySelector(".colors-select");t.addProject(r.value,a.value),o(r.value,a.value),j(".project-creation-form"),n.close()};return{init:()=>{t.projects.forEach((t=>{o(t.name,t.color)})),(()=>{const t=document.querySelector(".add-project-icon"),e=document.querySelector(".project-creation-dialog"),o=document.querySelector(".cancel-project-button"),r=document.querySelector(".project-creation-form");t.addEventListener("click",(()=>{(()=>{const t=document.querySelector(".project-input"),e=document.querySelector(".project-input-count");t.addEventListener("input",(t=>{e.textContent=`${t.target.value.length}/20`}))})(),b(".done-project-button",".project-input"),e.showModal(),r.addEventListener("submit",c),o.addEventListener("click",n)}))})()},createProjectElement:o}}!function(){const t=localStorage.getItem("DataManagerEasyTasks")?JSON.parse(localStorage.getItem("DataManagerEasyTasks")).user:new k("User"),e=localStorage.getItem("DataManagerEasyTasks")?JSON.parse(localStorage.getItem("DataManagerEasyTasks")).projects:[],n=new v(e,t);M(n).init(n),document.querySelector(".arrow-left-button").addEventListener("click",(()=>{document.querySelector(".lateral-menu").classList.toggle("closed"),document.querySelector(".arrow-left-button").classList.toggle("rotate"),document.querySelector(".breadcrumb").classList.toggle("closed")})),(()=>{const t=document.querySelector(".arrow-down");t.addEventListener("click",(()=>{t.classList.toggle("not-display"),document.querySelectorAll(".myprojects-element").forEach((t=>t.classList.toggle("not-display")))}))})(),function(t){const e=M(t),n=()=>{document.querySelector(".user-name").textContent=t.user.name};return{init:()=>{n(),(()=>{if(!localStorage.getItem("DataManagerEasyTasks")){const o=document.querySelector(".name-dialog"),r=document.querySelector(".name-form"),a=document.querySelector(".name-input"),c=r=>{r.preventDefault(),t.addUser(a.value),n(),e.createProjectElement("My Tasks","red"),o.close()};r.addEventListener("submit",c),b(".name-submit",".name-input"),o.showModal()}})()}}}(n).init(),function(t){const e=C(t),n=()=>{document.querySelector(".today-date").textContent=t.getToday()},o=()=>{document.querySelector(".today-button").addEventListener("click",(()=>{w(".today-button"),document.querySelector(".breadcrumb").classList.add("not-display"),document.querySelector(".page-title").textContent="Today",document.querySelector(".today-date").classList.remove("not-display");const t=document.querySelector(".date-main-add-task");t.classList.add("not-display"),t.required=!1,document.querySelector(".main-tasks-project").classList.add("not-display"),document.querySelector(".main-tasks-today").classList.remove("not-display"),e.setNumberOfTasks("today"),e.createTasksElements("today")}))};return{setTodayDate:n,init:()=>{n(),o(),w(".today-button"),x(".num-tasks-in-button.today",t.getTodayTask())},addListenerTodayButton:o}}(n).init(),C(n).init("today")}()})();