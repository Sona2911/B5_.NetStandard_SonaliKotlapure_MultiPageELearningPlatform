using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LearnifyBackend.Data;
using LearnifyBackend.Models;

namespace LearnifyBackend.Controllers;

[Route("api/results")]
[ApiController]
public class ResultsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ResultsController(AppDbContext context)
    {
        _context = context;
    }

    // ✅ GET results by userId
    [HttpGet("{userId}")]
    public async Task<IActionResult> GetResults(int userId)
    {
        var results = await _context.Results
             .Where(r => r.UserId == userId)
        .AsNoTracking()
        .ToListAsync();
  if (results == null || results.Count == 0)
        return NotFound("No results found");
        return Ok(results);
    }
}