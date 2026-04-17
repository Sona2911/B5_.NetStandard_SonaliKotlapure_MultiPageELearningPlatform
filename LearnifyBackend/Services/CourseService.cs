using LearnifyBackend.Data;
using LearnifyBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace LearnifyBackend.Services;

public class CourseService
{
    private readonly AppDbContext _context;

    public CourseService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<Course>> GetAll()
    {
        return await _context.Courses.AsNoTracking().ToListAsync();
    }

    public async Task<Course?> GetById(int id)
    {
        return await _context.Courses.FindAsync(id);
    }

    public async Task<Course> Add(Course course)
    {
        _context.Courses.Add(course);
        await _context.SaveChangesAsync();
        return course;
    }

    public async Task Update(Course course)
{
    _context.Courses.Update(course);
    await _context.SaveChangesAsync();
}

public async Task Delete(int id)
{
    var course = await _context.Courses.FindAsync(id);
    if (course != null)
    {
        _context.Courses.Remove(course);
        await _context.SaveChangesAsync();
    }
}
}