using MedTaker.API.Data;
using MedTaker.API.Models;
using MedTaker.API.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MedTaker.API.Controllers
{
    // https://localhost:xxxx/api/user
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineController : ControllerBase
    {
        private readonly IMedicineRepository _medicineRepository;
        public MedicineController(IMedicineRepository medicineRepository)
        {
            this._medicineRepository = medicineRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMedicine()
        {
            var allMedicine = await _medicineRepository.GetAsync();

            return Ok(allMedicine);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMedicine(Guid id)
        {
            var existingMedicine = await _medicineRepository.GetAsync(id);

            if (existingMedicine == null)
            {
                return NotFound(); //If medicine using that id is null it will return 404.
            }

            return Ok(existingMedicine);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMedicine(Medicine pMedicine)
        {
            var newMedicine = new Medicine
            {
                MedicineId = pMedicine.MedicineId,
                MedicineDescription = pMedicine.MedicineDescription,
                MedicineName = pMedicine.MedicineName,
                UsageInstruction = pMedicine.UsageInstruction,
            };
            await _medicineRepository.CreateAsync(newMedicine); 
            
            return Ok(newMedicine); //success status resonse
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMedicine(Guid id, Medicine pMedicine)
        {
            var updatedMedicine = await _medicineRepository.UpdateAsync(id, pMedicine);

            return Ok(updatedMedicine);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicine(Guid id)
        {
            var existingMedicine = await _medicineRepository.DeleteAsync(id);

            return Ok(existingMedicine);
        }
    }
}
