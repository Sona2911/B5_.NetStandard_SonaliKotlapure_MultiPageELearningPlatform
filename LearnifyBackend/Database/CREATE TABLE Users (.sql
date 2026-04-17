CREATE TABLE Users (
    UserId INT IDENTITY PRIMARY KEY,
    FullName VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    PasswordHash VARCHAR(255),
    CreatedAt DATETIME DEFAULT GETDATE()
);

CREATE TABLE Courses (
    CourseId INT IDENTITY PRIMARY KEY,
    Title VARCHAR(100),
    Description VARCHAR(255),
    CreatedBy INT,
    CreatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (CreatedBy) REFERENCES Users(UserId)
);

CREATE TABLE Lessons (
    LessonId INT IDENTITY PRIMARY KEY,
    CourseId INT,
    Title VARCHAR(100),
    Content VARCHAR(MAX),
    OrderIndex INT,
    FOREIGN KEY (CourseId) REFERENCES Courses(CourseId)
);

CREATE TABLE Quizzes (
    QuizId INT IDENTITY PRIMARY KEY,
    CourseId INT,
    Title VARCHAR(100),
    FOREIGN KEY (CourseId) REFERENCES Courses(CourseId)
);

CREATE TABLE Questions (
    QuestionId INT IDENTITY PRIMARY KEY,
    QuizId INT,
    QuestionText VARCHAR(MAX),
    OptionA VARCHAR(100),
    OptionB VARCHAR(100),
    OptionC VARCHAR(100),
    OptionD VARCHAR(100),
    CorrectAnswer VARCHAR(100),
    FOREIGN KEY (QuizId) REFERENCES Quizzes(QuizId)
);

CREATE TABLE Results (
    ResultId INT IDENTITY PRIMARY KEY,
    UserId INT,
    QuizId INT,
    Score INT,
    AttemptDate DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (UserId) REFERENCES Users(UserId),
    FOREIGN KEY (QuizId) REFERENCES Quizzes(QuizId)
);