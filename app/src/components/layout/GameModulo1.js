import Unity, { UnityContext } from "react-unity-webgl";
import styles from './Game.module.css'

const unityContext = new UnityContext({
  loaderUrl: "/assets/JogoModulo1/Modulo1.loader.js",
  dataUrl: "/assets/JogoModulo1/Modulo1.data",
  frameworkUrl: "/assets/JogoModulo1/Modulo1.framework.js",
  codeUrl: "/assets/JogoModulo1/Modulo1.wasm",
});

function GameModulo1() {
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

export default GameModulo1;
