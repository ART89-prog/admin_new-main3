/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[15],{427:function(Ca,va,r){r.r(va);var oa=r(1),la=r(0);r.n(la);Ca=r(89);r=r(360);Ca=function(ka){function ha(da,z,w){z=ka.call(this,da,z,w)||this;z.db=da;return z}Object(oa.c)(ha,ka);ha.prototype.request=function(da){var z=this;Object(la.each)(da,function(w){z.db.get(w,function(x,f,a){return x?z.trigger("partReady",{Wa:w,error:x}):z.trigger("partReady",{Wa:w,data:f,Th:!1,Ff:!1,error:null,Rc:a})})})};ha.prototype.Yr=function(da){da()};
return ha}(Ca.a);Object(r.a)(Ca);Object(r.b)(Ca);va["default"]=Ca}}]);}).call(this || window)
