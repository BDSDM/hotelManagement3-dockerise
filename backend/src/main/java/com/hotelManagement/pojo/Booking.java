package com.hotelManagement.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date checkInDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date checkOutDate;

    private String status;

    @ManyToOne
    @JoinColumn(name = "room_id", nullable = false)
    private Room room;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Booking() {}

    public Booking(Date checkInDate, Date checkOutDate, String status, Room room, User user) {
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.status = status;
        this.room = room;
        this.user = user;
    }

    // Getters / Setters
    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

    public Date getCheckInDate() { return checkInDate; }

    public void setCheckInDate(Date checkInDate) { this.checkInDate = checkInDate; }

    public Date getCheckOutDate() { return checkOutDate; }

    public void setCheckOutDate(Date checkOutDate) { this.checkOutDate = checkOutDate; }

    public String getStatus() { return status; }

    public void setStatus(String status) { this.status = status; }

    public Room getRoom() { return room; }

    public void setRoom(Room room) { this.room = room; }

    public User getUser() { return user; }

    public void setUser(User user) { this.user = user; }
}
