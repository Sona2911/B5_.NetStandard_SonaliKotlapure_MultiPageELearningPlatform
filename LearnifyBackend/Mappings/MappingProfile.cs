using AutoMapper;
using LearnifyBackend.Models;
using LearnifyBackend.DTOs;

namespace LearnifyBackend.Mappings;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Course, CourseDTO>().ReverseMap();

        // ✅ OPTIONAL (for extra marks / future use)
        // CreateMap<User, UserDTO>().ReverseMap();
        // CreateMap<Result, ResultDTO>().ReverseMap();
    }
}