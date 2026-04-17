namespace LearnifyBackend.Models;

public class User
{
    public int UserId { get; set; }
    public string FullName { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public ICollection<Course> Courses { get; set; }
    public ICollection<Result> Results { get; set; }
}