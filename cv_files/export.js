/**
 * 导出是执行的JS
 */

var pageHeight = 1556; // 每页高度
var nowPageSize = 0; // 当前页数
//国际化
var localLang = {
	"name" : {"type" : "html", "zh" : "五百丁", "en" : "Wubaiding"},
	"job" : {"type" : "html", "zh" : "求职目标：五百丁市场专员", "en" : "Job Objective"},
	"age" : {"type" : "value", "zh" : "24岁", "en" : "24", "zh_notice" : "年龄/生日", "en_notice" : "Age"},
	"address" : {"type" : "value", "zh" : "广州市", "en" : "Guangzhou", "zh_notice" : "居住地", "en_notice" : "Address"},
	"mobile" : {"type" : "value", "zh" : "13588888888", "en" : "13588888888", "zh_notice" : "手机号码", "en_notice" : "Mobile"},
	"email" : {"type" : "value", "zh" : "service@500d.me", "en" : "service@500d.me", "zh_notice" : "电子邮箱", "en_notice" : "E-mail"},
	"edu" : {"type" : "html", "zh" : "教育背景", "en" : "EDUCATION"},
	"work" : {"type" : "html", "zh" : "工作经历", "en" : "EXPERIENCE"},
	"project" : {"type" : "html", "zh" : "项目经验", "en" : "PROJECT"},
	"out_school" : {"type" : "html", "zh" : "校外实践", "en" : "EXPERIENCE"},
	"in_school" : {"type" : "html", "zh" : "校内实践", "en" : "EXPERIENCE"},
	"self" : {"type" : "html", "zh" : "自我评价", "en" : "PROFILE"},
	"cart" : {"type" : "html", "zh" : "技能证书", "en" : "CARTS"},
	"honor" : {"type" : "html", "zh" : "奖项荣誉", "en" : "HONORS"},
	"hobby" : {"type" : "html", "zh" : "兴趣爱好", "en" : "HOBBIES"},
	"basic_info" : {"type" : "html", "zh" : "基本资料", "en" : "INFORMATRION"},
	"msg" : {"type" : "html", "zh" : "基本信息", "en" : "INFORMATRION"},
	"master_skills" : {"type" : "html", "zh" : "掌握技能", "en" : "SKILLS"},
	"skill" : {"type" : "html", "zh" : "个人技能", "en" : "SKILLS"},
}

$(document).ready(function() {
	i18n();
	resumeFomart();
});

/**
 * 格式化：分页位置，多页控制最后一页高度
 */
function resumeFomart() {
	var resumeBody = $("#resume_body");
	var heightTmp = resumeBody.height();
	var resumeHeight = resumeBody.css({"height" : "auto"}).height();
	resumeBody.css({"height" : heightTmp + "px"});
	var pageSize = Math.ceil(resumeHeight / pageHeight);
	if(pageSize != nowPageSize) {
		var nowResumeHeight = pageSize * pageHeight;
		resumeBody.css({"height" : nowResumeHeight + "px"});
		nowPageSize = pageSize;
	}
}

/**
 * 国际化
 */
function i18n() {
//	var nowLang = language;
//	var oldLang = null;
//	if(nowLang == "zh")
//		oldLang = "en";
//	else
//		oldLang = "zh";
//	for(var key in localLang) {
//		var langValue = localLang[key];
//		var type = langValue["type"];
//		var nowValue = langValue[nowLang];
//		var oldValue = langValue[oldLang];
//		var placeholder = langValue[nowLang + "_notice"];
//		var value = null;
//		var keyObj = $(".resume_lang_" + key);
//		if(type == "html")
//			value = keyObj.text();
//		else
//			value = keyObj.val();
//		if(value == oldValue) {
//			if(type == "html")
//				keyObj.text(nowValue);
//			else
//				keyObj.val(nowValue);
//		}
//		if(placeholder && type == "value")
//			keyObj.attr("placeholder", placeholder);
//	}
}

/**
 * 排序
 */
function resumeModuleSort(sort) {
	if(sort) {
		var foos = sort["foos"];
		var bars = sort["bars"];
		if(foos) {
			foos.reverse();
			var fooSort = $("#foo_sort");
			if(fooSort && fooSort.length == 1 && foos.length > 0) {
				for(var index in foos) {
					var id = foos[index];
					var sortObj = $("#" + id);
					if(sortObj.parents("#foo").length > 0)
						fooSort.after(sortObj);
				}
			}
		}
		if(bars) {
			bars.reverse();
			var barSort = $("#bar_sort");
			if(barSort && barSort.length == 1 && bars.length > 0) {
				for(var index in bars) {
					var id = bars[index];
					var sortObj = $("#" + id);
					if(sortObj.parent("#bar").length > 0)
						barSort.after(sortObj);
				}
			}
		}
	}
}