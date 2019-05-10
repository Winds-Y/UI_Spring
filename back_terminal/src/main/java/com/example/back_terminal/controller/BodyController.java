package com.example.back_terminal.controller;

import ch.qos.logback.core.rolling.helper.IntegerTokenConverter;
import com.example.back_terminal.entity.User;
import com.example.back_terminal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by: Changze
 * Date: 2019/5/9
 * Time: 22:00
 */
@RestController
@RequestMapping("/api/users")
public class BodyController {
    @Autowired
    private UserRepository userRepository;
    @GetMapping
    public List<User> getUserList(){
        System.out.println("Get UserList-------------------------------------");
        return userRepository.findAll();
    }
    @PostMapping
    public User addUser(@RequestBody User user){
        System.out.println("addUser*****************************************8");
        return userRepository.save(user);
    }
    @DeleteMapping(value = "/{id}")
    public void deleteUser(@PathVariable("id") Integer id){
        System.out.println("deleteUser*****************************************8");
        userRepository.deleteById(Long.valueOf(id));
    }
}
