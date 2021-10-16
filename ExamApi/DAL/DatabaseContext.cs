using ExamApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ExamApi.DAL
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext()
            : base("name =DataConnection")
        {

        }
        public DbSet<Department> departments { get; set; }
        public DbSet<Employee> employees { get; set; }
    }
}