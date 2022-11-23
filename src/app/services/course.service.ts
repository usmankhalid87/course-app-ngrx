import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseItem } from '../store/models/courseItem.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<CourseItem[]>('http://localhost:3000/courses');
  }
}
