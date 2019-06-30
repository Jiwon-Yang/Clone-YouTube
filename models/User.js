import mongoose from "mongoose";
import { StringDecoder } from "string_decoder";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number
});

UserSchema.plugin(passportLocalMongoose, { usernameFile: "email" });

const model = mongoose.Model("User", UserSchema);

export default model;
