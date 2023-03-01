import { AxiosResponse } from "axios";

import { Subject } from "types/Subject";
import http from "utils/api/http";

export const getAllSubjects = async (): Promise<Subject[]> => {
  const response: AxiosResponse = await http.get(`/subjects?is_approved=true`);

  return response?.data?.data;
};

export const getSubjectById = async (subjectId: string): Promise<Subject> => {
  const response: AxiosResponse = await http.get(`/subjects/${subjectId}`);

  return response?.data?.data;
};
