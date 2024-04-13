create database onlineEd;
use onlineed;
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_type ENUM('student', 'teacher') NOT NULL
);
CREATE TABLE courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(255) NOT NULL,
    course_description TEXT,
    teacher_id INT,
    FOREIGN KEY (teacher_id) REFERENCES users(user_id)
);
CREATE TABLE enrollments (
    enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT,
    student_id INT,
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    FOREIGN KEY (student_id) REFERENCES users(user_id)
);
CREATE TABLE resources (
    resource_id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT,
    resource_type ENUM('test', 'assignment', 'other') NOT NULL,
    resource_name VARCHAR(255) NOT NULL,
    resource_link VARCHAR(255) NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
CREATE TABLE progress_reports (
    report_id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT,
    student_id INT,
    marks_obtained INT,
    total_marks INT,
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    FOREIGN KEY (student_id) REFERENCES users(user_id)
);
CREATE TABLE tests (
    test_id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    test_name VARCHAR(255) NOT NULL,
    total_marks INT NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
CREATE TABLE questions (
    question_id INT AUTO_INCREMENT PRIMARY KEY,
    test_id INT NOT NULL,
    question_text TEXT NOT NULL,
    option1 VARCHAR(255) NOT NULL,
    option2 VARCHAR(255) NOT NULL,
    option3 VARCHAR(255) NOT NULL,
    option4 VARCHAR(255) NOT NULL,
    correct_option INT NOT NULL,
    FOREIGN KEY (test_id) REFERENCES tests(test_id)
);

-- Inserting sample data for users
INSERT INTO users (username, email, password, user_type) VALUES
('Rahul', 'rahul@example.com', 'password123', 'teacher'),
('Priya', 'priya@example.com', 'password456', 'teacher'),
('Amit', 'amit@example.com', 'password789', 'student'),
('Anjali', 'anjali@example.com', 'password321', 'student');

-- Inserting sample data for courses
INSERT INTO courses (course_name, course_description, teacher_id) VALUES
('Introduction to Programming', 'Basic concepts of programming using Python', 1),
('Data Structures and Algorithms', 'Fundamental data structures and algorithms concepts', 2),
('Web Development', 'Building dynamic websites using HTML, CSS, and JavaScript', 1);

-- Inserting sample data for enrollments
INSERT INTO enrollments (course_id, student_id) VALUES
(1, 3),
(1, 4),
(2, 3),
(3, 4);

-- Inserting sample data for resources
INSERT INTO resources (course_id, resource_type, resource_name, resource_link) VALUES
(1, 'assignment', 'Assignment 1', 'https://example.com/assignment1'),
(1, 'test', 'Quiz 1', 'https://example.com/quiz1'),
(2, 'assignment', 'Assignment 1', 'https://example.com/assignment1'),
(3, 'other', 'Sample Project', 'https://example.com/project');

-- Inserting sample data for progress_reports
INSERT INTO progress_reports (course_id, student_id, marks_obtained, total_marks) VALUES
(1, 3, 85, 100),
(1, 4, 90, 100),
(2, 3, 75, 100),
(3, 4, 95, 100);

-- Inserting sample data for tests
INSERT INTO tests (course_id, test_name, total_marks) VALUES
(1, 'Quiz 1', 20),
(2, 'Midterm Exam', 50);

-- Inserting sample data for questions
INSERT INTO questions (test_id, question_text, option1, option2, option3, option4, correct_option) VALUES
(1, 'What is the capital of India?', 'Delhi', 'Mumbai', 'Chennai', 'Kolkata', 1),
(1, 'Who is the Prime Minister of India?', 'Narendra Modi', 'Rahul Gandhi', 'Amit Shah', 'Sonia Gandhi', 1),
(2, 'What is the time complexity of Binary Search?', 'O(n)', 'O(log n)', 'O(n log n)', 'O(1)', 2),
(2, 'Which sorting algorithm has the worst time complexity?', 'Bubble Sort', 'Merge Sort', 'Quick Sort', 'Insertion Sort', 1);
