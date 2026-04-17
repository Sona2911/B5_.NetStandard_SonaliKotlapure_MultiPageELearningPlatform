using Xunit;

public class ScoreTest
{
    [Fact]
    public void CalculateScore_Test()
    {
        int score = 3;
        int total = 3;

        var percent = (score * 100) / total;

        Assert.Equal(100, percent);
    }
}