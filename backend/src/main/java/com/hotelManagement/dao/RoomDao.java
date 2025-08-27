package com.hotelManagement.dao;


import com.hotelManagement.pojo.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomDao extends JpaRepository<Room, Integer> {
    Room findByNumber(String number);

}
