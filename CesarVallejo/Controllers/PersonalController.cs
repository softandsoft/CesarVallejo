using System.Collections.Generic;
using Business;
using Entity;
using Microsoft.AspNetCore.Mvc;

namespace CesarVallejo.Controllers
{
    public class PersonalController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("api/Personal/listaPersonal")]
        public IEnumerable<Personal> GetAllPersonal()
        {
            busPersonal instancia = new busPersonal();

            return instancia.GetAllPersonal();
        }

    }
}