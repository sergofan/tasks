package routers

import (
	"github.com/astaxie/beego"
)

func init() {

	beego.GlobalControllerRouter["goproject/controllers:CustomersController"] = append(beego.GlobalControllerRouter["goproject/controllers:CustomersController"],
		beego.ControllerComments{
			"Post",
			`/`,
			[]string{"post"},
			nil})

	beego.GlobalControllerRouter["goproject/controllers:CustomersController"] = append(beego.GlobalControllerRouter["goproject/controllers:CustomersController"],
		beego.ControllerComments{
			"GetOne",
			`/:id`,
			[]string{"get"},
			nil})

	beego.GlobalControllerRouter["goproject/controllers:CustomersController"] = append(beego.GlobalControllerRouter["goproject/controllers:CustomersController"],
		beego.ControllerComments{
			"GetAll",
			`/`,
			[]string{"get"},
			nil})

	beego.GlobalControllerRouter["goproject/controllers:CustomersController"] = append(beego.GlobalControllerRouter["goproject/controllers:CustomersController"],
		beego.ControllerComments{
			"Put",
			`/:id`,
			[]string{"put"},
			nil})

	beego.GlobalControllerRouter["goproject/controllers:CustomersController"] = append(beego.GlobalControllerRouter["goproject/controllers:CustomersController"],
		beego.ControllerComments{
			"Delete",
			`/:id`,
			[]string{"delete"},
			nil})

	beego.GlobalControllerRouter["goproject/controllers:StatusesController"] = append(beego.GlobalControllerRouter["goproject/controllers:StatusesController"],
		beego.ControllerComments{
			"Post",
			`/`,
			[]string{"post"},
			nil})

	beego.GlobalControllerRouter["goproject/controllers:StatusesController"] = append(beego.GlobalControllerRouter["goproject/controllers:StatusesController"],
		beego.ControllerComments{
			"GetOne",
			`/:id`,
			[]string{"get"},
			nil})

	beego.GlobalControllerRouter["goproject/controllers:StatusesController"] = append(beego.GlobalControllerRouter["goproject/controllers:StatusesController"],
		beego.ControllerComments{
			"GetAll",
			`/`,
			[]string{"get"},
			nil})

	beego.GlobalControllerRouter["goproject/controllers:StatusesController"] = append(beego.GlobalControllerRouter["goproject/controllers:StatusesController"],
		beego.ControllerComments{
			"Put",
			`/:id`,
			[]string{"put"},
			nil})

	beego.GlobalControllerRouter["goproject/controllers:StatusesController"] = append(beego.GlobalControllerRouter["goproject/controllers:StatusesController"],
		beego.ControllerComments{
			"Delete",
			`/:id`,
			[]string{"delete"},
			nil})

}
