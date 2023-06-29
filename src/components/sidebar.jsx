import SocialNetwork from "./SocialNetworks";
import Avatar from "../img/eu2.jpg";
import Information from "./information";

import "../styles/components/sidebar.sass";

function sidebar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Lucas Januario" />
      <p className="tittle">Suporte 'Helpdesk'</p>
      <SocialNetwork />
      <Information />
      <a href="" className="btn">
        Download Currículo
      </a>
    </aside>
  );
}

export default sidebar;
