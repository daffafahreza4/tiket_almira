// Auth Types
export const USER_LOADED = 'USER_LOADED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGOUT = 'LOGOUT';

// OTP Verification Types
export const VERIFY_OTP_SUCCESS = 'VERIFY_OTP_SUCCESS';
export const VERIFY_OTP_FAIL = 'VERIFY_OTP_FAIL';
export const RESEND_OTP_SUCCESS = 'RESEND_OTP_SUCCESS';
export const RESEND_OTP_FAIL = 'RESEND_OTP_FAIL';

// Password Reset Types
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL';

// Profile Types
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAIL = 'UPDATE_PROFILE_FAIL';

// BUS TYPES 
export const GET_BUSES = 'GET_BUSES';
export const GET_BUS = 'GET_BUS';
export const ADD_BUS = 'ADD_BUS';
export const UPDATE_BUS = 'UPDATE_BUS';
export const DELETE_BUS = 'DELETE_BUS';
export const CLEAR_BUS = 'CLEAR_BUS';
export const BUS_ERROR = 'BUS_ERROR';
export const GET_ALL_BUSES = 'GET_ALL_BUSES';
export const GET_BUS_BY_ID = 'GET_BUS_BY_ID';
export const CREATE_BUS_SUCCESS = 'CREATE_BUS_SUCCESS';
export const UPDATE_BUS_SUCCESS = 'UPDATE_BUS_SUCCESS';
export const DELETE_BUS_SUCCESS = 'DELETE_BUS_SUCCESS';
export const CLEAR_BUS_DATA = 'CLEAR_BUS_DATA';
export const SET_BUS_LOADING = 'SET_BUS_LOADING';

// Rute Types
export const GET_RUTES = 'GET_RUTES';
export const GET_RUTE = 'GET_RUTE';
export const ADD_RUTE = 'ADD_RUTE';
export const UPDATE_RUTE = 'UPDATE_RUTE';
export const DELETE_RUTE = 'DELETE_RUTE';
export const CLEAR_RUTE = 'CLEAR_RUTE';
export const SEARCH_RUTES = 'SEARCH_RUTES';
export const RUTE_ERROR = 'RUTE_ERROR';

// Ticket Types
export const GET_TICKETS = 'GET_TICKETS';
export const GET_TICKET = 'GET_TICKET';
export const ADD_TICKET = 'ADD_TICKET';
export const UPDATE_TICKET = 'UPDATE_TICKET';
export const DELETE_TICKET = 'DELETE_TICKET';
export const CLEAR_TICKET = 'CLEAR_TICKET';
export const TICKET_ERROR = 'TICKET_ERROR';
export const GET_AVAILABLE_SEATS = 'GET_AVAILABLE_SEATS';
export const SET_SELECTED_SEATS = 'SET_SELECTED_SEATS';
export const CLEAR_SELECTED_SEATS = 'CLEAR_SELECTED_SEATS';
// Enhanced Ticket Types
export const GET_SEAT_STATUSES = 'GET_SEAT_STATUSES';
export const UPDATE_SEAT_STATUS = 'UPDATE_SEAT_STATUS';

// Ticket Admin Types
export const GET_ADMIN_TICKETS = 'GET_ADMIN_TICKETS';
export const GET_ADMIN_TICKET = 'GET_ADMIN_TICKET';
export const UPDATE_TICKET_STATUS_SUCCESS = 'UPDATE_TICKET_STATUS_SUCCESS';
export const DELETE_ADMIN_TICKET_SUCCESS = 'DELETE_ADMIN_TICKET_SUCCESS';
export const TICKET_ADMIN_ERROR = 'TICKET_ADMIN_ERROR';
export const CLEAR_TICKET_ADMIN = 'CLEAR_TICKET_ADMIN';

// Reservasi Types
export const GET_RESERVASI = 'GET_RESERVASI';
export const CREATE_RESERVASI = 'CREATE_RESERVASI';
export const CANCEL_RESERVASI = 'CANCEL_RESERVASI';
export const CLEAR_RESERVASI = 'CLEAR_RESERVASI';
export const RESERVASI_ERROR = 'RESERVASI_ERROR';
// Enhanced Reservasi Types 
export const CREATE_TEMP_RESERVASI = 'CREATE_TEMP_RESERVASI';
export const GET_RESERVASI_SUMMARY = 'GET_RESERVASI_SUMMARY';
export const RESERVASI_EXPIRED = 'RESERVASI_EXPIRED';

// Booking Types 
export const GET_BOOKING_SUMMARY = 'GET_BOOKING_SUMMARY';
export const CREATE_BOOKING_SUCCESS = 'CREATE_BOOKING_SUCCESS';
export const BOOKING_ERROR = 'BOOKING_ERROR';
export const CLEAR_BOOKING = 'CLEAR_BOOKING';

// Pembayaran Types
export const GET_PEMBAYARAN = 'GET_PEMBAYARAN';
export const CREATE_PEMBAYARAN = 'CREATE_PEMBAYARAN';
export const UPDATE_PEMBAYARAN = 'UPDATE_PEMBAYARAN';
export const CLEAR_PEMBAYARAN = 'CLEAR_PEMBAYARAN';
export const PEMBAYARAN_ERROR = 'PEMBAYARAN_ERROR';

// Alert Types
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

// Error Types
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// Admin Types
export const GET_ADMIN_STATS = 'GET_ADMIN_STATS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const MAKE_USER_ADMIN_SUCCESS = 'MAKE_USER_ADMIN_SUCCESS';
export const ADMIN_ERROR = 'ADMIN_ERROR';
export const CLEAR_ADMIN_DATA = 'CLEAR_ADMIN_DATA';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';

// Route Admin Types
export const GET_ADMIN_ROUTES = 'GET_ADMIN_ROUTES';
export const GET_ADMIN_ROUTE = 'GET_ADMIN_ROUTE';
export const ADD_ADMIN_ROUTE = 'ADD_ADMIN_ROUTE';
export const UPDATE_ADMIN_ROUTE = 'UPDATE_ADMIN_ROUTE';
export const DELETE_ADMIN_ROUTE = 'DELETE_ADMIN_ROUTE';
export const ROUTE_ADMIN_ERROR = 'ROUTE_ADMIN_ERROR';
export const CLEAR_ROUTE_ADMIN = 'CLEAR_ROUTE_ADMIN';