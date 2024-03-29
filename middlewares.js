import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });
// uploads/videos : projectfile의 uploads>videos
// /uploads/videos : 컴퓨터 root의 uploads>videos

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(rouets.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile");
// VideoFile은 upload에서 전달한 file의 "name" 부분과 이름이 같아야 함
// single : 오직 하나의 파일만 업로드 가능
