import Unity, { UnityContext } from "react-unity-webgl";
import styles from './Game.module.css'

const unityContext = new UnityContext({
  loaderUrl: "/assets/JogoModulo4/Modulo4.loader.js",
  dataUrl: "/assets/JogoModulo4/Modulo4.data",
  frameworkUrl: "/assets/JogoModulo4/Modulo4.framework.js",
  codeUrl: "/assets/JogoModulo4/Modulo4.wasm",
});

function GameModulo4() {
  return (
    <div className={styles.game_container}>
      <div className={styles.game_border}>
        <Unity
          style={{
            width: "100%",
            justifySelf: "center",
            alignSelf: "center",
          }}
          unityContext={unityContext}
        />
      </div>
    </div>
  );
}

export default GameModulo4;