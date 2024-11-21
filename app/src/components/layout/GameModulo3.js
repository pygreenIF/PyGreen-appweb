import Unity, { UnityContext } from "react-unity-webgl";
import styles from './Game.module.css'

const unityContext = new UnityContext({
  loaderUrl: "/assets/JogoModulo3/Modulo3.loader.js",
  dataUrl: "/assets/JogoModulo3/Modulo3.data",
  frameworkUrl: "/assets/JogoModulo3/Modulo3.framework.js",
  codeUrl: "/assets/JogoModulo3/Modulo3.wasm",
});

function GameModulo3() {
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

export default GameModulo3;
