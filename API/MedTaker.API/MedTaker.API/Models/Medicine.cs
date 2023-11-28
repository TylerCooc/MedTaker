namespace MedTaker.API.Models
{
    public class Medicine
    {
        public Guid MedicineId { get; set; }
        public string MedicineName { get; set; }
        public string MedicineDescription { get; set; }
        public string UsageInstruction { get; set; }    
        public DateTime CreatedBy { get; set; }
        public DateTime UpdatedBy {  get; set; }
    }
}
