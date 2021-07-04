import { createContext } from 'react';

export const LectureContext = {
    lecturers: [],
    removeLecture: () => { },
}
export default createContext(LectureContext);