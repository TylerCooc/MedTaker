using MedTaker.API.Models;
using MedTaker.API.Repositories.Implementation;
using MedTaker.API.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;

namespace MedTaker.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineEntryController : ControllerBase
    {
        private readonly IMedicineEntryRepository medicineEntryRepository;

        public MedicineEntryController(IMedicineEntryRepository medicineEntryRepository)
        {
            this.medicineEntryRepository = medicineEntryRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMedicineEntries()
        {
            var allMedicineEntries = await medicineEntryRepository.GetAsync();

            return Ok(allMedicineEntries);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMedicineEntry(Guid id)
        {
            var existingMedicineEntry = await medicineEntryRepository.GetAsync(id);

            if(existingMedicineEntry == null)
            {
                return NotFound();
            }
            return Ok(existingMedicineEntry);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMedicineEntry(MedicineEntry pMedicineEntry)
        {       
            var newMedicineEntry = new MedicineEntry
            {
                MedicineEntryId = pMedicineEntry.MedicineEntryId,
                MedicineAmount = pMedicineEntry.MedicineAmount,
                MedicineName = pMedicineEntry.MedicineName,
                TimeTaken = pMedicineEntry.TimeTaken,
            };

            await medicineEntryRepository.CreateAsync(newMedicineEntry);
            return Ok(newMedicineEntry);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMedicineEntry(Guid id, MedicineEntry pMedicineEntry)
        {
            var updatedMedicineEntry = await medicineEntryRepository.UpdateAsync(id, pMedicineEntry);

            return Ok(updatedMedicineEntry);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicineEntry(Guid id)
        {
            var existingMedicineEntry = await medicineEntryRepository.DeleteAsync(id);
            return Ok(existingMedicineEntry);
        }
    }
}
