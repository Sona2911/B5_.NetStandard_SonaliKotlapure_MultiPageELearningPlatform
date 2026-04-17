using Microsoft.AspNetCore.Mvc;using Microsoft.EntityFrameworkCore;
using LearnifyBackend.Data;
using LearnifyBackend.Models;

namespace LearnifyBackend.Controllers;

[Route("api/lessons")]
[ApiController]
public class LessonsController : ControllerBase
{
    private readonly AppDbContext _context;

    public LessonsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> AddLesson(Lesson lesson)
    {
        var courseExists = await _context.Courses
            .AnyAsync(c => c.CourseId == lesson.CourseId);

        if (!courseExists)
            return BadRequest("Invalid CourseId");

        _context.Lessons.Add(lesson);
        await _context.SaveChangesAsync();

        return Ok(lesson);
    }

    // ✅ NEW: GET lessons by courseId
    [HttpGet("course/{courseId}")]
    public async Task<IActionResult> GetLessons(int courseId)
    {
        var lessons = await _context.Lessons
            .Where(l => l.CourseId == courseId)
            .ToListAsync();

        return Ok(lessons);
    }
    // UPDATE
[HttpPut("{id}")]
public async Task<IActionResult> UpdateLesson(int id, Lesson lesson)
{
    lesson.LessonId = id;

    _context.Lessons.Update(lesson);
    await _context.SaveChangesAsync();

    return Ok(lesson);
}
// DELETE
[HttpDelete("{id}")]
public async Task<IActionResult> DeleteLesson(int id)
{
    var lesson = await _context.Lessons.FindAsync(id);

    if (lesson == null)
        return NotFound();

    _context.Lessons.Remove(lesson);
    await _context.SaveChangesAsync();

    return Ok("Deleted");
}
}