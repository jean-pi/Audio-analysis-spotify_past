import HydraBackgroungStyles from "../sass/stylesComponents/hydraBackground.module.scss";


  // hydra no soporta ts
export default function HydraBackgroung() {

  // <script src="https://unpkg.com/hydra-synth"></script>
    new Hydra({ detectAudio: false})
    osc(90, 0.0001, 1.4)
    .rotate(0, 0.1)
    .mult(osc(10, 0.1).modulate(osc(5).rotate(0, -0.1), 1))
    .color(2.83,0.91,0.39)
    .out(o0)
    
  return (
    <>
      {/* hydra pega un <canvas/> aqui */}
    </>
  )
}
