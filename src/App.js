import React from "react";
import "./App.css";

import colors from "./utils/colors";
import Screen from "./components/Screen";
import LastScreen from "./components/LastScreen";
import ImgCaraousel from "./components/ImgCarousel";

import ursinho_pandinha_ok from "./assets/ursinho_pandinha_ok.gif";
import ursinho_estudando from "./assets/ursinho_estudando.gif";
import pandinha_brava from "./assets/pandinha_fofa_cara_de_brava.gif";
import pandinha from "./assets/pandinha.gif";
import ursinho_S2_pandinha from "./assets/ursinho_S2_pandinha.gif";
import ursinha_chorando from "./assets/ursinha_chorando.gif";
import ursinho_chorando from "./assets/ursinho_chorando.gif";
import pandinha_martelo from "./assets/pandinha_martelo.png";
import ursinho_catucando_pandinha from "./assets/ursinho_catucando_pandinha.gif";
import ursinho_coracao from "./assets/ursinho_coracao.jpg";
import pandinha_coracao from "./assets/pandinha_coracao.gif";
import ursinhos_apaixonados from "./assets/ursinhos_apaixonados.gif";
import ursinhos_caminhada from "./assets/ursinhos_caminhada.jpg";
import ursinhos_fotinha from "./assets/ursinhos_fotinha.jpg";
import ursinhos_bebida from "./assets/ursinhos_bebida.gif";
import ursinha_mordidas from "./assets/ursinha_mordidas.gif";
import ursinho_pegando_no_sono from "./assets/ursinho_pegando_no_sono.gif";
import ursinhos_dormindo from "./assets/ursinhos_dormindo.gif";
import yukuAndDeepu from "./assets/yukuAndDeepu.jpg";

const App = () => {

  return (
    <div className="main">
      <Screen
        imageUrl={ursinho_pandinha_ok}
        bgColor={colors.red}
        textColor={colors.white}
        title="These are Teddy Bear and Panda"
        text="They've known each other for a long time, and were friends, but today they're more than that... They're dating."
        btnText="Learn more"
        sequency="1"
      />
      <Screen
        imageUrl={ursinho_estudando}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Little Bear"
        text="The teddy bear is very studious and funny always makes the panda laugh, but he is very slow and does not always understand what the little panda means."
        btnText="Continue"
        sequency="2"
      />
      <Screen
        imageUrl={pandinha}
        bgColor={colors.pink}
        textColor={colors.white}
        title="Panda"
        text="The panda is very cute, always cares about others, but she has no patience at all. And there's a different way of showing what you feel..."
        btnText="Continue"
        sequency="3"
      />
      <Screen
        imageUrl={ursinho_S2_pandinha}
        bgColor={colors.red}
        textColor={colors.white}
        title="Teddy Bear S2 Panda"
        text="As I said, these two are now lovers, they are not perfect... But they always help each other and overcome problems together."
        btnText="Continue"
        sequency="4"
      />
      <Screen
        imageUrl={ursinha_chorando}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Sad panda"
        text="Sometimes the Panda is sad with some things, and is crying and sad ... :( But the teddy bear always try to cheer up and can almost always make her laugh"
        btnText="Continue"
        sequency="5"
      />
      <Screen
        imageUrl={ursinho_chorando}
        bgColor={colors.green}
        textColor={colors.white}
        title="Sad teddy bear"
        text="Sometimes it is the teddy bear that is sad about some problems, and then the Panda comes with her little love and cuteness and helps the teddy bear when he is sad.:)"
        btnText="Continue"
        sequency="6"
      />
      <Screen
        imageUrl={pandinha_martelo}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Teddy Bear"
        text="The teddy bear is slow and sometimes doesn't understand what the panda meant exactly, and understands it totally differently..."
        btnText="Continue"
        sequency="7"
      />
      <Screen
        imageUrl={pandinha_brava}
        bgColor={colors.yellow}
        textColor={colors.white}
        title="Panda and your patience"
        text="The panda is VERY LOVING, but the lack of patience is the same... And sometimes she gets annoyed because the teddy bear is slow."
        btnText="Continue"
        sequency="8"
      />
      <Screen
        imageUrl={ursinho_catucando_pandinha}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Teddy bear's insistence"
        text="The panda doesn't like to be direct, then the teddy bear will disturb the panda until she speaks..."
        btnText="Continue"
        sequency="9"
      />
      <Screen
        imageUrl={ursinho_coracao}
        bgColor={colors.blue}
        textColor={colors.white}
        title="The love of the teddy bear"
        text="Then the teddy bear, after hours of trying to explain, apologizes for being slow and says how much he loves the panda."
        btnText="Awwwww <3"
        sequency="10"
      />
      <Screen
        imageUrl={pandinha_coracao}
        bgColor={colors.yellow}
        textColor={colors.white}
        title="The love of the panda"
        text="The panda behind all her lack of patience also loves the teddy bear, and is saying that she loves him too."
        btnText="Awwwww <3"
        sequency="11"
      />
      <Screen
        imageUrl={ursinhos_apaixonados}
        bgColor={colors.red}
        textColor={colors.white}
        title="After that..."
        text="After everything is settled, they are both fine and happy... And they do a lot of things together as the friends and lovers that they are."
        btnText="Continue"
        sequency="12"
      />
      <Screen
        imageUrl={ursinhos_caminhada}
        bgColor={colors.pink}
        textColor={colors.white}
        title="They walk together"
        text="The two love to walk together, they laugh a lot, especially at the 'enemies' of the panda. ~laughter"
        btnText="Walking..."
        sequency="13"
      />
      <Screen
        imageUrl={ursinhos_fotinha}
        bgColor={colors.green}
        textColor={colors.white}
        title="Today they take pictures together"
        text="The panda wants to look perfect in the photos, always asks the teddy bear to take it again ~ laughs"
        btnText="More pictures..."
        sequency="14"
      />
      <Screen
        imageUrl={ursinhos_bebida}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Drink together"
        text="Teddy bear and panda love to drink together, and enjoy the good times with some music"
        btnText="drinks after..."
        sequency="15"
      />
      <Screen
        imageUrl={ursinha_mordidas}
        bgColor={colors.blue}
        textColor={colors.white}
        title="The teddy bear keeps playing with the teddy bear"
        text="It looks fun looking at it like that hahaha... for the teddy bear of course... look at the poor teddy bear, look at his face! ~poor_people"
        btnText="Bites after..."
        sequency="16"
      />
      <Screen
        imageUrl={ursinho_pegando_no_sono}
        bgColor={colors.purple}
        textColor={colors.white}
        title="At night"
        text="But every day, when the teddy bear can't stand to stay awake converging with the panda, they say goodbye and pretend to sleep together"
        btnText="Naps later..."
        sequency="17"
      />
      <Screen
        imageUrl={ursinhos_dormindo}
        bgColor={colors.blue}
        textColor={colors.white}
        title="And finally we slept"
        text="You see, they have a hard time sometimes, and they cry, and they get angry... But when everything stays in its place, they love each other a lot and laugh."
        btnText="They sleep"
        sequency="18"
      />
      <LastScreen
        imageUrl={yukuAndDeepu}
        bgColor={colors.red}
        textColor={colors.white}
        title="To The Moments We Spend Together <3"
        text="I finally thought of something that no one has ever given you and that I have never given to anyone... I hope you liked it. I love you Yukti like never before I loved someone... ~Deepu"
        btnText="To more Fun Times!!"
        sequency="19"
      />
      <ImgCaraousel
        bgColor={colors.black}
        textColor={colors.white}
        sequency="20"
      />
    </div>
    
  );
};

export default App;
