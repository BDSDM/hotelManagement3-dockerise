package com.hotelManagement.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.sql.Date;

public class RoomResponse {
    private Integer id;
    private String number;
    private String type;
    private Double price;
    private boolean available;

    private Integer bookingId;
    private String bookedBy;
    private Integer userId;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date checkInDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date checkOutDate;

    private String imageUrl; // ✅ Nouveau champ

    // Getters & Setters

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getNumber() { return number; }
    public void setNumber(String number) { this.number = number; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public boolean isAvailable() { return available; }
    public void setAvailable(boolean available) { this.available = available; }

    public Integer getBookingId() { return bookingId; }
    public void setBookingId(Integer bookingId) { this.bookingId = bookingId; }

    public String getBookedBy() { return bookedBy; }
    public void setBookedBy(String bookedBy) { this.bookedBy = bookedBy; }

    public Integer getUserId() { return userId; }
    public void setUserId(Integer userId) { this.userId = userId; }

    public Date getCheckInDate() { return checkInDate; }
    public void setCheckInDate(Date checkInDate) { this.checkInDate = checkInDate; }

    public Date getCheckOutDate() { return checkOutDate; }
    public void setCheckOutDate(Date checkOutDate) { this.checkOutDate = checkOutDate; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
