// uniform float u_intensity;
uniform float u_time;
uniform sampler2D u_texture;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    // float distort = 2.0 * vDisplacement * u_intensity;
    vec4 textureColor = texture(u_texture, vUv);
    // vec3 color = vec3(abs(vUv - 0.5) * 2.0 * (1.0 - distort), 1.0);
    gl_FragColor = textureColor;
}
