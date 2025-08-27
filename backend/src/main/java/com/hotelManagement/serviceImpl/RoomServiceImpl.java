package com.hotelManagement.serviceImpl;


import com.hotelManagement.dao.RoomDao;
import com.hotelManagement.dto.RoomResponse;
import com.hotelManagement.pojo.Room;
import com.hotelManagement.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServiceImpl implements RoomService {

    @Autowired
    private RoomDao roomDao;

    @Override
    public Room addRoom(Room room) {
        return roomDao.save(room);
    }

    @Override
    public List<Room> getAllRooms() {
        return roomDao.findAll();
    }

    @Override
    public Room updateRoom(RoomResponse roomDto) {
        Room existingRoom = roomDao.findById(roomDto.getId())
                .orElseThrow(() -> new RuntimeException("Chambre non trouvée avec l'ID : " + roomDto.getId()));

        existingRoom.setNumber(roomDto.getNumber());
        existingRoom.setType(roomDto.getType());
        existingRoom.setPrice(roomDto.getPrice());
        existingRoom.setAvailable(roomDto.isAvailable()); // très important
        existingRoom.setImageUrl(roomDto.getImageUrl());
        return roomDao.save(existingRoom);
    }


    @Override
    public void deleteRoom(Integer id) {
        roomDao.deleteById(id);
    }
}
