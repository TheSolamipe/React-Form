(window.webpackJsonpreactform=window.webpackJsonpreactform||[]).push([[0],{140:function(e,t,a){e.exports=a(286)},147:function(e,t,a){},286:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(7),c=a.n(l),s=(a(145),a(146),a(147),a(68)),o=a(69),i=a(76),m=a(70),u=a(77),p=a(124),b=a(51),h=a(295),f=a(291),d=a(292),y=a(290),g=a(293),O=a(288),E=a(289),j=a(106),v=a(294);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t);e||h.a.loading("You are submitting a form....",2.5).then((function(){h.a.success("Form submitted successfully...",1),console.log("Received values of form:",a)}))}))},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.state={confirmDirty:!1,autoCompleteResult:[]},a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleConfirmBlur=a.handleConfirmBlur.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},a={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};return n.a.createElement("article",{className:"mw6 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10"},n.a.createElement(f.a,Object.assign({},t,{onSubmit:this.handleSubmit}),n.a.createElement(f.a.Item,Object.assign({},t,{label:"First Name"}),e("Firstname",{rules:[{required:!0,message:"Please input your First name"}]})(n.a.createElement(d.a,{placeholder:"Please input your Firstname"}))),n.a.createElement(f.a.Item,Object.assign({},t,{label:"Last Name"}),e("Lastname",{rules:[{required:!0,message:"Please input your Lastname"}]})(n.a.createElement(d.a,{placeholder:"Please input your Lastname"}))),n.a.createElement(f.a.Item,{label:"Birthday"},e("Birthday",{rules:[{type:"object",required:!0,message:"Please select time!"}]})(n.a.createElement(y.a,null))),n.a.createElement(f.a.Item,{label:"Age"},e("Age",{initialValue:1})(n.a.createElement(g.a,{min:1,max:100})),n.a.createElement("span",{className:"ant-form-text"}," Years")),n.a.createElement(f.a.Item,Object.assign({},t,{label:"Hobby"}),e("Hobby",{rules:[{required:!0,message:"Please input your Hobby"}]})(n.a.createElement(d.a,{placeholder:"Please input your Hobby",required:!0}))),n.a.createElement(f.a.Item,{label:"Captcha",extra:"We must make sure that your are a human."},n.a.createElement(O.a,{gutter:8},n.a.createElement(E.a,{span:12},e("captcha",{rules:[{required:!0,message:"Please input the captcha you got!"}]})(n.a.createElement(d.a,null))),n.a.createElement(E.a,{span:12},n.a.createElement(j.a,null,"Get captcha")))),n.a.createElement(f.a.Item,a,e("agreement",{rules:[{required:!0,message:"Please agree to the terms!"}],valuePropName:"checked"})(n.a.createElement(v.a,null,"I have read the ",n.a.createElement("a",{href:"./../../../public/index.html"},"agreement")))),n.a.createElement(f.a.Item,a,n.a.createElement(j.a,{type:"primary",htmlType:"submit"},"Submit"))))}}]),t}(n.a.Component),k=f.a.create({name:"register"})(P),C=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(k,null))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[140,1,2]]]);
//# sourceMappingURL=main.722bd007.chunk.js.map