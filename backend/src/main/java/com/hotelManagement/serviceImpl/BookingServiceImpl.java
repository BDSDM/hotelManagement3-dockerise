package com.hotelManagement.serviceImpl;

import com.hotelManagement.dao.BookingDao;
import com.hotelManagement.dao.RoomDao;
import com.hotelManagement.dao.UserDao;
import com.hotelManagement.pojo.Booking;
import com.hotelManagement.pojo.Room;
import com.hotelManagement.pojo.User;
import com.hotelManagement.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingDao bookingDao;

    @Autowired
    private RoomDao roomDao;
    @Autowired
    private UserDao userDao;
    @Override
    public Optional<Booking> getConfirmedBookingByRoom(Room room) {
        List<Booking> bookings = bookingDao.findByRoomAndStatus(room, "CONFIRMED");
        if (bookings.isEmpty()) {
            return Optional.empty();
        }
        // Tu peux adapter la logique ici, par ex. retourner le premier booking confirmé
        return Optional.of(bookings.get(0));
    }



    @Override
    public Booking createBooking(Integer userId, Integer roomId, String checkInDate, String checkOutDate) {
        Room room = roomDao.findById(roomId)
                .orElseThrow(() -> new RuntimeException("Chambre non trouvée"));

        User user = userDao.findById(userId)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        room.setAvailable(false);
        roomDao.save(room);

        Booking booking = new Booking();
        booking.setRoom(room);
        booking.setUser(user);
        booking.setCheckInDate(Date.valueOf(LocalDate.parse(checkInDate)));
        booking.setCheckOutDate(Date.valueOf(LocalDate.parse(checkOutDate)));
        booking.setStatus("CONFIRMED");

        return bookingDao.save(booking);
    }


    @Override
    public List<Booking> getAllBookings() {
        return bookingDao.findAll();
    }

    @Override
    public List<Booking> getBookingsByUserId(Integer userId) {
        return bookingDao.findByUserId(userId);
    }

    @Override
    public void cancelBooking(Integer bookingId) {
        Booking booking = bookingDao.findById(bookingId).orElse(null);
        if (booking != null) {
            booking.setStatus("cancelled");
            booking.getRoom().setAvailable(true);
            bookingDao.save(booking);
            roomDao.save(booking.getRoom());
        }
    }
}
