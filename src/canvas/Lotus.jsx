import  { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Usables/Loader";
const Lotus = ({file, isMobile }) => {
  const object = useGLTF(`/${file}/scene.gltf`);
  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="white" />
      <directionalLight color="white" position={[0, 1, 1]} intensity={2.5} />
      <directionalLight color="white" position={[0, 1, -1]} intensity={2.5} />
      <directionalLight color="white" position={[1, 1, 0]} intensity={2.5} />
      <directionalLight color="white" position={[-1, 1, 0]} intensity={2.5} />

      

      
      

      <spotLight
      color="white"
        position={[3, 3, 1]}
        angle={60}
        penumbra={1}
        intensity={10.0}
        
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      {/* <pointLight position={[10, 10, 10]} intensity={0.5} color='orange' /> */}
      <primitive
        object={object.scene}
        scale={isMobile ? 4.5 : 3.1}
        position={isMobile ? [0, -2.5, -1.5] : [0, 0, -1.0]}
        rotation={isMobile ? [-0.05, 1.2, 0] : [-0.05, 1.2, 0]}
        // style={isMobile ? {width: "80vw", height: "60vh"}:{ width: "40vw", height: "40vh", padding: "10px" }} // Set the width to 100% of the viewport width


              />
    </mesh>
  );
};

const LotusCanvas = ({ file }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      style={{ width: "25vw", height: "30vh" }}
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Lotus file={file} isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default LotusCanvas;
