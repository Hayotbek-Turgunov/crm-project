import {
  Container,
  Side,
  SideLogo,
  Menu,
  MenuItem,
  LogOut,
  Arrow,
} from "./style";
import { Profile } from "./profile";
import sidebar from "../../utils/sidebar";

const Sidebar = () => {
  console.log(sidebar);

  return (
    <Container>
      <Side>
        <SideLogo>CRM</SideLogo>
        <Profile />
        <Menu>
          {sidebar.map((parent) => {
            const { icon: Icon } = parent;
            return (
              <>
                <MenuItem key={parent.id}>
                  <MenuItem.Title>
                    <Icon className="icon" /> {parent.title} <Arrow />
                  </MenuItem.Title>
                </MenuItem>
              </>
            );
          })}
        </Menu>
        <LogOut>Chiqish</LogOut>
      </Side>
    </Container>
  );
};

export default Sidebar;
