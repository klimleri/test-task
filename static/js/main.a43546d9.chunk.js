(this.webpackJsonpblynk=this.webpackJsonpblynk||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),m=a.n(n),c=a(8),r=a.n(c);a(14),a(15);function i(){return m.a.createElement("aside",{className:"aside"},m.a.createElement("h2",{className:"aside__header"},"Dayry app"),m.a.createElement("p",{className:"aside__text"},"Comment whit no sense"))}var o=a(5),s=a(6),l=a(1),u=a(2),d=a(4),v=a(3),p=(a(16),a(17),function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,m=new Array(n),c=0;c<n;c++)m[c]=arguments[c];return(e=t.call.apply(t,[this].concat(m))).state={items:[]},e.handleSubmitForm=function(t){t.preventDefault(),e.props.addNewItem(t.target[0].value),t.target.reset()},e.handleSetActiveItem=function(t){(0,e.props.setActiveItem)(t)},e.handleDeleteItem=function(t,a){var n=e.props.deleteItem;t.stopPropagation(),t.preventDefault(),n(a)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.activeItem,n=this.handleSetActiveItem,c=this.handleDeleteItem,r=this.handleSubmitForm;return m.a.createElement("div",{className:"box"},m.a.createElement("h2",{className:"title"},"Items"),m.a.createElement("form",{className:"form",onSubmit:r},m.a.createElement("input",{type:"text",className:"input form__input",placeholder:"Type name here...",required:!0}),m.a.createElement("button",{className:"btn items__btn",type:"submit"},"Add New")),m.a.createElement("ul",{className:"items__list"},t.map((function(e,t){return m.a.createElement("li",{onClick:function(){return n(e)},key:t,className:e.id===a.id?"item active":"item"},m.a.createElement("span",{className:"item__name"},e.name),m.a.createElement("span",{className:"item__count"},e.comments.length),m.a.createElement("button",{className:"btn btn__delete",onClick:function(t){return c(t,e)}},"Delete"))}))))}}]),a}(n.Component));a(18);function h(e){var t=e.data;return m.a.createElement("div",{className:"comment"},m.a.createElement("div",{className:"comment__color",style:{background:t.color}}),m.a.createElement("div",{className:"comment__text"},t.body))}a(19);var f=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,m=new Array(n),c=0;c<n;c++)m[c]=arguments[c];return(e=t.call.apply(t,[this].concat(m))).handleSubmitForm=function(t){var a=e.props.addNewComment;t.preventDefault(),a(t.target[0].value,t.target[1].value),t.target.reset()},e.handleKeyDown=function(e){e.ctrlKey&&13===e.keyCode&&0!==e.target.value.length&&e.target.form[2].click()},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.data;return m.a.createElement("div",{className:"box"},m.a.createElement("h2",{className:"title"},"Comments #",e&&e.id),e&&e.comments.map((function(e){return m.a.createElement(h,{key:e.id,data:e})})),m.a.createElement("form",{className:"comment__form",onSubmit:this.handleSubmitForm},m.a.createElement("input",{type:"color",className:"input comment__input"}),m.a.createElement("textarea",{onKeyDown:this.handleKeyDown,className:"input comment__input comment__area",placeholder:"Type comment here...",required:!0}),m.a.createElement("button",{className:"btn btn__comment",type:"submit"},"Add New")))}}]),a}(n.Component),b=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,m=new Array(n),c=0;c<n;c++)m[c]=arguments[c];return(e=t.call.apply(t,[this].concat(m))).state={items:[],activeItem:null},e.setActiveItem=function(t){e.setState({activeItem:Object(s.a)(Object(s.a)({},t),{},{comments:Object(o.a)(t.comments)})})},e.addNewItem=function(t){var a=e.state.items,n={name:t,id:e.getRandomId(),comments:[]};a.length||e.setActiveItem(n),e.setState({items:[].concat(Object(o.a)(a),[n])})},e.deleteItem=function(t){var a=e.state.items.filter((function(e){return e.id!==t.id}));e.setState({items:Object(o.a)(a)}),a.length?e.setActiveItem(a[a.length-1]):e.setState({activeItem:null})},e.addNewComment=function(t,a){var n=e.state,m=n.activeItem,c=n.items;m.comments.push({id:e.getRandomId(),body:a,color:t});for(var r=0;r<c.length;r++)if(c[r].id===m.id){c[r]=Object(s.a)({},m);break}e.setState({items:Object(o.a)(c),activeItem:Object(s.a)({},m)})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.state,t=e.items,a=e.activeItem,n=JSON.parse(window.localStorage.getItem("items")),m=JSON.parse(window.localStorage.getItem("activeItem"));n&&n.length?this.setState({items:Object(o.a)(n),activeItem:Object(s.a)({},m)}):!a&&t&&t[0]&&this.setActiveItem(t[0])}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.items,a=e.activeItem;window.onunload=function(){window.localStorage.setItem("items",JSON.stringify(t)),window.localStorage.setItem("activeItem",JSON.stringify(a))}}},{key:"getRandomId",value:function(){return Math.floor(Math.pow(10,7)+9*Math.random()*Math.pow(10,7))}},{key:"render",value:function(){var e=this.state,t=e.items,a=e.activeItem,n=this.addNewItem,c=this.setActiveItem,r=this.addNewComment,i=this.deleteItem;return m.a.createElement("main",{className:"main"},m.a.createElement("div",{className:"inner"},m.a.createElement(p,{data:t,activeItem:a,addNewItem:n,setActiveItem:c,deleteItem:i}),m.a.createElement(f,{data:a,addNewComment:r})))}}]),a}(n.Component);a(20);var I=function(){return m.a.createElement("div",{className:"App"},m.a.createElement(i,null),m.a.createElement(b,null))};r.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(I,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.a43546d9.chunk.js.map