var wn=Object.create;var k=Object.defineProperty,bn=Object.defineProperties,vn=Object.getOwnPropertyDescriptor,En=Object.getOwnPropertyDescriptors,In=Object.getOwnPropertyNames,Te=Object.getOwnPropertySymbols,Pn=Object.getPrototypeOf,Ge=Object.prototype.hasOwnProperty,Tn=Object.prototype.propertyIsEnumerable;var Ce=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))Ge.call(t,n)&&Ce(e,n,t[n]);if(Te)for(var n of Te(t))Tn.call(t,n)&&Ce(e,n,t[n]);return e},v=(e,t)=>bn(e,En(t)),Ae=e=>k(e,"__esModule",{value:!0});var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Cn=(e,t)=>{for(var n in t)k(e,n,{get:t[n],enumerable:!0})},Re=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of In(t))!Ge.call(e,s)&&(n||s!=="default")&&k(e,s,{get:()=>t[s],enumerable:!(r=vn(t,s))||r.enumerable});return e},Oe=(e,t)=>Re(Ae(k(e!=null?wn(Pn(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Gn=(e=>(t,n)=>e&&e.get(t)||(n=Re(Ae({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var $e=c((Cs,_e)=>{_e.exports=ke;ke.sync=Rn;var qe=require("fs");function An(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var s=n[r].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function Ne(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:An(t,n)}function ke(e,t,n){qe.stat(e,function(r,s){n(r,r?!1:Ne(s,e,t))})}function Rn(e,t){return Ne(qe.statSync(e),e,t)}});var Fe=c((Gs,je)=>{je.exports=Be;Be.sync=On;var Le=require("fs");function Be(e,t,n){Le.stat(e,function(r,s){n(r,r?!1:Me(s,t))})}function On(e,t){return Me(Le.statSync(e),t)}function Me(e,t){return e.isFile()&&qn(e,t)}function qn(e,t){var n=e.mode,r=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),l=parseInt("010",8),d=parseInt("001",8),p=a|l,S=n&d||n&l&&s===i||n&a&&r===o||n&p&&o===0;return S}});var De=c((Rs,Ue)=>{var As=require("fs"),D;process.platform==="win32"||global.TESTING_WINDOWS?D=$e():D=Fe();Ue.exports=te;te.sync=Nn;function te(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,s){te(e,t||{},function(o,i){o?s(o):r(i)})})}D(e,t||{},function(r,s){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,s=!1),n(r,s)})}function Nn(e,t){try{return D.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var Ye=c((Os,Ve)=>{var P=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",He=require("path"),kn=P?";":":",Xe=De(),Ke=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),We=(e,t)=>{let n=t.colon||kn,r=e.match(/\//)||P&&e.match(/\\/)?[""]:[...P?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=P?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=P?s.split(n):[""];return P&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:r,pathExt:o,pathExtExe:s}},ze=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:s,pathExtExe:o}=We(e,t),i=[],a=d=>new Promise((p,S)=>{if(d===r.length)return t.all&&i.length?p(i):S(Ke(e));let h=r[d],y=/^".*"$/.test(h)?h.slice(1,-1):h,g=He.join(y,e),x=!y&&/^\.[\\\/]/.test(e)?e.slice(0,2)+g:g;p(l(x,d,0))}),l=(d,p,S)=>new Promise((h,y)=>{if(S===s.length)return h(a(p+1));let g=s[S];Xe(d+g,{pathExt:o},(x,I)=>{if(!x&&I)if(t.all)i.push(d+g);else return h(d+g);return h(l(d,p,S+1))})});return n?a(0).then(d=>n(null,d),n):a(0)},_n=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:s}=We(e,t),o=[];for(let i=0;i<n.length;i++){let a=n[i],l=/^".*"$/.test(a)?a.slice(1,-1):a,d=He.join(l,e),p=!l&&/^\.[\\\/]/.test(e)?e.slice(0,2)+d:d;for(let S=0;S<r.length;S++){let h=p+r[S];try{if(Xe.sync(h,{pathExt:s}))if(t.all)o.push(h);else return h}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw Ke(e)};Ve.exports=ze;ze.sync=_n});var re=c((qs,ne)=>{"use strict";var Qe=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};ne.exports=Qe;ne.exports.default=Qe});var tt=c((Ns,et)=>{"use strict";var Ze=require("path"),$n=Ye(),Ln=re();function Je(e,t){let n=e.options.env||process.env,r=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=$n.sync(e.command,{path:n[Ln({env:n})],pathExt:t?Ze.delimiter:void 0})}catch{}finally{o&&process.chdir(r)}return i&&(i=Ze.resolve(s?e.options.cwd:"",i)),i}function Bn(e){return Je(e)||Je(e,!0)}et.exports=Bn});var nt=c((ks,oe)=>{"use strict";var se=/([()\][%!^"`<>&|;, *?])/g;function Mn(e){return e=e.replace(se,"^$1"),e}function jn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(se,"^$1"),t&&(e=e.replace(se,"^$1")),e}oe.exports.command=Mn;oe.exports.argument=jn});var st=c((_s,rt)=>{"use strict";rt.exports=/^#!(.*)/});var it=c(($s,ot)=>{"use strict";var Fn=st();ot.exports=(e="")=>{let t=e.match(Fn);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?r:r?`${s} ${r}`:s}});var ct=c((Ls,at)=>{"use strict";var ie=require("fs"),Un=it();function Dn(e){let n=Buffer.alloc(150),r;try{r=ie.openSync(e,"r"),ie.readSync(r,n,0,150,0),ie.closeSync(r)}catch{}return Un(n.toString())}at.exports=Dn});var ft=c((Bs,dt)=>{"use strict";var Hn=require("path"),ut=tt(),lt=nt(),Xn=ct(),Kn=process.platform==="win32",Wn=/\.(?:com|exe)$/i,zn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Vn(e){e.file=ut(e);let t=e.file&&Xn(e.file);return t?(e.args.unshift(e.file),e.command=t,ut(e)):e.file}function Yn(e){if(!Kn)return e;let t=Vn(e),n=!Wn.test(t);if(e.options.forceShell||n){let r=zn.test(t);e.command=Hn.normalize(e.command),e.command=lt.command(e.command),e.args=e.args.map(o=>lt.argument(o,r));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Qn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:Yn(r)}dt.exports=Qn});var ht=c((Ms,mt)=>{"use strict";var ae=process.platform==="win32";function ce(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Zn(e,t){if(!ae)return;let n=e.emit;e.emit=function(r,s){if(r==="exit"){let o=pt(s,t,"spawn");if(o)return n.call(e,"error",o)}return n.apply(e,arguments)}}function pt(e,t){return ae&&e===1&&!t.file?ce(t.original,"spawn"):null}function Jn(e,t){return ae&&e===1&&!t.file?ce(t.original,"spawnSync"):null}mt.exports={hookChildProcess:Zn,verifyENOENT:pt,verifyENOENTSync:Jn,notFoundError:ce}});var gt=c((js,T)=>{"use strict";var St=require("child_process"),ue=ft(),le=ht();function yt(e,t,n){let r=ue(e,t,n),s=St.spawn(r.command,r.args,r.options);return le.hookChildProcess(s,r),s}function er(e,t,n){let r=ue(e,t,n),s=St.spawnSync(r.command,r.args,r.options);return s.error=s.error||le.verifyENOENTSync(s.status,r),s}T.exports=yt;T.exports.spawn=yt;T.exports.sync=er;T.exports._parse=ue;T.exports._enoent=le});var wt=c((Fs,xt)=>{"use strict";xt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var Et=c((Us,$)=>{"use strict";var _=require("path"),bt=re(),vt=e=>{e=f({cwd:process.cwd(),path:process.env[bt()],execPath:process.execPath},e);let t,n=_.resolve(e.cwd),r=[];for(;t!==n;)r.push(_.join(n,"node_modules/.bin")),t=n,n=_.resolve(n,"..");let s=_.resolve(e.cwd,e.execPath,"..");return r.push(s),r.concat(e.path).join(_.delimiter)};$.exports=vt;$.exports.default=vt;$.exports.env=e=>{e=f({env:process.env},e);let t=f({},e.env),n=bt({env:t});return e.path=t[n],t[n]=$.exports(e),t}});var Pt=c((Ds,de)=>{"use strict";var It=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};de.exports=It;de.exports.default=It});var Ct=c((Hs,X)=>{"use strict";var tr=Pt(),H=new WeakMap,Tt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(H.set(o,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return tr(o,e),H.set(o,r),o};X.exports=Tt;X.exports.default=Tt;X.exports.callCount=e=>{if(!H.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return H.get(e)}});var Gt=c(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});K.SIGNALS=void 0;var nr=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];K.SIGNALS=nr});var fe=c(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.SIGRTMAX=C.getRealtimeSignals=void 0;var rr=function(){let e=Rt-At+1;return Array.from({length:e},sr)};C.getRealtimeSignals=rr;var sr=function(e,t){return{name:`SIGRT${t+1}`,number:At+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},At=34,Rt=64;C.SIGRTMAX=Rt});var Ot=c(W=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0});W.getSignals=void 0;var or=require("os"),ir=Gt(),ar=fe(),cr=function(){let e=(0,ar.getRealtimeSignals)();return[...ir.SIGNALS,...e].map(ur)};W.getSignals=cr;var ur=function({name:e,number:t,description:n,action:r,forced:s=!1,standard:o}){let{signals:{[e]:i}}=or.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:s,standard:o}}});var Nt=c(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.signalsByNumber=G.signalsByName=void 0;var lr=require("os"),qt=Ot(),dr=fe(),fr=function(){return(0,qt.getSignals)().reduce(pr,{})},pr=function(e,{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}){return v(f({},e),{[t]:{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}})},mr=fr();G.signalsByName=mr;var hr=function(){let e=(0,qt.getSignals)(),t=dr.SIGRTMAX+1,n=Array.from({length:t},(r,s)=>Sr(s,e));return Object.assign({},...n)},Sr=function(e,t){let n=yr(e,t);if(n===void 0)return{};let{name:r,description:s,supported:o,action:i,forced:a,standard:l}=n;return{[e]:{name:r,number:e,description:s,supported:o,action:i,forced:a,standard:l}}},yr=function(e,t){let n=t.find(({name:r})=>lr.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},gr=hr();G.signalsByNumber=gr});var _t=c((Vs,kt)=>{"use strict";var{signalsByName:xr}=Nt(),wr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",br=({stdout:e,stderr:t,all:n,error:r,signal:s,exitCode:o,command:i,escapedCommand:a,timedOut:l,isCanceled:d,killed:p,parsed:{options:{timeout:S}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let h=s===void 0?void 0:xr[s].description,y=r&&r.code,x=`Command ${wr({timedOut:l,timeout:S,errorCode:y,signal:s,signalDescription:h,exitCode:o,isCanceled:d})}: ${i}`,I=Object.prototype.toString.call(r)==="[object Error]",F=I?`${x}
${r.message}`:x,U=[F,t,e].filter(Boolean).join(`
`);return I?(r.originalMessage=r.message,r.message=U):r=new Error(U),r.shortMessage=F,r.command=i,r.escapedCommand=a,r.exitCode=o,r.signal=s,r.signalDescription=h,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(l),r.isCanceled=d,r.killed=p&&!l,r};kt.exports=br});var Lt=c((Ys,pe)=>{"use strict";var z=["stdin","stdout","stderr"],vr=e=>z.some(t=>e[t]!==void 0),$t=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return z.map(r=>e[r]);if(vr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${z.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,z.length);return Array.from({length:n},(r,s)=>t[s])};pe.exports=$t;pe.exports.node=e=>{let t=$t(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Bt=c((Qs,V)=>{V.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&V.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&V.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Dt=c((Zs,O)=>{var u=global.process;typeof u!="object"||!u?O.exports=function(){}:(Mt=require("assert"),A=Bt(),jt=/^win/i.test(u.platform),L=require("events"),typeof L!="function"&&(L=L.EventEmitter),u.__signal_exit_emitter__?m=u.__signal_exit_emitter__:(m=u.__signal_exit_emitter__=new L,m.count=0,m.emitted={}),m.infinite||(m.setMaxListeners(1/0),m.infinite=!0),O.exports=function(e,t){if(global.process===u){Mt.equal(typeof e,"function","a callback must be provided for exit handler"),R===!1&&me();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){m.removeListener(n,e),m.listeners("exit").length===0&&m.listeners("afterexit").length===0&&Y()};return m.on(n,e),r}},Y=function(){!R||global.process!==u||(R=!1,A.forEach(function(t){try{u.removeListener(t,Q[t])}catch{}}),u.emit=Z,u.reallyExit=he,m.count-=1)},O.exports.unload=Y,E=function(t,n,r){m.emitted[t]||(m.emitted[t]=!0,m.emit(t,n,r))},Q={},A.forEach(function(e){Q[e]=function(){if(u===global.process){var n=u.listeners(e);n.length===m.count&&(Y(),E("exit",null,e),E("afterexit",null,e),jt&&e==="SIGHUP"&&(e="SIGINT"),u.kill(u.pid,e))}}}),O.exports.signals=function(){return A},R=!1,me=function(){R||u!==global.process||(R=!0,m.count+=1,A=A.filter(function(t){try{return u.on(t,Q[t]),!0}catch{return!1}}),u.emit=Ut,u.reallyExit=Ft)},O.exports.load=me,he=u.reallyExit,Ft=function(t){u===global.process&&(u.exitCode=t||0,E("exit",u.exitCode,null),E("afterexit",u.exitCode,null),he.call(u,u.exitCode))},Z=u.emit,Ut=function(t,n){if(t==="exit"&&u===global.process){n!==void 0&&(u.exitCode=n);var r=Z.apply(this,arguments);return E("exit",u.exitCode,null),E("afterexit",u.exitCode,null),r}else return Z.apply(this,arguments)});var Mt,A,jt,L,m,Y,E,Q,R,me,he,Ft,Z,Ut});var Xt=c((Js,Ht)=>{"use strict";var Er=require("os"),Ir=Dt(),Pr=1e3*5,Tr=(e,t="SIGTERM",n={})=>{let r=e(t);return Cr(e,t,n,r),r},Cr=(e,t,n,r)=>{if(!Gr(t,n,r))return;let s=Rr(n),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},Gr=(e,{forceKillAfterTimeout:t},n)=>Ar(e)&&t!==!1&&n,Ar=e=>e===Er.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Rr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Pr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Or=(e,t)=>{e.kill()&&(t.isCanceled=!0)},qr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Nr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let s,o=new Promise((a,l)=>{s=setTimeout(()=>{qr(e,n,l)},t)}),i=r.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},kr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},_r=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let s=Ir(()=>{e.kill()});return r.finally(()=>{s()})};Ht.exports={spawnedKill:Tr,spawnedCancel:Or,setupTimeout:Nr,validateTimeout:kr,setExitHandler:_r}});var Wt=c((eo,Kt)=>{"use strict";var w=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";w.writable=e=>w(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";w.readable=e=>w(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";w.duplex=e=>w.writable(e)&&w.readable(e);w.transform=e=>w.duplex(e)&&typeof e._transform=="function";Kt.exports=w});var Vt=c((to,zt)=>{"use strict";var{PassThrough:$r}=require("stream");zt.exports=e=>{e=f({},e);let{array:t}=e,{encoding:n}=e,r=n==="buffer",s=!1;t?s=!(n||r):n=n||"utf8",r&&(n=null);let o=new $r({objectMode:s});n&&o.setEncoding(n);let i=0,a=[];return o.on("data",l=>{a.push(l),s?i=a.length:i+=l.length}),o.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var Yt=c((no,B)=>{"use strict";var{constants:Lr}=require("buffer"),Br=require("stream"),{promisify:Mr}=require("util"),jr=Vt(),Fr=Mr(Br.pipeline),Se=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function ye(e,t){if(!e)throw new Error("Expected a stream");t=f({maxBuffer:1/0},t);let{maxBuffer:n}=t,r=jr(t);return await new Promise((s,o)=>{let i=a=>{a&&r.getBufferedLength()<=Lr.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),o(a)};(async()=>{try{await Fr(e,r),s()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new Se)})}),r.getBufferedValue()}B.exports=ye;B.exports.buffer=(e,t)=>ye(e,v(f({},t),{encoding:"buffer"}));B.exports.array=(e,t)=>ye(e,v(f({},t),{array:!0}));B.exports.MaxBufferError=Se});var Zt=c((ro,Qt)=>{"use strict";var{PassThrough:Ur}=require("stream");Qt.exports=function(){var e=[],t=new Ur({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(o){return Array.isArray(o)?(o.forEach(n),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function r(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var nn=c((so,tn)=>{"use strict";var en=Wt(),Jt=Yt(),Dr=Zt(),Hr=(e,t)=>{t===void 0||e.stdin===void 0||(en(t)?t.pipe(e.stdin):e.stdin.end(t))},Xr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=Dr();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},ge=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},xe=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?Jt(e,{encoding:t,maxBuffer:r}):Jt.buffer(e,{maxBuffer:r})},Kr=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:s,maxBuffer:o},i)=>{let a=xe(e,{encoding:r,buffer:s,maxBuffer:o}),l=xe(t,{encoding:r,buffer:s,maxBuffer:o}),d=xe(n,{encoding:r,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,a,l,d])}catch(p){return Promise.all([{error:p,signal:p.signal,timedOut:p.timedOut},ge(e,a),ge(t,l),ge(n,d)])}},Wr=({input:e})=>{if(en(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};tn.exports={handleInput:Hr,makeAllStream:Xr,getSpawnedResult:Kr,validateInputSync:Wr}});var sn=c((oo,rn)=>{"use strict";var zr=(async()=>{})().constructor.prototype,Vr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(zr,e)]),Yr=(e,t)=>{for(let[n,r]of Vr){let s=typeof t=="function"?(...o)=>Reflect.apply(r.value,t(),o):r.value.bind(t);Reflect.defineProperty(e,n,v(f({},r),{value:s}))}return e},Qr=e=>new Promise((t,n)=>{e.on("exit",(r,s)=>{t({exitCode:r,signal:s})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});rn.exports={mergePromise:Yr,getSpawnedPromise:Qr}});var cn=c((io,an)=>{"use strict";var on=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Zr=/^[\w.-]+$/,Jr=/"/g,es=e=>typeof e!="string"||Zr.test(e)?e:`"${e.replace(Jr,'\\"')}"`,ts=(e,t)=>on(e,t).join(" "),ns=(e,t)=>on(e,t).map(n=>es(n)).join(" "),rs=/ +/g,ss=e=>{let t=[];for(let n of e.trim().split(rs)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};an.exports={joinCommand:ts,getEscapedCommand:ns,parseCommand:ss}});var hn=c((ao,q)=>{"use strict";var os=require("path"),we=require("child_process"),is=gt(),as=wt(),cs=Et(),us=Ct(),J=_t(),ln=Lt(),{spawnedKill:ls,spawnedCancel:ds,setupTimeout:fs,validateTimeout:ps,setExitHandler:ms}=Xt(),{handleInput:hs,getSpawnedResult:Ss,makeAllStream:ys,validateInputSync:gs}=nn(),{mergePromise:un,getSpawnedPromise:xs}=sn(),{joinCommand:dn,parseCommand:fn,getEscapedCommand:pn}=cn(),ws=1e3*1e3*100,bs=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:s})=>{let o=t?f(f({},process.env),e):e;return n?cs.env({env:o,cwd:r,execPath:s}):o},mn=(e,t,n={})=>{let r=is._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n=f({maxBuffer:ws,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},n),n.env=bs(n),n.stdio=ln(n),process.platform==="win32"&&os.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},M=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?as(t):t,ee=(e,t,n)=>{let r=mn(e,t,n),s=dn(e,t),o=pn(e,t);ps(r.options);let i;try{i=we.spawn(r.file,r.args,r.options)}catch(y){let g=new we.ChildProcess,x=Promise.reject(J({error:y,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return un(g,x)}let a=xs(i),l=fs(i,r.options,a),d=ms(i,r.options,l),p={isCanceled:!1};i.kill=ls.bind(null,i.kill.bind(i)),i.cancel=ds.bind(null,i,p);let h=us(async()=>{let[{error:y,exitCode:g,signal:x,timedOut:I},F,U,xn]=await Ss(i,r.options,d),ve=M(r.options,F),Ee=M(r.options,U),Ie=M(r.options,xn);if(y||g!==0||x!==null){let Pe=J({error:y,exitCode:g,signal:x,stdout:ve,stderr:Ee,all:Ie,command:s,escapedCommand:o,parsed:r,timedOut:I,isCanceled:p.isCanceled,killed:i.killed});if(!r.options.reject)return Pe;throw Pe}return{command:s,escapedCommand:o,exitCode:0,stdout:ve,stderr:Ee,all:Ie,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return hs(i,r.options.input),i.all=ys(i,r.options),un(i,h)};q.exports=ee;q.exports.sync=(e,t,n)=>{let r=mn(e,t,n),s=dn(e,t),o=pn(e,t);gs(r.options);let i;try{i=we.spawnSync(r.file,r.args,r.options)}catch(d){throw J({error:d,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=M(r.options,i.stdout,i.error),l=M(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let d=J({stdout:a,stderr:l,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return d;throw d}return{command:s,escapedCommand:o,exitCode:0,stdout:a,stderr:l,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};q.exports.command=(e,t)=>{let[n,...r]=fn(e);return ee(n,r,t)};q.exports.commandSync=(e,t)=>{let[n,...r]=fn(e);return ee.sync(n,r,t)};q.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=ln.node(n),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=n;return ee(o,[...i,e,...Array.isArray(t)?t:[]],v(f({},n),{stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1}))}});var Ps={};Cn(Ps,{default:()=>Is});var b=require("@raycast/api"),j=require("react");var Sn=Oe(require("node:process"),1),yn=Oe(hn(),1);async function N(e){if(Sn.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,yn.default)("osascript",["-e",e]);return t}var be=require("@raycast/api");var vs=async e=>{try{await N('do shell script "pgrep caffeinate"'),await(0,be.showHUD)("Your Mac is already caffeinated")}catch{N(`do shell script "caffeinate -di${typeof e=="string"?` ${e}`:""}"`),await(0,be.showHUD)("Your Mac is caffeinated")}},gn=vs;var Es=()=>{let[e,t]=(0,j.useState)(!0),[n,r]=(0,j.useState)([]);return(0,j.useEffect)(()=>{(async()=>{let s=(await N('tell application "System Events" to get the unix id of every process whose background only is false')).split(", "),i=(await N('tell application "System Events" to get the name of every process whose background only is false')).split(", ").map((a,l)=>({[a]:s[l]}));r(i),t(!1)})()},[]),_jsx(b.Form,{isLoading:e,actions:_jsx(b.ActionPanel,null,_jsx(b.SubmitFormAction,{title:"Caffeinate",onSubmit:async s=>{await gn(`-w ${s.process}`),(0,b.popToRoot)()}}))},_jsx(b.Form.Dropdown,{id:"process",title:"App"},n.map(s=>{let o=Object.keys(s)[0];return _jsx(b.Form.Dropdown.Item,{key:o,value:s[o],title:o})})))},Is=Es;module.exports=Gn(Ps);0&&(module.exports={});
