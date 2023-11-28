using MedTaker.API.Models;
using Microsoft.EntityFrameworkCore;

namespace MedTaker.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) 
        { 
        }
        public DbSet<Medicine> Medicines { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<MedicineEntry> MedicineEntry { get; set; }
    }
}
