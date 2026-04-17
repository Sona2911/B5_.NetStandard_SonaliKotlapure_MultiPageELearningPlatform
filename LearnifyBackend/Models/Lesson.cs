using System.Text.Json.Serialization;
namespace LearnifyBackend.Models;

public class Lesson
{
    public int LessonId { get; set; }
    public int CourseId { get; set; }
   [JsonIgnore]
public Course? Course { get; set; }

    public string Title { get; set; }
    public string Content { get; set; }
    public int OrderIndex { get; set; }
    
}