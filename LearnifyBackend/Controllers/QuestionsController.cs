using Microsoft.AspNetCore.Mvc;
using LearnifyBackend.Data;
using LearnifyBackend.Models;

namespace LearnifyBackend.Controllers;

[Route("api/questions")]
[ApiController]
public class QuestionsController : ControllerBase
{
    private readonly AppDbContext _context;

    public QuestionsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> AddQuestion(Question q)
    {
        _context.Questions.Add(q);
        await _context.SaveChangesAsync();
        return Ok(q);
    }
}