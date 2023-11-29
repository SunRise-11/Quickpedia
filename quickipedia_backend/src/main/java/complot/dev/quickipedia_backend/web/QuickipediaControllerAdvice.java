package complot.dev.quickipedia_backend.web;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.NoSuchElementException;

@ControllerAdvice
public class QuickipediaControllerAdvice {

    @ExceptionHandler
    protected ResponseEntity<?> handleNotFound(NoSuchElementException ex){
        return ResponseEntity.notFound().build();
    }



}