package com.hotelManagement.restImpl;

import com.hotelManagement.dto.RoomResponse;
import com.hotelManagement.pojo.Booking;
import com.hotelManagement.pojo.Room;
import com.hotelManagement.services.BookingService;
import com.hotelManagement.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/room")
public class RoomRestImpl {

    @Autowired
    private RoomService roomService;

    @Autowired
    private BookingService bookingService;

    @PostMapping("/add")
    public ResponseEntity<Room> addRoom(@RequestBody Room room) {
        return ResponseEntity.ok(roomService.addRoom(room));
    }

    @GetMapping("/all")
    public ResponseEntity<List<RoomResponse>> getAllRooms() {
        List<Room> rooms = roomService.getAllRooms();
        List<RoomResponse> roomResponses = new ArrayList<>();

        for (Room room : rooms) {
            RoomResponse dto = new RoomResponse();

            dto.setId(room.getId());
            dto.setNumber(room.getNumber());
            dto.setType(room.getType());
            dto.setPrice(room.getPrice());
            dto.setAvailable(room.isAvailable());
            dto.setImageUrl(room.getImageUrl());

            Optional<Booking> bookingOpt = bookingService.getConfirmedBookingByRoom(room);
            if (bookingOpt.isPresent()) {
                Booking booking = bookingOpt.get();
                dto.setBookingId(booking.getId());
                dto.setCheckInDate(booking.getCheckInDate());
                dto.setCheckOutDate(booking.getCheckOutDate());

                if (booking.getUser() != null) {
                    dto.setUserId(booking.getUser().getId());
                    dto.setBookedBy(booking.getUser().getName());
                }
            } else {
                dto.setUserId(null);
                dto.setBookingId(null);
                dto.setBookedBy(null);
                dto.setCheckInDate(null);
                dto.setCheckOutDate(null);
            }

            roomResponses.add(dto);
        }

        return ResponseEntity.ok(roomResponses);
    }

    @PutMapping("/update")
    public ResponseEntity<Room> updateRoom(@RequestBody RoomResponse roomDto) {
        Room updatedRoom = roomService.updateRoom(roomDto); // assure-toi que cette méthode existe bien
        return ResponseEntity.ok(updatedRoom);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteRoom(@PathVariable("id") Integer id) {
        roomService.deleteRoom(id);
        return ResponseEntity.ok("Chambre supprimée avec succès");
    }
}
