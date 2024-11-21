import Unity, { UnityContext } from "react-unity-webgl";
import styles from './Game.module.css'

const unityContext = new UnityContext({
  loaderUrl: "/assets/JogoModulo2/Modulo2.loader.js",
  dataUrl: "/assets/JogoModulo2/Modulo2.data",
  frameworkUrl: "/assets/JogoModulo2/Modulo2.framework.js",
  codeUrl: "/assets/JogoModulo2/Modulo2.wasm",
});

function GameModulo2() {
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

export default GameModulo2;
