import { createFeatureSelector } from '@ngrx/store';
import { CourseItem } from './../models/courseItem.model';

export const selectCourse = createFeatureSelector<CourseItem[]>('myCourses');
