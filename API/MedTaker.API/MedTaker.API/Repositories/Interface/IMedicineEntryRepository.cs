using MedTaker.API.Models;

namespace MedTaker.API.Repositories.Interface
{
    public interface IMedicineEntryRepository
    {
        Task<List<MedicineEntry>> GetAsync();
        Task<MedicineEntry> GetAsync(Guid id);
        Task<MedicineEntry> CreateAsync(MedicineEntry pMedicineEntry);
        Task<MedicineEntry> UpdateAsync(Guid id, MedicineEntry pMedicineEntry);
        Task<MedicineEntry> DeleteAsync(Guid id);

    }
}
