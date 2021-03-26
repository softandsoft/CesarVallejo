using Entity;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace Data
{
    public class datPersonal
    {        
        string connectionString = "Server=localhost;Initial Catalog=CesarVallejo;User ID=sa;Password=P@ssw0rd;";

        public List<Personal> GetAllPersonal()
        {
            List<Personal> list = new List<Personal>();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand comando = new SqlCommand("SelectPersonal", connection);
                comando.CommandType = CommandType.StoredProcedure;

                connection.Open();

                SqlDataReader lector = comando.ExecuteReader();

                Personal entity = null;

                while (lector.Read())
                {
                    entity = new Personal();
                    entity.IdPersonal = Convert.ToInt32(lector["IdPersonal"]);
                    entity.ApPaterno = lector["ApPaterno"].ToString();
                    entity.ApMaterno = lector["ApMaterno"].ToString();
                    entity.Nombre1 = lector["Nombre1"].ToString();
                    entity.Nombre2 = lector["Nombre2"].ToString();
                    entity.NombreCompleto = lector["NombreCompleto"].ToString();
                    entity.FhcNac = Convert.ToDateTime(lector["FhcNac"].ToString());
                    entity.FhcIngreso = Convert.ToDateTime(lector["FhcIngreso"].ToString());

                    list.Add(entity);
                }

                connection.Close();
            }

            return list;
        }

        public Personal GetPersonalById(int? id)
        {
            Personal entity = null;

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand comando = new SqlCommand("SelectPersonalById", connection);
                comando.CommandType = CommandType.StoredProcedure;
                comando.Parameters.AddWithValue("@IdPersonal", id);

                connection.Open();

                SqlDataReader lector = comando.ExecuteReader();                

                if (lector.Read())
                {
                    entity = new Personal();
                    entity.IdPersonal = Convert.ToInt32(lector["IdPersonal"]);
                    entity.ApPaterno = lector["ApPaterno"].ToString();
                    entity.ApMaterno = lector["ApMaterno"].ToString();
                    entity.Nombre1 = lector["Nombre1"].ToString();
                    entity.Nombre2 = lector["Nombre2"].ToString();
                    entity.NombreCompleto = lector["NombreCompleto"].ToString();
                    entity.FhcNac = Convert.ToDateTime(lector["FhcNac"].ToString());
                    entity.FhcIngreso = Convert.ToDateTime(lector["FhcIngreso"].ToString());
                }

                connection.Close();
            }

            return entity;
        }

        public List<Personal> GetPersonalByName(string name)
        {
            List<Personal> list = new List<Personal>();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand comando = new SqlCommand("SelectPersonalByName", connection);
                comando.CommandType = CommandType.StoredProcedure;
                comando.Parameters.AddWithValue("@Nombre", name);

                connection.Open();

                SqlDataReader lector = comando.ExecuteReader();

                Personal entity = null;

                while (lector.Read())
                {
                    entity = new Personal();
                    entity.IdPersonal = Convert.ToInt32(lector["IdPersonal"]);
                    entity.ApPaterno = lector["ApPaterno"].ToString();
                    entity.ApMaterno = lector["ApMaterno"].ToString();
                    entity.Nombre1 = lector["Nombre1"].ToString();
                    entity.Nombre2 = lector["Nombre2"].ToString();
                    entity.NombreCompleto = lector["NombreCompleto"].ToString();
                    entity.FhcNac = Convert.ToDateTime(lector["FhcNac"].ToString());
                    entity.FhcIngreso = Convert.ToDateTime(lector["FhcIngreso"].ToString());

                    list.Add(entity);
                }

                connection.Close();
            }

            return list;
        }

        public void AddPersonal(Personal entity)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand comando = new SqlCommand("InsertPersonal", connection);
                comando.CommandType = CommandType.StoredProcedure;

                comando.Parameters.AddWithValue("@ApPaterno", entity.ApPaterno);
                comando.Parameters.AddWithValue("@ApMaterno", entity.ApMaterno);
                comando.Parameters.AddWithValue("@Nombre1", entity.Nombre1);
                comando.Parameters.AddWithValue("@Nombre2", entity.Nombre2);
                comando.Parameters.AddWithValue("@FhcNac", entity.FhcNac);
                comando.Parameters.AddWithValue("@FhcIngreso", entity.FhcIngreso);

                connection.Open();                
                comando.ExecuteNonQuery();                
                connection.Close();
            }
        }

        public void UpdatePersonal(Personal entity)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand comando = new SqlCommand("UpdatePersonal", connection);
                comando.CommandType = CommandType.StoredProcedure;

                comando.Parameters.AddWithValue("@IdPersonal", entity.IdPersonal);
                comando.Parameters.AddWithValue("@ApPaterno", entity.ApPaterno);
                comando.Parameters.AddWithValue("@ApMaterno", entity.ApMaterno);
                comando.Parameters.AddWithValue("@Nombre1", entity.Nombre1);
                comando.Parameters.AddWithValue("@Nombre2", entity.Nombre2);
                comando.Parameters.AddWithValue("@FhcNac", entity.FhcNac);
                comando.Parameters.AddWithValue("@FhcIngreso", entity.FhcIngreso);

                connection.Open();
                comando.ExecuteNonQuery();
                connection.Close();
            }
        }

        public void DeletePersonal(int? id)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand comando = new SqlCommand("DeletePersonal", connection);
                comando.CommandType = CommandType.StoredProcedure;
                comando.Parameters.AddWithValue("@IdPersonal", id);

                connection.Open();
                comando.ExecuteNonQuery();
                connection.Close();
            }
        }
    }
}
