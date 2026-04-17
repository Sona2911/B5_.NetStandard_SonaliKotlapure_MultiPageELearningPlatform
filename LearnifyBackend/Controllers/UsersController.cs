using Microsoft.AspNetCore.Mvc;
using LearnifyBackend.Data;
using LearnifyBackend.DTOs;
using LearnifyBackend.Models;
using Microsoft.EntityFrameworkCore; // ✅ added

namespace LearnifyBackend.Controllers;

[Route("api/users")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly AppDbContext _context;

    public UsersController(AppDbContext context)
    {
        _context = context;
    }

   [HttpPost("register")]
public async Task<IActionResult> Register(UserDTO dto)
{
    // ✅ ASYNC CHECK (better practice)
    var existingUser = await _context.Users
        .FirstOrDefaultAsync(u => u.Email == dto.Email);

    if (existingUser != null)
    {
        // ✅ RETURN JSON (VERY IMPORTANT FIX)
        return BadRequest(new { message = "Email already exists" });
    }

    var user = new User
    {
        FullName = dto.FullName,
        Email = dto.Email,
        PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password)
    };

    _context.Users.Add(user);
    await _context.SaveChangesAsync();

    return Ok(user);
}
}