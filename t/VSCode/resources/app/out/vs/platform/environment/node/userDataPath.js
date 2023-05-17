(function(){"use strict";function c(e,n,r){function a(t){return e.resolve(s(t))}function s(t){const i=process.env.VSCODE_PORTABLE;if(i)return e.join(i,"user-data");const u=t["user-data-dir"];if(u)return u;let o=process.env.VSCODE_APPDATA;if(!o)switch(process.platform){case"win32":if(o=process.env.APPDATA,!o){const f=process.env.USERPROFILE;if(typeof f!="string")throw new Error("Windows: Unexpected undefined %USERPROFILE% environment variable");o=e.join(f,"AppData","Roaming")}break;case"darwin":o=e.join(n.homedir(),"Library","Application Support");break;case"linux":o=process.env.XDG_CONFIG_HOME||e.join(n.homedir(),".config");break;default:throw new Error("Platform not supported")}return e.join(o,r)}return{getUserDataPath:a}}if(typeof define=="function")define(["require","path","os","vs/base/common/network","vs/base/common/resources"],function(e,n,r,a,s){const t=s.dirname(a.FileAccess.asFileUri("",e)),i=e.__$__nodeRequire(s.joinPath(t,"package.json").fsPath);return c(n,r,i.name)});else if(typeof module=="object"&&typeof module.exports=="object"){const e=require("../../../../../package.json"),n=require("path"),r=require("os");module.exports=c(n,r,e.name)}else throw new Error("Unknown context")})();

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/3c4e3df9e89829dce27b7b5c24508306b151f30d/core/vs/platform/environment/node/userDataPath.js.map