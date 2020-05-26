$(function() {
     var a = require("scripts/D");
    a.php_codeforgen = "phonetool/code.php",
    a.contrast.jphonetoolb = "无线热点",
    a.imContrast.push("area.jphonetoolb"),
    a.appConfig.jphonetoolb = ['<div class="t-app" data-dblType="jphonetoolb" style="background-color: rgba(0, 0, 0, 0.3)"></div>', {
        tTitle: "无线热点设置",
        tUrl: "http://www.zuoer123.com/4.0/wxtool/phonetool/js/phonetool/simplearea.php",
        tSubmit: function(a, b) {
            b.attr("data-config", JSON.stringify(a))
        },
        codeExport: function(b) {
			
            var c = JSON.parse(b.attr("data-config")),
            d = {},
            e = b.width(),
            f = b.height(),
            g = a.tParseInt(b.css("top")),
            h = a.tParseInt(b.css("left"));
            return d.width = e,
            d.height = f,
            d.top = g,
            d.left = h,
            "mobile" == c.hrefType && (c.href = c.hrefY),
            d.href = c.href,
            d.
            switch = "false",
            d
        }
    },
    {
        appID: "",
        hrefType: "mobile",
        hrefTypeValue: "",
        href: "",
        hrefX: "",
        hrefY: ""
    }]
})