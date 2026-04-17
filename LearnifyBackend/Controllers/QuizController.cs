// using Microsoft.AspNetCore.Mvc;
// using LearnifyBackend.Data;
// using Microsoft.EntityFrameworkCore;

// namespace LearnifyBackend.Controllers;

// [Route("api/quizzes")]
// [ApiController]
// public class QuizController : ControllerBase
// {
//     private readonly AppDbContext _context;

//     public QuizController(AppDbContext context)
//     {
//         _context = context;
//     }

//     [HttpPost("{quizId}/submit")]
// public async Task<IActionResult> SubmitQuiz(int quizId, [FromBody] List<string> answers)
// {
//     try
//     {
//         var questions = await _context.Questions
//             .Where(q => q.QuizId == quizId)
//             .ToListAsync();

//         if (questions == null || questions.Count == 0)
//             return BadRequest(new { message = "No questions found" });

//         int score = 0;

//         int minCount = Math.Min(questions.Count, answers?.Count ?? 0);

//         for (int i = 0; i < minCount; i++)
//         {
//             var correct = questions[i].CorrectAnswer?.Trim();
//             var userAns = answers[i]?.Trim();

//             if (!string.IsNullOrEmpty(userAns) && correct == userAns)
//                 score++;
//         }

//         return Ok(new { score });
//     }
//     catch (Exception ex)
//     {
//         return StatusCode(500, new { error = ex.Message });
//     }

// }}


using Microsoft.AspNetCore.Mvc;
using LearnifyBackend.Data;
using Microsoft.EntityFrameworkCore;
using LearnifyBackend.Models; // ✅ ADD THIS

namespace LearnifyBackend.Controllers;

[Route("api/quizzes")]
[ApiController]
public class QuizController : ControllerBase
{
    private readonly AppDbContext _context;

    public QuizController(AppDbContext context)
    {
        _context = context;
    }




    [HttpPost("{quizId}/submit")]
    public async Task<IActionResult> SubmitQuiz(int quizId, [FromBody] List<string> answers)
    {
        try
        {
            var questions = await _context.Questions
                .Where(q => q.QuizId == quizId)
                .ToListAsync();

            if (questions == null || questions.Count == 0)
                return BadRequest(new { message = "No questions found" });

            int score = 0;

            int minCount = Math.Min(questions.Count, answers?.Count ?? 0);

            for (int i = 0; i < minCount; i++)
            {
                var correct = questions[i].CorrectAnswer?.Trim();
                var userAns = answers[i]?.Trim();

                if (!string.IsNullOrEmpty(userAns) && correct == userAns)
                    score++;
            }

            // ✅ ADD THIS PART (STORE RESULT)
            var result = new Result
            {
                UserId = 1, // 🔥 later make dynamic
                QuizId = quizId,
                Score = score
            };

            _context.Results.Add(result);
            await _context.SaveChangesAsync();

            return Ok(new { score });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { error = ex.Message });
        }
    }
}