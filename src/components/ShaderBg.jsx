import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useTexture } from '@react-three/drei'
import fragmentShader from '../shaders/fragmentShader.glsl'
import vertexShader from '../shaders/vertexShader.glsl'
import { useRef, useMemo } from 'react'
import { Color, MathUtils } from "three";

const Cloth = () => {
    const hover = useRef(false);
    const texture = useTexture("/src/assets/linkedin_photo.png")
    const mesh = useRef();

    const uniforms = useMemo(() => ({
        u_time: { value: 0.0 },
        u_texture: {value: texture},
    }), []);

    // useFrame((state) => {
    //     const { clock } = state;
    //     mesh.current.material.uniforms.u_time.value = clock.getElapsedTime() * 0.4;
    //     mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
    //         mesh.current.material.uniforms.u_intensity.value,
    //         hover.current ? 0.85 : 0.15,
    //         0.02
    //     )
    // });
    useFrame((state) => { 
        const { clock } = state;
        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime() * 0.4;
    });
    return (
        <mesh
            ref={mesh}
            position={[0, 0, 15]}
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
                {/* <Flag /> */}
                <Cloth />
                <axesHelper />
                <OrbitControls enableZoom={ false} />
            </Canvas>
        </>
    )
}