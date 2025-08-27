package com.hotelManagement.dto;

import java.sql.Date;

public class BookingDto {
    private Integer id;
    private Date checkInDate;
    private Date checkOutDate;
    private String status;
    private RoomDto room;

    // Getters et Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(Date checkInDate) {
        this.checkInDate = checkInDate;
    }

    public Date getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(Date checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public RoomDto getRoom() {
        return room;
    }

    public void setRoom(RoomDto room) {
        this.room = room;
    }
}
