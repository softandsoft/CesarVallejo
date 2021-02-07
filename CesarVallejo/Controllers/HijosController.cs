using System.Collections.Generic;
using Business;
using Entity;
using Microsoft.AspNetCore.Mvc;

namespace CesarVallejo.Controllers
{
    public class HijosController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet]
        [Route("api/Hijos/listarHijos/{id}")]
        public IEnumerable<Hijos> GetAllHijosByIdPersonal(int id)
        {
            busHijos instancia = new busHijos();

            return instancia.GetAllHijosByIdPersonal(id);
        }
    }
}