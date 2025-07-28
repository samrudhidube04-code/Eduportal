import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.css']
})
export class ManageCoursesComponent {


  imageUrlInput: string = '';
  courses: any[] = [];
  editingIndex: number | null = null;
  editedCourse: any = {};




  newCourse = {
    name: '',
    description: '',
    price: null,
    image: ''
  };

  ngOnInit() {
    // Load from localStorage if exists
    const savedCourses = localStorage.getItem('courses');
    if (savedCourses) {
      this.courses = JSON.parse(savedCourses);
    }
  }

  // 📸 If admin pastes image URL
  setImageFromUrl() {
    this.newCourse.image = this.imageUrlInput;
  }

  // 📷 If admin uploads from system
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.newCourse.image = reader.result as string;
        this.imageUrlInput = ''; // Clear manual input
      };

      reader.readAsDataURL(file);
    }
  }

  addCourse() {
    if (
      this.newCourse.name &&
      this.newCourse.description &&
      this.newCourse.price !== null &&
      this.newCourse.image
    ) {
      this.courses.push({ ...this.newCourse });
      localStorage.setItem('courses', JSON.stringify(this.courses));
      this.newCourse = { name: '', description: '', price: null, image: '' };
      alert('Course added successfully!');
    }
  }


  // Delete course by index
  deleteCourse(index: number) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courses.splice(index, 1);
      localStorage.setItem('courses', JSON.stringify(this.courses));
      alert('Course deleted successfully!');
    }
  }


  startEdit(index: number) {
    this.editingIndex = index;
    this.editedCourse = { ...this.courses[index] }; // create a copy
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editedCourse = {};
  }

  saveEdit() {
    if (this.editingIndex !== null) {
      this.courses[this.editingIndex] = { ...this.editedCourse };
      localStorage.setItem('courses', JSON.stringify(this.courses));
      this.cancelEdit();
      alert('Course updated successfully!');
    }
  }
}