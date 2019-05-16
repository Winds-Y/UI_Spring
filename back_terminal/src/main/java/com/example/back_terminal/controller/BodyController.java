package com.example.back_terminal.controller;

import com.alibaba.fastjson.JSON;
import com.example.back_terminal.entity.User;
import com.example.back_terminal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by: Changze
 * Date: 2019/5/9
 * Time: 22:00
 */
@RestController
public class BodyController {
    @Autowired
    private UserRepository userRepository;
    @GetMapping("/api/users")
    public List<User> getUserList(){
        System.out.println("Get UserList-------------------------------------");
        return userRepository.findAll();
    }
    @PostMapping("/login")
    public String login(@Param("username") String username,@Param("password") String password){
        System.out.println("in login: username "+username+"  password: "+password);
        Map<String,Integer>map=new HashMap<>();
        map.put("code",200);
        return JSON.toJSONString(map);
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
