var data = {"skips":[],"suites":[{"name":"creates a screenshot of the skills page","suitePath":["creates a screenshot of the skills page"],"browsers":[{"name":"chromeMobile","result":{"suiteUrl":"https://s2bssotest.standardchartered.com/unifiedlogin/v2.0/login/index.html?language=en","name":"chromeMobile","metaInfo":{"pid":23048,"url":"/unifiedlogin/v2.0/login/index.html?language=en","file":"tests\\common\\skills.js","sessionId":"a2dc79b4568fff0d5e6fc1a8508136b9"},"imagesInfo":[{"stateName":"Whole page","refImg":{"path":"D:\\Temp\\Test\\Hermione-CSS-Regression-Testing-Example-master\\hermione\\screens\\8c6858d\\chromeMobile\\Whole page.png","size":{"width":414,"height":704}},"status":"fail","diffClusters":[{"left":0,"top":36,"right":413,"bottom":629}],"expectedImg":{"path":"images\\8c6858d\\Whole page\\chromeMobile~ref_0.png","size":{"width":414,"height":704}},"actualImg":{"path":"images\\8c6858d\\Whole page\\chromeMobile~current_0.png","size":{"width":414,"height":704}},"diffImg":{"path":"images\\8c6858d\\Whole page\\chromeMobile~diff_0.png","size":{"width":414,"height":704}}}],"screenshot":false,"multipleTabs":true,"status":"fail","attempt":0},"retries":[]},{"name":"chromeXL","result":{"suiteUrl":"https://s2bssotest.standardchartered.com/unifiedlogin/v2.0/login/index.html?language=en","name":"chromeXL","metaInfo":{"pid":23048,"url":"/unifiedlogin/v2.0/login/index.html?language=en","file":"tests\\common\\skills.js","sessionId":"864f9d02be2c8e47a0c1917657234886"},"imagesInfo":[{"stateName":"Whole page","refImg":{"path":"D:\\Temp\\Test\\Hermione-CSS-Regression-Testing-Example-master\\hermione\\screens\\8c6858d\\chromeXL\\Whole page.png","size":{"width":1300,"height":792}},"status":"fail","diffClusters":[{"left":325,"top":40,"right":1132,"bottom":699}],"expectedImg":{"path":"images\\8c6858d\\Whole page\\chromeXL~ref_0.png","size":{"width":1300,"height":792}},"actualImg":{"path":"images\\8c6858d\\Whole page\\chromeXL~current_0.png","size":{"width":1300,"height":792}},"diffImg":{"path":"images\\8c6858d\\Whole page\\chromeXL~diff_0.png","size":{"width":1300,"height":792}}}],"screenshot":false,"multipleTabs":true,"status":"fail","attempt":0},"retries":[]}],"status":"fail"}],"config":{"defaultView":"all","baseHost":"","scaleImages":false,"lazyLoadOffset":800,"errorPatterns":[],"metaInfoBaseUrls":{},"customGui":{},"customScripts":[]},"apiValues":{"extraItems":{},"metaInfoExtenders":{},"imagesSaver":{"saveImg":"async (srcCurrPath, {destPath, reportDir}) => {\n        await utils.copyFileAsync(srcCurrPath, destPath, reportDir);\n\n        return destPath;\n    }"},"reportsSaver":null},"date":"Wed Apr 22 2020 15:23:03 GMT+0530 (India Standard Time)","saveFormat":"js","total":2,"passed":0,"failed":2,"skipped":0,"retries":0,"perBrowser":{"chromeMobile":{"total":1,"passed":0,"failed":1,"skipped":0,"retries":0},"chromeXL":{"total":1,"passed":0,"failed":1,"skipped":0,"retries":0}}};
try { module.exports = data; } catch(e) {}