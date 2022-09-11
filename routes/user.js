const express = require("express");
const user = require("../controller/UserController");
const router = express.Router();

// 데이터 불러오기 연결
router.get("/", user.signin);

// 회원가입 연결
router.get("/signup", user.signup);
router.post("/signup", user.post_signup);

// 로그인 연결
router.get("/signin", user.signin);
router.post("/signin", user.post_signin);

// 마이페이지 연결 (수정, 삭제)
router.get("/profile", user.profile);
router.post("/profile", user.profile);

module.exports = router;