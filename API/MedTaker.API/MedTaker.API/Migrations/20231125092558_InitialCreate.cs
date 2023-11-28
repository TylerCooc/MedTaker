using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedTaker.API.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id",
                table: "Medicines",
                newName: "MedicineId");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedBy",
                table: "Medicines",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedBy",
                table: "Medicines",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateTable(
                name: "MedicineEntry",
                columns: table => new
                {
                    MedicineEntryId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MedicineName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MedicineAmount = table.Column<int>(type: "int", nullable: false),
                    TimeTaken = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MedicineEntry", x => x.MedicineEntryId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MedicineEntry");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Medicines");

            migrationBuilder.DropColumn(
                name: "UpdatedBy",
                table: "Medicines");

            migrationBuilder.RenameColumn(
                name: "MedicineId",
                table: "Medicines",
                newName: "id");
        }
    }
}
