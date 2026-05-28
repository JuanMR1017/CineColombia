using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CineColombia
{
    public partial class Splash : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Timer1_Tick(object sender, EventArgs e)
        {
            this.Timer1.Enabled = false;
            Response.Redirect("~/paginas/frmLogin.html");
        }
    }
}