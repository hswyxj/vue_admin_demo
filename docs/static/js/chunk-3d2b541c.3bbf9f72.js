(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d2b541c"],{"1d4e":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleAddRole}},[e._v("新增用户123")]),e._v(" "),r("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolesList,border:""}},[r("el-table-column",{attrs:{align:"center",label:"角色归属",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(r.name))]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"用户账号",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(r.username))]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"手机号码",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(r.iphonenum))]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"用户邮箱",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(r.email))]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"header-center",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(r.description))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"更新时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(e._f("parseTime")(n.update_time,"{y}-{m}-{d} {h}:{i}")))])]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleEdit({row:n})}}},[e._v("编辑修改")]),e._v(" "),r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.handleDelete({row:n})}}},[e._v("删除")])]}}])})],1),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"编辑用户资料":"新增用户"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"role",attrs:{model:e.role,rules:e.rules,"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"角色归属",prop:"name"}},[r("el-select",{attrs:{placeholder:"角色选择",clearable:""},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}},e._l(e.rolesList,function(e){return r("el-option",{key:e.key,attrs:{label:e.name,value:e.name}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"用户账号",prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入用户账号",clearable:""},model:{value:e.role.username,callback:function(t){e.$set(e.role,"username",t)},expression:"role.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户密码",prop:"password"}},[r("el-input",{attrs:{placeholder:"请输入用户密码","show-password":"",clearable:""},model:{value:e.role.password,callback:function(t){e.$set(e.role,"password",t)},expression:"role.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"手机号码",prop:"iphonenum"}},[e.role.iphonenum?r("el-input",{attrs:{placeholder:"请输入用户手机号码",oninput:"if(value.length>11)value=value.slice(0,11)",clearable:""},model:{value:e.role.iphonenum,callback:function(t){e.$set(e.role,"iphonenum",e._n(t))},expression:"role.iphonenum"}}):e._e()],1),e._v(" "),r("el-form-item",{attrs:{label:"用户邮箱",prop:"email"}},[r("el-input",{attrs:{placeholder:"请输入用户邮箱",clearable:""},model:{value:e.role.email,callback:function(t){e.$set(e.role,"email",t)},expression:"role.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户描述"}},[r("el-input",{attrs:{autosize:{minRows:3,maxRows:4},type:"textarea",placeholder:"请输入用户描述"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1)],1),e._v(" "),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.confirmRole("role")}}},[e._v("确认")])],1)],1)],1)},l=[],a=(r("7f7f"),r("96cf"),r("3b8d")),o=r("5176"),i=r.n(o),s=(r("6b54"),r("ed08")),c=r("cc5e"),u={key:"",name:"",username:"",password:"",email:"",update_time:"",description:""},d={data:function(){var e=function(e,t,r){if(!t)return r(new Error("请输入用户手机号码"));setTimeout(function(){11!==t.toString().length?r(new Error("用户手机号码必须11位")):r()},1e3)},t=function(e,t,r){t?(t.toString().length<8&&r(new Error("用户密码必须8位以上")),r()):r(new Error("请输入用户密码"))};return{role:i()({},u),rolesList:[],dialogVisible:!1,dialogType:"new",checkStrictly:!1,rules:{name:[{required:!0,message:"请选择角色组",trigger:"change"}],username:[{required:!0,message:"请输入用户名称",trigger:"blur"}],password:[{validator:t,required:!0,trigger:"blur"}],iphonenum:[{validator:e,required:!0,trigger:"blur"},{type:"number",message:"手机号码必须为数字值"}],email:[{required:!0,message:"请输入用户邮箱",trigger:"blur"}]}}},created:function(){this.getRoles()},methods:{getRoles:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["c"])();case 2:t=e.sent,this.rolesList=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleAddRole:function(){var e=this;this.role=i()({},u),this.dialogType="new",this.dialogVisible=!0,this.$nextTick(function(){e.$refs["role"].clearValidate()})},handleEdit:function(e){var t=e.row;this.dialogType="edit",this.dialogVisible=!0,this.role=Object(s["a"])(t)},handleDelete:function(e){var t=this,r=e.$index,n=e.row;this.$confirm("确定要删除该角色吗?","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["b"])(n.key);case 2:t.rolesList.splice(r,1),t.$message({type:"success",message:"删除成功"});case 4:case"end":return e.stop()}},e)}))).catch(function(e){console.error(e)})},confirmRole:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$refs[t].validate(function(e){var t="edit"===r.dialogType;if(e){if(t){r.role.update_time=(new Date).getTime(),Object(c["e"])(r.role.key,r.role);for(var n=0;n<r.rolesList.length;n++)if(r.rolesList[n].key===r.role.key){r.rolesList.splice(n,1,i()({},r.role));break}}else{r.role.update_time=(new Date).getTime();var l=Object(c["a"])(r.role),a=l.data;r.role.key=a.key,r.rolesList.push(r.role)}var o=r.role,s=o.description,u=o.name,d=o.username;r.dialogVisible=!1,r.$notify({title:"成功",dangerouslyUseHTMLString:!0,message:"\n            <div>角色归属: ".concat(u,"</div>\n            <div>角色名称: ").concat(d,"</div>\n            <div>描述: ").concat(s,"</div>\n          "),type:"success"})}});case 1:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},p=d,m=(r("c025"),r("2877")),f=Object(m["a"])(p,n,l,!1,null,"5c444637",null);t["default"]=f.exports},5176:function(e,t,r){e.exports=r("51b6")},9911:function(e,t,r){},c025:function(e,t,r){"use strict";var n=r("9911"),l=r.n(n);l.a},cc5e:function(e,t,r){"use strict";r.d(t,"d",function(){return l}),r.d(t,"c",function(){return a}),r.d(t,"a",function(){return o}),r.d(t,"e",function(){return i}),r.d(t,"b",function(){return s});var n=r("b775");function l(){return Object(n["a"])({url:"/routes",method:"get"})}function a(){return Object(n["a"])({url:"/roles",method:"get"})}function o(e){return Object(n["a"])({url:"/role",method:"post",data:e})}function i(e,t){return Object(n["a"])({url:"/role/".concat(e),method:"put",data:t})}function s(e){return Object(n["a"])({url:"/role/".concat(e),method:"delete"})}}}]);