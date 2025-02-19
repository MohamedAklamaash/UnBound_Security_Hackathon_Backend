import { Body, Controller, HttpCode, HttpStatus, Post, Put } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDtos, VerifyEmailDTO, VerifyOTPDTO, ChangePasswordDTO } from "./dto";
import {
    ApiTags,
    ApiOperation,
    ApiResponse,
    ApiBody,
    ApiOkResponse,
    ApiBadRequestResponse,
    ApiNotFoundResponse,
} from "@nestjs/swagger";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post("signup")
    @ApiOperation({ summary: "Register a new user" })
    @ApiBody({ type: AuthDtos, description: "User registration details" })
    @ApiOkResponse({ description: "User registered successfully" })
    @ApiBadRequestResponse({ description: "Invalid input data" })
    async signup(@Body() dto: AuthDtos) {
        return this.authService.signup(dto);
    }

    @Post("signin")
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: "Authenticate a user" })
    @ApiBody({ type: AuthDtos, description: "User login credentials" })
    @ApiOkResponse({ description: "User authenticated successfully" })
    @ApiBadRequestResponse({ description: "Invalid credentials" })
    @ApiNotFoundResponse({ description: "User not found" })
    async signin(@Body() dto: AuthDtos) {
        return this.authService.login(dto);
    }

    @Put("verifyotp")
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: "Verify OTP for user authentication" })
    @ApiBody({ type: VerifyOTPDTO, description: "OTP verification details" })
    @ApiOkResponse({ description: "OTP verified successfully" })
    @ApiBadRequestResponse({ description: "Invalid OTP or email" })
    @ApiNotFoundResponse({ description: "User not found" })
    async verifyOtp(@Body() dto: VerifyOTPDTO) {
        return this.authService.verifyOTP(dto.email, dto.otp);
    }

    @Put("forgotPassword")
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: "Request a password reset" })
    @ApiBody({ type: VerifyEmailDTO, description: "Email for password reset" })
    @ApiOkResponse({ description: "Password reset email sent successfully" })
    @ApiBadRequestResponse({ description: "Invalid email" })
    @ApiNotFoundResponse({ description: "User not found" })
    async forgotPassword(@Body() dto: VerifyEmailDTO) {
        return this.authService.forgotPassword(dto.email);
    }

    @Put("changePassword")
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: "Change user password" })
    @ApiBody({ type: ChangePasswordDTO, description: "New password details" })
    @ApiOkResponse({ description: "Password changed successfully" })
    @ApiBadRequestResponse({ description: "Invalid input data" })
    @ApiNotFoundResponse({ description: "User not found" })
    async changePassword(@Body() dto: ChangePasswordDTO) {
        return this.authService.changeNewPassword(dto);
    }
}