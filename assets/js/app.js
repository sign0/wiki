"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function setInputSelection(e,t,o){if(e.focus(),"undefined"!=typeof e.selectionStart)e.selectionStart=t,e.selectionEnd=o;else if(document.selection&&document.selection.createRange){e.select();var n=document.selection.createRange();n.collapse(!0),n.moveEnd("character",o),n.moveStart("character",t),n.select()}}function makeSafePath(e){var t=_.split(_.trim(e),"/");return t=_.map(t,function(e){return _.kebabCase(_.deburr(_.trim(e)))}),_.join(_.filter(t,function(e){return!_.isEmpty(e)}),"/")}var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();jQuery(document).ready(function(e){var t=this;e("a").smoothScroll({speed:400,offset:-70});new Sticky(".stickyscroll");e(window).bind("beforeunload",function(){e("#notifload").addClass("active")}),e(document).ajaxSend(function(){e("#notifload").addClass("active")}).ajaxComplete(function(){e("#notifload").removeClass("active")});var o=new Alerts;alertsData&&_.forEach(alertsData,function(e){o.push(e)});var n=io(window.location.origin);if(e("#search-input").length){e("#search-input").focus(),e(".searchresults").css("display","block");var i=new Vue({el:"#header-container",data:{searchq:"",searchres:[],searchsuggest:[],searchload:0,searchactive:!1,searchmoveidx:0,searchmovekey:"",searchmovearr:[]},watch:{searchq:function(e,t){i.searchmoveidx=0,e.length>=3?(i.searchactive=!0,i.searchload++,n.emit("search",{terms:e},function(e){i.searchres=e.match,i.searchsuggest=e.suggest,i.searchmovearr=_.concat([],i.searchres,i.searchsuggest),i.searchload>0&&i.searchload--})):(i.searchactive=!1,i.searchres=[],i.searchsuggest=[],i.searchmovearr=[],i.searchload=0)},searchmoveidx:function(e,t){e>0?i.searchmovekey=i.searchmovearr[e-1]?"res."+i.searchmovearr[e-1]._id:"sug."+i.searchmovearr[e-1]:i.searchmovekey=""}},methods:{useSuggestion:function(e){i.searchq=e},closeSearch:function(){i.searchq=""},moveSelectSearch:function(){if(!(i.searchmoveidx<1)){var e=i.searchmoveidx-1;i.searchmovearr[e]?window.location.assign("/"+i.searchmovearr[e]._id):i.searchq=i.searchmovearr[e]}},moveDownSearch:function(){i.searchmoveidx<i.searchmovearr.length&&i.searchmoveidx++},moveUpSearch:function(){i.searchmoveidx>0&&i.searchmoveidx--}}});e("main").on("click",i.closeSearch)}if(e("#page-type-view").length&&!function(){var t="home"!==e("#page-type-view").data("entrypath")?e("#page-type-view").data("entrypath"):"",n=t+"/new-page";e(".btn-create-prompt").on("click",function(o){e("#txt-create-prompt").val(n),e("#modal-create-prompt").toggleClass("is-active"),setInputSelection(e("#txt-create-prompt").get(0),t.length+1,n.length),e("#txt-create-prompt").removeClass("is-danger").next().addClass("is-hidden")}),e("#txt-create-prompt").on("keypress",function(t){13===t.which&&e(".btn-create-go").trigger("click")}),e(".btn-create-go").on("click",function(t){var o=makeSafePath(e("#txt-create-prompt").val());_.isEmpty(o)?e("#txt-create-prompt").addClass("is-danger").next().removeClass("is-hidden"):(e("#txt-create-prompt").parent().addClass("is-loading"),window.location.assign("/create/"+o))}),""!==t&&e(".btn-move-prompt").removeClass("is-hidden");var i=_.lastIndexOf(t,"/")+1;e(".btn-move-prompt").on("click",function(o){e("#txt-move-prompt").val(t),e("#modal-move-prompt").toggleClass("is-active"),setInputSelection(e("#txt-move-prompt").get(0),i,t.length),e("#txt-move-prompt").removeClass("is-danger").next().addClass("is-hidden")}),e("#txt-move-prompt").on("keypress",function(t){13===t.which&&e(".btn-move-go").trigger("click")}),e(".btn-move-go").on("click",function(n){var i=makeSafePath(e("#txt-move-prompt").val());_.isEmpty(i)||i===t||"home"===i?e("#txt-move-prompt").addClass("is-danger").next().removeClass("is-hidden"):(e("#txt-move-prompt").parent().addClass("is-loading"),e.ajax(window.location.href,{data:{move:i},dataType:"json",method:"PUT"}).then(function(e,t,n){e.ok?window.location.assign("/"+i):o.pushError("Something went wrong",e.error)},function(e,t,n){o.pushError("Something went wrong","Save operation failed.")}))})}(),e("#page-type-create").length){var a;!function(){var i=e("#page-type-create").data("entrypath");e(".btn-create-discard").on("click",function(t){e("#modal-create-discard").toggleClass("is-active")}),1===e("#mk-editor").length&&!function(){var r=!1;Vue.filter("filesize",function(e){return _.toUpper(filesize(e))});var l=new Vue({el:"#modal-editor-image",data:{isLoading:!1,isLoadingText:"",newFolderName:"",newFolderShow:!1,newFolderError:!1,fetchFromUrlURL:"",fetchFromUrlShow:!1,folders:[],currentFolder:"",currentImage:"",currentAlign:"left",images:[],uploadSucceeded:!1,postUploadChecks:0,renameImageShow:!1,renameImageId:"",renameImageFilename:"",deleteImageShow:!1,deleteImageId:"",deleteImageFilename:""},methods:{open:function(){r=!0,e("#modal-editor-image").addClass("is-active"),l.refreshFolders()},cancel:function(t){r=!1,e("#modal-editor-image").removeClass("is-active")},selectImage:function(e){l.currentImage=e},insertImage:function(e){a.codemirror.doc.somethingSelected()&&a.codemirror.execCommand("singleSelection");var t=_.find(l.images,["_id",l.currentImage]);t.normalizedPath="f:"===t.folder?t.filename:t.folder.slice(2)+"/"+t.filename,t.titleGuess=_.startCase(t.basename);var o="!["+t.titleGuess+"](/uploads/"+t.normalizedPath+' "'+t.titleGuess+'")';switch(l.currentAlign){case"center":o+="{.align-center}";break;case"right":o+="{.align-right}";break;case"logo":o+="{.pagelogo}"}a.codemirror.doc.replaceSelection(o),l.cancel()},newFolder:function(t){l.newFolderName="",l.newFolderError=!1,l.newFolderShow=!0,_.delay(function(){e("#txt-editor-image-newfoldername").focus()},400)},newFolderDiscard:function(e){l.newFolderShow=!1},newFolderCreate:function(e){var t=new RegExp("^[a-z0-9][a-z0-9-]*[a-z0-9]$");return l.newFolderName=_.kebabCase(_.trim(l.newFolderName)),_.isEmpty(l.newFolderName)||!t.test(l.newFolderName)?void(l.newFolderError=!0):(l.newFolderDiscard(),l.isLoadingText="Creating new folder...",l.isLoading=!0,void Vue.nextTick(function(){n.emit("uploadsCreateFolder",{foldername:l.newFolderName},function(e){l.folders=e,l.currentFolder=l.newFolderName,l.images=[],l.isLoading=!1})}))},fetchFromUrl:function(t){l.fetchFromUrlURL="",l.fetchFromUrlShow=!0,_.delay(function(){e("#txt-editor-image-fetchurl").focus()},400)},fetchFromUrlDiscard:function(e){l.fetchFromUrlShow=!1},fetchFromUrlGo:function(e){l.fetchFromUrlDiscard(),l.isLoadingText="Fetching image...",l.isLoading=!0,Vue.nextTick(function(){n.emit("uploadsFetchFileFromURL",{folder:l.currentFolder,fetchUrl:l.fetchFromUrlURL},function(e){e.ok?l.waitChangeComplete(l.images.length,!0):(l.isLoading=!1,o.pushError("Upload error",e.msg))})})},renameImage:function(){var t=_.find(l.images,["_id",l.renameImageId]);l.renameImageFilename=t.basename||"",l.renameImageShow=!0,_.delay(function(){e("#txt-editor-image-rename").focus(),_.defer(function(){e("#txt-editor-image-rename").select()})},400)},renameImageDiscard:function(){l.renameImageShow=!1},renameImageGo:function(){l.renameImageDiscard(),l.isLoadingText="Renaming image...",l.isLoading=!0,Vue.nextTick(function(){n.emit("uploadsRenameFile",{uid:l.renameImageId,folder:l.currentFolder,filename:l.renameImageFilename},function(e){e.ok?l.waitChangeComplete(l.images.length,!1):(l.isLoading=!1,o.pushError("Rename error",e.msg))})})},moveImage:function(e,t){l.isLoadingText="Moving image...",l.isLoading=!0,Vue.nextTick(function(){n.emit("uploadsMoveFile",{uid:e,folder:t},function(e){e.ok?l.loadImages():(l.isLoading=!1,o.pushError("Rename error",e.msg))})})},deleteImageWarn:function(e){if(e){var t=_.find(l.images,["_id",l.deleteImageId]);l.deleteImageFilename=t.filename||"this image"}l.deleteImageShow=e},deleteImageGo:function(){l.deleteImageWarn(!1),l.isLoadingText="Deleting image...",l.isLoading=!0,Vue.nextTick(function(){n.emit("uploadsDeleteFile",{uid:l.deleteImageId},function(e){l.loadImages()})})},selectFolder:function(e){l.currentFolder=e,l.loadImages()},refreshFolders:function(){l.isLoadingText="Fetching folders list...",l.isLoading=!0,l.currentFolder="",l.currentImage="",Vue.nextTick(function(){n.emit("uploadsGetFolders",{},function(e){l.folders=e,l.loadImages()})})},loadImages:function(e){return e||(l.isLoadingText="Fetching images...",l.isLoading=!0),new Promise(function(t,o){Vue.nextTick(function(){n.emit("uploadsGetImages",{folder:l.currentFolder},function(o){l.images=o,e||(l.isLoading=!1),l.attachContextMenus(),t(!0)})})})},waitChangeComplete:function(e,t){t=!_.isBoolean(t)||t,l.postUploadChecks++,l.isLoadingText="Processing...",Vue.nextTick(function(){l.loadImages(!0).then(function(){l.images.length!==e===t?(l.postUploadChecks=0,l.isLoading=!1):l.postUploadChecks>5?(l.postUploadChecks=0,l.isLoading=!1,o.pushError("Unable to fetch updated listing","Try again later")):_.delay(function(){l.waitChangeComplete(e,t)},1500)})})},attachContextMenus:function(){var t=_.map(l.folders,function(t){return{name:""!==t?t:"/ (root)",icon:"fa-folder",callback:function(t,o){var n=_.toString(e(o.$trigger).data("uid")),i=_.nth(l.folders,t);l.moveImage(n,i)}}});e.contextMenu("destroy",".editor-modal-image-choices > figure"),e.contextMenu({selector:".editor-modal-image-choices > figure",appendTo:".editor-modal-image-choices",position:function(t,o,n){e(t.$trigger).addClass("is-contextopen");var i=e(t.$trigger).position(),a={w:e(t.$trigger).width()/2,h:e(t.$trigger).height()/2};t.$menu.css({top:i.top+a.h,left:i.left+a.w})},events:{hide:function(t){e(t.$trigger).removeClass("is-contextopen")}},items:{rename:{name:"Rename",icon:"fa-edit",callback:function(e,t){l.renameImageId=_.toString(t.$trigger[0].dataset.uid),l.renameImage()}},move:{name:"Move to...",icon:"fa-folder-open-o",items:t},delete:{name:"Delete",icon:"fa-trash",callback:function(e,t){l.deleteImageId=_.toString(t.$trigger[0].dataset.uid),l.deleteImageWarn(!0)}}}})}}});e("#btn-editor-image-upload input").on("change",function(n){var i=l.images.length;e(n.currentTarget).simpleUpload("/uploads/img",{name:"imgfile",data:{folder:l.currentFolder},limit:20,expect:"json",allowedExts:["jpg","jpeg","gif","png","webp"],allowedTypes:["image/png","image/jpeg","image/gif","image/webp"],maxFileSize:3145728,init:function(e){l.uploadSucceeded=!1,l.isLoadingText="Preparing to upload...",l.isLoading=!0},progress:function(e){l.isLoadingText="Uploading..."+Math.round(e)+"%"},success:function(e){if(e.ok){var t=_.filter(e.results,["ok",!1]);t.length?(_.forEach(t,function(e){o.pushError("Upload error",e.msg)}),t.length<e.results.length&&(o.push({title:"Some uploads succeeded",message:"Files that are not mentionned in the errors above were uploaded successfully."}),l.uploadSucceeded=!0)):l.uploadSucceeded=!0}else o.pushError("Upload error",e.msg)},error:function(e){o.pushError(e.message,t.upload.file.name)},finish:function(){l.uploadSucceeded?l.waitChangeComplete(i,!0):l.isLoading=!1}})});var d=new Vue({el:"#modal-editor-file",data:{isLoading:!1,isLoadingText:"",newFolderName:"",newFolderShow:!1,newFolderError:!1,folders:[],currentFolder:"",currentFile:"",files:[],uploadSucceeded:!1,postUploadChecks:0,renameFileShow:!1,renameFileId:"",renameFileFilename:"",deleteFileShow:!1,deleteFileId:"",deleteFileFilename:""},methods:{open:function(){r=!0,e("#modal-editor-file").addClass("is-active"),d.refreshFolders()},cancel:function(t){r=!1,e("#modal-editor-file").removeClass("is-active")},selectFile:function(e){d.currentFile=e},insertFileLink:function(e){a.codemirror.doc.somethingSelected()&&a.codemirror.execCommand("singleSelection");var t=_.find(d.files,["_id",d.currentFile]);t.normalizedPath="f:"===t.folder?t.filename:t.folder.slice(2)+"/"+t.filename,t.titleGuess=_.startCase(t.basename);var o="["+t.titleGuess+"](/uploads/"+t.normalizedPath+' "'+t.titleGuess+'")';a.codemirror.doc.replaceSelection(o),d.cancel()},newFolder:function(t){d.newFolderName="",d.newFolderError=!1,d.newFolderShow=!0,_.delay(function(){e("#txt-editor-file-newfoldername").focus()},400)},newFolderDiscard:function(e){d.newFolderShow=!1},newFolderCreate:function(e){var t=new RegExp("^[a-z0-9][a-z0-9-]*[a-z0-9]$");return d.newFolderName=_.kebabCase(_.trim(d.newFolderName)),_.isEmpty(d.newFolderName)||!t.test(d.newFolderName)?void(d.newFolderError=!0):(d.newFolderDiscard(),d.isLoadingText="Creating new folder...",d.isLoading=!0,void Vue.nextTick(function(){n.emit("uploadsCreateFolder",{foldername:d.newFolderName},function(e){d.folders=e,d.currentFolder=d.newFolderName,d.files=[],d.isLoading=!1})}))},renameFile:function(){var t=_.find(d.files,["_id",d.renameFileId]);d.renameFileFilename=t.basename||"",d.renameFileShow=!0,_.delay(function(){e("#txt-editor-renamefile").focus(),_.defer(function(){e("#txt-editor-file-rename").select()})},400)},renameFileDiscard:function(){d.renameFileShow=!1},renameFileGo:function(){d.renameFileDiscard(),d.isLoadingText="Renaming file...",d.isLoading=!0,Vue.nextTick(function(){n.emit("uploadsRenameFile",{uid:d.renameFileId,folder:d.currentFolder,filename:d.renameFileFilename},function(e){e.ok?d.waitChangeComplete(d.files.length,!1):(d.isLoading=!1,o.pushError("Rename error",e.msg))})})},moveFile:function(e,t){d.isLoadingText="Moving file...",d.isLoading=!0,Vue.nextTick(function(){n.emit("uploadsMoveFile",{uid:e,folder:t},function(e){e.ok?d.loadFiles():(d.isLoading=!1,o.pushError("Rename error",e.msg))})})},deleteFileWarn:function(e){if(e){var t=_.find(d.files,["_id",d.deleteFileId]);d.deleteFileFilename=t.filename||"this file"}d.deleteFileShow=e},deleteFileGo:function(){d.deleteFileWarn(!1),d.isLoadingText="Deleting file...",d.isLoading=!0,Vue.nextTick(function(){n.emit("uploadsDeleteFile",{uid:d.deleteFileId},function(e){d.loadFiles()})})},selectFolder:function(e){d.currentFolder=e,d.loadFiles()},refreshFolders:function(){d.isLoadingText="Fetching folders list...",d.isLoading=!0,d.currentFolder="",d.currentImage="",Vue.nextTick(function(){n.emit("uploadsGetFolders",{},function(e){d.folders=e,d.loadFiles()})})},loadFiles:function(e){return e||(d.isLoadingText="Fetching files...",d.isLoading=!0),new Promise(function(t,o){Vue.nextTick(function(){n.emit("uploadsGetFiles",{folder:d.currentFolder},function(o){d.files=o,e||(d.isLoading=!1),d.attachContextMenus(),t(!0)})})})},waitChangeComplete:function(e,t){t=!_.isBoolean(t)||t,d.postUploadChecks++,d.isLoadingText="Processing...",Vue.nextTick(function(){d.loadFiles(!0).then(function(){d.files.length!==e===t?(d.postUploadChecks=0,d.isLoading=!1):d.postUploadChecks>5?(d.postUploadChecks=0,d.isLoading=!1,o.pushError("Unable to fetch updated listing","Try again later")):_.delay(function(){d.waitChangeComplete(e,t)},1500)})})},attachContextMenus:function(){var t=_.map(d.folders,function(t){return{name:""!==t?t:"/ (root)",icon:"fa-folder",callback:function(t,o){var n=_.toString(e(o.$trigger).data("uid")),i=_.nth(d.folders,t);d.moveFile(n,i)}}});e.contextMenu("destroy",".editor-modal-file-choices > figure"),e.contextMenu({selector:".editor-modal-file-choices > figure",appendTo:".editor-modal-file-choices",position:function(t,o,n){e(t.$trigger).addClass("is-contextopen");var i=e(t.$trigger).position(),a={w:e(t.$trigger).width()/5,h:e(t.$trigger).height()/2};t.$menu.css({top:i.top+a.h,left:i.left+a.w})},events:{hide:function(t){e(t.$trigger).removeClass("is-contextopen")}},items:{rename:{name:"Rename",icon:"fa-edit",callback:function(e,t){d.renameFileId=_.toString(t.$trigger[0].dataset.uid),d.renameFile()}},move:{name:"Move to...",icon:"fa-folder-open-o",items:t},delete:{name:"Delete",icon:"fa-trash",callback:function(e,t){d.deleteFileId=_.toString(t.$trigger[0].dataset.uid),d.deleteFileWarn(!0)}}}})}}});e("#btn-editor-file-upload input").on("change",function(n){var i=d.files.length;e(n.currentTarget).simpleUpload("/uploads/file",{name:"binfile",data:{folder:d.currentFolder},limit:20,expect:"json",maxFileSize:0,init:function(e){d.uploadSucceeded=!1,d.isLoadingText="Preparing to upload...",d.isLoading=!0},progress:function(e){d.isLoadingText="Uploading..."+Math.round(e)+"%"},success:function(e){if(e.ok){var t=_.filter(e.results,["ok",!1]);t.length?(_.forEach(t,function(e){o.pushError("Upload error",e.msg)}),t.length<e.results.length&&(o.push({title:"Some uploads succeeded",message:"Files that are not mentionned in the errors above were uploaded successfully."}),d.uploadSucceeded=!0)):d.uploadSucceeded=!0}else o.pushError("Upload error",e.msg)},error:function(e){o.pushError(e.message,t.upload.file.name)},finish:function(){d.uploadSucceeded?d.waitChangeComplete(i,!0):d.isLoading=!1}})});var s=ace.require("ace/ext/modelist"),c=null,m=[],u=function(t){return e.ajax({url:"/js/ace/mode-"+t+".js",dataType:"script",cache:!0,beforeSend:function(){if(_.includes(m,t))return!1},success:function(){m.push(t)}})},g=new Vue({el:"#modal-editor-codeblock",data:{modes:s.modesByName,modeSelected:"text",initContent:""},watch:{modeSelected:function(e,t){u(e).done(function(){ace.require("ace/mode/"+e),c.getSession().setMode("ace/mode/"+e)})}},methods:{open:function(t){e("#modal-editor-codeblock").addClass("is-active"),_.delay(function(){c=ace.edit("codeblock-editor"),c.setTheme("ace/theme/tomorrow_night"),c.getSession().setMode("ace/mode/"+g.modeSelected),c.setOption("fontSize","14px"),c.setOption("hScrollBarAlwaysVisible",!1),c.setOption("wrap",!0),c.setValue(g.initContent),c.focus(),c.renderer.updateFull()},300)},cancel:function(t){r=!1,e("#modal-editor-codeblock").removeClass("is-active"),g.initContent=""},insertCode:function(e){a.codemirror.doc.somethingSelected()&&a.codemirror.execCommand("singleSelection");var t="\n```"+g.modeSelected+"\n"+c.getValue()+"\n```\n";a.codemirror.doc.replaceSelection(t),g.cancel()}}});a=new SimpleMDE({autofocus:!0,autoDownloadFontAwesome:!1,element:e("#mk-editor").get(0),placeholder:"Enter Markdown formatted content here...",spellChecker:!1,status:!1,toolbar:[{name:"bold",action:SimpleMDE.toggleBold,className:"fa fa-bold",title:"Bold"},{name:"italic",action:SimpleMDE.toggleItalic,className:"fa fa-italic",title:"Italic"},{name:"strikethrough",action:SimpleMDE.toggleStrikethrough,className:"fa fa-strikethrough",title:"Strikethrough"},"|",{name:"heading-1",action:SimpleMDE.toggleHeading1,className:"fa fa-header fa-header-x fa-header-1",title:"Big Heading"},{name:"heading-2",action:SimpleMDE.toggleHeading2,className:"fa fa-header fa-header-x fa-header-2",title:"Medium Heading"},{name:"heading-3",action:SimpleMDE.toggleHeading3,className:"fa fa-header fa-header-x fa-header-3",title:"Small Heading"},{name:"quote",action:SimpleMDE.toggleBlockquote,className:"fa fa-quote-left",title:"Quote"},"|",{name:"unordered-list",action:SimpleMDE.toggleUnorderedList,className:"fa fa-list-ul",title:"Bullet List"},{name:"ordered-list",action:SimpleMDE.toggleOrderedList,className:"fa fa-list-ol",title:"Numbered List"},"|",{name:"link",action:function(e){},className:"fa fa-link",title:"Insert Link"},{name:"image",action:function(e){r||l.open()},className:"fa fa-image",title:"Insert Image"},{name:"file",action:function(e){r||d.open()},className:"fa fa-file-text-o",title:"Insert File"},"|",{name:"inline-code",action:function(e){if(!e.codemirror.doc.somethingSelected())return o.pushError("Invalid selection","You must select at least 1 character first.");var t=e.codemirror.doc.getSelections();t=_.map(t,function(e){return"`"+e+"`"}),e.codemirror.doc.replaceSelections(t)},className:"fa fa-terminal",title:"Inline Code"},{name:"code-block",action:function(e){r||(r=!0,a.codemirror.doc.somethingSelected()&&(g.initContent=a.codemirror.doc.getSelection()),g.open())},className:"fa fa-code",title:"Code Block"},"|",{name:"table",action:function(e){},className:"fa fa-table",title:"Insert Table"},{name:"horizontal-rule",action:SimpleMDE.drawHorizontalRule,className:"fa fa-minus",title:"Horizontal Rule"}],shortcuts:{toggleBlockquote:null,toggleFullScreen:null}}),e(".btn-edit-save, .btn-create-save").on("click",function(e){f(e)}),e(window).bind("keydown",function(e){if(e.ctrlKey||e.metaKey)switch(String.fromCharCode(e.which).toLowerCase()){case"s":e.preventDefault(),f(e)}});var f=function(t){e.ajax(window.location.href,{data:{markdown:a.value()},dataType:"json",method:"PUT"}).then(function(e,t,n){e.ok?window.location.assign("/"+i):o.pushError("Something went wrong",e.error)},function(e,t,n){o.pushError("Something went wrong","Save operation failed.")})}}()}()}if(e("#page-type-edit").length){var a;!function(){var i=e("#page-type-edit").data("entrypath");e(".btn-edit-discard").on("click",function(t){e("#modal-edit-discard").toggleClass("is-active")}),1===e("#mk-editor").length&&!function(){var r=!1;Vue.filter("filesize",function(e){return _.toUpper(filesize(e))});var l=new Vue({el:"#modal-editor-image",data:{isLoading:!1,isLoadingText:"",newFolderName:"",newFolderShow:!1,newFolderError:!1,fetchFromUrlURL:"",fetchFromUrlShow:!1,folders:[],currentFolder:"",currentImage:"",currentAlign:"left",images:[],uploadSucceeded:!1,postUploadChecks:0,renameImageShow:!1,renameImageId:"",renameImageFilename:"",deleteImageShow:!1,deleteImageId:"",deleteImageFilename:""},methods:{open:function(){r=!0,e("#modal-editor-image").addClass("is-active"),l.refreshFolders()},cancel:function(t){r=!1,e("#modal-editor-image").removeClass("is-active")},selectImage:function(e){l.currentImage=e},insertImage:function(e){a.codemirror.doc.somethingSelected()&&a.codemirror.execCommand("singleSelection");var t=_.find(l.images,["_id",l.currentImage]);t.normalizedPath="f:"===t.folder?t.filename:t.folder.slice(2)+"/"+t.filename,t.titleGuess=_.startCase(t.basename);var o="!["+t.titleGuess+"](/uploads/"+t.normalizedPath+' "'+t.titleGuess+'")';switch(l.currentAlign){case"center":o+="{.align-center}";break;case"right":o+="{.align-right}";break;case"logo":o+="{.pagelogo}"}a.codemirror.doc.replaceSelection(o),l.cancel()},newFolder:function(t){l.newFolderName="",l.newFolderError=!1,l.newFolderShow=!0,_.delay(function(){e("#txt-editor-image-newfoldername").focus()},400)},newFolderDiscard:function(e){l.newFolderShow=!1},newFolderCreate:function(e){var t=new RegExp("^[a-z0-9][a-z0-9-]*[a-z0-9]$");return l.newFolderName=_.kebabCase(_.trim(l.newFolderName)),_.isEmpty(l.newFolderName)||!t.test(l.newFolderName)?void(l.newFolderError=!0):(l.newFolderDiscard(),l.isLoadingText="Creating new folder...",l.isLoading=!0,void Vue.nextTick(function(){n.emit("uploadsCreateFolder",{foldername:l.newFolderName},function(e){l.folders=e,l.currentFolder=l.newFolderName,l.images=[],l.isLoading=!1})}))},fetchFromUrl:function(t){l.fetchFromUrlURL="",l.fetchFromUrlShow=!0,_.delay(function(){e("#txt-editor-image-fetchurl").focus()},400)},fetchFromUrlDiscard:function(e){l.fetchFromUrlShow=!1},fetchFromUrlGo:function(e){l.fetchFromUrlDiscard(),l.isLoadingText="Fetching image...",l.isLoading=!0,Vue.nextTick(function(){n.emit("uploadsFetchFileFromURL",{folder:l.currentFolder,fetchUrl:l.fetchFromUrlURL},function(e){e.ok?l.waitChangeComplete(l.images.length,!0):(l.isLoading=!1,o.pushError("Upload error",e.msg))})})},renameImage:function(){var t=_.find(l.images,["_id",l.renameImageId]);l.renameImageFilename=t.basename||"",l.renameImageShow=!0,_.delay(function(){e("#txt-editor-image-rename").focus(),_.defer(function(){e("#txt-editor-image-rename").select()})},400)},renameImageDiscard:function(){l.renameImageShow=!1},renameImageGo:function(){l.renameImageDiscard(),l.isLoadingText="Renaming image...",l.isLoading=!0,Vue.nextTick(function(){n.emit("uploadsRenameFile",{uid:l.renameImageId,folder:l.currentFolder,filename:l.renameImageFilename},function(e){e.ok?l.waitChangeComplete(l.images.length,!1):(l.isLoading=!1,o.pushError("Rename error",e.msg))})})},moveImage:function(e,t){l.isLoadingText="Moving image...",l.isLoading=!0,Vue.nextTick(function(){n.emit("uploadsMoveFile",{uid:e,folder:t},function(e){e.ok?l.loadImages():(l.isLoading=!1,o.pushError("Rename error",e.msg))})})},deleteImageWarn:function(e){if(e){var t=_.find(l.images,["_id",l.deleteImageId]);l.deleteImageFilename=t.filename||"this image"}l.deleteImageShow=e},deleteImageGo:function(){l.deleteImageWarn(!1),l.isLoadingText="Deleting image...",l.isLoading=!0,Vue.nextTick(function(){n.emit("uploadsDeleteFile",{uid:l.deleteImageId},function(e){l.loadImages()})})},selectFolder:function(e){l.currentFolder=e,l.loadImages()},refreshFolders:function(){l.isLoadingText="Fetching folders list...",l.isLoading=!0,l.currentFolder="",l.currentImage="",Vue.nextTick(function(){n.emit("uploadsGetFolders",{},function(e){l.folders=e,l.loadImages()})})},loadImages:function(e){return e||(l.isLoadingText="Fetching images...",l.isLoading=!0),new Promise(function(t,o){Vue.nextTick(function(){n.emit("uploadsGetImages",{folder:l.currentFolder},function(o){l.images=o,e||(l.isLoading=!1),l.attachContextMenus(),t(!0)})})})},waitChangeComplete:function(e,t){t=!_.isBoolean(t)||t,l.postUploadChecks++,l.isLoadingText="Processing...",Vue.nextTick(function(){l.loadImages(!0).then(function(){l.images.length!==e===t?(l.postUploadChecks=0,l.isLoading=!1):l.postUploadChecks>5?(l.postUploadChecks=0,l.isLoading=!1,o.pushError("Unable to fetch updated listing","Try again later")):_.delay(function(){l.waitChangeComplete(e,t)},1500)})})},attachContextMenus:function(){var t=_.map(l.folders,function(t){return{name:""!==t?t:"/ (root)",icon:"fa-folder",callback:function(t,o){var n=_.toString(e(o.$trigger).data("uid")),i=_.nth(l.folders,t);l.moveImage(n,i)}}});e.contextMenu("destroy",".editor-modal-image-choices > figure"),e.contextMenu({selector:".editor-modal-image-choices > figure",appendTo:".editor-modal-image-choices",position:function(t,o,n){e(t.$trigger).addClass("is-contextopen");var i=e(t.$trigger).position(),a={w:e(t.$trigger).width()/2,h:e(t.$trigger).height()/2};t.$menu.css({top:i.top+a.h,left:i.left+a.w})},events:{hide:function(t){e(t.$trigger).removeClass("is-contextopen")}},items:{rename:{name:"Rename",icon:"fa-edit",callback:function(e,t){l.renameImageId=_.toString(t.$trigger[0].dataset.uid),l.renameImage()}},move:{name:"Move to...",icon:"fa-folder-open-o",items:t},delete:{name:"Delete",icon:"fa-trash",callback:function(e,t){l.deleteImageId=_.toString(t.$trigger[0].dataset.uid),l.deleteImageWarn(!0)}}}})}}});e("#btn-editor-image-upload input").on("change",function(n){var i=l.images.length;e(n.currentTarget).simpleUpload("/uploads/img",{name:"imgfile",data:{folder:l.currentFolder},limit:20,expect:"json",allowedExts:["jpg","jpeg","gif","png","webp"],allowedTypes:["image/png","image/jpeg","image/gif","image/webp"],maxFileSize:3145728,init:function(e){l.uploadSucceeded=!1,l.isLoadingText="Preparing to upload...",l.isLoading=!0},progress:function(e){l.isLoadingText="Uploading..."+Math.round(e)+"%"},success:function(e){if(e.ok){var t=_.filter(e.results,["ok",!1]);t.length?(_.forEach(t,function(e){o.pushError("Upload error",e.msg)}),t.length<e.results.length&&(o.push({title:"Some uploads succeeded",message:"Files that are not mentionned in the errors above were uploaded successfully."}),l.uploadSucceeded=!0)):l.uploadSucceeded=!0}else o.pushError("Upload error",e.msg)},error:function(e){o.pushError(e.message,t.upload.file.name)},finish:function(){l.uploadSucceeded?l.waitChangeComplete(i,!0):l.isLoading=!1}})});var d=new Vue({el:"#modal-editor-file",data:{isLoading:!1,isLoadingText:"",newFolderName:"",newFolderShow:!1,newFolderError:!1,folders:[],currentFolder:"",currentFile:"",files:[],uploadSucceeded:!1,postUploadChecks:0,renameFileShow:!1,renameFileId:"",renameFileFilename:"",deleteFileShow:!1,deleteFileId:"",deleteFileFilename:""},methods:{open:function(){r=!0,e("#modal-editor-file").addClass("is-active"),d.refreshFolders()},cancel:function(t){r=!1,e("#modal-editor-file").removeClass("is-active")},selectFile:function(e){d.currentFile=e},insertFileLink:function(e){a.codemirror.doc.somethingSelected()&&a.codemirror.execCommand("singleSelection");var t=_.find(d.files,["_id",d.currentFile]);t.normalizedPath="f:"===t.folder?t.filename:t.folder.slice(2)+"/"+t.filename,t.titleGuess=_.startCase(t.basename);var o="["+t.titleGuess+"](/uploads/"+t.normalizedPath+' "'+t.titleGuess+'")';a.codemirror.doc.replaceSelection(o),d.cancel()},newFolder:function(t){d.newFolderName="",d.newFolderError=!1,d.newFolderShow=!0,_.delay(function(){e("#txt-editor-file-newfoldername").focus()},400)},newFolderDiscard:function(e){d.newFolderShow=!1},newFolderCreate:function(e){var t=new RegExp("^[a-z0-9][a-z0-9-]*[a-z0-9]$");return d.newFolderName=_.kebabCase(_.trim(d.newFolderName)),_.isEmpty(d.newFolderName)||!t.test(d.newFolderName)?void(d.newFolderError=!0):(d.newFolderDiscard(),d.isLoadingText="Creating new folder...",d.isLoading=!0,void Vue.nextTick(function(){n.emit("uploadsCreateFolder",{foldername:d.newFolderName},function(e){d.folders=e,d.currentFolder=d.newFolderName,d.files=[],d.isLoading=!1})}))},renameFile:function(){var t=_.find(d.files,["_id",d.renameFileId]);d.renameFileFilename=t.basename||"",d.renameFileShow=!0,_.delay(function(){e("#txt-editor-renamefile").focus(),_.defer(function(){e("#txt-editor-file-rename").select()})},400)},renameFileDiscard:function(){d.renameFileShow=!1},renameFileGo:function(){d.renameFileDiscard(),d.isLoadingText="Renaming file...",d.isLoading=!0,Vue.nextTick(function(){n.emit("uploadsRenameFile",{uid:d.renameFileId,folder:d.currentFolder,filename:d.renameFileFilename},function(e){e.ok?d.waitChangeComplete(d.files.length,!1):(d.isLoading=!1,o.pushError("Rename error",e.msg))})})},moveFile:function(e,t){d.isLoadingText="Moving file...",d.isLoading=!0,Vue.nextTick(function(){n.emit("uploadsMoveFile",{uid:e,folder:t},function(e){e.ok?d.loadFiles():(d.isLoading=!1,o.pushError("Rename error",e.msg))})})},deleteFileWarn:function(e){if(e){var t=_.find(d.files,["_id",d.deleteFileId]);d.deleteFileFilename=t.filename||"this file"}d.deleteFileShow=e},deleteFileGo:function(){d.deleteFileWarn(!1),d.isLoadingText="Deleting file...",d.isLoading=!0,Vue.nextTick(function(){n.emit("uploadsDeleteFile",{uid:d.deleteFileId},function(e){d.loadFiles()})})},selectFolder:function(e){d.currentFolder=e,d.loadFiles()},refreshFolders:function(){d.isLoadingText="Fetching folders list...",d.isLoading=!0,d.currentFolder="",d.currentImage="",Vue.nextTick(function(){n.emit("uploadsGetFolders",{},function(e){d.folders=e,d.loadFiles()})})},loadFiles:function(e){return e||(d.isLoadingText="Fetching files...",d.isLoading=!0),new Promise(function(t,o){Vue.nextTick(function(){n.emit("uploadsGetFiles",{folder:d.currentFolder},function(o){d.files=o,e||(d.isLoading=!1),d.attachContextMenus(),t(!0)})})})},waitChangeComplete:function(e,t){t=!_.isBoolean(t)||t,d.postUploadChecks++,d.isLoadingText="Processing...",Vue.nextTick(function(){d.loadFiles(!0).then(function(){d.files.length!==e===t?(d.postUploadChecks=0,d.isLoading=!1):d.postUploadChecks>5?(d.postUploadChecks=0,d.isLoading=!1,o.pushError("Unable to fetch updated listing","Try again later")):_.delay(function(){d.waitChangeComplete(e,t)},1500)})})},attachContextMenus:function(){var t=_.map(d.folders,function(t){return{name:""!==t?t:"/ (root)",icon:"fa-folder",callback:function(t,o){var n=_.toString(e(o.$trigger).data("uid")),i=_.nth(d.folders,t);d.moveFile(n,i)}}});e.contextMenu("destroy",".editor-modal-file-choices > figure"),e.contextMenu({selector:".editor-modal-file-choices > figure",appendTo:".editor-modal-file-choices",position:function(t,o,n){e(t.$trigger).addClass("is-contextopen");var i=e(t.$trigger).position(),a={w:e(t.$trigger).width()/5,h:e(t.$trigger).height()/2};t.$menu.css({top:i.top+a.h,left:i.left+a.w})},events:{hide:function(t){e(t.$trigger).removeClass("is-contextopen")}},items:{rename:{name:"Rename",icon:"fa-edit",callback:function(e,t){d.renameFileId=_.toString(t.$trigger[0].dataset.uid),d.renameFile()}},move:{name:"Move to...",icon:"fa-folder-open-o",items:t},delete:{name:"Delete",icon:"fa-trash",
callback:function(e,t){d.deleteFileId=_.toString(t.$trigger[0].dataset.uid),d.deleteFileWarn(!0)}}}})}}});e("#btn-editor-file-upload input").on("change",function(n){var i=d.files.length;e(n.currentTarget).simpleUpload("/uploads/file",{name:"binfile",data:{folder:d.currentFolder},limit:20,expect:"json",maxFileSize:0,init:function(e){d.uploadSucceeded=!1,d.isLoadingText="Preparing to upload...",d.isLoading=!0},progress:function(e){d.isLoadingText="Uploading..."+Math.round(e)+"%"},success:function(e){if(e.ok){var t=_.filter(e.results,["ok",!1]);t.length?(_.forEach(t,function(e){o.pushError("Upload error",e.msg)}),t.length<e.results.length&&(o.push({title:"Some uploads succeeded",message:"Files that are not mentionned in the errors above were uploaded successfully."}),d.uploadSucceeded=!0)):d.uploadSucceeded=!0}else o.pushError("Upload error",e.msg)},error:function(e){o.pushError(e.message,t.upload.file.name)},finish:function(){d.uploadSucceeded?d.waitChangeComplete(i,!0):d.isLoading=!1}})});var s=ace.require("ace/ext/modelist"),c=null,m=[],u=function(t){return e.ajax({url:"/js/ace/mode-"+t+".js",dataType:"script",cache:!0,beforeSend:function(){if(_.includes(m,t))return!1},success:function(){m.push(t)}})},g=new Vue({el:"#modal-editor-codeblock",data:{modes:s.modesByName,modeSelected:"text",initContent:""},watch:{modeSelected:function(e,t){u(e).done(function(){ace.require("ace/mode/"+e),c.getSession().setMode("ace/mode/"+e)})}},methods:{open:function(t){e("#modal-editor-codeblock").addClass("is-active"),_.delay(function(){c=ace.edit("codeblock-editor"),c.setTheme("ace/theme/tomorrow_night"),c.getSession().setMode("ace/mode/"+g.modeSelected),c.setOption("fontSize","14px"),c.setOption("hScrollBarAlwaysVisible",!1),c.setOption("wrap",!0),c.setValue(g.initContent),c.focus(),c.renderer.updateFull()},300)},cancel:function(t){r=!1,e("#modal-editor-codeblock").removeClass("is-active"),g.initContent=""},insertCode:function(e){a.codemirror.doc.somethingSelected()&&a.codemirror.execCommand("singleSelection");var t="\n```"+g.modeSelected+"\n"+c.getValue()+"\n```\n";a.codemirror.doc.replaceSelection(t),g.cancel()}}});a=new SimpleMDE({autofocus:!0,autoDownloadFontAwesome:!1,element:e("#mk-editor").get(0),placeholder:"Enter Markdown formatted content here...",spellChecker:!1,status:!1,toolbar:[{name:"bold",action:SimpleMDE.toggleBold,className:"fa fa-bold",title:"Bold"},{name:"italic",action:SimpleMDE.toggleItalic,className:"fa fa-italic",title:"Italic"},{name:"strikethrough",action:SimpleMDE.toggleStrikethrough,className:"fa fa-strikethrough",title:"Strikethrough"},"|",{name:"heading-1",action:SimpleMDE.toggleHeading1,className:"fa fa-header fa-header-x fa-header-1",title:"Big Heading"},{name:"heading-2",action:SimpleMDE.toggleHeading2,className:"fa fa-header fa-header-x fa-header-2",title:"Medium Heading"},{name:"heading-3",action:SimpleMDE.toggleHeading3,className:"fa fa-header fa-header-x fa-header-3",title:"Small Heading"},{name:"quote",action:SimpleMDE.toggleBlockquote,className:"fa fa-quote-left",title:"Quote"},"|",{name:"unordered-list",action:SimpleMDE.toggleUnorderedList,className:"fa fa-list-ul",title:"Bullet List"},{name:"ordered-list",action:SimpleMDE.toggleOrderedList,className:"fa fa-list-ol",title:"Numbered List"},"|",{name:"link",action:function(e){},className:"fa fa-link",title:"Insert Link"},{name:"image",action:function(e){r||l.open()},className:"fa fa-image",title:"Insert Image"},{name:"file",action:function(e){r||d.open()},className:"fa fa-file-text-o",title:"Insert File"},"|",{name:"inline-code",action:function(e){if(!e.codemirror.doc.somethingSelected())return o.pushError("Invalid selection","You must select at least 1 character first.");var t=e.codemirror.doc.getSelections();t=_.map(t,function(e){return"`"+e+"`"}),e.codemirror.doc.replaceSelections(t)},className:"fa fa-terminal",title:"Inline Code"},{name:"code-block",action:function(e){r||(r=!0,a.codemirror.doc.somethingSelected()&&(g.initContent=a.codemirror.doc.getSelection()),g.open())},className:"fa fa-code",title:"Code Block"},"|",{name:"table",action:function(e){},className:"fa fa-table",title:"Insert Table"},{name:"horizontal-rule",action:SimpleMDE.drawHorizontalRule,className:"fa fa-minus",title:"Horizontal Rule"}],shortcuts:{toggleBlockquote:null,toggleFullScreen:null}}),e(".btn-edit-save, .btn-create-save").on("click",function(e){f(e)}),e(window).bind("keydown",function(e){if(e.ctrlKey||e.metaKey)switch(String.fromCharCode(e.which).toLowerCase()){case"s":e.preventDefault(),f(e)}});var f=function(t){e.ajax(window.location.href,{data:{markdown:a.value()},dataType:"json",method:"PUT"}).then(function(e,t,n){e.ok?window.location.assign("/"+i):o.pushError("Something went wrong",e.error)},function(e,t,n){o.pushError("Something went wrong","Save operation failed.")})}}()}()}if(e("#page-type-source").length){var r;!function(){r=ace.edit("source-display"),r.setTheme("ace/theme/tomorrow_night"),r.getSession().setMode("ace/mode/markdown"),r.setOption("fontSize","14px"),r.setOption("hScrollBarAlwaysVisible",!1),r.setOption("wrap",!0),r.setReadOnly(!0),r.renderer.updateFull();var t="home"!==e("#page-type-source").data("entrypath")?e("#page-type-source").data("entrypath"):"",n=t+"/new-page";e(".btn-create-prompt").on("click",function(o){e("#txt-create-prompt").val(n),e("#modal-create-prompt").toggleClass("is-active"),setInputSelection(e("#txt-create-prompt").get(0),t.length+1,n.length),e("#txt-create-prompt").removeClass("is-danger").next().addClass("is-hidden")}),e("#txt-create-prompt").on("keypress",function(t){13===t.which&&e(".btn-create-go").trigger("click")}),e(".btn-create-go").on("click",function(t){var o=makeSafePath(e("#txt-create-prompt").val());_.isEmpty(o)?e("#txt-create-prompt").addClass("is-danger").next().removeClass("is-hidden"):(e("#txt-create-prompt").parent().addClass("is-loading"),window.location.assign("/create/"+o))}),""!==t&&e(".btn-move-prompt").removeClass("is-hidden");var i=_.lastIndexOf(t,"/")+1;e(".btn-move-prompt").on("click",function(o){e("#txt-move-prompt").val(t),e("#modal-move-prompt").toggleClass("is-active"),setInputSelection(e("#txt-move-prompt").get(0),i,t.length),e("#txt-move-prompt").removeClass("is-danger").next().addClass("is-hidden")}),e("#txt-move-prompt").on("keypress",function(t){13===t.which&&e(".btn-move-go").trigger("click")}),e(".btn-move-go").on("click",function(n){var i=makeSafePath(e("#txt-move-prompt").val());_.isEmpty(i)||i===t||"home"===i?e("#txt-move-prompt").addClass("is-danger").next().removeClass("is-hidden"):(e("#txt-move-prompt").parent().addClass("is-loading"),e.ajax(window.location.href,{data:{move:i},dataType:"json",method:"PUT"}).then(function(e,t,n){e.ok?window.location.assign("/"+i):o.pushError("Something went wrong",e.error)},function(e,t,n){o.pushError("Something went wrong","Save operation failed.")}))})}()}});var Alerts=function(){function e(){_classCallCheck(this,e);var t=this;t.mdl=new Vue({el:"#alerts",data:{children:[]},methods:{acknowledge:function(e){t.close(e)}}}),t.uidNext=1}return _createClass(e,[{key:"push",value:function(e){var t=this,o=_.defaults(e,{_uid:t.uidNext,class:"is-info",message:"---",sticky:!1,title:"---"});t.mdl.children.push(o),o.sticky||_.delay(function(){t.close(o._uid)},5e3),t.uidNext++}},{key:"pushError",value:function(e,t){this.push({class:"is-danger",message:t,sticky:!1,title:e})}},{key:"pushSuccess",value:function(e,t){this.push({class:"is-success",message:t,sticky:!1,title:e})}},{key:"close",value:function(e){var t=this,o=_.findIndex(t.mdl.children,["_uid",e]),n=_.nth(t.mdl.children,o);o>=0&&n&&(n.class+=" exit",Vue.set(t.mdl.children,o,n),_.delay(function(){t.mdl.children.splice(o,1)},500))}}]),e}();