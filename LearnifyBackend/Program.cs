using LearnifyBackend.Data;
using LearnifyBackend.Services;
using LearnifyBackend.Mappings;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer("Server=MSI\\SQLEXPRESS;Database=LearnifyDB;Trusted_Connection=True;TrustServerCertificate=True"));

// ✅ FIXED (ONLY ONCE)
builder.Services.AddScoped<CourseService>();

// ✅ BEST PRACTICE
builder.Services.AddAutoMapper(typeof(MappingProfile));

var app = builder.Build();

app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();