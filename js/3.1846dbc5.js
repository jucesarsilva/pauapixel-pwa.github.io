(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"023e":function(e,s,t){"use strict";t("551c"),t("06db");var a=t("bc3a"),r=t.n(a),n=t("5206"),i=t("bd5e"),o=t("ba11"),c=function(e){return new Promise((function(s,t){r.a.get("".concat(n["a"].api,"user/existsEmail/").concat(e)).then((function(e){s(e)})).catch((function(e){Object(i["a"])(e,"Não foi possível validar esse e-mail."),t(e)}))}))},l=function(e){return new Promise((function(s,t){r()({method:"post",url:"".concat(n["a"].api,"user/register"),data:e,headers:{"Content-Type":"application/json"}}).then((function(e){Object(o["a"])("Usuário cadastrado com sucesso."),s(e)})).catch((function(e){Object(i["a"])(e,"Não foi possível cadastrar o usuário."),t(e)}))}))},u=function(){return new Promise((function(e,s){r.a.get("".concat(n["a"].api,"user/associate")).then((function(s){e(s)})).catch((function(e){Object(i["a"])(e,"Não foi possível obter os usuários."),s(e)}))}))};s["a"]={existsEmail:c,register:l,associates:u}},4678:function(e,s,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e4","./ja.js":"079e4","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var s=n(e);return t(s)}function n(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id="4678"},"67d8":function(e,s,t){"use strict";var a=t("c1df"),r=t.n(a),n=t("7267"),i={data:function(){return{validation:{requiredInput:"O preenchimento é obrigatório",requiredSelect:"A seleção é obrigatória",invalid:"O valor é inválido",negative:"O valor não pode ser negativo",sameValue:function(e,s){return"O ".concat(e," deve ser igual a ").concat(s)},maxValue:function(e){return"Máximo de ".concat(e," caracteres")},minValue:function(e){return"Mínimo de ".concat(e," caracteres")},gratterThan:function(e){return"O valor de ser maior que ".concat(e)}}}},methods:{validateField:function(e){this.$refs[e].validate(),this.$refs[e].hasError&&(this.error[e]=!0)},isEmail:function(e){var s=/.+\@.+\..+/;return s.test(e)},isInvalidImage:function(e){return"image/jpeg"!==e&&"image/jpg"!==e&&"image/png"!==e},isValidDate:function(e){return r()(e,"DD-MM-YYYY",!0).isValid()},isCPF:function(e){return Object(n["b"])(e)},isCNPJ:function(e){return Object(n["a"])(e)}}};s["a"]=i},"868f":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("q-layout",{staticClass:"row justify-center",attrs:{view:"lHh Lpr lFf"}},[t("q-card",{staticClass:"card-layout",attrs:{inline:""}},[t("q-card-section",{staticClass:"full-height"},[e.loading.roles?t("section",{staticClass:"row justify-center items-center full-height"},[t("div",{staticClass:"column"},[t("q-spinner-facebook",{attrs:{color:"primary",size:"5em"}}),t("div",[e._v("carregando..")])],1)]):t("section",[t("h3",{staticClass:"text-center text-secondary"},[e._v("Cadastrar-se")]),t("form",{staticClass:"column justify-start",on:{submit:function(s){return s.preventDefault(),e.register(s)}}},[t("q-input",{ref:"name",staticClass:"q-mb-md",attrs:{type:"text",color:"secondary","no-error-icon":"",label:"Nome completo",error:e.error.name,"lazy-rules":"",rules:[function(s){return s&&s.length>0||e.message.name}]},on:{blur:function(s){return e.validateField("name")}},scopedSlots:e._u([{key:"error",fn:function(){return[e._v(e._s(e.message.name))]},proxy:!0}],null,!1,880701290),model:{value:e.user.name,callback:function(s){e.$set(e.user,"name","string"===typeof s?s.trim():s)},expression:"user.name"}}),t("q-input",{ref:"email",staticClass:"q-mb-md",attrs:{type:"text",color:"secondary","no-error-icon":"",label:"E-mail",error:e.error.email,"lazy-rules":"",rules:[function(s){return s&&s.length>0||e.message.email}]},on:{blur:function(s){e.validateField("email"),e.existsEmail(e.user.email)}},scopedSlots:e._u([{key:"error",fn:function(){return[e._v(e._s(e.message.email))]},proxy:!0}],null,!1,234992033),model:{value:e.user.email,callback:function(s){e.$set(e.user,"email","string"===typeof s?s.trim():s)},expression:"user.email"}}),t("q-input",{ref:"password",staticClass:"q-mb-md",attrs:{label:"Senha",color:"secondary","no-error-icon":"",error:e.error.password,type:e.hidden?"password":"text","lazy-rules":"",rules:[function(s){return s&&s.length>0||e.message.password}]},on:{blur:function(s){return e.validateField("password")}},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.hidden?"visibility_off":"visibility"},on:{click:function(s){e.hidden=!e.hidden}}})]},proxy:!0},{key:"error",fn:function(){return[e._v(e._s(e.message.password))]},proxy:!0}],null,!1,2375202870),model:{value:e.user.password,callback:function(s){e.$set(e.user,"password","string"===typeof s?s.trim():s)},expression:"user.password"}}),t("q-select",{ref:"roles",staticClass:"q-mb-md",attrs:{label:"Funções *",dense:"","no-error-icon":"",multiple:"","map-options":"","option-value":"codRole","option-label":"label","option-disable":"inactive","input-debounce":"0","transition-show":"scale","transition-hide":"scale",options:e.roles,rules:[function(s){return s.length>0||e.message.roles}],"lazy-rules":""},on:{blur:function(s){return e.validateField("roles")}},scopedSlots:e._u([{key:"option",fn:function(s){return[t("q-item",e._g(e._b({},"q-item",s.itemProps,!1),s.itemEvents),[t("q-item-section",[t("q-item-label",{domProps:{innerHTML:e._s(s.opt.label)}})],1)],1)]}},{key:"no-option",fn:function(){return[t("q-item",[t("q-item-section",{staticClass:"text-grey"},[e._v("\n                  Nenhuma função cadastrada.\n                ")])],1)]},proxy:!0},{key:"error",fn:function(){return[e._v(e._s(e.message.roles))]},proxy:!0}],null,!1,11025416),model:{value:e.user.roles,callback:function(s){e.$set(e.user,"roles",s)},expression:"user.roles"}}),t("div",{staticClass:"row justify-center"},[t("q-btn",{staticClass:"btn-layout bg-primary text-white",attrs:{type:"submit",size:"lg",color:"secondary",unelevated:"",loading:e.loading.save,disable:e.blockSave()},scopedSlots:e._u([{key:"loading.save",fn:function(){return[e._v("Cadastrando...")]},proxy:!0}],null,!1,3936674732)},[e._v("\n              Cadastrar\n              ")])],1),t("div",{staticClass:"row justify-center"},[t("a",{staticClass:"q-mt-lg text-bold text-secondary cursor-pointer",attrs:{href:"javascript:void(0)"},on:{click:function(s){return e.$router.push("/login")}}},[e._v("\n              Voltar para Login\n            ")])])],1)])])],1)],1)},r=[],n=(t("7f7f"),t("67d8")),i=(t("551c"),t("06db"),t("bc3a")),o=t.n(i),c=t("5206"),l=t("bd5e"),u=function(){return new Promise((function(e,s){o.a.get("".concat(c["a"].api,"role/findRegisterRoles")).then((function(s){e(s)})).catch((function(e){Object(l["a"])(e,"Não foi possível obter a lista de funções de usuário."),s(e)}))}))},d={findRegisterRoles:u},f=t("023e"),m={name:"RegisterLayout",mixins:[n["a"]],data:function(){return{hidden:!0,loading:{roles:!0,save:!1},user:{name:"",email:"",password:"",roles:[]},error:{name:!1,email:!1,password:!1,roles:!1},message:{name:"",email:"",password:"",roles:""},roles:[]}},mounted:function(){this.init(),this.findRegisterRoles()},methods:{init:function(){this.message.name=this.validation.requiredInput,this.message.email=this.validation.requiredInput,this.message.password=this.validation.requiredInput,this.message.roles=this.validation.requiredSelect},existsEmail:function(e){var s=this;f["a"].existsEmail(e).then((function(e){var t=!!e.data;s.error.email=t,t&&(s.message.email="O e-mail já está em uso.")})).catch((function(e){s.error.email=!1}))},blockSave:function(){return!this.user.name.length||!this.user.email.length||!this.user.password.length||!this.user.roles.length||this.error.name||this.error.email||this.error.password||this.error.roles},register:function(){var e=this;this.loading.save||(this.loading.save=!0,f["a"].register(this.user).then((function(s){e.loading.save=!1,e.$router.push({path:"/login"})})).catch((function(s){e.loading.save=!1})))},findRegisterRoles:function(){var e=this;this.loading.roles=!0,d.findRegisterRoles().then((function(s){e.loading.roles=!1,s.data&&s.data.length&&(e.roles=s.data)})).catch((function(s){e.loading.roles=!1}))}},watch:{"user.name":function(e){return e?e.length>200?(this.message.name=this.validation.maxValue(200),void(this.error.name=!0)):void(this.error.name=!1):(this.message.name=this.validation.requiredInput,void(this.error.name=!0))},"user.email":function(e){return e?this.isEmail(e)?e.length>200?(this.message.email=this.validation.maxValue(200),void(this.error.email=!0)):void(this.error.email=!1):(this.error.email=!0,void(this.message.email=this.validation.invalid)):(this.error.email=!0,void(this.message.email=this.validation.requiredInput))},"user.password":function(e){return e?e.length<6?(this.error.password=!0,void(this.message.password=this.validation.minValue(6))):e.length>12?(this.error.password=!0,void(this.message.password=this.validation.maxValue(12))):void(this.error.password=!1):(this.error.password=!0,void(this.message.password=this.validation.requiredInput))}}},b=m,j=t("2877"),h=Object(j["a"])(b,a,r,!1,null,null,null);s["default"]=h.exports},ba11:function(e,s,t){"use strict";var a=t("a85c"),r=function(e){a["a"].success(e)};s["a"]=r},bd5e:function(e,s,t){"use strict";var a=t("a85c"),r=function(e,s){e&&e.ERR_INTERNET_DISCONNECTED||e&&e.SESSION_EXPIRED||a["a"].error(s)};s["a"]=r}}]);