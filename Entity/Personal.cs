using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Personal
    {
        [Key]
        public int IdPersonal { get; set; }
        public string ApPaterno { get; set; }
        public string ApMaterno { get; set; }
        public string Nombre1 { get; set; }
        public string Nombre2 { get; set; }
        public string NombreCompleto { get; set; }
        public DateTime FhcNac { get; set; }
        public DateTime FhcIngreso { get; set; }
    }
}
