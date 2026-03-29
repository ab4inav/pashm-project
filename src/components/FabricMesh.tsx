"use client";

import { useEffect, useRef } from "react";

export default function FabricMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    if (!gl) return;

    // Resize handler
    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      gl!.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener("resize", resize);

    // Shaders
    const vertSrc = `
      attribute vec2 aPosition;
      varying vec2 vUv;
      void main() {
        vUv = aPosition * 0.5 + 0.5;
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fragSrc = `
      precision highp float;
      varying vec2 vUv;
      uniform float uTime;
      uniform vec2 uResolution;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod289(i);
        vec4 p = permute(permute(permute(
          i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0) * 2.0 + 1.0;
        vec4 s1 = floor(b1) * 2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      void main() {
        vec2 uv = vUv;
        float aspect = uResolution.x / uResolution.y;
        vec2 coord = vec2(uv.x * aspect, uv.y);

        float t = uTime * 0.15;

        // Fabric fold displacement field
        float fold1 = snoise(vec3(coord * 1.2, t * 0.8)) * 0.5;
        float fold2 = snoise(vec3(coord * 2.5 + 30.0, t * 0.6)) * 0.25;
        float fold3 = snoise(vec3(coord * 0.6, t * 1.2)) * 0.4;
        float folds = fold1 + fold2 + fold3;

        // Compute pseudo-normal from folds for lighting
        float eps = 0.01;
        float fx = snoise(vec3((coord.x + eps) * 1.2, coord.y * 1.2, t * 0.8)) * 0.5
                 + snoise(vec3((coord.x + eps) * 2.5 + 30.0, coord.y * 2.5 + 30.0, t * 0.6)) * 0.25;
        float fy = snoise(vec3(coord.x * 1.2, (coord.y + eps) * 1.2, t * 0.8)) * 0.5
                 + snoise(vec3(coord.x * 2.5 + 30.0, (coord.y + eps) * 2.5 + 30.0, t * 0.6)) * 0.25;
        vec3 normal = normalize(vec3(-(fx - (fold1 + fold2)) / eps, -(fy - (fold1 + fold2)) / eps, 1.0));

        // Lighting
        vec3 lightDir = normalize(vec3(0.4, 0.7, 1.0));
        float diffuse = dot(normal, lightDir) * 0.5 + 0.5;
        vec3 halfDir = normalize(lightDir + vec3(0.0, 0.0, 1.0));
        float spec = pow(max(dot(normal, halfDir), 0.0), 24.0);

        // Weave pattern
        float warpFreq = 80.0;
        float weftFreq = 80.0;
        float warp = sin((uv.x + folds * 0.02) * warpFreq * 3.14159) * 0.5 + 0.5;
        float weft = sin((uv.y + folds * 0.02) * weftFreq * 3.14159) * 0.5 + 0.5;
        float checker = step(0.5, fract(uv.x * warpFreq * 0.5)) + step(0.5, fract(uv.y * weftFreq * 0.5));
        checker = mod(checker, 2.0);
        float weave = mix(warp, weft, checker) * 0.06;

        // Colors — much darker range for visible contrast
        vec3 sandLight = vec3(0.82, 0.78, 0.70);
        vec3 warmStone = vec3(0.55, 0.48, 0.40);
        vec3 saffron = vec3(0.769, 0.447, 0.165);
        vec3 deepEarth = vec3(0.22, 0.16, 0.11);

        // Base color from fold height — strong contrast
        float foldNorm = folds * 0.5 + 0.5;
        vec3 color = mix(warmStone, sandLight, foldNorm * 0.7);

        // Saffron threads in the peaks
        float saffronMask = smoothstep(0.5, 0.85, foldNorm) * 0.45;
        color = mix(color, saffron, saffronMask);

        // Deep shadows in the valleys
        float valleyMask = smoothstep(0.35, 0.0, foldNorm) * 0.5;
        color = mix(color, deepEarth, valleyMask);

        // Apply weave texture — more visible
        color -= weave * 1.5;

        // Apply lighting — stronger contrast
        color *= 0.6 + diffuse * 0.4;
        color += vec3(1.0, 0.96, 0.9) * spec * 0.15;

        // Vignette — softer edges
        vec2 vigUv = (uv - 0.5) * 1.2;
        float vignette = 1.0 - dot(vigUv, vigUv) * 0.5;
        vignette = clamp(vignette, 0.0, 1.0);

        // Higher alpha for clear visibility
        float alpha = 0.55 * vignette;

        // Blend with ivory background
        vec3 bg = vec3(0.961, 0.941, 0.910);
        vec3 final = mix(bg, color, alpha);

        gl_FragColor = vec4(final, 1.0);
      }
    `;

    // Compile shaders
    function createShader(type: number, src: string) {
      const shader = gl!.createShader(type)!;
      gl!.shaderSource(shader, src);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error(gl!.getShaderInfoLog(shader));
        gl!.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vert = createShader(gl.VERTEX_SHADER, vertSrc);
    const frag = createShader(gl.FRAGMENT_SHADER, fragSrc);
    if (!vert || !frag) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    // Full-screen quad
    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, "aPosition");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uResolution = gl.getUniformLocation(program, "uResolution");

    let animId: number;
    const startTime = performance.now();

    function render() {
      if (!canvas || !gl) return;
      const time = (performance.now() - startTime) / 1000;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(aPosition);
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(uTime, time);
      gl.uniform2f(uResolution, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      gl.deleteProgram(program);
      gl.deleteShader(vert);
      gl.deleteShader(frag);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
