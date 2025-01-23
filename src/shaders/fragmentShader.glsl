uniform float u_time;
uniform sampler2D u_texture;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    vec4 textureColor = texture(u_texture, vUv);
    gl_FragColor = textureColor;
}
