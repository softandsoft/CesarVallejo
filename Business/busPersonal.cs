using Data;
using Entity;
using System.Collections.Generic;

namespace Business
{
    public class busPersonal
    {
        datPersonal instancia = new datPersonal();

        public List<Personal> GetAllPersonal()
        {
            return instancia.GetAllPersonal();
        }

        public Personal GetPersonalById(int? id)
        {
            return instancia.GetPersonalById(id);
        }

        public void AddPersonal(Personal entity)
        {
            instancia.AddPersonal(entity);
        }

        public void UpdatePersonal(Personal entity)
        {
            instancia.UpdatePersonal(entity);
        }

        public void DeletePersonal(int? id)
        {
            instancia.DeletePersonal(id);
        }
    }
}
