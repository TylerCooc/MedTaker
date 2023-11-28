using MedTaker.API.Models;

namespace MedTaker.API.Repositories.Interface
{
    public interface IMedicineRepository
    {
        Task<List<Medicine>> GetAsync();
        Task<Medicine> GetAsync(Guid id);
        Task<Medicine> CreateAsync(Medicine pMedicine);
        Task<Medicine> UpdateAsync(Guid id, Medicine pMedicine);
        Task<Medicine> DeleteAsync (Guid id);
    }
}
