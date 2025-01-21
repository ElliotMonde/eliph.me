#include "perlinNoise.glsl";

uniform float u_intensity;
uniform float u_time;
uniform float u_scrollHeight;
varying vec2 vUv;
varying float vDisplacement;

void main() {
    vUv = uv;
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.x += sin(u_time  ) * 0.4;
    modelPosition.z += sin(modelPosition.x * .8 + (u_time - (10. * floor(u_time / 10.))));
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}
