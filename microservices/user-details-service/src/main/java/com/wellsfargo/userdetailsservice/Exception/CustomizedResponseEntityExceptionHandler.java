package com.wellsfargo.userdetailsservice.Exception;


import java.sql.Date;
import java.util.Calendar;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.wellsfargo.userdetailsservice.models.ExceptionResponse;

@ControllerAdvice
@RestController
public class CustomizedResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {
  @ExceptionHandler(Exception.class)
  public final ResponseEntity<ExceptionResponse> handleNotFoundException(Exception ex, WebRequest request) {
    ExceptionResponse exceptionResponse = new ExceptionResponse(new Date(Calendar.getInstance().getTime().getTime()), ex.getMessage(),
        request.getDescription(false),HttpStatus.NOT_ACCEPTABLE.getReasonPhrase());
    return new ResponseEntity<ExceptionResponse>(exceptionResponse, HttpStatus.NOT_ACCEPTABLE);
  }
}