using System;
using System.Collections.Generic;
using Business;
using CesarVallejo.Models;
using Entity;
using Microsoft.AspNetCore.Mvc;

namespace CesarVallejo.Controllers
{
    public class PersonalController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet]
        [Route("api/Personal/listarPersonal")]
        public IEnumerable<Personal> GetAllPersonal()
        {
            busPersonal instancia = new busPersonal();

            return instancia.GetAllPersonal();
        }

        [HttpPost]
        [Route("api/Personal/registrarPersonal")]
        public int SavePersonal([FromBody] PersonalModel model)
        {
            int result = 0;

            try
            {
                busPersonal instancia = new busPersonal();

                Personal entity = new Personal()
                {
                    IdPersonal = model.idPersonal,
                    ApPaterno = model.apPaterno,
                    ApMaterno = model.apMaterno,
                    Nombre1 = model.nombre1,
                    Nombre2 = model.nombre2,
                    FhcNac = model.fhcNac,
                    FhcIngreso = model.fhcIngreso
                };

                if (model.idPersonal == 0)
                    instancia.AddPersonal(entity);
                else
                    instancia.UpdatePersonal(entity);

                result = 1;
            }
            catch (Exception ex)
            {
                result = 0;
            }

            return result;
        }

        [HttpGet]
        [Route("api/Personal/obtenerPersonal/{id}")]
        public PersonalModel GetPersonalById(int id)
        {
            busPersonal instancia = new busPersonal();
            Personal entity = instancia.GetPersonalById(id);

            return new PersonalModel()
            {
                idPersonal = entity.IdPersonal,
                apPaterno = entity.ApPaterno,
                apMaterno = entity.ApMaterno,
                nombre1 = entity.Nombre1,
                nombre2 = entity.Nombre2,
                fhcNac = entity.FhcNac,
                fhcIngreso = entity.FhcIngreso
            };
        }

        [HttpDelete]
        [Route("api/Personal/eliminarPersonal/{id}")]
        public int DeletePersonal(int id)
        {
            int result = 0;

            try
            {
                busPersonal instancia = new busPersonal();
                instancia.DeletePersonal(id);

                result = 1;
            }
            catch (Exception ex)
            {
                result = 0;
            }

            return result;
        }
    }
}