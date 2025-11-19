module.exports.MSG = {
    // --- Authentication & Authorization (More specific/actionable) ---
    AUTH_SUCCESS_LOGIN: "Welcome back! You've successfully logged in.",
    AUTH_ERROR_LOGIN: "Oops! We couldn't match that email and password combination.",
    AUTH_UNAUTHORIZED: "Hold up! You need to log in to access this resource.",
    AUTH_FORBIDDEN: "Sorry, you don't have the necessary permissions for this action.",
    AUTH_LOGOUT_SUCCESS: "See you next time! You have been securely logged out.",

    // --- User Management (Focus on completeness) ---
    USER_CREATED: "Your account has been created and registered successfully!",
    USER_EXIST: "It looks like an account already exists with that information.",
    USER_UPDATED: "Great! Your user profile has been successfully updated.",
    USER_DELETED: "User account permanently removed.", // Stronger confirmation
    USER_NOT_FOUND: "We couldn't find a user with those details.",
    
    // --- Registration & Verification (Guiding the user) ---
    EMAIL_OTP_SENT_REGISTRATION: "Check your inbox! We've sent a verification code to complete your registration.",
    EMAIL_OTP_SENT_LOGIN: "Verification code sent! Please use the code from your email to proceed with login.",
    MOBILE_ALREADY_EXISTS: "This mobile number is already linked to an existing account.",
    EMAIL_ALREADY_EXISTS: "This email is already in use. Try logging in or recovering your password.",

    // --- Password Management (Positive reinforcement) ---
    PASSWORD_NOT_MATCH: "The passwords you entered do not match. Please try again.",
    PASSWORD_CHANGED: "Success! Your password has been changed. Remember to use the new one!",

    // --- OTP/Verification Code (Helpful diagnosis) ---
    OTP_NOT_FOUND: "The verification code wasn't found. It may have expired. Request a new one!",
    OTP_EXPIRED: "Time's up! The verification code has expired.",
    INVALID_OTP: "That verification code isn't valid. Please check your email and try again.",

    // --- Token & Session Management (Clear security focus) ---
    TOKEN_MISSING: 'Authentication token is missing. Please log in again.',
    TOKEN_INVALID: 'Your session has expired or the token is invalid. Please log in.',

    // --- General Errors & Successes (Empathy/Direction) ---
    SERVER_ERROR: "Server down! Something went wrong on our end. Please try again shortly.",
    BAD_REQUEST: "Uh oh! We couldn't process your request. Please check the data you sent.",
    NOT_FOUND: "Lost in the clouds! The resource you requested doesn't exist here.",
    ACTION_SUCCESS: "Mission accomplished! Your action was completed successfully.",
    ACTION_FAILED: "We hit a snag. The requested action could not be completed. Please retry.",
    ACCESS_DENIED: "Access Denied. Contact support if you believe this is an error.",

}