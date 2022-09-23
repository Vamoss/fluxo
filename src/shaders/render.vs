attribute vec2 dataLocation;
uniform sampler2D physicsData;
void main() {
  vec4 particle = texture2D(physicsData, dataLocation);
  gl_Position = vec4(particle.xyz, 1.0);
  gl_PointSize = 1.0;
}