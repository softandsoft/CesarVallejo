using System;

namespace CesarVallejo.Models
{
    public class PersonalModel
    {
        public int idPersonal { get; set; }
        public string apPaterno { get; set; }
        public string apMaterno { get; set; }
        public string nombre1 { get; set; }
        public string nombre2 { get; set; }
        public string NombreCompleto { get; set; }
        public DateTime fhcNac { get; set; }
        public DateTime fhcIngreso { get; set; }
    }
}
