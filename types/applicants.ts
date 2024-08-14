import { Experience } from './experience';
import { Skills } from './skills';
export interface Applicant {
    name: string;
    email: string;
    age: number;
    skills: Skills[];
    experience: Experience[];
}