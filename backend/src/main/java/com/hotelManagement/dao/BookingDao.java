package com.hotelManagement.dao;

import com.hotelManagement.pojo.Booking;
import com.hotelManagement.pojo.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingDao extends JpaRepository<Booking, Integer> {
    List<Booking> findByUserId(Integer userId);
    List<Booking> findByRoomId(Integer roomId);
    // Modification ici : retourne une liste au lieu d'un Optional
    List<Booking> findByRoomAndStatus(Room room, String status);
}
