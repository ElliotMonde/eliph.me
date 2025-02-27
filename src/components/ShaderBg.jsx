import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useTexture } from '@react-three/drei'
import fragmentShader from '../shaders/clothShaders/fragmentShader.glsl'
import vertexShader from '../shaders/clothShaders/vertexShader.glsl'
import { useRef, useMemo, useContext } from 'react'
import { MobileContext } from "../Providers"
import selfPhoto from "../assets/linkedin_photo.png"
const Cloth = () => {
    const hover = useRef(false);
    const { isMobile } = useContext(MobileContext);
    const texture = useTexture(selfPhoto);
    const mesh = useRef();
    const centerPostion = isMobile ? [0, 6, 10] : [5, 0, 15];
    
    const uniforms = useMemo(() => ({
        u_time: { value: 0.0 },
        u_texture: {value: texture},
    }), []);

    useFrame((state) => { 
        const { clock } = state;
        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime() * 0.4;
    });
    return (
        <mesh
            ref={mesh}
            position={centerPostion}
            scale={1}
            onPointerOver={() => (hover.current = true)}
            onPointerOut={() => (hover.current = false)}
            material={texture}
        >

            <planeGeometry
                args={[6, 8, 100, 100]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
                />
        </mesh>
    );
};

export default function ShaderBg() {
    return (
        <>
            <Canvas
                camera={{ position: [0, 0, 25] }}>
                <Cloth />
                <axesHelper />
                <OrbitControls enableZoom={ false} />
            </Canvas>
        </>
    )
}