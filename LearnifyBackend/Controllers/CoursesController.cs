using Microsoft.AspNetCore.Mvc;
using LearnifyBackend.Services;
using LearnifyBackend.DTOs;
using LearnifyBackend.Models;
using AutoMapper;

namespace LearnifyBackend.Controllers;

[Route("api/courses")]
[ApiController]
public class CoursesController : ControllerBase
{
    private readonly CourseService _service;
    private readonly IMapper _mapper;

    public CoursesController(CourseService service, IMapper mapper)
    {
        _service = service;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<IActionResult> GetCourses()
    {
        var courses = await _service.GetAll();

        // ✅ FIX: return DTO instead of entity
        var result = _mapper.Map<List<CourseDTO>>(courses);

        return Ok(result);
    }
  
    [HttpPost]
    public async Task<IActionResult> CreateCourse(CourseDTO dto)
    {
        // ✅ Map DTO → Entity
        var course = _mapper.Map<Course>(dto);

        await _service.Add(course);

        // ✅ FIX: return DTO (not entity)
        var result = _mapper.Map<CourseDTO>(course);

        return Ok(result);
    }
    // GET BY ID
[HttpGet("{id}")]
public async Task<IActionResult> GetCourse(int id)
{
    var course = await _service.GetById(id);
    if (course == null) return NotFound();

    return Ok(_mapper.Map<CourseDTO>(course));
}

// UPDATE
[HttpPut("{id}")]
public async Task<IActionResult> Update(int id, CourseDTO dto)
{
    if (!ModelState.IsValid)
        return BadRequest(ModelState);

    var course = _mapper.Map<Course>(dto);
    course.CourseId = id;

    await _service.Update(course);
    return Ok(_mapper.Map<CourseDTO>(course));
}

// DELETE
[HttpDelete("{id}")]
public async Task<IActionResult> Delete(int id)
{
    await _service.Delete(id);
    return Ok("Deleted");
}
}