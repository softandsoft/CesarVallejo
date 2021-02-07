using Data;
using Entity;
using System.Collections.Generic;

namespace Business
{
    public class busHijos
    {
        datHijos instancia = new datHijos();

        public List<Hijos> GetAllHijosByIdPersonal(int id)
        {
            return instancia.GetAllHijosByIdPersonal(id);
        }

        public Hijos GetHijosById(int? id)
        {
            return instancia.GetHijosById(id);
        }

        public void AddHijos(Hijos entity)
        {
            instancia.AddHijos(entity);
        }

        public void UpdateHijos(Hijos entity)
        {
            instancia.UpdateHijos(entity);
        }

        public void DeleteHijos(int? id)
        {
            instancia.DeleteHijos(id);
        }
    }
}
