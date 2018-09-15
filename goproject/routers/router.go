package routers

import (
	"github.com/astaxie/beego"
	"goproject/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/home", &controllers.MainController{})
	beego.StaticDir["/js"] = "./dist/js"
	beego.StaticDir["/css"] = "./dist/css"
	beego.StaticDir["/fonts"] = "./static/fonts"
	beego.StaticDir["/app"] = "./app/templates"
}
