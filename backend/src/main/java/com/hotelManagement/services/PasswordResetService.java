package com.hotelManagement.services;

public interface PasswordResetService {
    void createPasswordResetToken(String email);
    boolean resetPassword(String token, String newPassword);
}
