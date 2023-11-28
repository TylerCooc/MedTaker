namespace MedTaker.API.Models
{
    public class MedicineEntry
    {
        public Guid MedicineEntryId { get; set; }
        public string MedicineName { get; set; }
        public int MedicineAmount { get; set; }
        public DateTime TimeTaken { get; set; }
    }
}
