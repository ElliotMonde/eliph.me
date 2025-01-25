uniform sampler2D TEXTURE;
uniform sampler2D dissolve_texture;
uniform float dissolve_value;
varying vec2 vUv;

void main() {
    vec4 main_texture = texture2D(TEXTURE, vUv);
    vec4 noise_texture = texture2D(dissolve_texture, vUv);
    main_texture.a *= step(dissolve_value, noise_texture.r); // Dissolve effect
    gl_FragColor = main_texture;
}