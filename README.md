### MedTaker

MedTaker is a user-friendly web app designed for effortlessly tracking the medicine consumption of users. 
Effortlessly handle your medicine inventory and associated entries. This app allows users to:

**Add Medicine and Entries:** 
Easily create new types of medicines and corresponding entries for accurate tracking.

**Edit Information:** 
Make necessary adjustments to medicine details and entries to keep information up to date.

**Delete Medicine and Entries:** 
Remove outdated or no longer relevant medicine and corresponding entries.

### Usage Video

Watch the usage Demo video on YouTube: [Click here](https://www.youtube.com/watch?v=FYnisj7iD2A).

### Installation and Dependencies

Before you begin, ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (version 16.2.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Visual Studio](https://visualstudio.microsoft.com/) (version 2019 or compatible)
- [Visual Studio Code](https://code.visualstudio.com/) (optional for code editing)
- [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
  
### Installation
Follow these steps to set up and run the project:

1. Clone the repository to your local machine
   - git clone https://github.com/TylerCooc/MedTaker.git
2. cd MedTaker

### API set up
1. **Open the Solution:**
   Navigate from MedTaker -> API -> MedTaker.API -> MedTaker.API.sln (open with visual studio)

2. **Restore Dependencies:**
   Right-click on the solution in the Solution Explorer and select "Restore NuGet Packages" to download and install the necessary packages.

3. **Configure Connection Strings:**
   Update the `appsettings.json` AppConnectionString with your appropriate MS SQL connection string

4. **Build the Solution:**
   Build the solution by right-clicking on the solution in the Solution Explorer and selecting "Build" or pressing `Ctrl + Shift + B`.

5. **Run the API:**
   Press `F5` or use the "Start Debugging" button to run the API. Alternatively, use `Ctrl + F5` to start without debugging.
