(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(16),c=a.n(s),i=(a(22),a(3)),l=a(4),d=a(6),o=a(5),h=(a(23),a(0));var u=function(e){var t=e.users;function a(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(h.jsx)("tbody",{children:void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,n=e.name,r=e.picture,s=e.phone,c=e.email,i=e.dob;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(h.jsx)("img",{src:r.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})}),Object(h.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[n.first," ",n.last]}),Object(h.jsx)("td",{"data-th":"Phone",className:"align-middle",children:s}),Object(h.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(h.jsx)("a",{href:"mailto:"+c,target:"__blank",children:c})}),Object(h.jsx)("td",{"data-th":"Birthday",className:"align-middle",children:a(i.date)})]},t.uuid)})):Object(h.jsx)(h.Fragment,{})})};a(25);var j=function(e){var t=e.headings,a=e.users,n=e.handleSort;return Object(h.jsx)("div",{className:"datatable mt-5",children:Object(h.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:t.map((function(e){var t=e.name,a=e.width;return Object(h.jsxs)("th",{className:"col",style:{width:a},onClick:function(){n(t.toLowerCase())},children:[t,Object(h.jsx)("span",{className:"pointer"})]},t)}))})}),Object(h.jsx)(u,{users:a})]})})};a(26);var m=function(e){var t=e.handleSearchChange;return Object(h.jsx)("div",{className:"searchbox",children:Object(h.jsxs)("form",{className:"form-inline",children:[Object(h.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return t(e)}}),Object(h.jsx)("button",{className:"btn my-2 my-sm-0",type:"submit",children:"Search"})]})})};a(27);var b=function(e){var t=e.handleSearchChange;return Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(h.jsx)("div",{className:"search-area col-4",children:Object(h.jsx)(m,{handleSearchChange:t})})})},f=a(17),O=a.n(f),v=function(){return O.a.get("https://randomuser.me/api/?results=200&nat=us")},x=(a(46),function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={users:[{}],order:"descend",filteredUsers:[{}],headings:[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}],handleSort:function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var a=e.state.filteredUsers.sort((function(a,n){return"ascend"===e.state.order?void 0===a[t]?1:void 0===n[t]?-1:"name"===t?a[t].last.localeCompare(n[t].last):a[t]-n[t]:void 0===a[t]?1:void 0===n[t]?-1:"name"===t?n[t].last.localeCompare(a[t].last):n[t]-a[t]}));e.setState({filteredUsers:a})},handleSearchChange:function(t){console.log(t.target.value);var a=t.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredUsers:n})}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;v().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{handleSearchChange:this.state.handleSearchChange}),Object(h.jsx)("div",{className:"data-area",children:Object(h.jsx)(j,{headings:this.state.headings,users:this.state.filteredUsers,handleSort:this.state.handleSort})})]})}}]),a}(n.Component)),g=(a(47),function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x,{})})}}]),a}(n.Component));a(48);var p=function(e){var t=e.children;return Object(h.jsx)("div",{className:"wrapper",children:t})},N=(a(49),function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("h1",{children:"Employee Directory"})})}}]),a}(n.Component));a(50);var y=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(p,{children:[Object(h.jsx)(N,{}),Object(h.jsx)(g,{})]})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),S()}},[[51,1,2]]]);
//# sourceMappingURL=main.864b6e2e.chunk.js.map