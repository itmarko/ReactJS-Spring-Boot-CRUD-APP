package com.Spring.Project1.Service;

import java.util.List;

import com.Spring.Project1.Model.Student;

public interface IStudentService {
    Student addStudent(Student student);
    List<Student> getStudents();
    Student updateStudent(Student student, Long id);
    Student getStudentById(Long id);
    void deleteStudent(Long id);
}