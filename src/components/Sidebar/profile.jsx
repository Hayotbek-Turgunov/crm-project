import { ProfileContaier } from "./style";
import noImg from "../../assets/images/noUser.webp";

export const Profile = () => {
  return (
    <ProfileContaier>
      <ProfileContaier.Image src={noImg} />
      <div>
        <ProfileContaier.Name>Turgunov Hayotbek</ProfileContaier.Name>
        <ProfileContaier.Email>Hayotbek.@gmail.com</ProfileContaier.Email>
      </div>
    </ProfileContaier>
  );
};
