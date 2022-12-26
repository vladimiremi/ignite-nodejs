import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    duration: 20,
    educator: "Vladimir",
    name: "NodeJs",
  });

  CreateCourseService.execute({
    educator: "Vladimir",
    name: "reactJs",
  });
  response.send();
}
