package com.hotelManagement.services;


import com.hotelManagement.pojo.User;

import java.util.List;

public interface UserService {
    List<com.hotelManagement.dto.UserDto> getAllUsers();
    User getUserById(Integer id);
    User saveUser(User user);
    User updateUser(Integer id, User user);
    void deleteUser(Integer id);
}
