using MedTaker.API.Data;
using MedTaker.API.Models;
using MedTaker.API.Repositories.Interface;
using Microsoft.AspNetCore.Http.HttpResults;

namespace MedTaker.API.Repositories.Implementation
{
    public class MedicineRepository : IMedicineRepository //inherits from medicine repository interface
    {
        private readonly AppDbContext _context;

        public MedicineRepository(AppDbContext dbContext)
        {
            this._context = dbContext;
        }

        public async Task<List<Medicine>> GetAsync()
        {
            var medicines = _context.Medicines.ToList();
            return medicines;
        }

        public async Task<Medicine> GetAsync(Guid id)
        {
            var medicine = await _context.Medicines.FindAsync(id);
            return medicine;
        }

        public async Task<Medicine> CreateAsync(Medicine pMedicine)
        {
            await _context.Medicines.AddAsync(pMedicine);
            await _context.SaveChangesAsync();

            return pMedicine;
        }

        public async Task<Medicine> UpdateAsync(Guid id, Medicine pMedicine)
        {
            var existingMedicine = await GetAsync(id);

            existingMedicine.MedicineId = id;
            existingMedicine.MedicineDescription = pMedicine.MedicineDescription;
            existingMedicine.MedicineName = pMedicine.MedicineName;
            existingMedicine.UsageInstruction = pMedicine.UsageInstruction;

            _context.Medicines.Update(existingMedicine);
            await _context.SaveChangesAsync();

            return existingMedicine;
        }

        public async Task<Medicine> DeleteAsync(Guid id)
        {
            var existingMedicine = await GetAsync(id);

            _context.Medicines.Remove(existingMedicine);

            await _context.SaveChangesAsync();

            return existingMedicine;
        }
    }
}
