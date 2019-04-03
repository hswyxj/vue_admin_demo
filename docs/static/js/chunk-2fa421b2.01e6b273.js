(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fa421b2"],{"15ec":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app-container"},[t("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolechannelList,border:""}},[t("el-table-column",{attrs:{align:"center",label:"角色归属",width:"220"},scopedSlots:e._u([{key:"default",fn:function(n){var t=n.row;return[e._v(e._s(t.role_name))]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"渠道列表"},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.row;return e._l(a.channel_name,function(n){return t("el-tag",{key:n,attrs:{label:n,value:n}},[e._v(e._s(n))])})}}])}),e._v(" "),t("el-table-column",{attrs:{align:"header-center",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(n){var t=n.row;return[e._v(e._s(t.description))]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"更新时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.row;return[t("span",[e._v(e._s(e._f("parseTime")(a.update_time,"{y}-{m}-{d} {h}:{i}")))])]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.row;return[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.handleEdit({row:a})}}},[e._v("编辑修改")])]}}])})],1),e._v(" "),t("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"编辑渠道权限":""},on:{"update:visible":function(n){e.dialogVisible=n}}},[t("el-form",{ref:"channel",attrs:{model:e.channel,rules:e.rules,"label-width":"80px","label-position":"left"}},[t("el-form-item",{attrs:{label:"角色归属",prop:"role_name"}},[t("el-select",{attrs:{width:"220",placeholder:"角色选择",clearable:""},model:{value:e.channel.role_name,callback:function(n){e.$set(e.channel,"role_name",n)},expression:"channel.role_name"}},e._l(e.rolechannelList,function(e){return t("el-option",{key:e.id,attrs:{label:e.role_name,value:e.role_name}})}),1)],1),e._v(" "),t("el-form-item",{attrs:{label:"渠道列表",prop:"channel_name"}},[t("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(n){e.checkAll=n},expression:"checkAll"}},[e._v("全选")]),e._v(" "),t("el-checkbox-group",{on:{change:e.handleCheckedchannelnamesChange},model:{value:e.channel.channel_name,callback:function(n){e.$set(e.channel,"channel_name",n)},expression:"channel.channel_name"}},e._l(e.channel.channel_namelist,function(e){return t("el-checkbox",{key:e,attrs:{label:e,value:e,name:"channel_name"}})}),1)],1),e._v(" "),t("el-form-item",{attrs:{label:"用户描述",prop:"description"}},[t("el-input",{attrs:{autosize:{minRows:3,maxRows:4},type:"textarea",placeholder:"请输入用户描述"},model:{value:e.channel.description,callback:function(n){e.$set(e.channel,"description",n)},expression:"channel.description"}})],1)],1),e._v(" "),t("div",{staticStyle:{"text-align":"right"}},[t("el-button",{attrs:{type:"danger"},on:{click:function(n){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(n){return e.confirmRole("channel")}}},[e._v("确认")])],1)],1)],1)},l=[],i=(t("96cf"),t("3b8d")),c=t("5176"),r=t.n(c),o=t("ed08"),s=t("b775");function h(){return Object(s["a"])({url:"/channels",method:"get"})}function u(e,n){return Object(s["a"])({url:"/channel/".concat(e),method:"put",params:{data:n}})}var d={id:"",role_name:"",channel_name:[],channel_namelist:[],game_package_name:"",update_user:"",description:""},m={data:function(){return{checkAll:!1,channel:r()({},d),rolechannelList:[],isIndeterminate:!0,dialogVisible:!1,dialogType:"new",checkStrictly:!1,rules:{role_name:[{required:!0,message:"请选择角色组",trigger:"change"}],channel_name:[{type:"array",required:!0,message:"请至少选择一个渠道",trigger:"change"}]}}},created:function(){this.getRolechannels()},methods:{getRolechannels:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:n=e.sent,this.rolechannelList=n.data;case 4:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),handleCheckAllChange:function(e){this.channel.channel_name=e?this.channel.channel_namelist:[],this.isIndeterminate=!1},handleCheckedchannelnamesChange:function(e){var n=e.length;this.checkAll=n===this.channel.channel_namelist.length,this.isIndeterminate=n>0&&n<this.channel.channel_namelist.length},handleEdit:function(e){var n=e.row;this.dialogType="edit",this.dialogVisible=!0,this.channel=Object(o["a"])(n)},confirmRole:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(n){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$refs[n].validate(function(e){var n="edit"===t.dialogType;if(e){if(n){t.channel.update_time=(new Date).getTime(),u(t.channel.id,t.channel);for(var a=0;a<t.rolechannelList.length;a++)if(t.rolechannelList[a].id===t.channel.id){t.rolechannelList.splice(a,1,r()({},t.channel));break}}var l=t.channel,i=l.description,c=l.role_name,o=l.channel_name,s=l.game_package_name;t.dialogVisible=!1,t.$notify({title:"成功",dangerouslyUseHTMLString:!0,message:"\n            <div>角色归属: ".concat(c,"</div>\n            <div>渠道名称: ").concat(o,"</div>\n            <div>包体名称: ").concat(s,"</div>\n            <div>描述: ").concat(i,"</div>\n          "),type:"success"})}});case 1:case"end":return e.stop()}},e,this)}));function n(n){return e.apply(this,arguments)}return n}()}},p=m,f=(t("5948"),t("2877")),_=Object(f["a"])(p,a,l,!1,null,"830910c4",null);n["default"]=_.exports},5176:function(e,n,t){e.exports=t("51b6")},5948:function(e,n,t){"use strict";var a=t("61a1"),l=t.n(a);l.a},"61a1":function(e,n,t){}}]);