package com.example.back_terminal.repository;

import com.example.back_terminal.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by: Changze
 * Date: 2019/5/9
 * Time: 22:10
 */
public interface UserRepository extends JpaRepository<User,Long> {

}
