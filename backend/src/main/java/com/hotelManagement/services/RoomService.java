package com.hotelManagement.services;


import com.hotelManagement.dto.RoomResponse;
import com.hotelManagement.pojo.Room;

import java.util.List;

public interface RoomService {
    Room addRoom(Room room);
    List<Room> getAllRooms();
    Room updateRoom(RoomResponse roomDto);

    void deleteRoom(Integer id);
}
