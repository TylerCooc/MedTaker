using MedTaker.API.Data;
using MedTaker.API.Models;
using MedTaker.API.Repositories.Interface;

namespace MedTaker.API.Repositories.Implementation
{
    public class MedicineEntryRepository :  IMedicineEntryRepository
    {
        private readonly AppDbContext _context;

        public MedicineEntryRepository(AppDbContext dbContext)
        {
            this._context = dbContext;
        }

        public async Task<List<MedicineEntry>> GetAsync()
        {
            var medicineEntries = _context.MedicineEntry.ToList();
            return medicineEntries;
        }

        public async Task<MedicineEntry> GetAsync(Guid id)
        {
            var medicineEntry = await _context.MedicineEntry.FindAsync(id);
            return medicineEntry;
        }

        public async Task<MedicineEntry> CreateAsync(MedicineEntry pMedicineEntry)
        {
            await _context.MedicineEntry.AddAsync(pMedicineEntry);
            await _context.SaveChangesAsync();
            return pMedicineEntry;
        }

        public async Task<MedicineEntry> UpdateAsync(Guid id, MedicineEntry pMedicineEntry)
        {
            var existingMedicineEntry = await GetAsync(id);

            existingMedicineEntry.MedicineEntryId = id;
            existingMedicineEntry.MedicineName = pMedicineEntry.MedicineName;
            existingMedicineEntry.MedicineAmount = pMedicineEntry.MedicineAmount;
            existingMedicineEntry.TimeTaken = DateTime.UtcNow;

            _context.MedicineEntry.Update(existingMedicineEntry);
            await _context.SaveChangesAsync();
            return existingMedicineEntry;
        }

        public async Task<MedicineEntry> DeleteAsync(Guid id)
        {
            var existingMedicineEntry = await GetAsync(id);

            _context.MedicineEntry.Remove(existingMedicineEntry);

            await _context.SaveChangesAsync();

            return existingMedicineEntry;
        }
    }
}
