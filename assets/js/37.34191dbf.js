(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{539:function(t,a,s){"use strict";s.r(a);var n=s(37),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片"}},[t._v("#")]),t._v(" 图片")]),t._v(" "),s("h2",{attrs:{id:"拍照"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拍照"}},[t._v("#")]),t._v(" 拍照")]),t._v(" "),s("p",[t._v("根据传入参数，决定是否对拍照后照片进行裁剪编辑, 同时会将图片上传到媒体中心并返回 mediaId。")]),t._v(" "),s("p",[s("strong",[t._v("使用说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("客户端")]),t._v(" "),s("th",[t._v("Android")]),t._v(" "),s("th",[t._v("iOS")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("支持情况")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("支持")])])])]),t._v(" "),s("CodeWrapper",{attrs:{fn:"image.takePicture"}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("w6s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("takePicture")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  editable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fail")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("p",[s("strong",[t._v("参数说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("editable")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("是否进行裁剪，适用于设置头像")])])])]),t._v(" "),s("p",[s("strong",[t._v("返回数据")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("mediaId")]),t._v(" "),s("td",[t._v("上传媒体中心后返回的媒体id")])]),t._v(" "),s("tr",[s("td",[t._v("imageURL")]),t._v(" "),s("td",[t._v("压缩后图像存在本地的地址")])]),t._v(" "),s("tr",[s("td",[t._v("key")]),t._v(" "),s("td",[t._v("原图像存在本地的地址")])]),t._v(" "),s("tr",[s("td",[t._v("imageInfo")]),t._v(" "),s("td",[t._v("图片的基本信息，包括 height（高度）、width（宽度） 及 size（大小）")])])])]),t._v(" "),s("h2",{attrs:{id:"选择照片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择照片"}},[t._v("#")]),t._v(" 选择照片")]),t._v(" "),s("p",[t._v("调用手机相册，支持图片多选及单选，支持编辑剪裁(仅限于单选)，并且支持图片复选，选择完后会自动上传到媒体中心并返回相应的 mediaId。")]),t._v(" "),s("p",[s("strong",[t._v("使用说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("客户端")]),t._v(" "),s("th",[t._v("Android")]),t._v(" "),s("th",[t._v("iOS")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("支持情况")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("支持")])])])]),t._v(" "),s("CodeWrapper",{attrs:{fn:"image.chooseImages"}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("w6s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chooseImages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  multiple"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  imageKeys"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file://图片本机地址'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  editable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fileLimit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    maxSelectCount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    singleSelectSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    totalSelectSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fail")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("p",[s("strong",[t._v("参数说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("multiple")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("是否为图片多选")])]),t._v(" "),s("tr",[s("td",[t._v("imageKeys")]),t._v(" "),s("td",[t._v("Array[string]")]),t._v(" "),s("td",[t._v("非必须，图片在本机的地址，用于图片复选")])]),t._v(" "),s("tr",[s("td",[t._v("editable")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("是否可对图片进行裁剪，仅在单选"),s("code",[t._v("multiple: false")]),t._v("时有效，默认为 true")])]),t._v(" "),s("tr",[s("td",[t._v("fileLimit.maxSelectCount")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("非必须，多选时数量的限制，默认为 9")])]),t._v(" "),s("tr",[s("td",[t._v("fileLimit.singleSelectSize")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("非必须，单个文件选择大小限制(byte), -1表示不限制，默认为-1")])]),t._v(" "),s("tr",[s("td",[t._v("fileLimit.totalSelectSize")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("非必须，所有文件选择大小限制(byte), -1表示不限制，默认为-1")])])])]),t._v(" "),s("p",[s("strong",[t._v("返回数据")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("mediaId")]),t._v(" "),s("td",[t._v("上传媒体中心后返回的媒体id")])]),t._v(" "),s("tr",[s("td",[t._v("imageURL")]),t._v(" "),s("td",[t._v("压缩后图像存在本地的地址")])]),t._v(" "),s("tr",[s("td",[t._v("key")]),t._v(" "),s("td",[t._v("原图像存在本地的地址")])]),t._v(" "),s("tr",[s("td",[t._v("imageInfo")]),t._v(" "),s("td",[t._v("图片的基本信息，包括 height（高度）、width（宽度） 及 size（大小）")])])])]),t._v(" "),s("h2",{attrs:{id:"清除缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除缓存"}},[t._v("#")]),t._v(" 清除缓存")]),t._v(" "),s("p",[t._v("拍照或选择照片后都会生成压缩图片，可调用该方法进行清除。")]),t._v(" "),s("p",[s("strong",[t._v("使用说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("客户端")]),t._v(" "),s("th",[t._v("Android")]),t._v(" "),s("th",[t._v("iOS")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("支持情况")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("支持")])])])]),t._v(" "),s("CodeWrapper",{attrs:{fn:"image.cleanCompressImage"}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该方法没有返回")]),t._v("\nw6s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cleanCompressImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"图片预览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片预览"}},[t._v("#")]),t._v(" 图片预览")]),t._v(" "),s("p",[t._v("传入图片地址进行图片预览，支持传入 position 表示从第几张开始预览。")]),t._v(" "),s("p",[s("strong",[t._v("使用说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("客户端")]),t._v(" "),s("th",[t._v("Android")]),t._v(" "),s("th",[t._v("iOS")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("支持情况")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("支持")])])])]),t._v(" "),s("CodeWrapper",{attrs:{fn:"image.showImages"}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该方法没有回调")]),t._v("\nw6s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showImages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  urls"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://media.io/demo.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  medias"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'媒体id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  position"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("p",[s("strong",[t._v("参数说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("urls")]),t._v(" "),s("td",[t._v("Array[String]")]),t._v(" "),s("td",[t._v("图片的"),s("code",[t._v("http(s)://")]),t._v("访问地址，不支持本地图片")])]),t._v(" "),s("tr",[s("td",[t._v("medias")]),t._v(" "),s("td",[t._v("Array[String]")]),t._v(" "),s("td",[t._v("图片的 mediaId")])]),t._v(" "),s("tr",[s("td",[t._v("position")]),t._v(" "),s("td",[t._v("Number | String")]),t._v(" "),s("td",[t._v("非必须，表示从第几张图片开始预览，0 为第一张")])])])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("urls")]),t._v("和"),s("code",[t._v("medias")]),t._v("参数，只能二选一，如果同时传入，优先读取"),s("code",[t._v("urls")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"图片保存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片保存"}},[t._v("#")]),t._v(" 图片保存")]),t._v(" "),s("p",[t._v("传入图片地址，保存到手机本地。")]),t._v(" "),s("p",[s("strong",[t._v("使用说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("客户端")]),t._v(" "),s("th",[t._v("Android")]),t._v(" "),s("th",[t._v("iOS")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("支持情况")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("支持")])])])]),t._v(" "),s("CodeWrapper",{attrs:{fn:"image.saveImages"}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该方法没有回调")]),t._v("\nw6s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("saveImages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'图片的 url 访问地址'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mediaId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'图片mediaId'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  imageData"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'base64数据'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("p",[s("strong",[t._v("参数说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("url")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("图片的 url 访问地址")])]),t._v(" "),s("tr",[s("td",[t._v("mediaId")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("图片mediaId")])]),t._v(" "),s("tr",[s("td",[t._v("imageData")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("base64数据")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("mediaId、url、imageData 都是选填参数, 请根据具体的业务场景, 进行选择，三者只能选其一。")])]),t._v(" "),s("h2",{attrs:{id:"长按图片弹出框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#长按图片弹出框"}},[t._v("#")]),t._v(" 长按图片弹出框")]),t._v(" "),s("p",[t._v("弹出框包括"),s("code",[t._v("识别二维码")]),t._v("，"),s("code",[t._v("保存图片")]),t._v("等选项。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("该功能的常用场景描述")]),t._v(" "),s("p",[t._v("例如需要识别页面图片上的二维码，通用的交互都是需要长按图片，然后会弹出一个"),s("code",[t._v("Action Sheet")]),t._v("提示框，然后用户进行选择操作。但这里的"),s("code",[t._v("长按")]),t._v("需要调用者自行实现，并且需要把被长按的图片转换成"),s("code",[t._v("base64")]),t._v("作为传参。")])]),t._v(" "),s("p",[s("strong",[t._v("使用说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("客户端")]),t._v(" "),s("th",[t._v("Android")]),t._v(" "),s("th",[t._v("iOS")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("支持情况")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("支持")])])])]),t._v(" "),s("CodeWrapper",{attrs:{fn:"image.actionForLongPressImage"}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该方法没有回调")]),t._v("\nw6s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("actionForLongPressImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  imageData"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'base64数据'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("p",[s("strong",[t._v("参数说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("imageData")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("base64数据，详细描述请看下方说明")])])])]),t._v(" "),s("p",[s("strong",[t._v("关于 imageData")])]),t._v(" "),s("p",[t._v("页面上显示的图片通常都以"),s("code",[t._v("http(s)://")]),t._v(" 的方式加载，或者本身就是个 base64 字符串。而参数 imageData 的值，并非是一个 image 直接转换过来的 base64 字符串，例如:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("data:image/jpeg;base64,/9j/4AAQSkZJ....Rg\n")])])]),s("p",[t._v("此处需要的是"),s("code",[t._v("base64,")]),t._v("后的那一段，也就是"),s("code",[t._v("/9j/4AAQSkZJ....Rg")]),t._v("。")]),t._v(" "),s("p",[t._v("此外，sdk 中的"),s("code",[t._v("image.toBase64")]),t._v("方法并不能转换非本地的图片，如果需要转换以 "),s("code",[t._v("http(s)://")]),t._v(" 协议访问的图片，请使用第三方模块，例如"),s("a",{attrs:{href:"https://html2canvas.hertzen.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("html2canvas"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" html2canvas "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html2canvas'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("html2canvas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'body'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("canvas"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" base64 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDataURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image/jpeg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" imageData  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" base64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'base64,'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    sdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("actionForLongPressImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      imageData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"转-base64"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转-base64"}},[t._v("#")]),t._v(" 转 Base64")]),t._v(" "),s("p",[t._v("将本地图片转换成 Base64字符串。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("通常我们通过拍照或者打开相册来获取图片，而图片的访问地址都是本地绝对路径，基于 Webview 的安全机制，本地路径放到 "),s("code",[t._v("<img>")]),t._v(" src 里，并不能显示出来，此时可以通过该方法把图片转换成 Base64 来使用。")])]),t._v(" "),s("p",[s("strong",[t._v("使用说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("客户端")]),t._v(" "),s("th",[t._v("Android")]),t._v(" "),s("th",[t._v("iOS")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("支持情况")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("支持")])])])]),t._v(" "),s("CodeWrapper",{attrs:{fn:"image.toBase64"}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("w6s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBase64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  filePath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file://图片本地地址'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fail")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("p",[s("strong",[t._v("参数说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("filePath")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("图片本地地址")])])])]),t._v(" "),s("p",[s("strong",[t._v("返回数据")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("target._result")]),t._v(" "),s("td",[t._v("在返回数据的 target 属性中，可以找到 key 值为 _result 的 base64 内容")])])])]),t._v(" "),s("h2",{attrs:{id:"图片添加水印"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片添加水印"}},[t._v("#")]),t._v(" 图片添加水印")]),t._v(" "),s("p",[t._v("调起手机相册进行拍照，生成水印图片并返回。")]),t._v(" "),s("p",[s("strong",[t._v("使用说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("客户端")]),t._v(" "),s("th",[t._v("Android")]),t._v(" "),s("th",[t._v("iOS")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("支持情况")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("支持")])])])]),t._v(" "),s("CodeWrapper",{attrs:{fn:"image.takePhotoAndAddWaterMark"}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("w6s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("takePhotoAndAddWaterMark")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fontSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#FF5858'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  markDisable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  timeEnable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  locationEnable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fail")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("p",[s("strong",[t._v("参数说明")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("content")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("水印内容")])]),t._v(" "),s("tr",[s("td",[t._v("fontSize")]),t._v(" "),s("td",[t._v("Number | String")]),t._v(" "),s("td",[t._v("水印字号大小")])]),t._v(" "),s("tr",[s("td",[t._v("color")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("水印字体颜色，仅支持"),s("a",{attrs:{href:"https://www.color-hex.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HEX"),s("OutboundLink")],1),t._v("颜色码")])]),t._v(" "),s("tr",[s("td",[t._v("markDisable")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("非必须，屏蔽水印")])]),t._v(" "),s("tr",[s("td",[t._v("timeEnable")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("非必须，水印添加时间")])]),t._v(" "),s("tr",[s("td",[t._v("locationEnable")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("非必须，水印添加位置信息")])])])]),t._v(" "),s("p",[s("strong",[t._v("返回数据")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("mediaId")]),t._v(" "),s("td",[t._v("上传媒体中心后返回的媒体id")])]),t._v(" "),s("tr",[s("td",[t._v("imageURL")]),t._v(" "),s("td",[t._v("压缩后图像存在本地的地址")])]),t._v(" "),s("tr",[s("td",[t._v("key")]),t._v(" "),s("td",[t._v("原图像存在本地的地址")])]),t._v(" "),s("tr",[s("td",[t._v("imageInfo")]),t._v(" "),s("td",[t._v("图片的基本信息，包括 height（高度）、width（宽度） 及 size（大小）")])])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);