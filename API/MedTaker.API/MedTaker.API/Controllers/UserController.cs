using MedTaker.API.Data;
using MedTaker.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace MedTaker.API.Controllers
{
    // https://localhost:xxxx/api/user
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;
        public UserController(AppDbContext dbContext)
        {
            this._context = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUser()
        {
            var users = _context.Users.ToList();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(Guid id)
        {
            var existingUser = _context.Users.FindAsync(id);

            if (existingUser == null)
            {
                return NotFound();
            }
            return Ok(existingUser);
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(User pUser)
        {
            var user = new User
            {
                UserId = pUser.UserId,
                Email = pUser.Email,
                UserName = pUser.UserName,
            };

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return Ok(user);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateUser(Guid id, User pUser)
        {
            var existingUser = await _context.Users.FindAsync(id);

            if (existingUser == null)
            {
                return NotFound();
            }

            existingUser.UserId = pUser.UserId;
            existingUser.UserName = pUser.UserName;
            existingUser.Email = pUser.Email;

            _context.Users.Update(existingUser);
            await _context.SaveChangesAsync();  

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var existingUser = await _context.Users.FindAsync(id);

            _context.Users.Remove(existingUser);

            await _context.SaveChangesAsync();

            return Ok();
        }

    }
}
