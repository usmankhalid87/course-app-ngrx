import { Action, createAction, props } from '@ngrx/store';
import { CourseItem } from '../models/courseItem.model';

export enum CourseActionType {
  FETCH_COURSES = '[COURSE] Invoke course Fetch API',
  FETCH_COURSES_SUCCESS = '[COURSE] Invoke course Fetch API Success',
}

export const invokeCoursesAPI = createAction(CourseActionType.FETCH_COURSES);

export const coursesFetchAPISuccess = createAction(
  CourseActionType.FETCH_COURSES_SUCCESS,
  props<{ allCourses: CourseItem[] }>()
);
