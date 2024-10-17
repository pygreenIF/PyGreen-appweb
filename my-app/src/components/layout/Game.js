import Unity, { UnityContext } from "react-unity-webgl";
import styles from './Game.module.css'

const unityContext = new UnityContext({
  loaderUrl: "/assets/JogoPygreenWebGL.loader.js",
  dataUrl: "/assets/JogoPygreenWebGL.data",
  frameworkUrl: "/assets/JogoPygreenWebGL.framework.js",
  codeUrl: "/assets/JogoPygreenWebGL.wasm",
});

function Game() {
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

export default Game;
