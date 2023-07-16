import { Injectable } from '@nestjs/common';
import { Response } from 'express';

type SuccessType = {
  statusCode?: number;
  message?: string;
  data?: any;
};
type ErrorType = {
  statusCode?: number;
  message?: string;
  errors?: string[];
};

@Injectable()
export class ResponseFactory {
  /**
   * Return json format for successfully request
   * @example new ResponseFactory().success(res, {});
   * @date 7/15/2023 - 5:49:56 PM
   *
   * @param {Response} response passed from controller
   * @param {SuccessType} { message = 'Action successfully!', data = null }
   * @returns {*}
   */
  success(
    response: Response,
    {
      statusCode = 200,
      message = 'Action successfully!',
      data = null,
    }: SuccessType,
  ): Response {
    const format = {
      timestamp: new Date().toISOString(),
      success: true,
      status: statusCode,
      message,
      data,
    };
    return response.status(200).json(format);
  }

  /**
   * Return json format for failed request
   * @example new ResponseFactory().error(res, {});
   * @date 7/15/2023 - 5:48:24 PM
   *
   * @param {Response} response
   * @param {ErrorType} { statusCode = 400, message = 'Action failed!', errors = [] }
   * @returns {*}
   */
  error(
    response: Response,
    { statusCode = 400, message = 'Action failed!', errors = [] }: ErrorType,
  ): Response {
    const format = {
      timestamp: new Date().toISOString(),
      success: false,
      status: statusCode,
      message,
      errors,
    };
    return response.status(statusCode).json(format);
  }
}
