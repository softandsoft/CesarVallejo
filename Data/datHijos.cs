using Entity;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace Data
{
    public class datHijos
    {
        string connectionString = "Server=upc-taller-de-proyectos-1-grupo-1.cef9njusnoa5.us-east-1.rds.amazonaws.com,1433;Initial Catalog=CesarVallejo;Persist Security Info=False;User ID=admin;Password=7LJTeBtX2G1vT4Pa48AQ;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=True;Connection Timeout=30;";

        public List<Hijos> GetAllHijos()
        {
            List<Hijos> list = new List<Hijos>();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand comando = new SqlCommand("SelectHijos", connection);
                comando.CommandType = CommandType.StoredProcedure;
                connection.Open();

                SqlDataReader lector = comando.ExecuteReader();

                Hijos entity = null;

                while (lector.Read())
                {
                    entity = new Hijos();
                    entity.IdDerHab = Convert.ToInt32(lector["IdDerHab"]);
                    entity.IdPersonal = Convert.ToInt32(lector["IdPersonal"]);
                    entity.ApPaterno = lector["ApPaterno"].ToString();
                    entity.ApMaterno = lector["ApMaterno"].ToString();
                    entity.Nombre1 = lector["Nombre1"].ToString();
                    entity.Nombre2 = lector["Nombre2"].ToString();
                    entity.NombreCompleto = lector["NombreCompleto"].ToString();
                    entity.FhcNac = Convert.ToDateTime(lector["FhcNac"].ToString());

                    list.Add(entity);
                }

                connection.Close();
            }

            return list;
        }

        public Hijos GetHijosById(int? id)
        {
            Hijos entity = null;

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand comando = new SqlCommand("SelectHijosById", connection);
                comando.CommandType = CommandType.StoredProcedure;
                comando.Parameters.AddWithValue("@IdDerHab", id);

                connection.Open();

                SqlDataReader lector = comando.ExecuteReader();

                if (lector.Read())
                {
                    entity = new Hijos();
                    entity.IdDerHab = Convert.ToInt32(lector["IdDerHab"]);
                    entity.IdPersonal = Convert.ToInt32(lector["IdPersonal"]);
                    entity.ApPaterno = lector["ApPaterno"].ToString();
                    entity.ApMaterno = lector["ApMaterno"].ToString();
                    entity.Nombre1 = lector["Nombre1"].ToString();
                    entity.Nombre2 = lector["Nombre2"].ToString();
                    entity.NombreCompleto = lector["NombreCompleto"].ToString();
                    entity.FhcNac = Convert.ToDateTime(lector["FhcNac"].ToString());
                }

                connection.Close();
            }

            return entity;
        }

        public void AddHijos(Hijos entity)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand comando = new SqlCommand("InsertHijos", connection);
                comando.CommandType = CommandType.StoredProcedure;

                comando.Parameters.AddWithValue("@IdPersonal", entity.IdPersonal);
                comando.Parameters.AddWithValue("@ApPaterno", entity.ApPaterno);
                comando.Parameters.AddWithValue("@ApMaterno", entity.ApMaterno);
                comando.Parameters.AddWithValue("@Nombre1", entity.Nombre1);
                comando.Parameters.AddWithValue("@Nombre2", entity.Nombre2);
                comando.Parameters.AddWithValue("@FhcNac", entity.FhcNac);

                connection.Open();
                comando.ExecuteNonQuery();
                connection.Close();
            }
        }

        public void UpdateHijos(Hijos entity)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand comando = new SqlCommand("UpdateHijos", connection);
                comando.CommandType = CommandType.StoredProcedure;

                comando.Parameters.AddWithValue("@IdDerHab", entity.IdDerHab);
                comando.Parameters.AddWithValue("@IdPersonal", entity.IdPersonal);
                comando.Parameters.AddWithValue("@ApPaterno", entity.ApPaterno);
                comando.Parameters.AddWithValue("@ApMaterno", entity.ApMaterno);
                comando.Parameters.AddWithValue("@Nombre1", entity.Nombre1);
                comando.Parameters.AddWithValue("@Nombre2", entity.Nombre2);
                comando.Parameters.AddWithValue("@FhcNac", entity.FhcNac);

                connection.Open();
                comando.ExecuteNonQuery();
                connection.Close();
            }
        }

        public void DeleteHijos(int? id)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand comando = new SqlCommand("DeleteHijos", connection);
                comando.CommandType = CommandType.StoredProcedure;
                comando.Parameters.AddWithValue("@IdDerHab", id);

                connection.Open();
                comando.ExecuteNonQuery();
                connection.Close();
            }
        }
    }
}
